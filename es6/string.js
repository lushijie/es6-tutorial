/*
* @Author: lushijie
* @Date:   2017-11-16 09:25:12
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-16 09:50:31
*/

// 遍历
for (let codePoint of 'foo') {
  console.log(codePoint)
}

// 重复
console.log('lushijie'.repeat(2));

// 补全
console.log((123).toString().padStart(5, '0'));
console.log((123).toString().padEnd(5, '0'));

// 模板字符串
let str = `
123
456
`
console.log(str.replace(/[\r\n]/g, ''));
console.log(str.trim());

let s = 'Hello world!';

console.log(s.startsWith('Hello')); // true
console.log(s.endsWith('!')); // true
console.log(s.includes('o')); // true
