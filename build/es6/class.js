'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
* @Author: lushijie
* @Date:   2017-11-07 11:11:22
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-07 16:07:49
*/

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   run() {
//     console.log(`${this.name} can run`);
//   }
// }

// console.log(Animal === Animal.prototype.constructor) // true
// let a = new Animal('cat');
// console.log('a.name =', a.name); // cat
// a.run();  // cat can run

// Animal.prototype.play = (() => {
//   console.log('this =', this);
//   console.log(`${this.name} can play`);
// }).bind(a);

// Animal.prototype.play2 = (function() {
//   console.log('this =', this);
//   console.log(`${this.name} can play2`);
// }).bind(a);

// a.play(); //  undefined can play
// a.play2(); // cat can play2

// console.log('a.hasOwnProperty(\'name\') = ', a.hasOwnProperty('name'));            // true
// console.log('a.hasOwnProperty(\'play\') = ', a.hasOwnProperty('play'));            // false
// console.log(a.__proto__.hasOwnProperty('play'));  // true
// console.log(Object.keys(Animal.prototype));       // play
// console.log(Object.getOwnPropertyNames(Animal.prototype)); // construtor run play play2

// Object.assign(Animal.prototype, {
//   smile() {
//     console.log('test');
//   }
// });
// console.log(Object.getOwnPropertyNames(Animal.prototype)); // construtor run play play2 smile


// class Foo {
//   constructor() {
//     return Object.create(null); // return null object
//   }
// }


var Foo2 = function () {
  function Foo2() {
    _classCallCheck(this, Foo2);

    console.log(new.target === Foo2); // true
    this.pro = 'foo';
  }

  _createClass(Foo2, [{
    key: 'fname',
    get: function get() {
      return this.pro;
    },
    set: function set(value) {
      this.pro = value;
    }
  }], [{
    key: 'getClassName',
    value: function getClassName() {
      console.log(this.name); // this point to the class
    }
  }]);

  return Foo2;
}();

var f2 = new Foo2();
Foo2.getClassName(); // Foo2
// f2.fn(); // f2.fn is not a function