interface Person {
    firstName: string;
    lastName: string;
}
declare class Student implements Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string);
}
declare var greeter: (target: Person) => void;
declare var me: Student;
