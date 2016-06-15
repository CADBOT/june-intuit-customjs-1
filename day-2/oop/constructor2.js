'use strict';
function Cat(name, age) {
  this.name = name;
  this.age = age;
}
Cat.prototype.askToGoOut = function() {
  console.log(`${this.name} the cat would like to go out`);
}
Cat.prototype.askToGoOut = function() {
  console.log(`${this.name} the cat would like to go out`);
}

var c1 = new Cat('fluffy', 3);
c1.askToGoOut();

var extractedAskToGoOut = c1.askToGoOut;
extractedAskToGoOut();
