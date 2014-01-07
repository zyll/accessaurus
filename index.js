// defining a growing af83 dinosaurus rus
var util = require('util')
  , events = require('events');

var Dinosaurus = function() {
  events.EventEmitter.call(this);
  Object.defineProperty(this, 'height', {
    get: function() {
      console.log('getting height : ', this._height);
      return this._height;
    },
    set: function(value) {
      if (value !== this._height) {
        this._height = value;
        this.emit('change:height', this);
      }
    }
  });
  this._height = 0;
};

util.inherits(Dinosaurus, events.EventEmitter);
module.exports = Dinosaurus;
