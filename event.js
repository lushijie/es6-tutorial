const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.setMaxListeners(1);
console.log(myEmitter.getMaxListeners());

process.on('uncaughtException', (err) => {
  console.log('Whoops! there was an error');
});

// myEmitter.on('newListener', (event, listener) => {
//   console.log('event-->', event);
// });

myEmitter.on('connection', () => {
  console.log('Ah, we have our first user!');
});

myEmitter.on('event', () => {
  console.log('An event occurred!');
});


myEmitter.emit('connection');
myEmitter.emit('event');
// myEmitter.emit('connection');
// console.log(myEmitter.eventNames());
// console.log(myEmitter.listenerCount('event'));

// myEmitter.emit('error', new Error('whoops!'));

let callback = (stream) => {
  console.log('event has been removed...');
};

myEmitter.removeListener('event', callback);

// myEmitter.removeAllListeners();

