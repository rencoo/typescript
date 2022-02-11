declare const isString: (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
declare class User {
    name: string;
    id: number;
    constructor(name: string, id: number);
    changeName(newVal: string): string;
}
declare const user: User;
