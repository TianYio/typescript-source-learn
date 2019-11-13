let bool: Boolean = true;
let num: number = 123;
let str: string;
str = `数值${num}`;
console.log(str);
let arrOfNumber: number[];
arrOfNumber = [1, 2, 3];
let arrOfString: Array<string>;
arrOfString = ['1', '2', '3'];
let tuple: [string, number, boolean];
tuple = ['1', 2, true];

enum Roles {
    SUPER_ADMIN,
    ADMIN = 5,
    USER
}

console.log(Roles)