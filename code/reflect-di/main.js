"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("./common");
var controller_1 = require("./controller");
var cat = common_1.Factory(controller_1.CatsController);
console.log(cat);
// CatsController { catsService: CatsService { catName: 'jack' } }
console.log(cat.getCatsServiceMes());
// jack
