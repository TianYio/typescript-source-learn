namespace Validator {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}