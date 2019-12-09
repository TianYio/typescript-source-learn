/*
* 模块
* 内部模块--命名空间
* 命名空间和模块
* 模块解析
* */
/*
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}


let string = ['Hello', '98052', '101'];
let validators: { [s: string]: Validation.StringValidator; } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
for (let s of string) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${s}'${isMatch ? 'matches' : 'does not match'} '${name}'.`)
    }
}*/
