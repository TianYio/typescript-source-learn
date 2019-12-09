/*class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return 'Hello,' + this.greeting;
    }
}

let greeter = new Greeter('Typescript');*/

class Animal {
    /*
    * 可以使用readonly关键字将属性设置为只读的，
    * 只读属性必须在声明时或构造函数里被初始化
    * */

    // private name: string;

    /*
    * 构造函数被标记为protected,
    * 这个类不能在包含它的类外被实例化，
    * 但是可以被继承。
    * */

    /*
    * 修饰符
    * public        默认为public，
    * protected     在派生类中可以访问
    * private       不能在声明它的外部访问
    * readonly      只读属性必须在声明时或构造函数里呗初始化
    * 参数属性可以方便地让我们在一个地方定义并初始化一个成员
    * 参数属性通过给构造函数参数前面添加一个访问限定符来声明。
    * 使用 private限定一个参数属性会声明并初始化一个私有成员；
    * 对于 public和 protected来说也是一样。
    * */
    constructor(public name: string) {
        // this.name = theName;
    }

    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    sayHi() {
        console.log(`My name is ${this.name}`)
    }

    move(distanceInMeters = 25) {
        console.log('Galloping……');
        super.move(distanceInMeters);
    }
}

const dog = new Dog(`MiNi`);
dog.sayHi();
dog.move();

class Greeter {
    static standardGreeting = 'Hello, there';

    protected greeting!: string;
    // constructor(public greeting:string){}

    greet() {
        if (this.greeting) {
            return `Hello ${this.greeting}`;
        } else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMarker: typeof Greeter = Greeter;
greeterMarker.standardGreeting = 'Hey there';

let greeter2: Greeter = new Greeter();
console.log(greeter2.greet());

