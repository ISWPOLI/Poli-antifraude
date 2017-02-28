/**
 * Action script fallback interface
 */
interface ASCamera {
  capture: Function;
  save: Function;
  setCamera: Function;
  getCameraList: Function;
  width: number;
  height: number;
}

/**
 * Fallback external interface callback's
 */
interface EventCallbacks {
  debug: Function;
  onCapture: Function;
  onTick: Function;
  onSave: Function;
}

/**
 * Adobe flash fallback dispatcher
 */
class FallbackDispatcher {

  private cam: ASCamera;

  public static implementExternal(callbacks: EventCallbacks) {
    const win = <any>window;
    win.webcam = {
      debug: callbacks.debug,
      onCapture: callbacks.onCapture,
      onTick: callbacks.onTick,
      onSave: callbacks.onSave
    };
  }

  constructor(camera: ASCamera) {
    this.cam = camera;
  }

  capture(x?: any) {
    try {
      return this.cam.capture(x);
    } catch (e) {
      console.error(e);
    }
  }

  save(x?: any) {
    try {
      return this.cam.save(x);
    } catch (e) {
      console.error(e);
    }
  }

  setCamera(x?: any) {
    try {
      return this.cam.setCamera(x);
    } catch (e) {
      console.error(e);
    }
  }

  getCameraSize() {
    try {
      return { width: this.cam.width, height: this.cam.height };
    } catch (e) {
      console.error(e);
    }
  }

  getCameraList() {
    try {
      return this.cam.getCameraList();
    } catch (e) {
      console.error(e);
    }
  }
}

export default FallbackDispatcher;
