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

/*
* 类型断言 !
* */
function getSlicedStr(num: number | null): string {
    function getRes(prefix: string) {
        return prefix + num!.toFixed().toString();
    }

    num = num || 0.1;
    return getRes('lison-')
}

console.log(getSlicedStr(1));

/*
* 类型别名 type newTypeName = typeName
* */

/*
* 什么时候使用类型别名，什么时候用接口
* 1、自定义的类型需要使用 implements 或者 extends ，使用interface；
* 2、自定义的类型 需要使用元组类型或者联合类型时，使用type；
* */
type TypeString = string;
let str2: TypeString;
type PositionType<T> = { x: T, y: T };
const Position1: PositionType<number> = {x: 1, y: -1};
const position2: PositionType<string> = {x: 'left', y: 'right'};

type Alias = { num: number };

interface Interface {
    num: number
}

let _alias: Alias = {num: 123};
let _interface: Interface = {num: 321};
_alias = _interface;

/*
* 字面量类型
* */

type DirectionNew = 'north' | 'east' | 'south' | 'west'

function getDirectionFirstLetter(direction: DirectionNew) {
    return direction.substr(0, 1);
}

console.log(getDirectionFirstLetter(`east`));

/*
* 可辨识联合两要素
* 1、具有普通的单例类型属性
* 2、一个类型别名包含了哪些类型的联合
* */
interface ISquare {
    kind: 'square'
    size: number
}

interface IRectangle {
    kind: 'rectangle'
    height: number
    width: number
}

interface ICircle {
    kind: 'circle'
    radius: number
}

type IShape = ISquare | IRectangle | ICircle;

function assertNever(value: never): never {
    throw new Error('Unexpected object:' + value)
}

function getArea(s: IShape): number {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
            break;
        case 'rectangle':
            return s.height * s.width;
            break;
        case 'circle':
            return Math.PI * s.radius ** 2;
            break;
        default:
            return assertNever(s);
    }
}

class Counter {
    constructor(public count: number = 10) {
    };

    public add(value: number) {
        this.count += value;
        return this;
    }

    public subtract(value: number) {
        this.count -= value;
        return this;
    }
}

let counter = new Counter(12);
console.log(counter.add(5).subtract(2));

class PowCounter extends Counter {
    constructor(public count: number = 0) {
        super(count)
    }

    public pow(value: number) {
        this.count = this.count ** value;
        return this;
    }

}

interface InfoIAdvanced {
    name: string;
    age: number;
}

type Test = InfoIAdvanced[keyof InfoIAdvanced];//注意InfoAdvanced的数据类型！！！！

let abc: Test = '123';

let infoProp: keyof InfoIAdvanced;
infoProp = 'name';
infoProp = "age";

function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
    return names.map(n => obj[n])
}

const infoObj = {name: 'TianYio', age: 18};
let infoValues: (number | string)[] = getValue(infoObj, ['name', 'age']);
type NameType = InfoIAdvanced['name'];

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]
}

interface IObj<T> {
    [key: string]: T
}

let keys: keyof IObj<number>;