/*
* @Author: lushijie
* @Date:   2017-11-06 18:03:07
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-07 10:53:12
*/

// // 一、async 函数执行结果是一个 Promise
// async function func() {
//   console.log('This is in func');
// }
// console.log(typeof func); // function
// func();
// console.log(func()); // Promise
// func().then(() => {
//   console.log('resolve ok');
// }).catch(e => {
//   console.log(e);
// });

// // 二、async 返回值,作为 resolve 的值
// async function func() {
//   return 123123;
// }
// func().then((data) => {
//   console.log('get return data here', data); // 123123
// });


// // 三、普通函数返回 Promise
// function sleep(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, time)
//   });
// }

// (async function() {
//   console.log(new Date());
//   await(sleep(3000));
//   console.log('await1')
//   sleep(3000).then(() => {
//     console.log('await2');
//   });
//   console.log(new Date());
// })();


// // 四、非依赖的两个函数可以并行执行 1
// function sleep(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(time);
//     }, time)
//   });
// }

// (async function() {
//   console.log(new Date())
//   let [a, b] = await Promise.all([sleep(3000), sleep(5000)]);
//   console.log(a, b);
//   console.log(new Date())
// })();


// //五、非依赖的两个函数可以并行执行 2
// function sleep(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(time);
//     }, time)
//   });
// }

// (async function() {
//   console.log(new Date());
//   let a = sleep(5000);
//   let b = sleep(2000);
//   let aout = await a; // 一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句
//   console.log('a', aout);
//   let bout = await b;
//   console.log('b', bout);
//   console.log('---');
//   console.log(new Date());
// })();


// // 六、async catch
// function func() {
//   console.log(123);
// }
// (async function() {
//   await func();
// })().then(() => {
//   console.log(456);
// }).catch(err => {
//   console.log(err);
// });

// // 七、async return
// async function f() {
//   // return Promise.reject(123);
//   throw new Error('出错了'); // catch
// }

// f().then(
//   v => console.log(v),
//   e => console.log(e, 'reject') // 123, 'reject'
// ).catch(e => {
//   console.log(e);
// });
"use strict";