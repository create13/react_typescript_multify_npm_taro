// 布尔值声明
var booleanType:boolean = false;
function svc(): void {
    console.log(booleanType)
}
svc();
// number声明
var num : number = 10;
function tell() {
    num++;
    console.log(num);
}
tell();
// 字符串声明
var str : string = 'aaa';
function rb () {
    str += 'hello';
    console.log(str);
}
rb();
// 数组声明
// 写法1
let list1 :number[] = [1, 2, 3];
console.log(list1[0]);
//  写法2
let list2 : Array<string> = ['ww', 'll'];
console.log(list2[1]);
console.log(list2[0]);
// 枚举类型
enum Color {red = 1, green, blue};
enum Color1 {red, green, blue};
// 可通过给它赋值 改变下标
let colorType = Color[1];
let colorType1 = Color1[1];
console.log(colorType); // red
console.log(colorType1); // green
// 获取枚举下标
let c : Color = Color.green;
console.log(c);
// any类型 当不确保赋值的类型或者返回的类型是什么的时候用any
let notSure : any = "123";
notSure = 10;
notSure = false;
console.log(notSure);

var list :any[] = [1, 'hello', false];
console.log(list[1]);

function returnString() :string {
    return 'hello';
}
returnString();
function sayNumber() :number {
    return 123;
}
sayNumber();
function returnBoolean() :boolean {
    return false;
}
returnBoolean();
function returnVoild() :void { // void不需要任何返回值
    console.log('void类型');
}
returnVoild();
// ts基本数据类型 number string boolean Array enum any void