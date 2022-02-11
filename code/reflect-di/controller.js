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
exports.CatsController = void 0;
var common_1 = require("./common");
var service_1 = require("./service");
// 注册了需要的依赖
var CatsController = /** @class */ (function () {
    function CatsController() {
    }
    CatsController.prototype.getCatsServiceMes = function () {
        return this.catsService.getCatName();
    };
    __decorate([
        common_1.Inject,
        __metadata("design:type", service_1.CatsService)
    ], CatsController.prototype, "catsService", void 0);
    CatsController = __decorate([
        common_1.Controller,
        __metadata("design:paramtypes", [])
    ], CatsController);
    return CatsController;
}());
exports.CatsController = CatsController;
// 写法一 ts的简写 注入的写法, providers
// constructor(public readonly catsService: CatsService) {}
// 等价于 最原始的写法
// class CatsController{
//   public readonly catsService: CatsService;
//   constructor(CatsService){
//       this.catsService = CatsService;
//   }
// }
