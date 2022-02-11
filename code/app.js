"use strict";
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Student;
}());
var greeter = function (target) {
    console.log("Hello, " + target.firstName + target.lastName);
};
var me = new Student('Ge', 'Can');
greeter(me); //Argument of type 'Student' is not assignable to parameter of type 'Person'.
