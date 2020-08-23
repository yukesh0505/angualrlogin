"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var ApiService = /** @class */ (function () {
    function ApiService(httpClient, router, notification) {
        this.httpClient = httpClient;
        this.router = router;
        this.notification = notification;
        this.baseUrl = 'http://localhost/backend/api';
        this.getLoggedInName = new core_1.EventEmitter();
    }
    ApiService.prototype.userlogin = function (username, password) {
        // alert(username)
        return this.httpClient
            .post(this.baseUrl + '/auth.php', { username: username, password: password })
            .pipe(operators_1.map(function (Users) {
            return Users;
        }));
    };
    ApiService.prototype.userregistration = function (name, email, pwd) {
        return this.httpClient
            .post(this.baseUrl + '/users/register.php', { name: name, email: email, pwd: pwd })
            .pipe(operators_1.map(function (Users) {
            return Users;
        }));
    };
    ApiService.prototype.getallclient = function () {
        var _this = this;
        this.token = JSON.parse(window.localStorage.getItem('token')).token;
        this.headers = new http_1.HttpHeaders()
            .set('content-type', 'application/json')
            .set('Authorization', this.token);
        return this.httpClient
            .get(this.baseUrl + '/clients/getall.php', { headers: this.headers })
            .pipe(operators_1.map(function (Users) {
            if (Users.retcode == -1) {
                _this.notification.error(Users.status);
                _this.logout();
            }
            else {
                return Users;
            }
        }));
    };
    ApiService.prototype.deleteClient = function (id) {
        var _this = this;
        this.token = JSON.parse(window.localStorage.getItem('token')).token;
        this.headers = new http_1.HttpHeaders()
            .set('content-type', 'application/json')
            .set('Authorization', this.token);
        return this.httpClient["delete"](this.baseUrl + '/clients/delete.php?id=' + id, {
            headers: this.headers
        })
            .pipe(operators_1.map(function (Users) {
            if (Users.retcode == -1) {
                _this.notification.error(Users.status);
                _this.logout();
            }
            else {
                return Users;
            }
        }));
    };
    ApiService.prototype.addClient = function (data) {
        var _this = this;
        this.token = JSON.parse(window.localStorage.getItem('token')).token;
        this.headers = new http_1.HttpHeaders()
            .set('content-type', 'application/json')
            .set('Authorization', this.token);
        return this.httpClient
            .post(this.baseUrl + '/clients/add.php', JSON.stringify(data), {
            headers: this.headers
        })
            .pipe(operators_1.map(function (Users) {
            if (Users.retcode == -1) {
                _this.notification.error(Users.status);
                _this.logout();
            }
            else {
                return Users;
            }
        }));
    };
    ApiService.prototype.updateClient = function (data, id) {
        var _this = this;
        this.token = JSON.parse(window.localStorage.getItem('token')).token;
        this.headers = new http_1.HttpHeaders()
            .set('content-type', 'application/json')
            .set('Authorization', this.token);
        return this.httpClient
            .put(this.baseUrl + '/clients/update.php?id=' + id, JSON.stringify(data), {
            headers: this.headers
        })
            .pipe(operators_1.map(function (Users) {
            if (Users.retcode == -1) {
                _this.notification.error(Users.status);
                _this.logout();
            }
            else {
                return Users;
            }
        }));
    };
    //token
    ApiService.prototype.setToken = function (token) {
        localStorage.setItem('token', JSON.stringify(token));
    };
    ApiService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('token'));
    };
    ApiService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
    };
    ApiService.prototype.logout = function () {
        this.deleteToken();
        this.router.navigate(['login']);
    };
    ApiService.prototype.isLoggedIn = function () {
        var usertoken = this.getToken();
        if (usertoken != null) {
            return true;
        }
        return false;
    };
    __decorate([
        core_1.Output()
    ], ApiService.prototype, "getLoggedInName");
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
