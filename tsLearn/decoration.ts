// 访问修饰符 private public
class People {
    name: string;
    age: number;
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    print() {
        return this.name + ' ' +this.age
    }
}
class Teacher extends People {
    school: string;
    constructor (school: string) {
        super('w', 21);
        this.school = school;
    }
    print () {
        return this.name + ' ' + this.age + ' ' + this.school;
    }
}
let teacher = new Teacher('ha');
// teacher.name = 'lee';
// teacher.age = 21;
// teacher.school = 'harbin';
console.log(teacher.print());

// 封装的实现
class Hello {
    private _name: string;
    tell () {
        return this._name;
    }
    get name(): string {
        return this._name;
    }
    set name(newName: string) {
        this._name = newName;
    }
}
let hello = new Hello();
hello.name = 'lw';
console.log(hello.tell());

// static 和使用技巧
class Person {
    name: string;
    static print(msg) {
        console.log('姓名' + msg);
    }
}
Person.print('no');

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'hello' + this.greeting
    }
}
let green : Greeter;
green = new Greeter('hi');
console.log(green.greet());
// tsc -t es5 decoration.ts 将编译器设置成es5或者更高 去编译decoration.ts



