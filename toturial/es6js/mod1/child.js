/*
* @Author: lushijie
* @Date:   2018-02-11 18:19:48
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-12 10:09:02
*/
// export通过接口，输出的是同一个值。不同的脚本加载这个接口，得到的都是同样的实例。
export let a = 1;
export function increaseA() {
  a++;
  console.log('increaseA,', a)
}

