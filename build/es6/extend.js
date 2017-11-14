'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
* @Author: lushijie
* @Date:   2017-11-07 16:01:10
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-07 17:13:33
*/

var Animal = function () {
  function Animal(props) {
    _classCallCheck(this, Animal);

    console.log(props); // {smile: miaomiao}
    console.log(this.name); // undefined
  }

  _createClass(Animal, [{
    key: 'eat',
    value: function eat() {
      console.log('eat', this.name);
    }
  }], [{
    key: 'run',
    value: function run() {
      console.log('Animal static run ...');
    }
  }]);

  return Animal;
}();

var Cat = function (_Animal) {
  _inherits(Cat, _Animal);

  function Cat(_ref) {
    var name = _ref.name,
        props = _objectWithoutProperties(_ref, ['name']);

    _classCallCheck(this, Cat);

    var _this = _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this, props));
    // console.log(name); // xiaomao


    _this.name = name; // after super
    return _this;
  }

  _createClass(Cat, [{
    key: 'play',
    value: function play() {
      Cat.catLaugh();
      // super.run(); // error
      _get(Cat.prototype.__proto__ || Object.getPrototypeOf(Cat.prototype), 'eat', this).call(this); //通过super调用父类的方法时，super会绑定子类的this
      console.log('This is miaomiao play');
    }
  }], [{
    key: 'catLaugh',
    value: function catLaugh() {
      // super.eat(); // error
      _get(Cat.__proto__ || Object.getPrototypeOf(Cat), 'run', this).call(this); // 在 static 方法中调用父级的静态方法
    }
  }]);

  return Cat;
}(Animal);

var c = new Cat({ name: 'xiaomao', smile: 'miaomiao' });
// Cat.run(); // 子类类直接调用父级的静态方法
// Cat.catLaugh(); // 子类类调用自己的静态方法
c.play();

console.log(c instanceof Cat); // true
console.log(c instanceof Animal); // true
console.log(Object.getPrototypeOf(Cat) === Animal); // true 可用来判断是否继承某个类


// // B 的实例继承 A 的实例
// Object.setPrototypeOf(B.prototype, A.prototype);
// // B 的实例继承 A 的静态属性
//Object.setPrototypeOf(B, A);
Cat.__proto__ === Animal; // true
Cat.prototype.__proto__ === Animal.prototype; // true