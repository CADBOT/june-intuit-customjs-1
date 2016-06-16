function Hero() {
  this.health = 100;
}

Hero.prototype.attack = function(target) {
  target.takeDamage(this.attackPower);
};

Hero.prototype.takeDamage = function(damage) {
  this.health -= damage;
};


function Warrior(name) {
  Hero.call(this);
  this.name = name;
  this.attackPower = -1;
}


/*
var dummyHero = new Hero();
Warrior.prototype = dummyHero;
*/
Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.warriorYell = function() {
  console.log('I am a warrior');
}


var warrior1 = new Warrior('henry');
var warrior2 = new Warrior('betty');

warrior1.attack(warrior2);


function Ranger() {
  this.attackPower = 2;
  this.arrows = 5;
}

Ranger.prototype.shootArrow = function(target) {
  if (arrows > 0) {
    console.log('ranger shot an arrow');
    target.takeDamage(50);
  }
  else {
    console.log('ranger is out of arrows');
  }
}
Ranger.prototype = new Hero();


var h1 = new Hero();
var h2 = Object.create(Hero.prototype);
var h2 = {__proto__: Hero.prototype}
Object.create(Hero) // {__proto__: Hero}
console.log(h1);
console.log(h2);
console.log(h1.__proto__ === h2.__proto__);  
console.log(h1.health);
console.log(h2.health);

var somePrototype = {
  hello: function() {
    console.log('hello');
  }
}

var someObject = Object.create(somePrototype);




