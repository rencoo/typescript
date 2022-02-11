import 'reflect-metadata';

// 基础
@Reflect.metadata('inClass', 'A')
class Test {
  @Reflect.metadata('inMethod', 'B')
  public hello(): string {
    return 'hello world';
  }
}

console.log(Reflect.getMetadata('inClass', Test)); // 'A'
console.log(Reflect.getMetadata('inMethod', new Test(), 'hello')); // 'B'


// 自定义metadataKey
function classDecorator(): ClassDecorator {
  return target => {
    console.log('classDecorator target: ', target); // SomeClass
    // 在类上定义元数据，key 为 `classMetaData`，value 为 `a`
    Reflect.defineMetadata('classMetaData', 'a', target);
  };
}

function methodDecorator(): MethodDecorator {
  return (target, key, descriptor) => {
    console.log('target: ', target); // SomeClass { someMethod: [Function] }
    console.log('key: ', key); // someMethod
    console.log('descriptor: ', descriptor); // 等价于Object.getOwnPropertyDescriptor(SomeClass.prototype, "someMethod")
    // 在类的原型属性 'someMethod' 上定义元数据，key 为 `methodMetaData`，value 为 `b`
    Reflect.defineMetadata('methodMetaData', 'b', target, key);
  };
}

@classDecorator() // 后执行
class SomeClass {
  @methodDecorator() // 先执行
  someMethod() {}
}

console.log(Reflect.getMetadata('classMetaData', SomeClass)); // 'a'
console.log(Reflect.getMetadata('methodMetaData', new SomeClass(), 'someMethod')); // 'b'


function log(target: any, key: string, descriptor: any) {
  return {
    value: function (...args: any[]) {
      // convert list of foo arguments to string
      var a = args.map(a => JSON.stringify(a)).join();
      // invoke foo() and get its return value
      var result = descriptor.value.apply(this, args);
      // convert result to string
      var r = JSON.stringify(result);
      // display in console the function call details
      console.log(`Call: ${key}(${a}) => ${r}`);
      // return the result of invoking foo
      // return result; // 2
      // change result here
      return result + 1; // 在原来运行结果上加了1
    }
  }
}

class C {
  @log
  foo(n: number) {
    return n * 2;
  }
}

const c = new C();
console.log(c.foo(1)); // 3
