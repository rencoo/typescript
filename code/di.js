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
require("reflect-metadata");
var inversify_1 = require("inversify");
// 运行时类型标记
var TYPES = {
    a: Symbol.for('a'),
    b: Symbol.for('b'),
    c: Symbol.for('c'),
    d: Symbol.for('d'),
    e: Symbol.for('e')
};
// const TYPES = {
//   a: 'a',
//   b: 'b',
//   c: 'c',
//   d: 'd',
//   e: 'e'
// };
var A = /** @class */ (function () {
    function A(_b // 必须加private
    ) {
        this._b = _b;
    }
    A.prototype.ado = function () {
        return 'ado!';
    };
    A.prototype.bdo = function () {
        return this._b.bdo();
    };
    A = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(TYPES.b)),
        __metadata("design:paramtypes", [B // 必须加private
        ])
    ], A);
    return A;
}());
// 声明该类是可被注入的
var B = /** @class */ (function () {
    // https://www.npmjs.com/package/inversify
    // @inject('e') private _e: E // 报错 Property '_e' has no initializer and is not definitely assigned in the constructor.
    function B(_e) {
        this._e = _e;
    }
    B.prototype.bdo = function () {
        return 'bdo!';
    };
    B.prototype.edo = function () {
        return this._e.edo();
    };
    B = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(TYPES.e)),
        __metadata("design:paramtypes", [E])
    ], B);
    return B;
}());
var F = /** @class */ (function () {
    function F() {
    }
    F.prototype.bdo = function () {
        return 'f bdo!';
    };
    F = __decorate([
        inversify_1.injectable()
    ], F);
    return F;
}());
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.cdo = function () {
        return 'cdo!';
    };
    C = __decorate([
        inversify_1.injectable()
    ], C);
    return C;
}());
var D = /** @class */ (function () {
    function D() {
    }
    D.prototype.ddo = function () {
        return 'ddo!';
    };
    D = __decorate([
        inversify_1.injectable()
    ], D);
    return D;
}());
var E = /** @class */ (function () {
    function E() {
    }
    E.prototype.edo = function () {
        return 'edo!';
    };
    E = __decorate([
        inversify_1.injectable()
    ], E);
    return E;
}());
// file inversify.config.ts
// Create and configure a Container // 开始往容器里注入
var diContainer = new inversify_1.Container();
// 需要在类上添加@injectable()装饰器，要不然会报错: Missing required @injectable annotation in: F.
diContainer.bind(TYPES.a).to(A);
diContainer.bind(TYPES.b).to(F); // 依赖于抽象而不依赖于具体实现; 依赖的对象是依靠控制器注入的，可以是符合接口B条件的任何对象
diContainer.bind(TYPES.c).to(C);
diContainer.bind(TYPES.d).to(D);
diContainer.bind(TYPES.e).to(E);
// 使用di容器中的实例
var a = diContainer.get(TYPES.a);
console.log(a.bdo()); // f bdo!
