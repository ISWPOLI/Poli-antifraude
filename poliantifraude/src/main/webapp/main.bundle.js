webpackJsonp([1,4],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.authenticated()) {
            console.log('AUTH GUARD PASSED');
            return true;
        }
        else {
            console.log('BLOCKED BY AUTH GUARD');
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* Auth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* Auth */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=E:/PoliAntifraude1/Poli-antifraude/poliantifraude/angular2-frontend/src/auth.guard.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasAppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CanvasAppComponent = (function () {
    function CanvasAppComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        // console.log("SmileyDirective constructor: size: ", this.size, ", color: ", this.color, ', this.canvas: ', this.canvas);
    }
    CanvasAppComponent.prototype.ngOnInit = function () {
        // console.log("SmileyDirective ngOnInit: size: ", this.size, ", color: ", this.color, ', this.canvas: ', this.canvas);
    };
    CanvasAppComponent.prototype.ngAfterViewInit = function () {
        // console.log("SmileyDirective ngAfterViewInit: size: ", this.size, ", color: ", this.color, ', this.canvas: ', this.canvas);
        this.canvas = this.canvasRef.nativeElement;
        this.canvas.width = this.size;
        this.canvas.height = this.size;
        this.draw();
    };
    CanvasAppComponent.prototype.draw = function () {
        if (this.canvas.getContext) {
            var canvas = this.canvas;
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                // ctx.fillStyle='white';
                // ctx.fillRect(0,0,canvas.width,canvas.height);
                ctx.beginPath();
                ctx.arc(canvas.width * .5, canvas.height * .5, canvas.width * .4, 0, Math.PI * 2, true); // Outer circle
                ctx.moveTo(canvas.width * 0.80, canvas.height * .45);
                ctx.arc(canvas.width * .5, canvas.height * .45, canvas.width * .30, 0, Math.PI, false); // Mouth (clockwise)
                ctx.moveTo(canvas.width * .35 + canvas.width * 0.05, canvas.height * .40);
                ctx.arc(canvas.width * .35, canvas.height * .40, canvas.width * 0.05, 0, Math.PI * 2, true); // Left eye
                ctx.moveTo(canvas.width * .65 + canvas.width * 0.05, canvas.height * .40);
                ctx.arc(canvas.width * .65, canvas.height * .40, canvas.width * 0.05, 0, Math.PI * 2, true); // Right eye
                ctx.strokeStyle = this.color;
                ctx.stroke();
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], CanvasAppComponent.prototype, "canvasRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('size'), 
        __metadata('design:type', Number)
    ], CanvasAppComponent.prototype, "size", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('color'), 
        __metadata('design:type', String)
    ], CanvasAppComponent.prototype, "color", void 0);
    CanvasAppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'smiley',
            template: __webpack_require__(630),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _c) || Object])
    ], CanvasAppComponent);
    return CanvasAppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/PoliAntifraude1/Poli-antifraude/poliantifraude/angular2-frontend/src/CanvasApp.component.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__(631),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=E:/PoliAntifraude1/Poli-antifraude/poliantifraude/angular2-frontend/src/home.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
        this.profile = JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile);
    }
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile',
            template: __webpack_require__(632),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */]) === 'function' && _a) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());
//# sourceMappingURL=E:/PoliAntifraude1/Poli-antifraude/poliantifraude/angular2-frontend/src/profile.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebCamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'webcam-component',
            template: __webpack_require__(633),
            styles: [__webpack_require__(628)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object])
    ], WebCamComponent);
    return WebCamComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/PoliAntifraude1/Poli-antifraude/poliantifraude/angular2-frontend/src/webcam.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 359;


/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(472);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/PoliAntifraude1/Poli-antifraude/poliantifraude/angular2-frontend/src/main.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-app',
            template: __webpack_require__(629),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=E:/PoliAntifraude1/Poli-antifraude/poliantifraude/angular2-frontend/src/app.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_webcam_webcam_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_canvas_CanvasApp_component__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_guard__ = __webpack_require__(299);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthConfig"]({}), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* routing */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_8__components_webcam_webcam_component__["a" /* WebCamComponent */], __WEBPACK_IMPORTED_MODULE_9__components_canvas_CanvasApp_component__["a" /* CanvasAppComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__app_routing__["b" /* appRoutingProviders */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"],
                    useFactory: authHttpServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]]
                },
                __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* Auth */],
                __WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/PoliAntifraude1/Poli-antifraude/poliantifraude/angular2-frontend/src/app.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_profile_profile_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_webcam_webcam_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_canvas_CanvasApp_component__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_guard__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_2__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'webcam',
        component: __WEBPACK_IMPORTED_MODULE_3__components_webcam_webcam_component__["a" /* WebCamComponent */]
    },
    {
        path: 'canvas',
        component: __WEBPACK_IMPORTED_MODULE_4__components_canvas_CanvasApp_component__["a" /* CanvasAppComponent */]
    }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=E:/PoliAntifraude1/Poli-antifraude/poliantifraude/angular2-frontend/src/app.routing.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=E:/PoliAntifraude1/Poli-antifraude/poliantifraude/angular2-frontend/src/environment.js.map

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = ".cssWebCam{\r\n  width: 480px;\r\n  height: 480px;\r\n}\r\n"

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default \">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Poli Antifraude</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink =\"/\">Home</a></li>\n\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\" (click)=\"!auth.login()\" *ngIf=\"!auth.authenticated()\">Login</a></li>\n        <li><a routerLink =\"/profile\" *ngIf=\"auth.authenticated()\">Profile</a></li>\n        <li><a href=\"#\" (click)=\"auth.logout()\" *ngIf=\"auth.authenticated()\">Logout</a></li>\n      </ul>\n\n\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <router-outlet></router-outlet>\n\n</div><!-- /.container -->\n\n"

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "<canvas #canvas></canvas>\r\n"

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

module.exports = "<h1> Welcome </h1>\r\n<div class=\"alert alert-success\" *ngIf=\"auth.authenticated()\">You are Logged in</div>\r\n<div class=\"alert alert-danger\" *ngIf=\"!auth.authenticated()\">You are not Logged in </div>\r\n"

/***/ }),

/***/ 632:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-2\">\r\n    <img class= \"img-circle\" style=\"width:100%\" src=\"{{profile.picture}}\">\r\n  </div>\r\n  <div class=\"col-md-10\">\r\n    <h1>{{profile.nickname}}'s Profile</h1>\r\n    <p> Email: {{profile.name}} </p>\r\n    <p> Last Update: {{profile.created_at}}</p>\r\n  </div>\r\n  <li><a routerLink =\"/webcam\">Webcam</a></li>\r\n</div>\r\n"

/***/ }),

/***/ 633:
/***/ (function(module, exports) {

module.exports = "<h2>webcam:</h2>\r\n<!-- Define <video> object to hold webcam image -->\r\n<video [src]=\"videosrc\" class=\"cssWebCam\"></video>\r\n\r\n<p>See app/webcam/webcam.html for HTML, see app/webcam/webcam.css for CSS. </p>\r\n<p>Automatic streaming is enabled. </p>\r\n<li><a routerLink =\"/canvas\">canvas</a></li>\r\n"

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(360);


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Auth = (function () {
    function Auth() {
        var _this = this;
        // Configure Auth0
        this.lock = new Auth0Lock('LJ2aCbcTmlOFr5GWn4oqfPLDa1jFQ6bC', 'poliantifraude.auth0.com', {});
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", function (authResult) {
            _this.lock.getProfile(authResult.idToken, function (error, profile) {
                if (error) {
                    throw new Error(error);
                }
                localStorage.setItem('id_token', authResult.idToken);
                localStorage.setItem('profile', JSON.stringify(profile));
            });
        });
    }
    Auth.prototype.login = function () {
        // Call the show method to display the widget.
        this.lock.show();
    };
    Auth.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])();
    };
    Auth.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
    };
    Auth = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], Auth);
    return Auth;
}());
//# sourceMappingURL=E:/PoliAntifraude1/Poli-antifraude/poliantifraude/angular2-frontend/src/auth.service.js.map

/***/ })

},[652]);
//# sourceMappingURL=main.bundle.map