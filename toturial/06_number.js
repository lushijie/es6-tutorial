/*
* @Author: lushijie
* @Date:   2018-02-08 15:14:33
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-08 15:26:15
*/

// 截取掉一个数的小数部分
console.log(Math.trunc(4.9)) // 4
console.log(Math.trunc(-4.1)) // -4

// isNaN
console.log(Number.isNaN(NaN)) // true

// parseInt parseFloat 绑定到了 Number 对象上
console.log(Number.parseInt('12.34')) // 12
console.log(Number.parseFloat('123.45#')) // 123.45

// isInteger
console.log(Number.isInteger(25)) // true
console.log(Number.isInteger(25.0)) // true

// 方法用来判断一个数到底是正数、负数、还是零(区分正0与负0)
// Math.sign()

// JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），
// 超过这个范围，无法精确表示这个值。
// Number.isSafeInteger();
