/*
* @Author: lushijie
* @Date:   2017-11-25 17:20:16
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-25 17:41:49
*/

// // Object.defineProperty(obj, prop, descriptor)

let obj0 = Object.defineProperty({
  a: 12313
}, 'a', {
  // 当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除
  configurable: false,

  // 当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中
  enumerable: false,

  // 该属性对应的值
  // value: function() {
  //   return this.a;
  // },

  // 当且仅当该属性的writable为true时，该属性才能被赋值运算符改变
  writable: false,

  // 一个给属性提供 getter 的方法，如果没有 getter 则为 undefined
  // get: undefined,

  // 一个给属性提供 setter 的方法，如果没有 setter 则为 undefined
  // set: undefined,
});
