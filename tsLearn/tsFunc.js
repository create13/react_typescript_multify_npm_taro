// 给函数添加参数类型 和函数类型
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
var num;
var myAddts = function (name, age) { return num = function (n, a) {
    return a;
}; };
// 可选和默认参数 当不确定是都传递lastName时 可以把lastName后面加个？ 这样即使传递一个参数firstName也不会报错 也可以在firstName和lastName后面都加上？ 这样可以不传参数 也可以传递
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var result1 = buildName('Augus', 'lee');
var result2 = buildName('y');
console.log('result1', result1);
console.log('result2', result2);
function buildParams(firstName, lastName) {
    if (lastName === void 0) { lastName = 'lee'; }
    return firstName + ' ' + lastName;
}
var paramsResult = buildParams('we');
var paramsResult1 = buildParams('we', 'qe'); // 不可以传递三个参数 传递三个报错
// 可变参数
function peopleName(firstName) {
    var restOfname = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfname[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfname.join(' ');
}
var pn = peopleName('lee', 'ime', 'bean', 'a');
console.log(pn);
// this关键字和函数lambads
var people = {
    name: ['le', 'ww', 'bean', 'bear'],
    getName: function () {
        return function () {
            var i = Math.floor(Math.random() * 4);
            return {
                n: this.name[i]
            };
        };
    }
};
var myName = people.getName();
console.log('名字', myName().n); // 这样获得的是undefined 因为this指向的是getName 要把return function() {} 换成 return () => {} this指向people 可以获到name
function attr(nameorage) {
    if (nameorage && typeof nameorage === 'string') {
        document.write('name ');
    }
    else {
        document.write('age');
    }
}
attr('lee');
attr(10);
