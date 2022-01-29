// 类装饰器
// tsc decorator1.ts  --target ES5 --experimentalDecorators
// declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
function Greeter(str: String) {
  return function (target: Function) {
    target.prototype.greet = function(): void {
      console.log(str);
    };
  };
}

@Greeter('Hello world')
class A {
  constructor() {}
}

const aa = new A();
(aa as any).greet()