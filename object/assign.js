/*
* @Author: lushijie
* @Date:   2017-11-20 15:15:16
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-20 16:10:28
*/
// // // 异常会打断后续拷贝任务
// // // Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象
// let obj1 = {
//   a: 123,
//   b: 456,
//   get ga() {
//     return this.a;
//   },
//   moda: {
//     aa: 789,
//     func() {
//       return this.aa;
//     }
//   }
// };

// console.log(obj1.ga); // 123
// console.log(obj1.moda.func()); // 789
// let obj2 = Object.assign({}, obj1);
// console.log(obj2.ga); // 123

// // Object.assign 会跳过那些值为 null 或 undefined 的源对象
// let obj3 = Object.assign({}, null, undefined ,obj1);




// // // 针对深拷贝，需要使用其他方法，因为 Object.assign()拷贝的是属性值。
// // // 假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值。
// // Deep Clone
// let obj4 = { a: 0 , b: { c: 0}};
// let obj5 = JSON.parse(JSON.stringify(obj4));
// obj4.a = 4;
// obj4.b.c = 4;
// console.log(obj5);



// let uid = Symbol('foo');
// let obj6 = {
//   [uid]: 123
// };
// console.log(obj6[uid]);




// // // 继承属性和不可枚举属性是不能拷贝的
// let obj7 = Object.create({foo: 1}, { // foo 是个继承属性
//   bar: {
//     value: 2  // bar 是个不可枚举属性
//   },
//   baz: {
//     value: 3,
//     enumerable: true  // baz 是个自身可枚举属性
//   }
// });

// let copy = Object.assign({}, obj7);
// console.log(copy); // { baz: 3 }




// console.log(Object.assign({}, 10));




// // 拷贝访问器
let obj = {
  foo: 1,
  get bar() {
    return 2;
  }
};

let copy = Object.assign({}, obj);
// { foo: 1, bar: 2 }
// copy.bar的值来自obj.bar的getter函数的返回值
console.log(copy);

// 下面这个函数会拷贝所有自有属性的属性描述符
function completeAssign(target, ...sources) {
  sources.forEach(source => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    // Object.assign 默认也会拷贝可枚举的Symbols
    Object.getOwnPropertySymbols(source).forEach(sym => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

let copy2 = completeAssign({}, obj);
console.log(copy2); // { foo:1, get bar() { return 2 } }
