/*
* @Author: lushijie
* @Date:   2017-11-26 12:41:06
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-26 12:47:40
*/
var a = {
    user:"追梦子",
    fn:function(){
        console.log(this.user);
    }
}
var b = a.fn;
b(); //undefined
