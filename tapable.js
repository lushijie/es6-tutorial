/**
 * Sync*类型的钩子, 只能使用tap注册，不能使用tapPromise和tapAsync注册，通过调用 call 方式调用
 * Async*类型的钩子, 支持tap、tapPromise、tapAsync注册, 通过调用callAsync 、promise方式调用
 *    promise 可以触发 tap、tapPromise、tapAsync
 *    callAsync 可以触发 tap、tapAsync
 *    call 触发 tap
 */
const {
  Tapable,
  SyncHook, // 同步钩子
  SyncLoopHook, // 监听函数返回true表示继续循环，返回undefine表示结束循环
  SyncBailHook, // 同步钩子，当前执行的 handler 有返回值，后续 handler 不执行
  SyncWaterfallHook, // 同步钩子，上一个 handler 的返回值作为下一个 handler 的输入值
  AsyncParallelHook, // 异步钩子，handler 并行触发
  AsyncParallelBailHook,	// 异步钩子，当前执行的 handler 有返回值，后续 handler 不执行
  AsyncSeriesHook, // 异步钩子，handler 串行触发
  AsyncSeriesBailHook, //	异步钩子，handler 串行触发，当前执行的 handler 有返回值，后续 handler 不执行
  AsyncSeriesWaterfallHook,	// 异步钩子，上一个 handler 可以根据内部的回调函数传值给下一个 handler
} = require('tapable');


console.log('=== 同步钩子 ===');
// SyncHook, 同步hook, 不带参数
// 按照注册顺序执行
const hook11 = new SyncHook();
hook11.tap('hook11-1', () => {
  console.log('=> hook11-1...');
});
hook11.tap('hook11-2', () => {
  console.log('=> hook11-2...');
});
hook11.call();

// SyncHook 同步hook, 带参数
const hook12 = new SyncHook(['arg']);;
hook12.tap('hook12-1', (arg) => {
  console.log('=> hook12-1...', arg);
});
hook12.call('hook12参数');

// SyncBailHook，一旦中间有 hook 返回 true，则后续的 hook 不再执行
const hook13 = new SyncBailHook();
hook13.tap('hook13-1', () => {
  console.log('=> hook13-1...');
  return true;
});
hook13.tap('hook13-2', () => {
  // hook13-1 返回 true，此钩子不再执行
  console.log('=> hook13-2...');
  return true;
});
hook13.call();

// SyncWaterfallHook，串行瀑布流，第一个 hook 返回值作为第二个 hook 的输入
const hook14 = new SyncWaterfallHook(['arg']);
hook14.tap('hook14-1', (data) => {
  console.log('=> hook14-1...', data);
  return data;
});
hook14.tap('hook14-2', (data) => {
  console.log('=> hook14-2...', data);
});
hook14.call('hook14参数');

// SyncLoopHook， 监听函数返回true表示继续循环，返回undefine表示结束循环
const hook15 = new SyncLoopHook();
let count = 0;
hook15.tap('hook15',function(){
  count ++;
  console.log('=> hook15-1... 计数:', count);
  if(count === 3) {
    return;
  } else {
    return true;
  }
});
hook15.call();



console.log('\n === 异步串行钩子 ===');
// AsyncSeriesHook
// 异步串行执行，hook21-3 在 hook21-2 callback 之后才会继续执行
const hook21 = new AsyncSeriesHook(['arg']);
hook21.tap('hook21-1', (arg) => {
  console.log('=> hook21-1...', arg);
});
hook21.tapAsync('hook21-2',(arg, cb) => {
  setTimeout(() => {
    console.log('=> hook21-2...', arg);
    cb();
  }, 3000);
});
hook21.tap('hook21-3',(arg) => {
  console.log('=> hook21-3...', arg);
});
hook21.callAsync('hook21参数', err => {
  err && console.log(err);
});

// AsyncSeriesBailHook,
// 异步串行执行，中间有 hook 返回true，则后续的 hook 不再执行
const hook22 = new AsyncSeriesBailHook(['arg']);
hook22.tap('hook22-1', (arg) => {
  console.log('=> hook22-1...', arg);
  return arg;
});
hook22.tap('hook22-2',(arg) => {
  console.log('=> hook22-2...', arg);
});
hook22.callAsync('hook22参数', err => {
  err && console.log(err);
});

// AsyncSeriesWaterfallHook,
// 前一个 hook 的返回值会作为下一个 hook 的输入
// 如果紧邻的前一个没有返回，会找更前面的一个的返回值
const hook23 = new AsyncSeriesWaterfallHook(['arg']);
hook23.tap('hook23-1', () => {
  console.log('=> hook23-1...');
  return 'hook23-1 result';
});
hook23.tapAsync('hook23-2', (arg, cb) => {
  setTimeout(() => {
    console.log('=> hook23-2...', arg);
    cb(null, 'hook23-2 result');
  });
});

// 此处的 hook 不会等 hook23-2，而是等 hook23-1
hook23.tap('hook23-3',(arg) => {
  console.log('=> hook23-3...', arg);
  return 'hook23-3 result';
});

hook23.tapAsync('hook23-4',(arg, cb) => {
  setTimeout(() => {
    console.log('=> hook23-4...', arg);
    cb();
  });
});
hook23.callAsync(null, err => {
  err && console.log(err);
});



// // AsyncParallelBailHook
// // 并行执行，如果前一个 hook 返回true，则后续的 hook 不再执行
// const hook31 = new AsyncParallelBailHook(['arg']);

// hook31.tapAsync('hook31-1', (arg, cb) => {
//   setTimeout(() => {
//     console.log('=> hook31-1...', arg);
//     cb(null)
//   }, 20);
// });

// hook31.tapAsync('hook31-2',(arg, cb) => {
//   setTimeout(() => {
//     console.log('=> hook31-2...', arg);
//     cb(null)
//   }, 10);
//   return true;
// });

// hook31.tap('hook31-3',(arg) => {
//   console.log('=> hook31-3...', arg);
// });

// hook31.callAsync('hook31参数', err => {
//   err && console.log(err);
// });


// // AsyncParallelHook 异步并行钩子，可以使用 tap、tapAsyc、tapPromise 方式定义
// // callAsync 触发 tap、tapAsync
// // promise 触发 tap、tapAsync、tapPromise
// const hook32 = new AsyncParallelHook(['arg']);
// hook32.tap('hook32-1', (arg) => {
//   console.log('=> hook32-1...', arg);
// });
// hook32.tapAsync('hook32-2', (arg, cb) => {
//   setTimeout(() => {
//     console.log('=> hook32-2...', arg);
//     cb();
//   }, 1000);
// });
// hook32.tapAsync('hook32-3', (arg, cb) => {
//   setTimeout(() => {
//     console.log('=> hook32-3...', arg);
//     cb();
//   }, 500);
// });

// hook32.tapPromise('hook32-4', arg => {
//   return new Promise((resolve) => {
//     resolve(arg);
//   });
// });

// hook32.promise('hello15').then((data) => { // 可以触发tap、tapAsync、tapPromise
//   // 此处 data 为 undefined, 如果有此需求请使用 AsyncParallelBailHook
//   console.log('=> hook32-4...', data);
// });

// // hook32.callAsync('hello15', err => { // 只可以触发 tap、tapAsync
// //   err && console.log(err);
// // });

// /**
//  * extends Tapable 使用方式
//  */
// class Tap extends Tapable {
//   constructor() {
//     super();
//     this.hooks = {
//       run: new SyncHook(['word1', 'word2']),
//     };
//   }

//   run(word1, word2) {
//     this.hooks.run.call(word1, word2);
//   }
// }

// const tap = new Tap();
// tap.hooks.run.tap('run', (word1, word2) => {
//   console.log('=> class run:', word1, word2);
// });
// tap.run('hello', 'world');
