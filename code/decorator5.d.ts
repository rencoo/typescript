declare class Hello {
    greeting: string;
    constructor(str: string);
    greet(p1: string, // 后执行
    p2: string): void;
}
/**
I am property decorator
I am parameter2 decorator
I am parameter1 decorator
I am method decorator
I am class decorator
 */
export default Hello;
