// 类
class Person {
    name: string;
    age: number;
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    print() {
        return this.name + ' ' + this.age;
    }
}

let p = new Person('lee', 20);
console.log('类中的内容', p.print());

// 类的继承
class Persons {
    name: string;
    age: number;
    tell () {
        return this.name + ':' + this.age;
    }
}
class Student extends Persons {
    school: string;
    tell () {
        return this.name + ' ' + this.age + ' ' + this.school
    }
}
let someOne = new Student();
someOne.name = 'lee';
someOne.age = 21;
someOne.school = 'jms';
someOne.school = 'jms';
document.write(someOne.tell());

class Persons1 {
    name: string;
    age: number;
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    tell () {
        return this.name + ':' + this.age;
    }
}
class Student1 extends Persons1 {
    school: string;
    constructor (school: string) {
        super('le', 20);
        this.school = school;
    }
    tell () {
        return this.name + ' ' + this.age + ' ' + this.school
    }
}
let someOne1 = new Student1('jms');
console.log(someOne1.tell());

