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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// 方法 参数装饰器
// tsc decorator3.ts  --target ES5 --experimentalDecorators
// declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number ) => void
function Log(target, key, parameterIndex) {
    var functionLogged = key || target.prototype.constructor.name;
    console.log(target.prototype.constructor.name); // Greeter
    console.log("The parameter in position " + parameterIndex + " at " + functionLogged + " has been decorated");
}
var Greeter = /** @class */ (function () {
    function Greeter(phrase) {
        this.greeting = phrase;
    }
    Greeter = __decorate([
        __param(0, Log),
        __metadata("design:paramtypes", [String])
    ], Greeter);
    return Greeter;
}());
new Greeter('hello world'); // The parameter in position 0 at Greeter has been decorated
exports.default = Greeter;
