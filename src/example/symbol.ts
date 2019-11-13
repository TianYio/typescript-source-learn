const s0 = Symbol(0);
console.log(s0);
const s1 = Symbol(0);
console.log(s1);
const sOfStr = Symbol('Str');
console.log(sOfStr);
console.log(sOfStr.toString());
// console.log(Boolean(sOfStr))
console.log(!!sOfStr);

/*let prop = 'name';
const obj = {
    name: 'Ming',
    [prop]: 'Ming'
};
console.log(obj);*/
const NAME = Symbol('name');
const Person = {
    [NAME]: 'Ming'
};
console.log(Person);
Person[NAME] = 'ming';
console.log(Person);
/*
* object 的Symbol 属性不能通过下述方法获取
* for (const obj in object)、Object.keys(object)、Object.getOwnPropertyNames(object)、JSON.stringify(object)
* 能通过下述方法访问
* Object.getOwnPropertySymbol(object)、Reflect.ownKeys(object)
* */

let sMing1 = Symbol.for('Ming');
let sMing2 = Symbol.for('Ming');
console.log(sMing1 === sMing2);//true

let sKeyOfSymbolFor = Symbol.keyFor(sMing1);
console.log(sKeyOfSymbolFor)
/*let sKeyOfSymbol = Symbol.keyFor(NAME);*/


/*
*内置Symbol值
* */
const obj1 = {
    [Symbol.hasInstance](otherObj: any) {
        console.log(otherObj)
    }
};
console.log({a: 'a'} instanceof <any>obj1);

