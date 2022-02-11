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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// helpers
function isFunction(value) {
    return typeof value === 'function';
}
function isConstructor(value) {
    return value === 'constructor';
}
// 这些 Decorator 也是基于 Reflect Metadata 实现，这次，我们将 metadataKey 定义在 descriptor 的 value 上：
// @Controller('/test')
// class SomeClass {
//   @Get('/a')
//   someGetMethod() {
//     return 'hello world';
//   }
//   @Post('/b')
//   somePostMethod() { }
// }
var METHOD_METADATA = 'method';
var PATH_METADATA = 'path';
var Controller = function (path) {
    return function (target) {
        Reflect.defineMetadata(PATH_METADATA, path, target);
    };
};
var createMappingDecorator = function (method) { return function (path) {
    return function (target, key, descriptor) {
        console.log('descriptor: ', descriptor); // descriptor: { value: [Function], writable: true, enumerable: true, configurable: true }
        Reflect.defineMetadata(PATH_METADATA, path, descriptor.value);
        Reflect.defineMetadata(METHOD_METADATA, method, descriptor.value);
    };
}; };
var Get = createMappingDecorator('GET');
var Post = createMappingDecorator('POST');
var SomeClass = /** @class */ (function () {
    function SomeClass() {
    }
    SomeClass.prototype.someGetMethod = function () {
        return 'hello world';
    };
    SomeClass.prototype.somePostMethod = function () { };
    __decorate([
        Get('/a'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SomeClass.prototype, "someGetMethod", null);
    __decorate([
        Post('/b'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SomeClass.prototype, "somePostMethod", null);
    SomeClass = __decorate([
        Controller('/test')
    ], SomeClass);
    return SomeClass;
}());
function mapRoute(instance) {
    var prototype = Object.getPrototypeOf(instance);
    // 筛选出类的methodName
    var methodsNames = Object.getOwnPropertyNames(prototype)
        .filter(function (item) { return !isConstructor(item) && isFunction(prototype[item]); });
    return methodsNames.map(function (methodName) {
        var fn = prototype[methodName];
        // 取出定义的 metadata
        var route = Reflect.getMetadata(PATH_METADATA, fn);
        var method = Reflect.getMetadata(METHOD_METADATA, fn);
        return {
            route: route,
            method: method,
            fn: fn,
            methodName: methodName
        };
    });
}
;
Reflect.getMetadata(PATH_METADATA, SomeClass); // '/test'
console.log(mapRoute(new SomeClass()));
/**
 * [{
 *    route: '/a',
 *    method: 'GET',
 *    fn: someGetMethod() { ... },
 *    methodName: 'someGetMethod'
 *  },{
 *    route: '/b',
 *    method: 'POST',
 *    fn: somePostMethod() { ... },
 *    methodName: 'somePostMethod'
 * }]
 *
 */
// 最后，只需把 route 相关信息绑在 express 或者 koa 上就 ok 了。
