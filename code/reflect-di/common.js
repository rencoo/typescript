"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = exports.Controller = exports.Inject = exports.Injectable = void 0;
require("reflect-metadata");
// 声明 Injectable 装饰器，当为类声明装饰该装饰器时则表示该类是可注入的类
function Injectable(constructor) {
    Reflect.defineMetadata('Injectable', true, constructor);
}
exports.Injectable = Injectable;
function checkInjectable(injectSev) {
    // 是否已经注册
    var isAble = Reflect.getMetadata('Injectable', injectSev);
    if (!isAble) {
        throw new Error(injectSev + " \u672A\u6CE8\u518C");
    }
    return true;
}
// 声明 Inject 装饰器，当为属性声明装饰该装饰器时则表示该类是注入的类
/**
 * target class
 * key 属性
 */
function Inject(target, key) {
    // 类获取的target 会是实例化的对象
    // target => CatsController { getCatsServiceMes: [Function] }
    // constructor => [Function: CatsController]
    var constructor = target.constructor;
    // const constructor = target; // 不能直接使用target
    // [Function: CatsService]
    var injectSev = Reflect.getMetadata('design:type', target, key); // 类属性使用装饰器时
    // 是否已经注册
    if (!checkInjectable(injectSev)) {
        return;
    }
    // 关键逻辑(*)
    var injectSevs = Reflect.getMetadata('InjectSevs', constructor) || {};
    // { catsService:[Function: CatsService] }
    injectSevs[key] = injectSev;
    Reflect.defineMetadata('InjectSevs', injectSevs, constructor); // key value target
}
exports.Inject = Inject;
// 声明 Controller 装饰器，当为类声明装饰器装饰器时则表示该类是控制器模块
function Controller(constructor) { }
exports.Controller = Controller;
// 声明简单的 IOC容器，用来将对象创建的控制器反转
function Factory(target) {
    // 参数装饰器
    // [ [Function: CatsService] ]
    // 获取目标target所有注入的服务
    var providers = Reflect.getMetadata('design:paramtypes', target);
    if (providers && providers.length) {
        console.log('Factory providers');
        // 实例化然后返回 实例数组
        var args = providers.map(function (provider) {
            // 是否已经注册
            if (!checkInjectable(provider)) {
                return;
            }
            return new provider();
        });
        return new (target.bind.apply(target, __spreadArray([void 0], args)))();
    }
    else {
        console.log('Factory else');
        // 关键逻辑(*) 那里给注入的service，定义了metadata
        var injectSevs = Reflect.getMetadata('InjectSevs', target);
        var obj_1 = new target(); // 获取Class的实例
        // 手动给实例定义注入的service
        for (var key in injectSevs) {
            if (Object.prototype.hasOwnProperty.call(injectSevs, key)) {
                var injectSev = injectSevs[key];
                obj_1[key] = new injectSev(); // this.catService = new CatService()
            }
        }
        return obj_1;
    }
}
exports.Factory = Factory;
