var myFirstObject = {
  "name": 'tim'
  age: 14,
  someFunction: function() {
    console.log('hello!');
  }
};

console.log(myFirstObject['name']);
console.log(myFirstObject['age']);
console.log(myFirstObject['someFunction']);

console.log(myFirstObject.name);
console.log(myFirstObject.age);
console.log(myFirstObject.someFunction);

var someProperty = 'name';

console.log(myFirstObject.someFunction && myFirstObject.someFunction());
console.log(myFirstObject.anotherProp && myFirstObject.anotherProp());
myFirstObject.anotherProp();

myFirstObject.name = 'sally';
myFirstObject['name'] = 'sally';
