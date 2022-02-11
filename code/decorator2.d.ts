declare function LogOutput(target: any, // Function 报错
key: string, descriptor: any): void;
declare class Calculator {
    double(num: number): number;
}
declare const calc: Calculator;
/**
[
  {
    method: 'double',
    parameters: [ 11 ],
    output: 22,
    timestamp: 2022-01-29T07:27:38.463Z
  }
]
 */
