import 'reflect-metadata';
declare type Construct<T = any> = new (...args: Array<any>) => T;
declare function Injectable<T>(constructor: Construct<T>): void;
/**
 * target class
 * key 属性
 */
declare function Inject<T>(target: any, key: string): void;
declare function Controller<T>(constructor: Construct<T>): void;
declare function Factory<T>(target: Construct<T>): T;
export { Injectable, Inject, Controller, Factory };
