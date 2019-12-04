/*
* 交叉类型
* 将多个类型合并为一个类型
*
* */
function extend<T extends Object, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id]
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id]
        }
    }
    return result;
}

class Person1 {
    constructor(public name: string) {
    }
}

interface Loggable {
    log(): void;
}

class ConsoleLogger implements Loggable {
    log() {
        console.log(`Console.logging……`)
    }
}

var jim = extend(new Person1('Jim'), new ConsoleLogger());
var n = jim.name;
console.log(n);
jim.log();

/*
* 联合类型
* */
function padLeft(value: string, padding: number | string) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join('') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Expected string or number ,got '${padding}'`);
}

padLeft('Hello World', 4);

/*
* 类型保护与区分类型
* */
/*
* pet is Fish就是类型谓词.
* 谓词为 parameterName is Type这种形式,
* parameterName必须是来自于当前函数签名里的一个参数名
* */
function isStr(pet: number | string): pet is string {
    return (<string>pet).length !== Infinity;
}

