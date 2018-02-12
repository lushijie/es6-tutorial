/*
* @Author: lushijie
* @Date:   2017-11-07 11:11:22
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-12 17:26:01
*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`${this.name} can run`);
  }
}

Animal.prototype.smile = function() {
  console.log(`${this.name} can smile`);
}

console.log(Animal === Animal.prototype.constructor) // true
let a = new Animal('cat');
console.log('a.name =', a.name); // cat
a.run();  // cat can run
a.smile(); // cat can smile


Animal.prototype.play = (() => {
  console.log('this =', this);
  console.log(`${(this || {}).name} can play`);
}).bind(a);

Animal.prototype.play2 = (function() {
  console.log('this =', this);
  console.log(`${(this || {}).name} can play2`);
}).bind(a);

a.play(); //  undefined can play
a.play2(); // cat can play2

console.log('a.hasOwnProperty(\'name\') = ', a.hasOwnProperty('name'));            // true
console.log('a.hasOwnProperty(\'play\') = ', a.hasOwnProperty('play'));            // false
console.log(a.__proto__.hasOwnProperty('play'));  // true
console.log(Object.keys(Animal.prototype));       // play
console.log(Object.getOwnPropertyNames(Animal.prototype)); // construtor run smile play play2

Object.assign(Animal.prototype, {
  cry() {
    console.log('test');
  }
});
console.log(Object.getOwnPropertyNames(Animal.prototype)); // construtor run smile play play2 cry



class Foo {
  constructor() {
    return Object.create(null); // return null object
  }
}


class Foo2 {
  constructor() {
    console.log(new.target === Foo2); // true
    this.pro = 'foo';
  }

  get fname() {
    return this.pro;
  }
  set fname(value) {
    this.pro = value;
  }

  static getClassName() {
    console.log(this.name);  // this point to the class
  }
}
let f2 = new Foo2();
Foo2.getClassName(); // Foo2

