import { Controller, Inject } from './common';
import { CatsService, DogsService } from './service';

// 注册了需要的依赖
@Controller
export class CatsController {
  @Inject
  public readonly catsService: CatsService;
  constructor() {}
  getCatsServiceMes(): string {
    return this.catsService.getCatName();
  }
}


// 写法一 ts的简写 注入的写法, providers
// constructor(public readonly catsService: CatsService) {}
// 等价于 最原始的写法
// class CatsController{
//   public readonly catsService: CatsService;
//   constructor(CatsService){
//       this.catsService = CatsService;
//   }
// }
