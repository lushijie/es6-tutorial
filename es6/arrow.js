/*
* @Author: lushijie
* @Date:   2017-11-07 15:12:48
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-07 15:16:02
*/

console.log(function() {
  console.log(123);
}); // Function

console.log(() => {
  console.log(123);
}); // Function

(function () {
  console.log(123);
})(); // 123

(() => {
  console.log(456);
})();  // 456
