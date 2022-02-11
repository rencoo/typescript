"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogsService = exports.CatsService = void 0;
var common_1 = require("./common");
// 注册到容器当中
var CatsService = /** @class */ (function () {
    function CatsService() {
        this.catName = 'jack';
    }
    CatsService.prototype.getCatName = function () {
        return this.catName;
    };
    CatsService = __decorate([
        common_1.Injectable
    ], CatsService);
    return CatsService;
}());
exports.CatsService = CatsService;
var DogsService = /** @class */ (function () {
    function DogsService() {
        this.dogName = 'henry';
    }
    DogsService.prototype.getDogName = function () {
        return this.dogName;
    };
    DogsService = __decorate([
        common_1.Injectable
    ], DogsService);
    return DogsService;
}());
exports.DogsService = DogsService;
