var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var a = 'abc';
var b = 1;
var c = ['xiaoming', 'xiaohong', 'xiaolan'];
var d = [1, 2, 3];
var e = true;
var f = [1, 'hello'];
var g = 1;
var h = 'a';
function i() {
    alert(1);
}
function j() {
    return 1;
}
//Function
function hello(name) {
    if (name === void 0) { name = 'default'; }
    return 'Hello' + name;
}
var hello1 = function (name) {
    if (name === void 0) { name = 'default'; }
    return ("Hello " + name);
};
var obj = { a: 1, b: 1 };
function add(obj) {
    return obj.a + obj.b;
}
var add1 = function (_a) {
    var a = _a.a, b = _a.b;
    return a + b;
}; //对象传入的瞬间,已经解构
console.log(add1(obj));
//Class
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        return this.name + "\u5411\u4F60\u95EE\u597D";
    };
    return Person;
})();
var xiaoming = new Person('xiaoming');
console.log(xiaoming.greet()); //​xiaoming向你问好
// console.log(xiaoming.name); //Property 'name' is protected and only accessible within class 'Person' and its subclasses.
//继承
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, major) {
        _super.call(this, name); //call一下父类
        this.major = major;
    }
    ;
    Student.prototype.studentGreet = function () {
        return this.major + "\u7CFB\u7684" + this.name + "\u5411\u4F60\u95EE\u597D";
    };
    return Student;
})(Person);
var xiaohong = new Student('xiaohong', '哲学');
console.log(xiaohong.studentGreet()); //哲学系的xiaohong向你问好
//继承父类的方法
console.log(xiaohong.greet()); //xiaoming向你问好
// console.log(xiaohong.major); //Property 'major' is private and only accessible within class 'Student'.
// console.log(xiaohong.name); //Property 'name' is protected and only accessible within class 'Person' and its subclasses. 
