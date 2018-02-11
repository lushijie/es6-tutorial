/*
* @Author: lushijie
* @Date:   2018-02-11 18:30:38
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-11 19:05:10
*/

let a = 1;
function increaseA() {
  this.a++;
  console.log('increaseA,', this.a);
}

export {a, increaseA};
