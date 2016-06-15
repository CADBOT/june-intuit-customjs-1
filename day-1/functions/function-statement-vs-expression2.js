statement();
function statement() {
  console.log('I am a statement')
}

/*
expression();
var expression = function() {
  console.log('an expression')
};
*/

// CANNOT USER INNER HERE
function outer() {
  // can use inner here
  function inner() {

  }
  // as well as here
}
