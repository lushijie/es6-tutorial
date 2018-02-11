## ES6 Module

### ES6 Module 与 CommonJS 区别

    ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量，可以部分加载。（这也导致了没法引用 ES6 模块本身，因为它不是对象）
    CommonJS 整体加载，运行时加载，只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。

### ES6 模块自动采用严格模式

  ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";
  严格模式主要有以下限制。

    变量必须声明后再使用
    函数的参数不能有同名属性，否则报错
    不能使用with语句
    不能对只读属性赋值，否则报错
    不能使用前缀 0 表示八进制数，否则报错
    不能删除不可删除的属性，否则报错
    不能删除变量delete prop，会报错，只能删除属性delete global[prop]
    eval不会在它的外层作用域引入变量
    eval和arguments不能被重新赋值
    arguments不会自动反映函数参数的变化
    不能使用arguments.callee
    不能使用arguments.caller
    禁止this指向全局对象
    不能使用fn.caller和fn.arguments获取函数调用的堆栈
    增加了保留字（比如protected、static和interface）

### ES6 模块语法

  export:

  ```js

    // demo1
    export let a = 123;
    export function func() { }

    // demo2
    let a = 123;
    function func() { }
    function func2() { }
    export {
      a,
      func,
      func2 as func3
    };
  ```

  export default:

    export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
    一个模块只能有一个默认输出，因此export deault命令只能使用一次
    其他模块加载该模块时，import命令可以为该匿名函数指定任意名字

  ```js
    // demo0
    export default 42;

    // demo1
    let a = 1;
    export default a; // 等同于 export {func as default};

    // demo2
    export default function func() {}

    // demo3
    function func() {}
    export default func; // 等同于 export {func as default};

  ```

  import:

  ```js
    // demo
    import {a, func} from './child.js';
    import {a as b} from './child.js';
    import * as circle from './child.js';
  ```





