// 方法 参数装饰器
// tsc decorator3.ts  --target ES5 --experimentalDecorators
// declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number ) => void
function Log(target: any, key: string, parameterIndex: number) {
  const functionLogged = key || target.prototype.constructor.name;
  console.log(target.prototype.constructor.name); // Greeter
  console.log(`The parameter in position ${parameterIndex} at ${functionLogged} has been decorated`);
}

class Greeter {
  greeting: string;
  constructor(@Log phrase: string) {
    this.greeting = phrase;
  }
}

new Greeter('hello world'); // The parameter in position 0 at Greeter has been decorated

export default Greeter;