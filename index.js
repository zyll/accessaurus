// defining a growing af83 dinosaurus rus
var util = require('util')
  , events = require('events');

var Dinosaurus = function() {
  events.EventEmitter.call(this);
  Object.defineProperty(this, 'height', {
    get: function() {
      return this._height;
    },
    set: function(value) {
      if (value !== this._height) {
        this._height = value;
        if(value > 5) {
          return this.alive = false;
        }
        this.emit('change:height', this);
      }
    }
  });
  this._height = 0;
  Object.defineProperty(this, 'alive', {
    get: function() {
      return this._alive;
    },
    set: function(value) {
      if (this._alive && !value) {
        this._alive = false;
        this.emit('dead');
      }
    }
  });
  Object.defineProperty(this, 'dead', {
    get: function() {
      return !this._alive;
    },
  });
  this._alive = true;
};

util.inherits(Dinosaurus, events.EventEmitter);
module.exports = Dinosaurus;
