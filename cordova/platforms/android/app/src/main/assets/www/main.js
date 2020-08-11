(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");







const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'my-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'Home';
        this.loggeduser = {};
    }
    ngOnInit() {
        if (localStorage.getItem('loggedUser') != null) {
            this.loggeduser = JSON.parse(localStorage.getItem('loggedUser'));
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    logout() {
        localStorage.removeItem('loggedUser');
        this.router.navigate(['/login']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 1, consts: [[1, "form-bg"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "col-md-4"], [1, "form-outer", "text-center", "col-lg-4"], ["id", "login"], [1, "text-center"], [1, "text-center", "cursor", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_p_click_9_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi ", ctx.loggeduser.username, "");
    } }, styles: [".form-outer[_ngcontent-%COMP%] {\n    margin-top: 15%;\n    padding: 30px;\n    background-color: white;\n    border-radius: 20px;\n  }\n.but-color[_ngcontent-%COMP%] {\n    border: none;\n    color: white;\n    background-color: rgba(42, 66, 76);\n    border-radius: 11px\n  }\n.but-none[_ngcontent-%COMP%] {\n    border: none;\n    background-color: white;\n    color: rgba(42, 66, 76);\n    border-radius: 11px\n  }\n.but-color[_ngcontent-%COMP%]:active, .but-color[_ngcontent-%COMP%]:focus, .but-none[_ngcontent-%COMP%]:active, .but-none[_ngcontent-%COMP%]:focus {\n    border: none !important;\n  }\n.but[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: rgb(8, 153, 215) !important;\n    border: none;\n  }\n.but[_ngcontent-%COMP%]:hover {\n    background-color: rgb(42, 66, 76) !important;\n  }\n.pad[_ngcontent-%COMP%] {\n    padding: 5px;\n    padding-left: 14px;\n    padding-right: 14px;\n  \n  }\n.forget[_ngcontent-%COMP%] {\n  \n    text-align: center;\n    color: #999999 !important;\n    text-decoration: none;\n    \n    font-size: 11px;\n  \n  }\n.forget[_ngcontent-%COMP%]:hover {\n    color: rgba(42, 66, 76) !important;\n    text-decoration: none !important;\n    font-weight: 800;\n    text-shadow: 2px 2px 10px #80808087;\n  }\n.alertmsg[_ngcontent-%COMP%] {\n    color: red;\n    font-weight: 700;\n    text-shadow: 2px 2px 10px #80808087\n  }\n.form-control[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 45px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n    border-radius: 50px !important;\n    box-shadow: 2px 2px 10px #80808087;\n    border: none !important;\n  }\nbody[_ngcontent-%COMP%] {\n    height: 100%;\n    background: #5f2c82;\n    \n    \n    background: linear-gradient(to right, #49a09d, #5f2c82);\n    \n  }\n.form-bg[_ngcontent-%COMP%] {\n    height: 100%;\n    background: #5f2c82;\n    \n    \n    background: linear-gradient(to right, #49a09d, #5f2c82);\n    \n  }\n.btn-primary[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: rgb(95 46 131) !important;\n    border: none;\n    padding: 12px;\n    border-radius: 50px;\n    font-weight: 600;\n  }\n.cursor[_ngcontent-%COMP%] {\n      cursor: pointer!important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7QUFDRjtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEM7RUFDRjtBQUVBO0lBQ0UsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkI7RUFDRjtBQUVBOzs7O0lBSUUsdUJBQXVCO0VBQ3pCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsNkNBQTZDO0lBQzdDLFlBQVk7RUFDZDtBQUVBO0lBQ0UsNENBQTRDO0VBQzlDO0FBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjs7RUFFckI7QUFFQTs7SUFFRSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsZUFBZTs7RUFFakI7QUFFQTtJQUNFLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLG1DQUFtQztFQUNyQztBQUVBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQjtFQUNGO0FBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyxzRUFBc0U7SUFDdEUsOEJBQThCO0lBQzlCLGtDQUFrQztJQUNsQyx1QkFBdUI7RUFDekI7QUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsOEJBQThCO0lBRTlCLCtCQUErQjtJQUMvQix1REFBdUQ7SUFDdkQscUVBQXFFO0VBQ3ZFO0FBRUE7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUU5QiwrQkFBK0I7SUFDL0IsdURBQXVEO0lBQ3ZELHFFQUFxRTtFQUN2RTtBQUVBO0lBQ0UsV0FBVztJQUNYLDJDQUEyQztJQUMzQyxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7QUFDQTtNQUNJLHlCQUF5QjtFQUM3QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoubWFpbnJvd3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLzMuanBnXCIpO1xuICAgIGhlaWdodDpjYWxjKDEwMCUgLSA1MHB4KTtcbn1cbi5sb2dpbndlbGxzdHlsZXtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5idG5zdHlsZXtcbiAgICAvKiB3aWR0aDogMTAwJTsgKlxuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubG9naW5oZWFkaW5ne1xuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgIGNvbG9yOiAjM0MzQjZFO1xufSovXG4uZm9ybS1vdXRlciB7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICBcbiAgLmJ1dC1jb2xvciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA2NiwgNzYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDExcHhcbiAgfVxuICBcbiAgLmJ1dC1ub25lIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHJnYmEoNDIsIDY2LCA3Nik7XG4gICAgYm9yZGVyLXJhZGl1czogMTFweFxuICB9XG4gIFxuICAuYnV0LWNvbG9yOmFjdGl2ZSxcbiAgLmJ1dC1jb2xvcjpmb2N1cyxcbiAgLmJ1dC1ub25lOmFjdGl2ZSxcbiAgLmJ1dC1ub25lOmZvY3VzIHtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmJ1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDE1MywgMjE1KSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBcbiAgLmJ1dDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCA2NiwgNzYpICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5wYWQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTRweDtcbiAgXG4gIH1cbiAgXG4gIC5mb3JnZXQge1xuICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5OTk5OTkgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLyogdGV4dC1zaXplLWFkanVzdDogbm9uZTsgKi9cbiAgICBmb250LXNpemU6IDExcHg7XG4gIFxuICB9XG4gIFxuICAuZm9yZ2V0OmhvdmVyIHtcbiAgICBjb2xvcjogcmdiYSg0MiwgNjYsIDc2KSAhaW1wb3J0YW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMTBweCAjODA4MDgwODc7XG4gIH1cbiAgXG4gIC5hbGVydG1zZyB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggIzgwODA4MDg3XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNzUpO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXM7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAjODA4MDgwODc7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjNWYyYzgyO1xuICAgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQ5YTA5ZCwgIzVmMmM4Mik7XG4gICAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0OWEwOWQsICM1ZjJjODIpO1xuICAgIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgfVxuICBcbiAgLmZvcm0tYmcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjNWYyYzgyO1xuICAgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQ5YTA5ZCwgIzVmMmM4Mik7XG4gICAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0OWEwOWQsICM1ZjJjODIpO1xuICAgIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgfVxuICBcbiAgLmJ0bi1wcmltYXJ5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTUgNDYgMTMxKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICAuY3Vyc29yIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlciFpbXBvcnRhbnQ7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function LoginComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid Username or Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/signup"]; };
class LoginComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'User Login';
        this.loginuser = {};
        this.invalidcredientals = false;
        this.check = {};
    }
    ngOnInit() {
        // $('.mainrow').css({ 'min-height': ($(window).height() - 50) + 'px' });
        window.dispatchEvent(new Event('resize'));
    }
    login(item) {
        localStorage.removeItem('loggedUser');
        this.loginuser = {
            username: item.username,
            password: item.password
        };
        if (localStorage.getItem('registerUser') != null) {
            this.check = JSON.parse(localStorage.getItem('registerUser'));
            if (this.loginuser.username == this.check.username &&
                this.loginuser.password == this.check.password) {
                // alert('Login Successfull')
                localStorage.setItem('loggedUser', JSON.stringify(this.loginuser));
                this.router.navigate(['/home']);
            }
            else {
                alert('Username and password does not match');
            }
        }
        else {
            alert('No user exists');
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 6, consts: [[1, "form-bg"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "col-md-4"], [1, "form-outer", "text-center", "col-lg-4"], [1, "text-center", "form-group"], ["id", "log", 1, "pad", "but-color"], ["href", "", "id", "sign", 1, "pad", "but-none", 3, "routerLink"], ["id", "login"], [1, "form-group"], ["type", "username", "id", "username", "placeholder", "Username", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["type", "password", "id", "pwd", "placeholder", "Enter Password", "name", "pwd", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["class", "text-center alertmsg", 4, "ngIf"], ["type", "", "block", "", 1, "btn", "btn-primary", "btn-info", "but", 3, "disabled", "click"], [1, "text-center", "alertmsg"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LOG IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.loginuser.username = $event; })("change", function LoginComponent_Template_input_change_16_listener() { return ctx.invalidcredientals = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) { return ctx.loginuser.password = $event; })("change", function LoginComponent_Template_input_change_18_listener() { return ctx.invalidcredientals = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_p_19_Template, 2, 0, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() { return ctx.login(ctx.loginuser); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginuser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginuser.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidcredientals);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginuser.username || !ctx.loginuser.password);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".form-outer[_ngcontent-%COMP%] {\n  margin-top: 15%;\n  padding: 30px;\n  background-color: white;\n  border-radius: 20px;\n}\n.but-color[_ngcontent-%COMP%] {\n  border: none;\n  color: white;\n  background-color: rgba(42, 66, 76);\n  border-radius: 11px\n}\n.but-none[_ngcontent-%COMP%] {\n  border: none;\n  background-color: white;\n  color: rgba(42, 66, 76);\n  border-radius: 11px\n}\n.but-color[_ngcontent-%COMP%]:active, .but-color[_ngcontent-%COMP%]:focus, .but-none[_ngcontent-%COMP%]:active, .but-none[_ngcontent-%COMP%]:focus {\n  border: none !important;\n}\n.but[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: rgb(8, 153, 215) !important;\n  border: none;\n}\n.but[_ngcontent-%COMP%]:hover {\n  background-color: rgb(42, 66, 76) !important;\n}\n.pad[_ngcontent-%COMP%] {\n  padding: 5px;\n  padding-left: 14px;\n  padding-right: 14px;\n\n}\n.forget[_ngcontent-%COMP%] {\n\n  text-align: center;\n  color: #999999 !important;\n  text-decoration: none;\n  \n  font-size: 11px;\n\n}\n.forget[_ngcontent-%COMP%]:hover {\n  color: rgba(42, 66, 76) !important;\n  text-decoration: none !important;\n  font-weight: 800;\n  text-shadow: 2px 2px 10px #80808087;\n}\n.alertmsg[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 700;\n  text-shadow: 2px 2px 10px #80808087\n}\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 45px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  border-radius: 50px !important;\n  box-shadow: 2px 2px 10px #80808087;\n  border: none !important;\n}\nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #5f2c82;\n  \n  \n  background: linear-gradient(to right, #49a09d, #5f2c82);\n  \n}\n.form-bg[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #5f2c82;\n  \n  \n  background: linear-gradient(to right, #49a09d, #5f2c82);\n  \n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: rgb(95 46 131) !important;\n  border: none;\n  padding: 12px;\n  border-radius: 50px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztFQWdCRTtBQUNGO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtDQUFrQztFQUNsQztBQUNGO0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QjtBQUNGO0FBRUE7Ozs7RUFJRSx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLFdBQVc7RUFDWCw2Q0FBNkM7RUFDN0MsWUFBWTtBQUNkO0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1COztBQUVyQjtBQUVBOztFQUVFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixlQUFlOztBQUVqQjtBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCO0FBQ0Y7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLHNFQUFzRTtFQUN0RSw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFFOUIsK0JBQStCO0VBQy9CLHVEQUF1RDtFQUN2RCxxRUFBcUU7QUFDdkU7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsOEJBQThCO0VBRTlCLCtCQUErQjtFQUMvQix1REFBdUQ7RUFDdkQscUVBQXFFO0FBQ3ZFO0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkNBQTJDO0VBQzNDLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5tYWlucm93e1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vMy5qcGdcIik7XG4gICAgaGVpZ2h0OmNhbGMoMTAwJSAtIDUwcHgpO1xufVxuLmxvZ2lud2VsbHN0eWxle1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmJ0bnN0eWxle1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqXG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5sb2dpbmhlYWRpbmd7XG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICAgY29sb3I6ICMzQzNCNkU7XG59Ki9cbi5mb3JtLW91dGVyIHtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmJ1dC1jb2xvciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA2NiwgNzYpO1xuICBib3JkZXItcmFkaXVzOiAxMXB4XG59XG5cbi5idXQtbm9uZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDQyLCA2NiwgNzYpO1xuICBib3JkZXItcmFkaXVzOiAxMXB4XG59XG5cbi5idXQtY29sb3I6YWN0aXZlLFxuLmJ1dC1jb2xvcjpmb2N1cyxcbi5idXQtbm9uZTphY3RpdmUsXG4uYnV0LW5vbmU6Zm9jdXMge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJ1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOCwgMTUzLCAyMTUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmJ1dDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgNjYsIDc2KSAhaW1wb3J0YW50O1xufVxuXG4ucGFkIHtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE0cHg7XG5cbn1cblxuLmZvcmdldCB7XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzk5OTk5OSAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC8qIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7ICovXG4gIGZvbnQtc2l6ZTogMTFweDtcblxufVxuXG4uZm9yZ2V0OmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoNDIsIDY2LCA3NikgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggIzgwODA4MDg3O1xufVxuXG4uYWxlcnRtc2cge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4ICM4MDgwODA4N1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICBjb2xvcjogIzU1NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDc1KTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcbiAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggIzgwODA4MDg3O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzVmMmM4MjtcbiAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQ5YTA5ZCwgIzVmMmM4Mik7XG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQ5YTA5ZCwgIzVmMmM4Mik7XG4gIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbn1cblxuLmZvcm0tYmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM1ZjJjODI7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0OWEwOWQsICM1ZjJjODIpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0OWEwOWQsICM1ZjJjODIpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTUgNDYgMTMxKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function SignupComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid Username or Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/login"]; };
const _c1 = function () { return ["/signup"]; };
class SignupComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'User Signup';
        this.loginuser = {};
        this.invalidcredientals = false;
    }
    ngOnInit() {
        // $('.mainrow').css({ 'min-height': ($(window).height() - 50) + 'px' });
        window.dispatchEvent(new Event('resize'));
    }
    login(item) {
        localStorage.removeItem("registerUser");
        this.loginuser = {
            username: item.username,
            password: item.password
        };
        localStorage.setItem("registerUser", JSON.stringify(this.loginuser));
        alert("Register successfull");
        this.router.navigate(['/login']);
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 23, vars: 8, consts: [[1, "form-bg"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "col-md-4"], [1, "form-outer", "text-center", "col-lg-4"], [1, "text-center", "form-group"], ["id", "log", 1, "pad", "but-none", 3, "routerLink"], ["href", "", "id", "sign", 1, "pad", "but-color", 3, "routerLink"], ["id", "login"], [1, "form-group"], ["type", "username", "id", "username", "placeholder", "Username", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["type", "password", "id", "pwd", "placeholder", "Enter Password", "name", "pwd", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["class", "text-center alertmsg", 4, "ngIf"], ["type", "", "block", "", 1, "btn", "btn-primary", "btn-info", "but", 3, "disabled", "click"], [1, "text-center", "alertmsg"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LOG IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_16_listener($event) { return ctx.loginuser.username = $event; })("change", function SignupComponent_Template_input_change_16_listener() { return ctx.invalidcredientals = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_18_listener($event) { return ctx.loginuser.password = $event; })("change", function SignupComponent_Template_input_change_18_listener() { return ctx.invalidcredientals = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignupComponent_p_19_Template, 2, 0, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_21_listener() { return ctx.login(ctx.loginuser); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginuser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginuser.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidcredientals);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginuser.username || !ctx.loginuser.password);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".form-outer[_ngcontent-%COMP%] {\n    margin-top: 15%;\n    padding: 30px;\n    background-color: white;\n    border-radius: 20px;\n  }\n.but-color[_ngcontent-%COMP%] {\n    border: none;\n    color: white;\n    background-color: rgba(42, 66, 76);\n    border-radius: 11px\n  }\n.but-none[_ngcontent-%COMP%] {\n    border: none;\n    background-color: white;\n    color: rgba(42, 66, 76);\n    border-radius: 11px\n  }\n.but-color[_ngcontent-%COMP%]:active, .but-color[_ngcontent-%COMP%]:focus, .but-none[_ngcontent-%COMP%]:active, .but-none[_ngcontent-%COMP%]:focus {\n    border: none !important;\n  }\n.but[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: rgb(8, 153, 215) !important;\n    border: none;\n  }\n.but[_ngcontent-%COMP%]:hover {\n    background-color: rgb(42, 66, 76) !important;\n  }\n.pad[_ngcontent-%COMP%] {\n    padding: 5px;\n    padding-left: 14px;\n    padding-right: 14px;\n  \n  }\n.forget[_ngcontent-%COMP%] {\n  \n    text-align: center;\n    color: #999999 !important;\n    text-decoration: none;\n    \n    font-size: 11px;\n  \n  }\n.forget[_ngcontent-%COMP%]:hover {\n    color: rgba(42, 66, 76) !important;\n    text-decoration: none !important;\n    font-weight: 800;\n    text-shadow: 2px 2px 10px #80808087;\n  }\n.alertmsg[_ngcontent-%COMP%] {\n    color: red;\n    font-weight: 700;\n    text-shadow: 2px 2px 10px #80808087\n  }\n.form-control[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 45px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n    border-radius: 50px !important;\n    box-shadow: 2px 2px 10px #80808087;\n    border: none !important;\n  }\nbody[_ngcontent-%COMP%] {\n    height: 100%;\n    background: #5f2c82;\n    \n    \n    background: linear-gradient(to right, #49a09d, #5f2c82);\n    \n  }\n.form-bg[_ngcontent-%COMP%] {\n    height: 100%;\n    background: #5f2c82;\n    \n    \n    background: linear-gradient(to right, #49a09d, #5f2c82);\n    \n  }\n.btn-primary[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: rgb(95 46 131) !important;\n    border: none;\n    padding: 12px;\n    border-radius: 50px;\n    font-weight: 600;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFO0FBQ0Y7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDO0VBQ0Y7QUFFQTtJQUNFLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCO0VBQ0Y7QUFFQTs7OztJQUlFLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0UsV0FBVztJQUNYLDZDQUE2QztJQUM3QyxZQUFZO0VBQ2Q7QUFFQTtJQUNFLDRDQUE0QztFQUM5QztBQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7O0VBRXJCO0FBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGVBQWU7O0VBRWpCO0FBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixtQ0FBbUM7RUFDckM7QUFFQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEI7RUFDRjtBQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiwrQ0FBK0M7SUFDL0Msc0VBQXNFO0lBQ3RFLDhCQUE4QjtJQUM5QixrQ0FBa0M7SUFDbEMsdUJBQXVCO0VBQ3pCO0FBRUE7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUU5QiwrQkFBK0I7SUFDL0IsdURBQXVEO0lBQ3ZELHFFQUFxRTtFQUN2RTtBQUVBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFFOUIsK0JBQStCO0lBQy9CLHVEQUF1RDtJQUN2RCxxRUFBcUU7RUFDdkU7QUFFQTtJQUNFLFdBQVc7SUFDWCwyQ0FBMkM7SUFDM0MsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoubWFpbnJvd3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLzMuanBnXCIpO1xuICAgIGhlaWdodDpjYWxjKDEwMCUgLSA1MHB4KTtcbn1cbi5sb2dpbndlbGxzdHlsZXtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5idG5zdHlsZXtcbiAgICAvKiB3aWR0aDogMTAwJTsgKlxuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubG9naW5oZWFkaW5ne1xuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgIGNvbG9yOiAjM0MzQjZFO1xufSovXG4uZm9ybS1vdXRlciB7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICBcbiAgLmJ1dC1jb2xvciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA2NiwgNzYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDExcHhcbiAgfVxuICBcbiAgLmJ1dC1ub25lIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHJnYmEoNDIsIDY2LCA3Nik7XG4gICAgYm9yZGVyLXJhZGl1czogMTFweFxuICB9XG4gIFxuICAuYnV0LWNvbG9yOmFjdGl2ZSxcbiAgLmJ1dC1jb2xvcjpmb2N1cyxcbiAgLmJ1dC1ub25lOmFjdGl2ZSxcbiAgLmJ1dC1ub25lOmZvY3VzIHtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmJ1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDE1MywgMjE1KSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBcbiAgLmJ1dDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCA2NiwgNzYpICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5wYWQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTRweDtcbiAgXG4gIH1cbiAgXG4gIC5mb3JnZXQge1xuICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5OTk5OTkgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLyogdGV4dC1zaXplLWFkanVzdDogbm9uZTsgKi9cbiAgICBmb250LXNpemU6IDExcHg7XG4gIFxuICB9XG4gIFxuICAuZm9yZ2V0OmhvdmVyIHtcbiAgICBjb2xvcjogcmdiYSg0MiwgNjYsIDc2KSAhaW1wb3J0YW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMTBweCAjODA4MDgwODc7XG4gIH1cbiAgXG4gIC5hbGVydG1zZyB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggIzgwODA4MDg3XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNzUpO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXM7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAjODA4MDgwODc7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjNWYyYzgyO1xuICAgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQ5YTA5ZCwgIzVmMmM4Mik7XG4gICAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0OWEwOWQsICM1ZjJjODIpO1xuICAgIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgfVxuICBcbiAgLmZvcm0tYmcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjNWYyYzgyO1xuICAgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQ5YTA5ZCwgIzVmMmM4Mik7XG4gICAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0OWEwOWQsICM1ZjJjODIpO1xuICAgIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgfVxuICBcbiAgLmJ0bi1wcmltYXJ5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTUgNDYgMTMxKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/clofus/Documents/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map