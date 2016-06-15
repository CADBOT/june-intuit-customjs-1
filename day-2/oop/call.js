function sayName() {
  console.log(`My name is ${this.name}`);
}

var person = {
  name: 'tom',
};

var cat = {
  name: 'fluffy',
};

var bowlingBall = {
  holes: 'three'
};

sayName.call(person);
sayName.call(cat);

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(`My name is ${this.name}`);
};

var p1 = new Person('bill');
p1.sayName();

p1.sayName.call(cat);
var extractedSayName = p1.sayName;
extractedSayName.call(cat);
extractedSayName.call(person);

var boundSayName = p1.sayName.bind(cat);
boundSayName();
boundSayName();

var person2 = {
  name: 'beth',
  sayName: boundSayName
}

person2.sayName();
