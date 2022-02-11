declare class DogService {
    getDog(): string;
}
declare class TestService {
    readonly dogService: DogService;
    constructor(dogService: DogService);
    getDog(): string;
}
declare const instance: TestService;
