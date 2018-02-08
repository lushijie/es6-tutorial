/*
* @Author: lushijie
* @Date:   2017-11-10 10:02:18
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-08 14:37:15
*/

//**********************************************
//  1. ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
//**********************************************

// 对象解构
let {a1, ...arg1} = {a: 123, b: 456, c: 789};
console.log(a1, arg1); // 123 { b: 456, c: 789 }
// console.log(...arg1); // TypeError: undefined is not a function
let a11 = {...arg1};
console.log(a11); // { b: 456, c: 789 }

// 数组解构
let [b, ...arg2] = [1, 2, 3, 4, 5];
console.log(b, arg2); // 1 [2,3,4,5]
console.log(...arg2); // 2 3 4 5

// 缺省解构
let [ , , c2] = ["foo", "bar", "baz"];
console.log(c2); // baz

//嵌套
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo, bar, baz); // 1 2 3

// 个数不够的情况
let [a3, [b3], d3] = [1, [2, 3], 4];
console.log(a3, b3, d3); // 1 2 4

// Iterator 可以解构
let [x, y, z] = new Set(['a', 'b', 'c']);
console.log(x); // a

// 默认值
let [x4, y4 = 'b'] = ['a'];
console.log(x4, y4); // a b

// 默认值生效的条件是，对象的属性值严格等于undefined
let {x123 = 3} = {x123: undefined}; // 3
let {x124 = 3} = {x124: null}; // null

// 函数作为默认值
function f() {
  console.log('aaa');
}
let [x5 = f()] = []; // aaa

// 重命名
let { bar1, foo1:baz1 } = { foo1: "aaa", bar1: "bbb" };
console.log(bar1, baz1); // bbb aaa


//**********************************************
//  2. 函数形参 rest 参数
//**********************************************

function abc(a, ...arg) {
  console.log(a); // 123
  console.log(arg); // [567, 789]
}
abc(123, 567, 789);

//**********************************************
//  3. 函数形参解构
//**********************************************

function abc1({a, ...arg}) {
  console.log(a); // 1
  console.log(arg); // { b: 2, c: 3 }
  // console.log(...arg); // TypeError: undefined is not a function
}
abc1({a: 1, b: 2, c: 3});


//**********************************************
//  4. Map解构遍历
//**********************************************
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
