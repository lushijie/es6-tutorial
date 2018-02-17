/*
* @Author: lushijie
* @Date:   2017-11-06 18:03:07
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-17 19:16:59
*/

// 一、async 函数执行结果是一个 Promise
async function func1() {
  // console.log('This is in func1');
}
console.log('1', typeof func1); // function
console.log('1,', func1()); // Promise
func1().then(() => {
}).catch(e => {
  console.log(e);
});

// 二、async 返回值,作为 resolve 的值
async function func2() {
  return 123123;
}
func2().then((data) => {
  console.log('2,', data); // 123123
});


// 三、普通函数返回 Promise
function sleep3(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time)
  });
}

(async function() {
  console.log('3', new Date()); // 3秒前
  await(sleep3(3000));
  sleep3(3000).then(() => {
    console.log('3', 'await2');
  });
  console.log('3', new Date()); // 3秒后
})();


// 四、非依赖的两个函数可以并行执行 1
function sleep4(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time)
  });
}

(async function() {
  console.log('4', new Date()); // 5秒前
  let [a, b] = await Promise.all([sleep4(3000), sleep4(5000)]);
  console.log('4,', a, b); // 3000 5000
  console.log('4', new Date()); // 5秒后
})();


//五、非依赖的两个函数可以并行执行 2
function sleep5(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time)
  });
}

(async function() {
  console.log('5,', new Date());
  let a = sleep5(5000);
  let b = sleep5(2000);

  // 一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句
  let aout = await a;
  console.log('5a,', aout);
  let bout = await b;
  console.log('5b,', bout);
  console.log('5,', new Date());
})();


// 六、async catch
function func6() {
}
(async function() {
  await func6();
})().then(() => {
  console.log('6,', 456);
}).catch(err => {
  console.log(err);
});

// 七、async return
async function func7() {
  return Promise.reject(123);
  // throw new Error('出错了'); // catch
}

func7().then(
  v => console.log('7,', v), // resolve
  e => console.log('7,', e, 'reject') // 'reject'
).catch(e => {
  console.log(e);
});
