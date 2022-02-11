import 'reflect-metadata';
// https://note.youdao.com/s/Bm6MP5g1
// 有道云笔记，更加完整

// helpers
function isFunction(value: any) {
  return typeof value === 'function';
}

function isConstructor(value: string) {
  return value === 'constructor';
}

// 这些 Decorator 也是基于 Reflect Metadata 实现，这次，我们将 metadataKey 定义在 descriptor 的 value 上：
// @Controller('/test')
// class SomeClass {
//   @Get('/a')
//   someGetMethod() {
//     return 'hello world';
//   }

//   @Post('/b')
//   somePostMethod() { }
// }

const METHOD_METADATA = 'method';
const PATH_METADATA = 'path';

const Controller = (path: string): ClassDecorator => {
  return target => {
    Reflect.defineMetadata(PATH_METADATA, path, target);
  }
}

const createMappingDecorator = (method: string) => (path: string): MethodDecorator => {
  return (target, key, descriptor: any) => {
    console.log('descriptor: ', descriptor); // descriptor: { value: [Function], writable: true, enumerable: true, configurable: true }
    Reflect.defineMetadata(PATH_METADATA, path, descriptor.value);
    Reflect.defineMetadata(METHOD_METADATA, method, descriptor.value);
  }
}
const Get = createMappingDecorator('GET');
const Post = createMappingDecorator('POST');

@Controller('/test')
class SomeClass {
  @Get('/a')
  someGetMethod() {
    return 'hello world';
  }

  @Post('/b')
  somePostMethod() { }
}

function mapRoute(instance: Object) {
  const prototype = Object.getPrototypeOf(instance);

  // 筛选出类的methodName
  const methodsNames = Object.getOwnPropertyNames(prototype)
    .filter(item => !isConstructor(item) && isFunction(prototype[item]));

  return methodsNames.map(methodName => {
    const fn = prototype[methodName];

    // 取出定义的 metadata
    const route = Reflect.getMetadata(PATH_METADATA, fn);
    const method = Reflect.getMetadata(METHOD_METADATA, fn);
    return {
      route,
      method,
      fn,
      methodName
    }
  })
};

Reflect.getMetadata(PATH_METADATA, SomeClass); // '/test'

console.log(mapRoute(new SomeClass()));
/**
 * [{
 *    route: '/a',
 *    method: 'GET',
 *    fn: someGetMethod() { ... },
 *    methodName: 'someGetMethod'
 *  },{
 *    route: '/b',
 *    method: 'POST',
 *    fn: somePostMethod() { ... },
 *    methodName: 'somePostMethod'
 * }]
 *
 */

// 最后，只需把 route 相关信息绑在 express 或者 koa 上就 ok 了。