var Dinosaurus = require('./index');

var dédé = new Dinosaurus();
dédé.on('change:height', function(){
  console.log('dédé height change to ' + dédé.height);
});

var id = setInterval(function(){
  dédé.height++;
}, 1000);
dédé.on('dead', function() {
  if(dédé.dead) console.log('poor dédé');
  clearInterval(id);
});
