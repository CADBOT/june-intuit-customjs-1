function Person(name, age) {
  var newPerson = {};
  newPerson.name = name;
  newPerson.age = age;
  newPerson.sayName = function() {
    console.log(`Hello I am ${newPerson.name}`)
  }
  return newPerson;
}

var p1 = Person('tim', 14);

function Dog(name, age) {
  // this = {}
  this.name = name;
  this.age = age;
  this.sayName = function() {
    console.log(`woof woof ${this.name} woof`);
  }
  this.brokenSayName = function() {
    console.log(name);
  }
  // return this
}


var dog1 = new Dog('spot', 2);
dog1.brokenSayName();
dog1.name = 'fluffy';
dog1.brokenSayName();
dog1.sayName();
