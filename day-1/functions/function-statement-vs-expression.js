function add(x, y) {
  return x + y;
}

var num = 4;
var z = num;

var add2 = add;

add2(3, 7);

function takesACallback(cb) {
  console.log('calling a function!');
  cb();
  function inner() {
    console.log('an inner function')
  }
  return inner
}

function sayHello() {
  console.log('hello');
}

var result = takesACallback(sayHello);
result();


takesACallback(function() {
  console.log('I am anon');
})




/*
 * write a function that takes a function
 * that outer function should also take a number
 * the outer function will then invoke the function
 * it took as a parameter number many times
 *
 * invoke caller once with a named function. and once with an anon
 * function
 */

function caller(cb, times) {
  // TODO implement me
  for (var i = 0; i < times; i++) {
    cb();
  } 
}

caller(function() {
  console.log('hello!');
}, 10);

function sayGoodbye() {
  console.log('goodbye!');
}

caller(sayGoodbye, 4);




