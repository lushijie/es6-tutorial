/*
* @Author: lushijie
* @Date:   2018-02-11 16:45:45
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-12 10:18:17
*/
let a = 1;

function increaseA() {
  // console.log(this); global
  a++;
  console.log('increaseA:', a)
}

module.exports = {
  a,
  increaseA
}
