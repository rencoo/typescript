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
// tsc decorator.ts  --target ES5 --experimentalDecorators
var isString = function (target, propertyKey, descriptor) {
    // 保存原来的方法
    var originMethod = descriptor.value;
    // 重写原来的方法
    descriptor.value = function (str) {
        if (str && typeof str === 'string') {
            return originMethod.apply(this, arguments);
        }
        return 'error';
    };
};
var User = /** @class */ (function () {
    function User(name, id) {
        this.name = name;
        this.id = id;
    }
    // 装饰器做校验
    User.prototype.changeName = function (newVal) {
        this.name = newVal;
        return 'ok';
    };
    __decorate([
        isString,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], User.prototype, "changeName", null);
    return User;
}());
var user = new User('2', 2);
console.log(user.changeName('ming')); // ok
console.log(user.changeName('')); // error
