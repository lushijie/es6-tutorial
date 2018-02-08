/*
* @Author: lushijie
* @Date:   2017-11-16 09:25:12
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-08 14:57:47
*/

//  字符串遍历
for (let codePoint of 'foo') {
  console.log(codePoint)
}

//  重复
console.log('lushijie'.repeat(2));

//  补全
console.log((123).toString().padStart(5, '0')); // 00123
console.log((123).toString().padEnd(5, '0')); // 12300

//  模板字符串
let str = `
123
456
`
console.log(str.trim());
console.log(str.replace(/[\r\n]/g, '')); // 去除换行输出

//  startsWith endsWith includes
let s = 'Hello world!';
console.log(s.startsWith('Hello')); // true
console.log(s.endsWith('!')); // true
console.log(s.includes('o')); // true

// raw
console.log(String.raw({ raw: 'abcdefgh' }, 0, 1, 2, 3));
// // raw 函数的实现
// String.raw = function (strings, ...values) {
//   let output = '';
//   let index;
//   for (index = 0; index < values.length; index++) {
//     output += strings.raw[index] + values[index];
//   }

//   output += strings.raw[index]
//   return output;
// }
