 /*
* @Author: lushijie
* @Date:   2017-11-08 11:51:42
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-08 16:58:14
*/

//**********************************************
//  函数参数
//**********************************************

// 函数形参默认值，形参惰性求值，每次运行时重新计算默认值表达式的值
(function (a = 123, b) {
  console.log(a, b); // 123 undefined
})();

// 与解构赋值结合1
(function ({a, b = 5}){
  console.log(a, b); // 123 5
})({a: 123});

// 与解构赋值结合2
(function ({a, b = 5} = {}){
  console.log(a, b); // undefined 5
})();

// 与解构赋值结合3
(function (a, {b, c = 5} = {}, d){
  console.log(a, b, c, d); // 1 undefined 5 undefined
})(1, 2);

// 与解构赋值结合4,写法一
(function m1({x = 1, y = 2} = {}) {
  console.log([x, y]); // [1, 2]
})();

// 与解构赋值结合4,写法二
(function m2({x, y} = { x: 1, y: 2 }) {
  console.log([x, y]); // [1, 2]
})();

// rest 参数1
(function(...arg) {
  console.log(arg); // [[1, 2, 3]] arg 是一个数组包含所有的形参，可以 [0] 或者 ... 解开
  console.log(arg[0]); // [1, 2, 3]
  console.log(...arg); // [1, 2, 3]
})([1,2,3]);

// rest 参数2
(function(...arg) {
  console.log(arg); // []
  console.log(arg[0]); // undefined
  console.log(...arg); // 空
})();

// 默认参数引用类型！
let a = {name1: 123};
(function (b = a) {
  let a = {name2: 666}; // 作用域
  b.name1 = 456;
})();
console.log(a); // {name: 456}

// 参数不得省略,参数检测
function throwIfMissing() {
  // throw new Error('Missing parameter');
}
function foo(mustBeProvided = throwIfMissing()) {
  return mustBeProvided;
}
foo()

//**********************************************
//  箭头函数
//  （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
//  （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
//  （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
//  （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
//**********************************************

let f = v => v;
console.log(f(123))
