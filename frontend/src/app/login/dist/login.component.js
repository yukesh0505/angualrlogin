"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, dataService, router, notification) {
        this.fb = fb;
        this.dataService = dataService;
        this.router = router;
        this.notification = notification;
        this.loginuser = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        // if (this.dataService.isLoggedIn) {
        //   this.router.navigate(['dashboard'])
        // } else {
        // }
    };
    LoginComponent.prototype.postdata = function (loginuser) {
        var _this = this;
        this.dataService
            .userlogin(loginuser.email, loginuser.password)
            .pipe(operators_1.first())
            .subscribe(function (data) {
            if (data.retcode == 0) {
                _this.dataService.setToken(data.result);
                var redirect = _this.dataService.redirectUrl
                    ? _this.dataService.redirectUrl
                    : '/dashboard';
                _this.router.navigate([redirect]);
            }
            else {
                _this.notification.error(data.status);
            }
        }, function (error) {
            _this.notification.error('Error');
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
