// 属性装饰器
// tsc decorator4.ts  --target ES5 --experimentalDecorators
// declare type PropertyDecorator = (target:Object,propertyKey: string | symbol ) => void;
function logProperty(target: any, key: string) {
  delete target[key];
  const backingField = '_' + key;
  Object.defineProperty(target, backingField, {
    writable: true,
    enumerable: true,
    configurable: true
  });

  // property getter
  const getter = function (this: any) {
    console.log('this, ', this);
    const currVal = this[backingField];
    console.log(`Get: ${key} => ${currVal}`);
    return currVal;
  }

  // property setter
  const setter = function (this: any, newVal: any) {
    console.log('this, ', this); // Person {} -> target // target.xxx 被调用方式target
    console.log(`Set: ${key} => ${newVal}`);
    this[backingField] = newVal;
  }

  // Create new property with getter and setter
  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

class Person {
  @logProperty
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Person("semlinker");
p1.name = "kakuqo";
// Set: name => semlinker
// Set: name => kakuqo

export default Person;
