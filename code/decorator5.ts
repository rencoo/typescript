// 装饰器执行顺序
// tsc decorator5.ts  --target ES5 --experimentalDecorators
function ClassDecorator() {
  return function (target: any) {
    console.log('I am class decorator');
  };
}
function MethodDecorator() {
  return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
    console.log('I am method decorator');
  };
}
function Param1Decorator() {
  return function (target: any, methodName: string, paramIndex: number) {
    console.log('I am parameter1 decorator');
  };
}
function Param2Decorator() {
  return function (target: any, methodName: string, paramIndex: number) {
    console.log('I am parameter2 decorator');
  };
}
function PropertyDecorator() {
  return function (target: any, propertyName: string) {
    console.log('I am property decorator');
  };
}

@ClassDecorator()
class Hello {
  @PropertyDecorator() greeting: string;
  constructor(str: string) {
    this.greeting = str;
  }
  @MethodDecorator() greet(
    @Param1Decorator() p1: string, // 后执行
    @Param2Decorator() p2: string // 先执行
  ) {}
}

// const a = new Hello('hello world');
// a.greet('p1', 'p2');
// node decorator5.js 即输出 // 装饰器在编译阶段完成编译; 运行时即起作用; 即 __decorate 等函数的运行
/**
I am property decorator
I am parameter2 decorator
I am parameter1 decorator
I am method decorator
I am class decorator
 */

export default Hello;