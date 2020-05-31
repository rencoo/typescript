### TypeScript中一些被忽略的内置类型

假设我们已经声明了一个interface

```typescript
interface Person {
	name: string;
	age?: number;
}
```

##### Partial

将所有参数变成可选

```typescript
type Partial<T> = {
    [P in keyof T]? T[P];
}

// Partial<Person> -> { name?: string; age?: string }
```

##### Required

将所有参数变为必选

```typescript
type Required<T> = {
	[P in keyof T]: T[P];
}

// Required<Person> -> { name: string; age:string }
```

##### Readonly

将所有参数变成只读

```typescript
type Readonly<T> = {
	readonly [P in keyof T]: T[P]
}

// Readonly<Person> -> { readonly name: string; readonly age?: string }
```

##### Pick

挑出一部分属性及声明重新生成一个新类型

```typescript
type Pick<T, K extends keyof T> = {
	[P in K]: T[P]
}

// Pick<Person, 'name'> -> { name: string }
// Pick<Person, 'name' |'age'> -> { name: string; age?: number }
```

##### Record

构造一个具有一组属性为K, 类型为T的类型

```typescript
type Record<K extends keyof any, T> = {
	[P in K]: T
}

// Record<'a' | 'b' | 'c', Person> -> { a: Person; b: Person; c: Person }
```

##### Exclude

从T中提取那些可赋值给U的类型

```typescript
type Extract<T, U> = T extends U: T:never

// Extract<'admin' | 'guest', 'guest'> -> 'guest'
```

##### Omit

用来忽略对象某些属性

```
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

// Omit<Person, 'age'> -> { name: string }
```

##### NonNullable

从T中排除null和undefined

```typescript
type NonNullable<T> = T extends null | undefined ? never: T

// NonNullable<'a'|'b'|null> -> 'a' | 'b'
```

##### Parameters

获取函数的参数类型组成的元组类型

```typescript
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never

function foo(a: string, b: number) {}
// Parameters<type foo> -> [srting, number]
```

##### ReturnType

```typescript
type ReturnType<T extends (..args: any) => any> = T extends (...args: any) => infer R ? R:any

function foo(x: number): number[] {
    return [x]
}
// ReturnType<typeof foo> -> number[]
```
