class DogService {
  getDog(): string {
    return 'dog';
  }
}

class TestService {
  constructor(public readonly dogService: DogService) {}
  getDog(): string {
    return this.dogService.getDog();
  }
}

const instance = new TestService(new DogService());
console.log(instance.getDog());
console.log(instance);