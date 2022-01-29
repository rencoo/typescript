"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// 属性装饰器
// tsc decorator4.ts  --target ES5 --experimentalDecorators
// declare type PropertyDecorator = (target:Object,propertyKey: string | symbol ) => void;
function logProperty(target, key) {
    delete target[key];
    var backingField = '_' + key;
    Object.defineProperty(target, backingField, {
        writable: true,
        enumerable: true,
        configurable: true
    });
    // property getter
    var getter = function () {
        console.log('this, ', this);
        var currVal = this[backingField];
        console.log("Get: " + key + " => " + currVal);
        return currVal;
    };
    // property setter
    var setter = function (newVal) {
        console.log('this, ', this); // Person {} -> target // target.xxx 被调用方式target
        console.log("Set: " + key + " => " + newVal);
        this[backingField] = newVal;
    };
    // Create new property with getter and setter
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    __decorate([
        logProperty
    ], Person.prototype, "name", void 0);
    return Person;
}());
var p1 = new Person("semlinker");
p1.name = "kakuqo";
// Set: name => semlinker
// Set: name => kakuqo
exports.default = Person;
