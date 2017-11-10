/*
* @Author: lushijie
* @Date:   2017-11-07 15:12:48
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-10 18:44:07
*/

// 箭头函数使用注意点
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
// （3）不可以使用yield命令，因此箭头函数不能用作 Generator 函数

// (function (a) {
//   console.log(a);
// })(123); // 123
// // equal
// ((a) => {
//   console.log(a);
// })(123);  // 123


// let f = () => 5;
// // 等同于
// let f = function () { return 5 };


// // this对象的指向是可变的，但是在箭头函数中，它是固定的
// // 箭头函数中的this总是指向函数【定义生效时】所在的对象
// // 箭头函数根本没有自己的this，内部的this就是外层代码块的this因为它没有this，也就不能用作构造函数

// function Timer() {
//   this.s1 = 0;
//   this.s2 = 0;

//   // 箭头函数
//   setInterval(() => {
//     this.s1++; // this Timer
//   }, 1000);

//   // 普通函数
//   setInterval(function () {
//     this.s2++; // this global
//   }, 1000);
// }

// let timer = new Timer();

// setTimeout(() => console.log('s1: ', timer.s1), 3100); // s1: 3
// setTimeout(() => console.log('s2: ', timer.s2), 3100); // s2: 0


// let func = {
//   id0: this,
//   id: 123456,
//   init0() {
//     console.log(this); // func
//     console.log(this.id); // 123456
//   },
//   init: () => {
//     console.log(this); // global
//   }
// }

// console.log(func.id0); // global
// func.init0(); // func
// func.init(); // global


// // 多层级的箭头函数
// function foo() {
//   return () => {
//     return () => {
//       return () => {
//         console.log('id:', this.id);
//       };
//     };
//   };
// }

// let f = foo.call({id: 1});
// let t1 = f.call({id: 2})()(); // id: 1
// let t2 = f().call({id: 3})(); // id: 1
// let t3 = f()().call({id: 4}); // id: 1


// // 箭头函数内部的变量arguments，其实是函数foo的arguments变量
// // 如果要用，可以用 rest 参数代替
// function foo() {
//   setTimeout((a) => {
//     console.log('args:', arguments);
//   }, 100);
// }
// foo(2, 4, 6, 8)


// // 由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向
// (function() {
//   return [
//     (() => this.x).bind({ x: 'inner' })(); // outer
//   ];
// }).call({ x: 'outer' });
