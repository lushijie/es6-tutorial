/*
* @Author: lushijie
* @Date:   2017-11-10 10:02:18
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-15 19:13:00
*/

// // 从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）

// let {a, ...arg} = {a: 123, b: 456, c: 789};
// console.log(a, arg); // 123 { b: 456, c: 789 }


// let [a1, b1, c1] = [1, 2, 3];
// console.log(a1, b1, c1); // 1 2 3


// let [ , , c2] = ["foo", "bar", "baz"];
// console.log(c2); // baz


// let [head, ...tail] = [1, 2, 3, 4];
// console.log(tail); // [2, 3, 4]

// //嵌套
// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo, bar, baz); // 1 2 3


// // 不足
// let [a3, [b3], d3] = [1, [2, 3], 4];
// console.log(a3, b3, d3); // 1 2 4

// // Iterator 可以解构
// let [x, y, z] = new Set(['a', 'b', 'c']);
// console.log(x); // a


// // 默认值
// let [x4, y4 = 'b'] = ['a'];
// console.log(y4); // b


// // 函数
// function f() {
//   console.log('aaa');
// }
// let [x5 = f()] = []; // aaa




let { bar, foo:baz } = { foo: "aaa", bar: "bbb" };
console.log(bar, baz);


let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p, p: [x, { y }] } = obj;
console.log(x, y, p);
// x // "Hello"
// y // "World"
// p // ["Hello", {y: "World"}]


let x1;
({x1} = {x1: 1});
