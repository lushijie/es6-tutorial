/*
* @Author: lushijie
* @Date:   2018-02-08 12:29:17
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-08 17:53:07
*/

// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);

// 方法二
let getGlobal = function () {
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  return {};
  // throw new Error('unable to locate global object');
};
(function (global) {
  this.foo = 'bar';
  console.log(this);
}).call(this, getGlobal());
