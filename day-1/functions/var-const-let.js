// const isn't actually constant. You just can't re-assign.
// It's like the Java final keyword
const MY_ARRAY = [];
MY_ARRAY[0] = 4;

if (true) {
  var x = 4;
  let y = 5; // ES6 ONLY
  const z = 10; // ES6 ONLY
  z = 4
}

console.log(x);
console.log(z);
console.log(y);
