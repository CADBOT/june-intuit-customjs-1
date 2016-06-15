'use strict';
function Person(name, age) {
  this.name = name;
  var job = 'unemployed';
  this.getJob = function() {
    return job;
  }
}

Person.prototype.greet = function(greeting) {
  console.log(`${this.name} says ${greeting}`);
}

var p1 = new Person('bill', 14);
console.log(p1.getJob())
console.log(p1.name)

/*
 * 1 public variable and methods that use it
 * 1 private variable with methods that use it. Put validation in the setter
 * 1 readonly private variable
 *
 * Use the propotype in an idiomatic matter
 *
 */
function Cat(name, age) {
  this.nickName = name;
  this.setAge = function(newAge) {
    if (newAge > age) {
      age = newAge;
    }
  };
  this.getAge = function() {
    return age;
  }
  this.getName = function() {
    return name;
  }
}

Cat.prototype.greet = function(greeting) {
  console.log(`${greeting} from ${this.nickName}`);
};

var cat1 = new Cat('fluffy', 2);
cat1.greet('meow');

var greet = cat1.greet;

var dog = {
  nickName: 'spot',
  greet: greet
}

dog.greet('woof');

var person = {
  nickName: 'jeff'
}

greet.call(person, 'hello');

function add() {
  Array.prototype
}


