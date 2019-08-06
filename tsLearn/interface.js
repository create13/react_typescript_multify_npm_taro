//  interface接口
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { label: 'labels' };
printLabel(myObj);
function printLabels(labelObj) {
    console.log(labelObj.label);
}
var myObj1 = { label: 'labels1' };
printLabel(myObj1);
// 如果设置为 可传可不传 可以加？ name?:stirng
function printUSB(pu) {
    console.log(pu.name);
    console.log(pu.des);
}
var myUSB = {
    name: 'usb',
    des: 'this is a usb'
};
printUSB(myUSB);
var mySearch;
mySearch = function (source, substring) {
    var result = source.search(substring);
    if (result !== -1) {
        return true;
    }
    else {
        return false;
    }
};
var myArray;
myArray = ['l', 'w'];
alert(myArray[1]);
