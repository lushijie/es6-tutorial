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
  SyncBailHook, // 同步钩子，当前执行的 handler 有返回值，后续 handler 不执行
  SyncWaterfallHook, // 同步钩子，上一个 handler 的返回值作为下一个 handler 的输入值
  SyncLoopHook, // 监听函数返回true表示继续循环，返回undefine表示结束循环
  AsyncParallelHook, // 异步钩子，handler 并行触发
  AsyncParallelBailHook,	// 异步钩子，当前执行的 handler 有返回值，后续 handler 不执行
  AsyncSeriesHook, // 异步钩子，handler 串行触发
  AsyncSeriesBailHook, //	异步钩子，handler 串行触发，当前执行的 handler 有返回值，后续 handler 不执行
  AsyncSeriesWaterfallHook	// 异步钩子，上一个 handler 可以根据内部的回调函数传值给下一个 handler
} = require('tapable');

// SyncHook, 同步hook, 不带参数，不关心返回值
// 按照注册顺序执行
const hook11 = new SyncHook();
hook11.tap('hook11-1', () => {
  console.log('=> hook11-1...');
});
hook11.tap('hook11-2', () => {
  console.log('=> hook11-2...');
});
hook11.call();

// SyncHook 同步hook, 带参数，不关心返回值
const hook12 = new SyncHook(['arg']);;
hook12.tap('hook12', (arg) => {
  console.log('=> hook12-1...', arg);
});
hook12.call('hello12');

// SyncBailHook，一旦中间有 hook 返回 true，则后续的 hook 不再执行
const hook13 = new SyncBailHook();
hook13.tap('hook13-1', () => {
  console.log('=> hook13-1...');
});
hook13.tap('hook13-2', () => {
  console.log('=> hook13-2...');
  return true;
});
hook13.tap('hook13-3', () => {
  // hook13-2 有返回值，此钩子不再执行
  console.log('=> hook13-3...');
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
hook14.call('hello14');

// SyncLoopHook， 监听函数返回true表示继续循环，返回undefine表示结束循环
const hook20 = new SyncLoopHook();
let count = 0;
hook20.tap('hook20',function(){
  count ++;
  console.log('=> hook20-1...', count);
  if(count === 3) {
    return;
  } else {
    return true;
  }
});
hook20.call();

// AsyncParallelBailHook, 中间有 hook 有返回值，则后续的 hook 不再执行
const hook16 = new AsyncParallelBailHook(['arg']);
hook16.tap('hook16-1', (arg) => {
  console.log('=> hook16-1...', arg);
  return arg;
});
hook16.tap('hook16-2',(arg) => {
  console.log('=> hook16-2...', arg);
});
hook16.callAsync('hello16', err => {
  err && console.log(err);
});

// AsyncSeriesHook
const hook17 = new AsyncSeriesHook(['arg']);
hook17.tap('hook17-1', (arg) => {
  console.log('=> hook17-1...', arg);
});
hook17.tap('hook17-2',(arg) => {
  console.log('=> hook17-2...', arg);
});
hook17.callAsync('hello17', err => {
  err && console.log(err);
});

// AsyncSeriesBailHook, 中间有 hook 有返回值，则后续的 hook 不再执行
const hook18 = new AsyncSeriesBailHook(['arg']);
hook18.tap('hook18-1', (arg) => {
  console.log('=> hook18-1...', arg);
  return arg;
});
hook18.tap('hook18-2',(arg) => {
  console.log('=> hook18-2...', arg);
});
hook18.callAsync('hello18', err => {
  err && console.log(err);
});

// AsyncSeriesWaterfallHook, 前一个 hook 的返回值会作为下一个 hook 的输入
const hook19 = new AsyncSeriesWaterfallHook(['arg']);
hook19.tap('hook19-1', () => {
  console.log('=> hook19-1...');
  return 'hook19-1 result';
});
hook19.tapAsync('hook19-2', (arg, cb) => {
  setTimeout(() => {
    console.log('=> hook19-2...', arg);
    cb(null, 'hook19-2 result');
  }, 500);
});

// 此处的 hook 不会等 hook19-2，而是等 hook19-1
hook19.tap('hook19-3',(arg) => {
  console.log('=> hook19-3...', arg);
});

hook19.tapAsync('hook19-4',(arg, cb) => {
  setTimeout(() => {
    console.log('=> hook19-4...', arg);
    cb();
  }, 1000);
});
hook19.callAsync(null, err => {
  err && console.log(err);
});


// AsyncParallelHook 异步并行钩子，可以使用 tap、tapAsyc、tapPromise 方式定义
// callAsync 触发 tap、tapAsync
// promise 触发 tap、tapAsync、tapPromise
const hook15 = new AsyncParallelHook(['arg']);
hook15.tap('hook15-1', (arg) => {
  console.log('=> hook15-1...', arg);
});
hook15.tapAsync('hook15-2', (arg, cb) => {
  setTimeout(() => {
    console.log('=> hook15-2...', arg);
    cb();
  }, 1000);
});
hook15.tapAsync('hook15-3', (arg, cb) => {
  setTimeout(() => {
    console.log('=> hook15-3...', arg);
    cb();
  }, 500);
});

hook15.tapPromise('hook15-4', arg => {
  return new Promise((resolve) => {
    resolve(arg);
  });
});

hook15.promise('hello15').then((data) => { // 可以触发tap、tapAsync、tapPromise
  // 此处 data 为 undefined, 如果有此需求请使用 AsyncParallelBailHook
  console.log('=> hook15-4...', data);
});

// hook15.callAsync('hello15', err => { // 只可以触发 tap、tapAsync
//   err && console.log(err);
// });

/**
 * extends Tapable 使用方式
 */
class Tap extends Tapable {
  constructor() {
    super();
    this.hooks = {
      run: new SyncHook(['word1', 'word2']),
    };
  }

  run(word1, word2) {
    this.hooks.run.call(word1, word2);
  }
}

const tap = new Tap();
tap.hooks.run.tap('run', (word1, word2) => {
  console.log('=> class run:', word1, word2);
});
tap.run('hello', 'world');
