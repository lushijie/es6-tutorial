/*
* @Author: lushijie
* @Date:   2018-02-11 16:45:45
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-12 10:14:42
*/
let a = 1;

function increaseA() {
  this.a++;
  console.log('increaseA:', this.a)
}

module.exports = {
  a,
  increaseA
}
//
// 等同于
// exports.a = a;
// exports.increaseA = increaseA;
