'use strict';

/*
* @Author: lushijie
* @Date:   2017-11-14 09:46:42
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-14 09:49:49
*/
// ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型
// 前六种：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

console.log(Symbol());
console.log(Symbol('save-video') === Symbol('save-video')); // false