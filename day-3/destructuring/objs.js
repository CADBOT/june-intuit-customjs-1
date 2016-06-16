var obj = {
  x: 4,
  y: 2
}

var {x: varOne, y: varTwo} = obj;
var {y: a, x: b} = obj;
console.log(a);
var {y: onlyOne} = obj;
console.log(onlyOne);
console.log(y);

var person = {
  name: 'beth',
  age: 35
}

var {name, age} = person;
// is sugar for 
var {name: name, age: age} = person;
