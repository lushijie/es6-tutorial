/*
* @Author: lushijie
* @Date:   2017-11-07 17:19:30
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-17 22:08:29
*/

// function testable(target) {
//   // console.log(new target().a); // 123
//   target.customMethod = function(arg) {
//     //console.log(arg)
//   }
//   target.isTestable = true;
// }


// @testable
// class MyTestableClass {
//   constructor(props) {
//     this.a = 123;
//   }
// }

// console.log(MyTestableClass.customMethod(123123));
// console.log(MyTestableClass.isTestable) // true



// export function mixins(...list) {
//   return function (target) {
//     Object.assign(target.prototype, ...list)
//   }
// }
// const Foo = {
//   a: 123,
//   foo() { console.log('foo') },
//   foo2() { console.log('foo2') }
// };

// @mixins(Foo)
// class MyClass {}

// let obj = new MyClass();
// console.log(obj.a);
// obj.foo();  // 'foo'
// obj.foo2();



function readonly(target, name, descriptor){
  console.log('target:', target);
  console.log('name:', name);
  console.log('descriptor:', descriptor);
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
}

class Person {
  @readonly
  name() { return `${this.first} ${this.last}` }
}
console.log(new Person().name())
