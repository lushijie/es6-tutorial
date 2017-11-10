/*
* @Author: lushijie
* @Date:   2017-11-08 11:51:42
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-10 15:45:32
*/

// // 函数形参默认值，形参惰性求值，每次运行时重新计算默认值表达式的值
// (function (a = 123, b) {
//   console.log(a, b); 123 undefined
// })();

// 与解构赋值结合1
// (function ({a, b = 5}){
//   console.log(a, b); // 123 5
// })({a: 123});

// 与解构赋值结合2
// (function ({a, b = 5} = {}){
//   console.log(a, b); // undefined 5
// })();

// 与解构赋值结合3
// (function (a, {b, c = 5} = {}, d){
//   console.log(a, b, c, d); // 1 undefined 5 undefined
// })(1, 2);

// // 与解构赋值结合4,写法一
// (function m1({x = 1, y = 2} = {}) {
//   console.log([x, y]);
// })();

// // 与解构赋值结合4,写法二
// (function m2({x, y} = { x: 1, y: 2 }) {
//   console.log([x, y]);
// })();

// rest 参数1
// (function(...arg) {
//   console.log(arg); // [[1, 2, 3]] arg 是一个数组包含所有的形参，可以 [0] 或者 ... 解开
//   console.log(arg[0]); // [1, 2, 3]
//   console.log(...arg); // [1, 2, 3]
// })([1,2,3]);

// rest 参数2
// (function(...arg) {
//   console.log(arg); // []
//   console.log(arg[0]); // undefined
//   console.log(...arg); //
// })();

// // 默认参数引用类型！
// let a = {name: 123};
// (function (b = a) {
//   let a = {name: 666}; // 作用域
//   b.name = 456;
// })();
// console.log(a); // {name: 456}

// tips 参数不得省略
// function throwIfMissing() {
//   throw new Error('Missing parameter');
// }
// function foo(mustBeProvided = throwIfMissing()) {
//   return mustBeProvided;
// }
// foo()
