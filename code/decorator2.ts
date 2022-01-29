// declare type MethodDecorator = <T>(target:Object, propertyKey: string | symbol,descriptor: TypePropertyDescript<T>) => TypedPropertyDescriptor<T> | void;
// 方法装饰器
// tsc decorator2.ts  --target ES5 --experimentalDecorators
function LogOutput(
  target: any, // Function 报错
  key: string,
  descriptor: any
) {
  const originMethod = descriptor.value; // 属性描述符 对象
  descriptor.value = function(...args: any[]): any {
    const result: any = originMethod.apply(this, args);
    if (!this.loggedOutput) {
      this.loggedOutput = new Array<any>();
    }
    this.loggedOutput.push({
      method: key,
      parameters: args,
      output: result,
      timestamp: new Date()
    });

    return result;
  }
}

class Calculator {
  @LogOutput
  double(num: number): number {
    return num * 2;
  }
}

const calc = new Calculator();
calc.double(11);
console.log((calc as any).loggedOutput);
/**
[
  {
    method: 'double',
    parameters: [ 11 ],
    output: 22,
    timestamp: 2022-01-29T07:27:38.463Z
  }
]
 */
