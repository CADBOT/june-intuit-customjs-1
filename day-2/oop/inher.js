function Creature() {
  /*
   * this = {};
   * this.__proto__ = Creature.prototype
   */

}

Creature.prototype.sayName = function() {
  console.log(`My name is ${this.name}`)
}

function Person(name, job) {
  this.name = name;
  this.job = job;
}

Person.prototype = new Creature();
Person.prototype = Object.create({}, Creature.prototype)
Person.prototype.sayJob = function() {
  console.log(`My job is ${this.job}`)
}

var p1 = new Person('bill', 'plumbing');
p1.sayName();
p1.sayJob();


/*
 * Create two constructor functions (parent and child)
 * Create a method on the prototype of the parent
 * have the child inher methods from the parent
 * create an instance of the child, and have it invoke
 * this method.
 *
 */








