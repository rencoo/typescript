import 'reflect-metadata';
import { injectable, inject, Container } from 'inversify';

// https://www.npmjs.com/package/inversify
interface AInterface {
  ado(): string;
  bdo(): string;
}
interface BInterface {
  bdo(): string;
}
interface CInterface {
  cdo(): string;
}
interface DInterface {
  ddo(): string;
}
interface EInterface {
  edo(): string;
}

// 运行时类型标记
const TYPES = {
  a: Symbol.for('a'),
  b: Symbol.for('b'),
  c: Symbol.for('c'),
  d: Symbol.for('d'),
  e: Symbol.for('e')
};
// const TYPES = {
//   a: 'a',
//   b: 'b',
//   c: 'c',
//   d: 'd',
//   e: 'e'
// };

@injectable()
class A implements AInterface {
  constructor(
    @inject(TYPES.b) private _b: B // 必须加private
  ) {

  }
  ado() {
    return 'ado!';
  }
  bdo() {
    return this._b.bdo();
  }
}


// 声明该类是可被注入的
@injectable()
class B implements BInterface {
  // https://www.npmjs.com/package/inversify
  // @inject('e') private _e: E // 报错 Property '_e' has no initializer and is not definitely assigned in the constructor.
  constructor(
    @inject(TYPES.e) private _e: E
  ) {}

  public bdo() {
    return 'bdo!';
  }
  public edo() {
    return this._e.edo();
  }
}

@injectable()
class F implements BInterface {
  bdo() {
    return 'f bdo!';
  }
}

@injectable()
class C implements CInterface {
  cdo() {
    return 'cdo!';
  }
}

@injectable()
class D implements DInterface {
  ddo() {
    return 'ddo!';
  }
}

@injectable()
class E implements EInterface {
  edo() {
    return 'edo!';
  }
}

// file inversify.config.ts
// Create and configure a Container // 开始往容器里注入
const diContainer = new Container();
// 需要在类上添加@injectable()装饰器，要不然会报错: Missing required @injectable annotation in: F.
diContainer.bind<AInterface>(TYPES.a).to(A);
diContainer.bind<BInterface>(TYPES.b).to(F); // 依赖于抽象而不依赖于具体实现; 依赖的对象是依靠控制器注入的，可以是符合接口B条件的任何对象
diContainer.bind<CInterface>(TYPES.c).to(C);
diContainer.bind<DInterface>(TYPES.d).to(D);
diContainer.bind<EInterface>(TYPES.e).to(E);

// 使用di容器中的实例
const a = diContainer.get<AInterface>(TYPES.a);
console.log(a.bdo()); // f bdo!
