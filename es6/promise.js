/*
* @Author: lushijie
* @Date:   2017-11-07 17:19:54
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-15 18:57:48
*/

// let func = a => {
//   return new Promise((resolve, reject) => {
//     if (a) {
//       resolve('res');
//     }
//     reject('err');
//   });
// }

// func(1).then(res => {
//   console.log(`resolve=> ${res}`); // resolve=> res
//   return 123;
// }, err => {
//   console.log(`reject=> ${err}`);
// }).catch(e => {
//   console.log(`catch=>  ${e}`);
// }).then(res2 => {
//   console.log(`resolve2=> ${res2}`); // resolve=> 123
// });




// let timer = function(time = 2000) {
//   return (new Promise((resovle, reject) => {
//     setTimeout(() => {
//       resovle(time);
//     }, time);
//   }));
// };

// console.log(new Date());
// Promise.all([timer(2000), timer(3000), timer(5000)]).then((res) => {
//   console.log(new Date(), res);
// }).catch(err => {
//   console.log(err);
// });

// //  Promise.race 在第一个promise对象变为Fulfilled之后，并不会取消其他promise对象的执行
// console.log(new Date());
// Promise.race([timer(2000), timer(3000), timer(5000)]).then((res) => {
//   console.log(new Date(), res);
// }).catch(err => {
//   console.log(err);
// });




// Promise.reject(new Error('eeee')).then(undefined, err => {
//   console.log('1', err);
// }).catch(err => {
//   console.log('2', err);
// });




// // then catch 之后还是一个promise
// Promise.resolve().then(a => {
//   console.log('a', a);
//   return 'a';
// }).then(b => {
//   console.log('b', b);
//   throw new Error(123);
// }).then(c => {
//   console.log('c', c);
//   return 'c';
// }).catch(d => {
//   console.log('d', d);
// }).then(e => { // finally 执行, e 为 c 返回的结果
//   console.log('e', e);
// });


