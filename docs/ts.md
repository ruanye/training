# TS 快速入门

## 基本类型

```js
let str: string = "a";
let num: number = 1;
let bool: boolean = true;
```


## 数组

```js
let arr: number[] = [1, 2, 3];
let arr1: Array<number> = [1, 2, 3, 4];
```
## 元组

```js
let arr2: [string, number] = ["", 2];
```

## 枚举

```js
// 枚举
enum Color {
    RED,
    BLUE,
    YELLOW,
}

let color: Color = Color.RED;
```

## any 类型
```
let a: any = 1111;
```

## void 类型

```js
// void  没有任何返回值的函数  

function log(message: string): void {
    console.log(message);
}
log("Hello, TypeScript!");
```

## null 和undefind 

```js
let n: null = null;
let u: undefined = undefined;
```
## 泛型

```js
// 泛型 不确定最后返回的是什么类型  <T> 表示泛型  根据传入的值返回的类型 

function identity<T>(arg: T): T {
    return arg;
}

let result1 = identity<string>('Hello, TypeScript!');
let result2 = identity<number>(123);

```







