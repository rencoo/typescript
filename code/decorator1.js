var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 类装饰器
// tsc decorator1.ts  --target ES5 --experimentalDecorators
function Greeter(str) {
    return function (target) {
        target.prototype.greet = function () {
            console.log(str);
        };
    };
}
var A = /** @class */ (function () {
    function A() {
    }
    A = __decorate([
        Greeter('Hello world')
    ], A);
    return A;
}());
var aa = new A();
aa.greet();
