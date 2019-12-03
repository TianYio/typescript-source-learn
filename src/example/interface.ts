interface INameInfo {
    firstName: string,
    lastName: string,

    [prop: string]: any
}

/*const getFullName = ({firstName, lastName}: {firstName:string,lastName:string}) => {
    return `${firstName}${lastName}`
};*/
const getFullName = ({firstName, lastName}: INameInfo) => {
    return `${firstName}${lastName}`
}
getFullName({firstName: 'AHa', lastName: 'Du', size: 12});

interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick():any;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {
    }

    tick() {
        console.log('beep beep')
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {
    }

    tick() {
        console.log('tick tock')
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square: Square = {
    color: 'blue',
    sideLength: 1
};

interface Counter {
    (start: number): string;

    interval: number;

    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
    };
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5;

class Control {
    private state: any;
    // public content: string;
    constructor(){}
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() {
    }
}

class TextBox extends Control {

}

/*
class Image implements SelectableControl {
    //Property state、content from class Control is not implemented
    select(): void {
    }
}*/
