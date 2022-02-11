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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Injectable = function () { return function (target) { }; };
var OtherService = /** @class */ (function () {
    function OtherService() {
        this.a = 1;
    }
    return OtherService;
}());
var TestService = /** @class */ (function () {
    // constructor(@Inject(OtherService) public readonly otherService: OtherService) {}
    function TestService(otherService) {
        this.otherService = otherService;
    }
    TestService.prototype.testMethod = function () {
        console.log(this.otherService.a);
    };
    TestService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [OtherService])
    ], TestService);
    return TestService;
}());
// 对比用
var OtherService2 = /** @class */ (function () {
    function OtherService2() {
        this.a = 2;
    }
    return OtherService2;
}());
var TestService2 = /** @class */ (function () {
    function TestService2(otherService) {
        this.otherService = otherService;
    }
    TestService2.prototype.testMethod = function () {
        console.log(this.otherService.a);
    };
    TestService2 = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [OtherService2])
    ], TestService2);
    return TestService2;
}());
// 对比用
var Factory = function (target) {
    // 获取目标target所有注入的服务
    var providers = Reflect.getMetadata('design:paramtypes', target); // [OtherService]
    console.log('providers: ', providers); // providers:  [ [Function: OtherService] ]
    var args = providers.map(function (provider) { return new provider(); }); // args:  [ OtherService { a: 1 } ]
    console.log('args: ', args);
    return new (target.bind.apply(target, __spreadArray([void 0], args)))();
};
Factory(TestService).testMethod(); // 1
