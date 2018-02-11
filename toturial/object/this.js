/*
* @Author: lushijie
* @Date:   2017-11-26 12:41:06
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-26 13:10:42
*/
// call和apply都是改变上下文中的this并立即执行这个函数
// bind方法可以让对应的函数想什么时候调就什么时候调用，并且可以将参数在执行的时候添加

var a = {
  user:"lushijie",
  fn:function(a){
    return this.user + a;
  }
}

console.log(a.fn('666')); // lushijie666

// bind方法返回的是一个修改过后的函数
var b = a.fn.bind(a, 777);
console.log(b(666)); // lushijie666

var c = a.fn;
console.log(c.call(a, 666)); // lushijie666

var e = a.fn;
console.log(e.apply(a, [666])); // lushijie666

// error 严格模式 global 无
// var f = a.fn;
// console.log(f.call(null, 666));

// error
// var d = a.fn.call(a);
// console.log(d());


function fruits() {}

fruits.prototype = {
    color: "red",
    say: function() {
        console.log("My color is " + this.color);
    }
}

var apple = new fruits();
apple.say();    //My color is red


var banana = {
    color: "yellow"
}
apple.say.call(banana);     //My color is yellow
apple.say.apply(banana);    //My color is yellow
