// tsc decorator.ts  --target ES5 --experimentalDecorators
const isString = function (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // 保存原来的方法
  const originMethod = descriptor.value;
  // 重写原来的方法
  descriptor.value = function (str: string) {
    if (str && typeof str === 'string') {
      return originMethod.apply(this, arguments);
    }

    return 'error';
  };
};

class User {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  // 装饰器做校验
  @isString
  changeName(newVal: string) {
    this.name = newVal;
    return 'ok';
  }
}

const user = new User('2', 2);
console.log(user.changeName('ming')); // ok
console.log(user.changeName('')); // error
