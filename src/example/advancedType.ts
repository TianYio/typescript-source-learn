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
    return typeof pet === 'string';
}

interface Padder {
    getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) {
    }

    getPaddingString(): string {
        return Array(this.numSpaces + 1).join('');
    }
}

class StringPadder implements Padder {
    constructor(private value: string) {
    }

    getPaddingString(): string {
        return this.value;
    }
}

function getRandomPadder() {
    return Math.random() < 0.5 ? new SpaceRepeatingPadder(4) : new StringPadder('');
}
/*
* instanceof 的右侧要求是一个构造函数，Typescript将细化为：
* 1、此构造函数的prototype属性的类型，如果它的类型不为any的话
* 2、构造签名所返回的类型的联合
* 依次顺序
* */
let padder: Padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder;
}
if (padder instanceof StringPadder) {
    padder;
}

