"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignupComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, dataService, router, notification) {
        this.fb = fb;
        this.dataService = dataService;
        this.router = router;
        this.notification = notification;
        this.registeruser = {};
    }
    SignupComponent.prototype.ngOnInit = function () {
        // if (this.dataService.isLoggedIn) {
        //   this.router.navigate(['dashboard'])
        // }
    };
    SignupComponent.prototype.postdata = function (data) {
        var _this = this;
        if (data.password == data.passwordconfirm) {
            this.dataService
                .userregistration(data.name, data.email, data.password)
                .pipe(operators_1.first())
                .subscribe(function (data) {
                if (data.retcode == 0) {
                    _this.notification.success('Registartion successfull');
                    _this.router.navigate(['login']);
                }
                else {
                    _this.notification.error(data.status);
                }
            }, function (error) { });
        }
        else {
            this.notification.error("Password mismatch");
        }
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
