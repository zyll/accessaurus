// defining a growing af83 dinosaurus rus

var Dinosaurus = function() {
  Object.defineProperty(this, 'height', {
    get: function() {
      console.log('getting height : ', this._height);
      return this._height;
    },
    set: function(value) {this._height = value;}
  });
  this._height = 0;
};

module.exports = Dinosaurus;
