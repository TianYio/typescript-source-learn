/// <reference path = 'Validation.ts' />
namespace Validator {
    const lettersRegexp = /^[A-Z-a-z]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return lettersRegexp.test(s);
        }
    }
}