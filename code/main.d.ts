declare var a: string;
declare var b: number;
declare var c: string[];
declare var d: number[];
declare var e: boolean;
declare var f: [number, string];
declare var g: any;
declare var h: any;
declare function i(): void;
declare function j(): number;
declare function hello(name?: string): string;
declare var hello1: (name?: string) => string;
declare var obj: {
    a: number;
    b: number;
};
declare function add(obj: any): any;
declare var add1: ({ a, b }: {
    a: number;
    b: number;
}) => number;
declare class Person {
    protected name: string;
    constructor(name: any);
    greet(): string;
}
declare var xiaoming: Person;
declare class Student extends Person {
    private major;
    constructor(name: string, major: any);
    studentGreet(): string;
}
declare var xiaohong: Student;
