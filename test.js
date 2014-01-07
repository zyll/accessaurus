var Dinosaurus = require('./index');

var dédé = new Dinosaurus();
dédé.on('change:height', function(){
  console.log('dédé height change to ' + dédé.height);
});
dédé.height;
dédé.height = 42;
dédé.height;
