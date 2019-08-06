// 布尔值声明
var booleanType = false;
function svc() {
    console.log(booleanType);
}
svc();
// number声明
var num = 10;
function tell() {
    num++;
    console.log(num);
}
tell();
// 字符串声明
var str = 'aaa';
function rb() {
    str += 'hello';
    console.log(str);
}
rb();
// 数组声明
// 写法1
var list1 = [1, 2, 3];
console.log(list1[0]);
//  写法2
var list2 = ['ww', 'll'];
console.log(list2[1]);
console.log(list2[0]);
// 枚举类型
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 3] = "blue";
})(Color || (Color = {}));
;
var Color1;
(function (Color1) {
    Color1[Color1["red"] = 0] = "red";
    Color1[Color1["green"] = 1] = "green";
    Color1[Color1["blue"] = 2] = "blue";
})(Color1 || (Color1 = {}));
;
// 可通过给它赋值 改变下标
var colorType = Color[1];
var colorType1 = Color1[1];
console.log(colorType); // red
console.log(colorType1); // green
// 获取枚举下标
var c = Color.green;
console.log(c);
// any类型 当不确保赋值的类型或者返回的类型是什么的时候用any
var notSure = "123";
notSure = 10;
notSure = false;
console.log(notSure);
var list = [1, 'hello', false];
console.log(list[1]);
function returnString() {
    return 'hello';
}
returnString();
function sayNumber() {
    return 123;
}
sayNumber();
function returnBoolean() {
    return false;
}
returnBoolean();
function returnVoild() {
    console.log('void类型');
}
returnVoild();
// ts基本数据类型 number string boolean Array enum any void
