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
