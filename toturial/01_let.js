//**********************************************
//  1. 块级作用域内的函数声明存在提升，函数表达式不会，建议使用函数表达式
//**********************************************

{
  var a1_2 = 123;
  let a1_1 = 123;
  function f1() {
  }
  if (false) {
    function f11() {
    }
  }
  let f2 = function() {
  };
}
f1();
// f11(); //TypeError: f11 is not a function
console.log(a1_2); // 123
// f2(); // ReferenceError: f2 is not defined
// console.log(a1_1); // ReferenceError: a is not defined


//**********************************************
//  2. 函数作用域内的函数声明无法提升到函数作用域之外
//**********************************************

(function(){
  function f11() {}
})()
// f11(); // ReferenceError: f11 is not defined

function f() { console.log('I am outside!'); }
(function () {
  if (false) {
    function f() { console.log('I am inside!'); }
  }
  // f(); // TypeError: f is not a function
}());

// 在上面代码在 ES5 中运行，会得到“I am inside!”
// ES6 浏览器中运行一下上面的代码，是会报错的 TypeError: f is not a function

// === warning !!! ===
// ES6 在附录 B里面规定有自己的行为方式。
// 1.允许在块级作用域内声明函数。
// 2.函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
// 3.同时，函数声明还会提升到所在的块级作用域的头部。
// 4.注意，上面三条规则只对 ES6 的浏览器实现有效，其他环境的实现不用遵守，还是将块级作用域的函数声明当作let处理。


//**********************************************
//  3. var let in for
//**********************************************

for (var i = 0; i < 10; i++) {
  // var命令声明的i，在全局范围内都有效
}
console.log(`2: ${i}`); // i = 10

for (let j = 0; j < 10; j++) {
  let i = 11;
}
console.log(`2: ${i}`); // i = 10, the var i
// console.log(j); //ReferenceError: j is not defined


//**********************************************
//  4. 不存在变量提升
//**********************************************

console.log(foo); // 输出undefined
var foo = 2;

// console.log(bar); // 报错ReferenceError
let bar = 2;


//**********************************************
//  5. 暂时性死区
//**********************************************
var tmp = 123;
if (true) {
  // console.log(tmp); // ReferenceError
  let tmp;
}

//**********************************************
//  6. 闭包
//**********************************************
for (var m = 0; m < 5; m++) {
  setTimeout(function() {
    console.log(`m: ${m}`); // 5 5 5 5 5
  }, m * 1000)
}

for (var x = 0; x < 5; x++) {
  (function(x) {
    setTimeout(function() {
      console.log(`x: ${x}`); // 0 1 2 3 4
    }, x * 1000 + 5000 * 1)
  })(x)
}

for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(`i: ${i}`); // 0 1 2 3 4
  }, i * 1000 + 5000 * 2)
}
