'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = require('events');

var MyEmitter = function (_EventEmitter) {
  _inherits(MyEmitter, _EventEmitter);

  function MyEmitter() {
    _classCallCheck(this, MyEmitter);

    return _possibleConstructorReturn(this, (MyEmitter.__proto__ || Object.getPrototypeOf(MyEmitter)).apply(this, arguments));
  }

  return MyEmitter;
}(EventEmitter);

var myEmitter = new MyEmitter();
myEmitter.setMaxListeners(1);
console.log(myEmitter.getMaxListeners());

process.on('uncaughtException', function (err) {
  console.log('Whoops! there was an error');
});

// myEmitter.on('newListener', (event, listener) => {
//   console.log('event-->', event);
// });

myEmitter.on('connection', function () {
  console.log('Ah, we have our first user!');
});

myEmitter.on('event', function () {
  console.log('An event occurred!');
});

myEmitter.emit('connection');
myEmitter.emit('event');
// myEmitter.emit('connection');
// console.log(myEmitter.eventNames());
// console.log(myEmitter.listenerCount('event'));

// myEmitter.emit('error', new Error('whoops!'));

var callback = function callback(stream) {
  console.log('event has been removed...');
};

myEmitter.removeListener('event', callback);

// myEmitter.removeAllListeners();