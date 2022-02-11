"use strict";
var DogService = /** @class */ (function () {
    function DogService() {
    }
    DogService.prototype.getDog = function () {
        return 'dog';
    };
    return DogService;
}());
var TestService = /** @class */ (function () {
    function TestService(dogService) {
        this.dogService = dogService;
    }
    TestService.prototype.getDog = function () {
        return this.dogService.getDog();
    };
    return TestService;
}());
var instance = new TestService(new DogService());
console.log(instance.getDog());
console.log(instance);
