var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        return this.name + ' ' + this.age;
    };
    return Person;
}());
var p = new Person('lee', 20);
console.log('类中的内容', p.print());
// 类的继承
var Persons = /** @class */ (function () {
    function Persons() {
    }
    Persons.prototype.tell = function () {
        return this.name + ':' + this.age;
    };
    return Persons;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.tell = function () {
        return this.name + ' ' + this.age + ' ' + this.school;
    };
    return Student;
}(Persons));
var someOne = new Student();
someOne.name = 'lee';
someOne.age = 21;
someOne.school = 'jms';
someOne.school = 'jms';
document.write(someOne.tell());
var Persons1 = /** @class */ (function () {
    function Persons1(name, age) {
        this.name = name;
        this.age = age;
    }
    Persons1.prototype.tell = function () {
        return this.name + ':' + this.age;
    };
    return Persons1;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(school) {
        var _this = _super.call(this, 'le', 20) || this;
        _this.school = school;
        return _this;
    }
    Student1.prototype.tell = function () {
        return this.name + ' ' + this.age + ' ' + this.school;
    };
    return Student1;
}(Persons1));
var someOne1 = new Student1('jms');
console.log(someOne1.tell());
