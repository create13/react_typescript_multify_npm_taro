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
// 访问修饰符 private public
var People = /** @class */ (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
    }
    People.prototype.print = function () {
        return this.name + ' ' + this.age;
    };
    return People;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(school) {
        var _this = _super.call(this, 'w', 21) || this;
        _this.school = school;
        return _this;
    }
    Teacher.prototype.print = function () {
        return this.name + ' ' + this.age + ' ' + this.school;
    };
    return Teacher;
}(People));
var teacher = new Teacher('ha');
// teacher.name = 'lee';
// teacher.age = 21;
// teacher.school = 'harbin';
console.log(teacher.print());
// 封装的实现
var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.tell = function () {
        return this._name;
    };
    Object.defineProperty(Hello.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    return Hello;
}());
var hello = new Hello();
hello.name = 'lw';
console.log(hello.tell());
// static 和使用技巧
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.print = function (msg) {
        console.log('姓名' + msg);
    };
    return Person;
}());
Person.print('no');
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'hello' + this.greeting;
    };
    return Greeter;
}());
var green;
green = new Greeter('hi');
console.log(green.greet());
// tsc -t es5 decoration.ts 将编译器设置成es5或者更高 去编译decoration.ts
