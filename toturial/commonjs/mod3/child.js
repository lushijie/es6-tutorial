/*
* @Author: lushijie
* @Date:   2018-02-11 16:45:45
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-11 18:19:04
*/
let a = 1;

function increaseA() {
  this.a++;
  console.log('increaseA:', this.a)
}

exports.a = a;
exports.increaseA = increaseA;
