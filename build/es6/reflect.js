'use strict';

/*
* @Author: lushijie
* @Date:   2017-11-13 16:17:14
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-14 10:11:23
*/

// Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API。Reflect对象的设计目的有这样几个。

// （1） 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。也就是说，从Reflect对象上可以拿到语言内部的方法。

// （2） 修改某些Object方法的返回结果，让其变得更合理。比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false。


// Reflect对象一共有13个静态方法。

// Reflect.apply(target, thisArg, args)
// Reflect.construct(target, args)
// Reflect.get(target, name, receiver)            // target 中的 this 绑定为 receiver
// Reflect.set(target, name, value, receiver)     // target 中的 this 绑定为 receiver
// Reflect.defineProperty(target, name, desc)     => Object.defineProperty
// Reflect.deleteProperty(target, name)           => delete obj[name]
// Reflect.has(target, name)                      => name in obj
// Reflect.ownKeys(target)             => Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和
// Reflect.isExtensible(target)                   => Object.isExtensible
// Reflect.preventExtensions(target)              => Object.preventExtensions
// Reflect.getOwnPropertyDescriptor(target, name) => Object.getOwnPropertyDescriptor
// Reflect.getPrototypeOf(target)                 => Object.getPrototypeOf(obj)
// Reflect.setPrototypeOf(target, prototype)      => Object.setPrototypeOf(obj, newProto)


var user = {};

// defineProperty
Object.defineProperty(user, 'name1', {
  value: 'lushijie'
});
console.log(user.name1);

Reflect.defineProperty(user, 'name2', {
  value: 'gexufei'
});
console.log(user.name2);

// in => has
console.log('name1' in user);
console.log(Reflect.has(user, 'name1'));

// Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法
var userProxy = new Proxy(user, {
  set: function set(target, name, value, receiver) {
    var success = Reflect.set(target, name, value, receiver);
    if (success) {
      console.log('property ' + name + ' on ' + target + ' set to ' + value);
    }
    return success;
  }
});
userProxy.p = '6666';

// Reflect.constructor
function Greeting(name) {
  this.name = name;
}
var instance = new Greeting('张三');
instance = Reflect.construct(Greeting, ['张三']);

// Reflect.apply
// const ages = [11, 33, 12, 54, 18, 96];

// const youngest = Math.min.apply(Math, ages);
// const oldest = Math.max.apply(Math, ages);
// const type = Object.prototype.toString.call(youngest);

// const youngest = Reflect.apply(Math.min, Math, ages);
// const oldest = Reflect.apply(Math.max, Math, ages);
// const type = Reflect.apply(Object.prototype.toString, youngest, []);