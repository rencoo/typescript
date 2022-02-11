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
// declare type MethodDecorator = <T>(target:Object, propertyKey: string | symbol,descriptor: TypePropertyDescript<T>) => TypedPropertyDescriptor<T> | void;
// 方法装饰器
// tsc decorator2.ts  --target ES5 --experimentalDecorators
function LogOutput(target, // Function 报错
key, descriptor) {
    var originMethod = descriptor.value; // 属性描述符 对象
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = originMethod.apply(this, args);
        if (!this.loggedOutput) {
            this.loggedOutput = new Array();
        }
        this.loggedOutput.push({
            method: key,
            parameters: args,
            output: result,
            timestamp: new Date()
        });
        return result;
    };
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.double = function (num) {
        return num * 2;
    };
    __decorate([
        LogOutput,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Number)
    ], Calculator.prototype, "double", null);
    return Calculator;
}());
var calc = new Calculator();
calc.double(11);
console.log(calc.loggedOutput);
/**
[
  {
    method: 'double',
    parameters: [ 11 ],
    output: 22,
    timestamp: 2022-01-29T07:27:38.463Z
  }
]
 */
