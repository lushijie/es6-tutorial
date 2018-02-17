/*
* @Author: lushijie
* @Date:   2017-11-14 09:46:42
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-17 19:06:01
*/
// ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型
// 前六种：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

// Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，
// 也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
// 但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，
// 可以获取指定对象的所有 Symbol 属性名。

console.log(Symbol()); // Symbol()
console.log(typeof Symbol()); // symbol
console.log(Symbol('save-video') === Symbol('save-video')); // false

let name = Symbol('a');
console.log(name); // Symbol(a)

// Symbol 值作为对象属性名时，不能用点运算符
let obj = {
  [name]: 'a123'
}
console.log(obj[name]); // a123
console.log(Boolean(Symbol())) // true

console.log('------');

let obj1 = {
  [Symbol('my_key')]: 1,
  name: 2
};
for( let i in obj1) {
  console.log(i); // 'name'
}
console.log(Object.keys(obj1)); // 'name'
console.log(Object.getOwnPropertyNames(obj1)); // 'name'
console.log(Object.getOwnPropertySymbols(obj1)); // Symbol(my_key)
console.log(Reflect.ownKeys(obj1)); // 'name', Symbol(my_key)


// Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，
// 如果不存在才会新建一个值。比如，如果你调用Symbol.for("cat")30 次，每次都会返回同一个
// Symbol 值，但是调用Symbol("cat")30 次，会返回 30 个不同的 Symbol 值。
console.log(Symbol('a') === Symbol.for('a')) // false
console.log(Symbol.for('ab') === Symbol.for('ab')) // true
