import 'reflect-metadata';

type Construct<T = any> = new (...args: Array<any>) => T;

// 声明 Injectable 装饰器，当为类声明装饰该装饰器时则表示该类是可注入的类
function Injectable<T>(constructor: Construct<T>) {
  Reflect.defineMetadata('Injectable', true, constructor);
}

function checkInjectable(injectSev: Construct) {
  // 是否已经注册
  const isAble = Reflect.getMetadata('Injectable', injectSev);
  if (!isAble) {
    throw new Error(`${injectSev} 未注册`);
  }
  return true;
}

// 声明 Inject 装饰器，当为属性声明装饰该装饰器时则表示该类是注入的类
/**
 * target class
 * key 属性
 */
function Inject<T>(target: any, key: string) {
  // 类获取的target 会是实例化的对象
  // target => CatsController { getCatsServiceMes: [Function] }
  // constructor => [Function: CatsController]
  const constructor = target.constructor;
  // const constructor = target; // 不能直接使用target

  // [Function: CatsService]
  const injectSev = Reflect.getMetadata('design:type', target, key); // 类属性使用装饰器时
  // 是否已经注册
  if (!checkInjectable(injectSev)) {
    return;
  }

  // 关键逻辑(*)
  const injectSevs = Reflect.getMetadata('InjectSevs', constructor) || {};

  // { catsService:[Function: CatsService] }
  injectSevs[key] = injectSev;
  Reflect.defineMetadata('InjectSevs', injectSevs, constructor); // key value target
}

// 声明 Controller 装饰器，当为类声明装饰器装饰器时则表示该类是控制器模块
function Controller<T>(constructor: Construct<T>) { }


// 声明简单的 IOC容器，用来将对象创建的控制器反转
function Factory<T>(target: Construct<T>): T {
  // 参数装饰器
  // [ [Function: CatsService] ]
  // 获取目标target所有注入的服务
  const providers = Reflect.getMetadata('design:paramtypes', target);

  if (providers && providers.length) {
    console.log('Factory providers');
    // 实例化然后返回 实例数组
    const args = providers.map((provider: Construct<T>) => {
      // 是否已经注册
      if (!checkInjectable(provider)) {
        return;
      }

      return new provider();
    });

    return new target(...args);
  } else {
    console.log('Factory else');
    // 关键逻辑(*) 那里给注入的service，定义了metadata
    const injectSevs = Reflect.getMetadata('InjectSevs', target);
    const obj: any = new target(); // 获取Class的实例
    // 手动给实例定义注入的service
    for (const key in injectSevs) {
      if (Object.prototype.hasOwnProperty.call(injectSevs, key)) {
        const injectSev = injectSevs[key];
        obj[key] = new injectSev(); // this.catService = new CatService()
      }
    }

    return obj;
  }
}

export { Injectable, Inject, Controller, Factory };
