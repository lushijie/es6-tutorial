/*
* @Author: lushijie
* @Date:   2018-02-11 16:45:45
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-11 17:53:02
*/
let a = 1;

function increaseA() {
  a++;
  console.log('increaseA:', a)
}

module.exports = {
  a,
  increaseA
}
