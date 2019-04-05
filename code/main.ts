var a:string = 'abc';
var b:number = 1;
var c:string[] = ['xiaoming', 'xiaohong', 'xiaolan'];
var d:number[] = [1, 2, 3];
var e:boolean = true;
var f:[number, string] = [1, 'hello'];
var g:any = 1;
var h:any = 'a';
function i():void {
    alert(1);
}
function j():number {
    return 1;
}
//Function
function hello(name:string='default'):string {
    return 'Hello' + name;
}

var hello1 = (name:string='default'):string => `Hello ${name}`;

var obj = {a: 1, b: 1};
function add(obj) {
    return obj.a + obj.b;
}

var add1 = ({a, b}:{a:number, b:number}):number => a + b; //对象传入的瞬间,已经解构
console.log(add1(obj));

//Class
class Person {
    //name:string //等同于public name:string(默认就是public )
    protected name: string; //protected将属性指定为Person类里及其子类型Student可见(Person的实例与Student的实例都不行)

    constructor(name) { //这个函数在实例化的一瞬间就执行
        this.name = name;
    }

    greet() {
        return `${this.name}向你问好`;
    }
}

var xiaoming = new Person('xiaoming');
console.log(xiaoming.greet()); //​xiaoming向你问好
// console.log(xiaoming.name); //Property 'name' is protected and only accessible within class 'Person' and its subclasses.

//继承
class Student extends Person{ //扩充'人'这个类
    private major: string; //private将属性指定为私有(只能在Student类里面调用)

    constructor(name:string, major) {
        super(name); //call一下父类
        this.major = major;
    };

    studentGreet() {
        return `${this.major}系的${this.name}向你问好`
    }
}

var xiaohong = new Student('xiaohong', '哲学');
console.log(xiaohong.studentGreet()); //哲学系的xiaohong向你问好
//继承父类的方法
console.log(xiaohong.greet()); //xiaoming向你问好
// console.log(xiaohong.major); //Property 'major' is private and only accessible within class 'Student'.
// console.log(xiaohong.name); //Property 'name' is protected and only accessible within class 'Person' and its subclasses.