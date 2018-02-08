/*
* @Author: lushijie
* @Date:   2018-02-08 12:13:14
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-08 12:34:22
*/
const a = [];
a[0] = 1;
console.log(a);

const b = {};
b.j = 123;
console.log(b);


const c = Object.freeze({});
c.a = 123; //严格模式时，该行会报错

