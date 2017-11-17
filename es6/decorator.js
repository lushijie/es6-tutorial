/*
* @Author: lushijie
* @Date:   2017-11-07 17:19:30
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-17 22:21:53
*/
// // 修饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。


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


// // 修饰器函数一共可以接受三个参数，
// // 第一个参数是所要修饰的目标对象，即类的实例（这不同于类的修饰，那种情况时target参数指的是类本身）；
// // 第二个参数是所要修饰的属性名，
// // 第三个参数是该属性的描述对象。

// function readonly(target, name, descriptor){
//   console.log('target:', target);
//   console.log('name:', name);
//   console.log('descriptor:', descriptor);
//   // descriptor对象原来的值如下
//   // {
//   //   value: specifiedFunction,
//   //   enumerable: false,
//   //   configurable: true,
//   //   writable: true
//   // };
//   descriptor.writable = false;
//   return descriptor;
// }

// class Person {
//   @readonly
//   name() { return `${this.first} ${this.last}` }
// }
// console.log(new Person().name())



// class Math {
//   @log
//   add(a, b) {
//     return a + b;
//   }
// }

// function log(target, name, descriptor) {
//   let oldValue = descriptor.value;

//   descriptor.value = function() {
//     console.log(`Calling "${name}" with`, arguments);
//     return oldValue.apply(null, arguments);
//   };

//   return descriptor;
// }

// const math = new Math();

// // passed parameters should get logged now
// math.add(2, 4);



function dec(id){
  console.log('evaluated', id);
  return (target, property, descriptor) => console.log('executed', id);
}

class Example {
    @dec(1)
    @dec(2)
    method(){}
}
// evaluated 1
// evaluated 2
// executed 2
// executed 1
