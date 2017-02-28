import { Component, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import FallbackDispatcher from './fallback/ts/fallback.dispatcher';

/**
 * Component options structure interface
 */
interface Options {
  video: boolean | any;
  cameraType: string;
  audio: boolean;
  width: number;
  height: number;
  fallbackSrc: string;
  fallbackMode: string;
  fallbackQuality: number;
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices
 */
interface MediaDevice {
  deviceId: string;
  kind: string;
  label: string;
}

/**
 * Render WebCam Component
 */
@Component({
  selector: 'ng2-webcam',
  templateUrl: 'webcam.component.html'
})
class WebCamComponent implements OnInit, AfterViewInit {
  public videoSrc: any;
  public isSupportWebRTC: boolean;
  public isFallback: boolean;
  public browser: any;
  @Input() options: Options;
  @Input() onSuccess: Function;
  @Input() onError: Function;

  constructor(private sanitizer: DomSanitizer, private element: ElementRef) {
    this.isFallback = false;
    this.isSupportWebRTC = false;
    this.browser = <any>navigator;
  }

  ngOnInit() {
    // getUserMedia() feature detection for older browser
    this.browser.getUserMedia_ = (this.browser.getUserMedia
    || this.browser.webkitGetUserMedia
    || this.browser.mozGetUserMedia
    || this.browser.msGetUserMedia);

    // Older browsers might not implement mediaDevices at all, so we set an empty object first
    if ((this.browser.mediaDevices === undefined) && !!this.browser.getUserMedia_) {
      this.browser.mediaDevices = {};
    }

    // Some browsers partially implement mediaDevices. We can't just assign an object
    // with getUserMedia as it would overwrite existing properties.
    // Here, we will just add the getUserMedia property if it's missing.
    if ((this.browser.mediaDevices && this.browser.mediaDevices.getUserMedia === undefined) && !!this.browser.getUserMedia_) {
      this.browser.mediaDevices.getUserMedia = (constraints) => {

        return new Promise((resolve, reject) => {
          this.browser.getUserMedia_.call(this.browser, constraints, resolve, reject);
        });
      }
    }
    
    this.isSupportWebRTC = !!(this.browser.mediaDevices && this.browser.mediaDevices.getUserMedia);
    // default options
    this.options.fallbackSrc = this.options.fallbackSrc || 'node_modules/ng2-webcam/lib/fallback/jscam_canvas_only.swf';
    this.options.fallbackMode = this.options.fallbackMode || 'callback';
    this.options.fallbackQuality = this.options.fallbackQuality || 85;
    this.options.width = this.options.width || 320;
    this.options.height = this.options.height || 240;
    this.options.cameraType = this.options.cameraType  || 'front';
    // flash fallback detection
    this.isFallback = !this.isSupportWebRTC && !!this.options.fallbackSrc;
  }

  ngAfterViewInit() {
    this.startCapturingVideo();
  }

  /**
   * Switch to facing mode and setup web camera
   * @returns {void}
   */
  onWebRTC(): any {
    // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
    if (this.browser.mediaDevices.enumerateDevices && this.options.video) {
      const cameraType = this.options.cameraType;
      this.browser.mediaDevices.enumerateDevices().then((devices) => {
        devices.forEach((device: MediaDevice) => {
          if (device && device.kind === 'videoinput') {
            if (device.label.toLowerCase().search(cameraType) > -1) {
              this.options.video = {deviceId: {exact: device.deviceId}, facingMode: 'environment'};
            }
          }
        });
        this.setWebcam();
      });
    }
    else {
      this.setWebcam();
    }
  }

  /**
   * Setup web camera using native browser API
   * @returns {void}
   */
  setWebcam(): any {
    // constructing a getUserMedia config-object and
    // an string (we will try both)
    let optionObject = { audio: false, video: false };
    let optionString = '';
    let container: any, video: any, ow: any, oh: any;

    if (this.options.video) {
      optionObject.video = this.options.video;
      optionString = 'video';
    }
    if (this.options.audio === true) {
      optionObject.audio = true;
      if (optionString !== '') {
        optionString = optionString + ', ';
      }
      optionString = optionString + 'audio';
    }

    container = this.element.nativeElement.querySelector('#ng2-webcam');
    video = this.element.nativeElement.querySelector('video');
    video.autoplay = true;
    // Fix for ratio
    ow = parseInt(container.offsetWidth, 10);
    oh = parseInt(container.offsetHeight, 10);

    if (this.options.width < ow && this.options.height < oh) {
      this.options.width = ow;
      this.options.height = oh;
    }

    // configure the interim video
    video.width = this.options.width;
    video.height = this.options.height;
    video.autoplay = true;

    // Promisify async callback's for angular2 change detection
    const promisifyGetUserMedia = () => {
      return new Promise<string>((resolve, reject) => {
        // first we try if getUserMedia supports the config object
        try {
          // try object
          this.browser.mediaDevices.getUserMedia(optionObject)
            .then((stream: any) => resolve(stream))
            .catch((objErr: any) => {
              // option object fails
              // try string syntax
              // if the config object failes, we try a config string
              this.browser.mediaDevices.getUserMedia(optionObject)
                .then((stream: any) => resolve(stream))
                .catch((strErr: any) => {

                  console.error(objErr);
                  console.error(strErr);

                  reject(new Error('Both configs failed. Neither object nor string works'));
              });
          });
        } catch (e) {
          reject(e);
        }
      });
    };

    promisifyGetUserMedia().then((stream) => {
      let webcamUrl = URL.createObjectURL(stream);
      this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(webcamUrl);
      this.onSuccess(stream); // TODO stream :MediaStream
    }).catch((err) => {
      this.onError(err);
    });
  }

  /**
   * Add <param>'s into fallback object
   * @param cam - Flash web camera instance
   * @returns {void}
   */
  addFallbackParams(cam: any): any {
    const paramFlashVars = document.createElement('param');
    paramFlashVars.name = 'FlashVars';
    paramFlashVars.value = 'mode=' + this.options.fallbackMode + '&amp;quality=' + this.options.fallbackQuality;
    cam.appendChild(paramFlashVars);

    const paramAllowScriptAccess = document.createElement('param');
    paramAllowScriptAccess.name = 'allowScriptAccess';
    paramAllowScriptAccess.value = 'always';
    cam.appendChild(paramAllowScriptAccess);

    // if (this.browser.appVersion.indexOf('MSIE') > -1) {
    // if (isIE) {
    cam.classid = 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000';
    const paramMovie = document.createElement('param');
    paramMovie.name = 'movie';
    paramMovie.value = this.options.fallbackSrc;
    cam.appendChild(paramMovie);
    // } else {
    cam.data = this.options.fallbackSrc;
    // }
  }

  /**
   * On web camera using flash fallback
   * .swf file is necessary
   * @returns {void}
   */
  onFallback(): any {
    // Act as a plain getUserMedia shield if no fallback is required
    if (this.options) {
      // Fallback to flash
      const self = this;
      const cam = self.element.nativeElement.querySelector('#XwebcamXobjectX');
      cam.width = self.options.width;
      cam.height = self.options.height;

      this.addFallbackParams(cam);

      (function register(run) {
        if (cam.capture !== undefined) {
          self.onSuccess(new FallbackDispatcher(cam));
        } else if (run === 0) {
          self.onError(new Error('Flash movie not yet registered!'));
        } else {
          // Flash interface not ready yet
          window.setTimeout(register, 1000 * (4 - run), run - 1);
        }
      }(3));
    }
    else {
      console.error('WebCam options is require');
    }
  }

  /**
   * Start capturing video stream
   * @returns {void}
   */
  startCapturingVideo(): any {
    if (this.isSupportWebRTC) {
      return this.onWebRTC();
    }

    if (this.isFallback) {
      return this.onFallback();
    }
    console.error('WebCam not supported');
  }
}

export default WebCamComponent;
