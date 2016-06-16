'use strict';
class Hero {
  constructor(health) {
    this.health = health;
  }

  attack(target) {
    target.takeDamage(amount);
  }

  takeDamage(amount) {
    this.health -= amount;
  }


}

class Warrior extends Hero {
  constructor(name, health) {
    super(health)
    this.name = name;
  }
 
  warriorYell() {
    console.log('I am a Warrior');
  }
}

var w1 = new Warrior('bob', 20);
w1.warriorYell();
console.log(w1);

var warriorYell = w1.warriorYell;
warriorYell();

Warror.prototype.extra = function() {
  console.log('more stuff');
}





