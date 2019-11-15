function sum(v1: number, v2: number): number {
    return v1 + v2;
}

//有点像C++，先声明后定义
let add: (v1: number, v2: number) => number;
add = (value1: number, value2: number) => value1 + value2;
console.log(add(1, 2));

//类型别名
type Add = (v1: number, v2: number) => number;
let addFunc: Add;
addFunc = (value1: number, value2: number) => value1 + value2;

type AddFunction = (v1: number, v2: number, v3?: number) => number;
let addFunction: AddFunction;
addFunction = (v1: number, v2: number) => v1 + v2 ;