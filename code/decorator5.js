"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// 装饰器执行顺序
// tsc decorator5.ts  --target ES5 --experimentalDecorators
function ClassDecorator() {
    return function (target) {
        console.log('I am class decorator');
    };
}
function MethodDecorator() {
    return function (target, methodName, descriptor) {
        console.log('I am method decorator');
    };
}
function Param1Decorator() {
    return function (target, methodName, paramIndex) {
        console.log('I am parameter1 decorator');
    };
}
function Param2Decorator() {
    return function (target, methodName, paramIndex) {
        console.log('I am parameter2 decorator');
    };
}
function PropertyDecorator() {
    return function (target, propertyName) {
        console.log('I am property decorator');
    };
}
var Hello = /** @class */ (function () {
    function Hello(str) {
        this.greeting = str;
    }
    Hello.prototype.greet = function (p1, // 后执行
    p2 // 先执行
    ) { };
    __decorate([
        PropertyDecorator()
    ], Hello.prototype, "greeting", void 0);
    __decorate([
        MethodDecorator(),
        __param(0, Param1Decorator()),
        __param(1, Param2Decorator())
    ], Hello.prototype, "greet", null);
    Hello = __decorate([
        ClassDecorator()
    ], Hello);
    return Hello;
}());
// const a = new Hello('hello world');
// a.greet('p1', 'p2');
exports.default = Hello;
