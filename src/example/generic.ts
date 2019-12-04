import * as webpack from "webpack";
import indent = webpack.Template.indent;

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>('myString');
let output2 = identity('myString');

let myIdentity: <T>(arg: T[]) => T = <T>(arg: T[]): T => {
    return arg[0];
};
myIdentity([1, 2]);


function loggingIdentity<T>(arg: T[]): T {
    return arg[0]
}

let myIdentity1: { <T>(arg: T[]): T } = loggingIdentity;
myIdentity1([1, 2]);

interface GenericIdentity {
    <T>(arg: T[]): T;
}

function identity2<T>(arg: T[]): T {
    return arg[0];
}

let myIdentity2: GenericIdentity = identity2;


interface Lengthwise {
    length: number;
}

interface GenericIdentityFn<T extends Lengthwise> {
    (arg: T[]): T;
}

function identityFn<T extends Lengthwise>(arg: T[]): T {
    console.log(arg.length);
    return arg[0];
}

let myIdentity3: GenericIdentityFn<string> = identityFn;

myIdentity3(['1', '2', '3'])

/*
* 类的泛型类值得是实例部分的类型，类的静态属性不能使用泛类类型
* */
class GenericNumber<T> {
    zeroValue!: T;
    add!: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<string>();
myGenericNumber.zeroValue = '';
myGenericNumber.add = function (x, y) {
    return x + y
};
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 'test'));

interface obj {
    [propName: string]: any
}

function getProperty<T extends obj, K extends keyof obj>(obj: T, key: K) {
    return obj[key]
}

let x = {a: 1, b: 2, c: 3}

console.log(getProperty(x, 'a'));
console.log(getProperty(x, 'm'));