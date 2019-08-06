//  interface接口
function printLabel (labelObj: {label: string}) {
    console.log(labelObj.label);
}
let myObj = {label: 'labels'};
printLabel(myObj);

// interface写法 可选属性
interface objType {
    label: string;
}
function printLabels (labelObj: objType) {
    console.log(labelObj.label);
}
let myObj1 = {label: 'labels1'};
printLabel(myObj1);

interface USB {
    name: string;
    des: string;
}
// 如果设置为 可传可不传 可以加？ name?:stirng
function printUSB (pu: USB) {
    console.log(pu.name);
    console.log(pu.des);
}
let myUSB = {
    name: 'usb',
    des: 'this is a usb'
}
printUSB(myUSB);

// interface 函数类型
interface searchFun {
    (source: string, substring: string):boolean;
}
let mySearch:searchFun;
mySearch = function (source: string, substring: string) {
    let result = source.search(substring);
    if (result !== -1) {
        return true;
    } else {
        return false;
    }
}

// interface 数组类型
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ['l', 'w'];
alert(myArray[1]);

// interface class类型
interface clockInterface {
    currentTime: Date;
    setTime(d: Date);
}
class Clock implements clockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
}