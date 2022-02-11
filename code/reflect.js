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
// 基础
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.hello = function () {
        return 'hello world';
    };
    __decorate([
        Reflect.metadata('inMethod', 'B'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Test.prototype, "hello", null);
    Test = __decorate([
        Reflect.metadata('inClass', 'A')
    ], Test);
    return Test;
}());
console.log(Reflect.getMetadata('inClass', Test)); // 'A'
console.log(Reflect.getMetadata('inMethod', new Test(), 'hello')); // 'B'
// 自定义metadataKey
function classDecorator() {
    return function (target) {
        console.log('classDecorator target: ', target); // SomeClass
        // 在类上定义元数据，key 为 `classMetaData`，value 为 `a`
        Reflect.defineMetadata('classMetaData', 'a', target);
    };
}
function methodDecorator() {
    return function (target, key, descriptor) {
        console.log('target: ', target); // SomeClass { someMethod: [Function] }
        console.log('key: ', key); // someMethod
        console.log('descriptor: ', descriptor); // 等价于Object.getOwnPropertyDescriptor(SomeClass.prototype, "someMethod")
        // 在类的原型属性 'someMethod' 上定义元数据，key 为 `methodMetaData`，value 为 `b`
        Reflect.defineMetadata('methodMetaData', 'b', target, key);
    };
}
var SomeClass = /** @class */ (function () {
    function SomeClass() {
    }
    SomeClass.prototype.someMethod = function () { };
    __decorate([
        methodDecorator() // 先执行
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SomeClass.prototype, "someMethod", null);
    SomeClass = __decorate([
        classDecorator() // 后执行
    ], SomeClass);
    return SomeClass;
}());
console.log(Reflect.getMetadata('classMetaData', SomeClass)); // 'a'
console.log(Reflect.getMetadata('methodMetaData', new SomeClass(), 'someMethod')); // 'b'
function log(target, key, descriptor) {
    return {
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // convert list of foo arguments to string
            var a = args.map(function (a) { return JSON.stringify(a); }).join();
            // invoke foo() and get its return value
            var result = descriptor.value.apply(this, args);
            // convert result to string
            var r = JSON.stringify(result);
            // display in console the function call details
            console.log("Call: " + key + "(" + a + ") => " + r);
            // return the result of invoking foo
            // return result; // 2
            // change result here
            return result + 1; // 在原来运行结果上加了1
        }
    };
}
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.foo = function (n) {
        return n * 2;
    };
    __decorate([
        log,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], C.prototype, "foo", null);
    return C;
}());
var c = new C();
console.log(c.foo(1)); // 3
