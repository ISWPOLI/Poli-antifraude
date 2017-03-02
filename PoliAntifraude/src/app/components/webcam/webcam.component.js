"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var WebCamComponent = (function () {
    function WebCamComponent(sanitizer, element) {
        this.sanitizer = sanitizer;
        this.element = element;
    }
    WebCamComponent.prototype.ngOnInit = function () {
        this.showCam();
    };
    WebCamComponent.prototype.showCam = function () {
        var _this = this;
        // 1. Casting necessary because TypeScript doesn't
        // know object Type 'navigator';
        var nav = navigator;
        // 2. Adjust for all browsers
        nav.getUserMedia = nav.getUserMedia || nav.mozGetUserMedia || nav.webkitGetUserMedia;
        // 3. Trigger lifecycle tick (ugly, but works - see (better) Promise example below)
        //setTimeout(() => { }, 100);
        // 4. Get stream from webcam
        nav.getUserMedia({ video: true }, function (stream) {
            var webcamUrl = URL.createObjectURL(stream);
            // 4a. Tell Angular the stream comes from a trusted source
            _this.videosrc = _this.sanitizer.bypassSecurityTrustUrl(webcamUrl);
            // 4b. Start video element to stream automatically from webcam.
            _this.element.nativeElement.querySelector('video').autoplay = true;
        }, function (err) { return console.log(err); });
        // OR: other method, see http://stackoverflow.com/questions/32645724/angular2-cant-set-video-src-from-navigator-getusermedia for credits
        var promise = new Promise(function (resolve, reject) {
            nav.getUserMedia({ video: true }, function (stream) {
                resolve(stream);
            }, function (err) { return reject(err); });
        }).then(function (stream) {
            var webcamUrl = URL.createObjectURL(stream);
            _this.videosrc = _this.sanitizer.bypassSecurityTrustResourceUrl(webcamUrl);
            // for example: type logic here to send stream to your  server and (re)distribute to
            // other connected clients.
        }).catch(function (error) {
            console.log(error);
        });
    };
    WebCamComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'webcam-component',
            templateUrl: 'webcam.component.html',
            styleUrls: ['webcam.component.css']
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer, core_1.ElementRef])
    ], WebCamComponent);
    return WebCamComponent;
}());
exports.WebCamComponent = WebCamComponent;
//# sourceMappingURL=webcam.component.js.map