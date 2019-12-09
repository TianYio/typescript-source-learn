/// <reference path = 'Validation.ts' />
/// <reference path = 'LettersOnlyValidator.ts' />
/// <reference path = 'ZipCodeValidator.ts' />
import StringValidator = Validator.StringValidator;
import ZipCodeValidator = Validator.ZipCodeValidator;
import LettersOnlyValidator = Validator.LettersOnlyValidator;

let strings = ['Hello', '98052', '101'];

let validators: { [s: string]: StringValidator } = {};
validators['ZIP code'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();
for (let s of strings) {
    for (let name in validators) {
        let isMatched = validators[name].isAcceptable(s);
        console.log(`'${s}' - ${isMatched ? 'matches' : 'does not match'} ${name}.`);
    }
}