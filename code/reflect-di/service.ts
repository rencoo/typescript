import { Injectable } from './common';

// 注册到容器当中
@Injectable
export class CatsService {
  catName: string = 'jack';
  getCatName(): string {
    return this.catName;
  }
}

@Injectable
export class DogsService {
  dogName: string = 'henry';
  getDogName(): string {
    return this.dogName;
  }
}
