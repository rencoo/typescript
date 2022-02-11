import { Factory } from "./common"
import { CatsController } from "./controller"

const cat = Factory(CatsController);

console.log(cat);
// CatsController { catsService: CatsService { catName: 'jack' } }
console.log(cat.getCatsServiceMes());
// jack