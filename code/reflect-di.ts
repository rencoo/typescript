import 'reflect-metadata';

// 结合反射实现依赖注入
// Angular2+ 的控制反转与依赖注入实现
type Constructor<T = any> = new (...args: any[]) => T;

const Injectable = (): ClassDecorator => target => {};

class OtherService {
  a = 1;
}

@Injectable()
class TestService {
  // constructor(@Inject(OtherService) public readonly otherService: OtherService) {}
  constructor(public readonly otherService: OtherService) {}

  testMethod() {
    console.log(this.otherService.a);
  }
}

// 对比用
class OtherService2 {
  a = 2;
}

@Injectable()
class TestService2 {
  constructor(public readonly otherService: OtherService2) {}

  testMethod() {
    console.log(this.otherService.a);
  }
}
// 对比用

const Factory = <T>(target: Constructor<T>): T => {
  // 获取目标target所有注入的服务
  const providers = Reflect.getMetadata('design:paramtypes', target); // [OtherService]
  console.log('providers: ', providers); // providers:  [ [Function: OtherService] ]
  const args = providers.map((provider: Constructor) => new provider()); // args:  [ OtherService { a: 1 } ]
  console.log('args: ', args);
  return new target(...args);
};

Factory(TestService).testMethod(); // 1
