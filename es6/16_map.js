/*

  size()
  get(key)
  set(key, value)
  has(key)
  delete(key)
  clear()

  Map 结构原生提供三个遍历器生成函数和一个遍历方法。

  keys()：返回键名的遍历器。
  values()：返回键值的遍历器。
  entries()：返回所有成员的遍历器。
  forEach()：遍历 Map 的所有成员。
*/

// const m = new Map();

// 任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数。
// 这就是说，Set和Map都可以用来生成新的 Map。
const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m1 = new Map(set);
m1.get('foo') // 1

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
m3.get('baz') // 3
