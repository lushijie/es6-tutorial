"use strict";

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
* @Author: lushijie
* @Date:   2017-11-10 10:02:18
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-10 15:23:31
*/

// ... 解析对象中剩余的部分
var _a$b$c = { a: 123, b: 456, c: 789 },
    a = _a$b$c.a,
    arg = _objectWithoutProperties(_a$b$c, ["a"]);

console.log(a, arg); // 123 { b: 456, c: 789 }