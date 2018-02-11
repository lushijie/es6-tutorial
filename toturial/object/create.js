/*
* @Author: lushijie
* @Date:   2017-11-20 16:13:49
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-25 18:18:45
*/

Object.create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
};


// // 一种是使用对象直接量
// // 对象直接量是由若干值/键对组成的映射表，值/键对用逗号”,“分隔开，整个部分用花括号”{}“括起来
let people = {
  name:'kobe',
  age:'34'
};


// // 另外一种方法是通过new创建对象
// // 在new后面使用一个函数调用，这个函数也成为构造函数，通过new来初始化一个新的对象
let myobj = new Object();







// // 效果一致
let o1 = Object.create(Object.prototype);
let o2 = new Object;
let o3 = {};


// // 还可以通过传入参数null来创建一个没有原型的新对象
// // 它连Object内置的方法都没有，不能toString(),valueOf
let o4 = Object.create(null);


