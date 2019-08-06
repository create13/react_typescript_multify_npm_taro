// 给函数添加参数类型 和函数类型
function add (x: number, y: number): number {
    return x + y;
}
let myAdd = function (x: number, y: number): number {
    return x + y;
}
let num;
const myAddts = (name: string, age: number) => num = function(n: string, a: number): number {
    return a;
}
// 可选和默认参数 当不确定是都传递lastName时 可以把lastName后面加个？ 这样即使传递一个参数firstName也不会报错 也可以在firstName和lastName后面都加上？ 这样可以不传参数 也可以传递
function buildName (firstName: string, lastName?: string):string {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let result1 = buildName('Augus', 'lee');
let result2 = buildName('y');
console.log('result1', result1);
console.log('result2', result2);

function buildParams (firstName: string, lastName: string = 'lee') {
    return firstName + ' ' + lastName;
}
let paramsResult = buildParams('we');
let paramsResult1 = buildParams('we', 'qe'); // 不可以传递三个参数 传递三个报错
// 可变参数
function peopleName (firstName:string, ...restOfname:string[]) {
    return firstName + ' ' + restOfname.join(' ');
}
let pn = peopleName('lee', 'ime', 'bean', 'a');
console.log(pn);

// this关键字和函数lambads
let people = {
    name: ['le', 'ww', 'bean', 'bear'],
    getName: function() {
        return function() {
            let i = Math.floor(Math.random() * 4);
            return {
                n: this.name[i]
            }
        }
    }
}
let myName = people.getName();
console.log('名字', myName().n); // 这样获得的是undefined 因为this指向的是getName 要把return function() {} 换成 return () => {} this指向people 可以获到name

// 函数重载
function attr (name: string): string;
function attr (age: number): number;
function attr(nameorage: any): any {
    if(nameorage && typeof nameorage === 'string') {
        document.write('name ');
    } else {
        document.write('age');
    }
}
attr('lee');
attr(10);
