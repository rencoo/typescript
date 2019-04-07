interface Person {
    firstName: string;
    lastName: string;
}

class Student implements Person { //student实现了Person接口,接口要求有firstName与lastName属性
    firstName: string;
    lastName: string;
    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

var greeter = function (target:Person){
    console.log(`Hello, ${target.firstName}${target.lastName}`);
}

var me = new Student('Ge', 'Can');

greeter(me); //Argument of type 'Student' is not assignable to parameter of type 'Person'.