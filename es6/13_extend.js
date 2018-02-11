/*
* @Author: lushijie
* @Date:   2017-11-07 16:01:10
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-07 17:13:33
*/

class Animal {
  constructor(props) {
    console.log(props); // {smile: miaomiao}
    console.log(this.name); // undefined
  }

  eat() {
    console.log('eat', this.name);
  }

  static run() {
    console.log('Animal static run ...');
  }
}

class Cat extends Animal {
  constructor({name, ...props}) {
    // console.log(name); // xiaomao
    super(props);
    this.name = name; // after super
  }

  play() {
    Cat.catLaugh();
    // super.run(); // error
    super.eat(); //通过super调用父类的方法时，super会绑定子类的this
    console.log('This is miaomiao play');
  }

  static catLaugh() {
    // super.eat(); // error
    super.run(); // 在 static 方法中调用父级的静态方法
  }
}

let c = new Cat({name: 'xiaomao', smile: 'miaomiao'});
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
Cat.__proto__ === Animal // true
Cat.prototype.__proto__ === Animal.prototype // true

