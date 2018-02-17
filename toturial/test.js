/*
* @Author: lushijie
* @Date:   2018-02-17 20:18:59
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-17 20:48:45
*/
var handler = {
  // get: function(target, name) {
  //   console.log('get..');
  //   if (name === 'prototype') {
  //     return Object.prototype;
  //   }
  //   return 'Hello, ' + name;
  // },

  apply: function(target, thisBinding, args) {
    console.log(args);
    return args[0];
  },

  // construct: function(target, args) {
  //   return {value: args[1]};
  // }
};

var fproxy = new Proxy(function(x, y) {
  // console.log('aaaa', x, y);
  return x + y;
}, handler);

console.log(fproxy(1, 2)) // 1
// new fproxy(1, 2) // {value: 2}
// fproxy.prototype === Object.prototype // true
// fproxy.foo === "Hello, foo" // true
//
const proxy = new Proxy({a: 123}, {
  get: function(target, property, receiver) {
    console.log(target);
    return receiver;
  }
});
console.log(proxy.getReceiver === proxy) // true
