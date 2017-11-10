/*
* @Author: lushijie
* @Date:   2017-11-10 10:02:18
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-10 15:23:31
*/

// ... 解析对象中剩余的部分
let {a, ...arg} = {a: 123, b: 456, c: 789};
console.log(a, arg); // 123 { b: 456, c: 789 }
