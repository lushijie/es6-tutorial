/*
* @Author: lushijie
* @Date:   2017-11-10 10:01:40
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-11 16:42:01
*/

// 问题1: CommonJS 规范的 module.exports 与 exports 的区别？
// 答： exports是 module.exports 的引用， exports在module.exports 被改变后，失效。
// 失效 demo:
//   // foo1.js
//   module.exports = {a: 1}
//   exports.a = 2;
//
//   // foo2.js
//   require('foo1.js').a === 1; //true



// 问题2： 模块导入
// // CommonJS模块导入
// let { stat:statAlias, exists, readFile } = require('fs');

// // ES6模块导入
// import { stat as statAlias, exists, readFile } from 'fs';



// 问题3： es6模块与Commonjs 的区别？
// 答：
//   CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
//   CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。

// 补充：
// CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值
// ES6 的import有点像 Unix 系统的“符号连接”，原始值变了，import加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。
// 由于 ES6 输入的模块变量，只是一个“符号连接”，所以这个变量是只读的，对它进行重新赋值会报错
// ES6 export通过接口，输出的是同一个值。不同的脚本加载这个接口，得到的都是同样的实例。

// default imports
// import foo from "foo";
// import {default as foo} from "foo";


// // named imports
// import {} from "foo";
// import {bar} from "foo";
// import {bar, baz} from "foo";
// import {bar as baz} from "foo";
// import {bar as baz, xyz} from "foo";


// // glob imports
// import * as foo from "foo";


// // mixing imports
// import foo, {baz as xyz} from "foo";
// import foo, * as bar from "foo";


// // just import
// import "foo";





// default exports
// export default 42;
// export default {};
// export default [];
// export default (1 + 2);
// export default foo;
// export default function () {}
// export default class {}
// export default function foo () {}
// export default class foo {}



// // variables exports
// export var foo = 1;
// export var foo = function () {};
// export var bar;
// export let foo = 2;
// export let bar;
// export const foo = 3;
// export function foo () {}
// export class foo {}



// // named exports
// export {};
// export {foo};
// export {foo, bar};
// export {foo as bar};
// export {foo as default};
// export {foo as default, bar};



// // exports from
// export * from "foo";
// export {} from "foo";
// export {foo} from "foo";
// export {foo, bar} from "foo";
// export {foo as bar} from "foo";
// export {foo as default} from "foo";
// export {foo as default, bar} from "foo";
// export {default} from "foo";
// export {default as foo} from "foo";
