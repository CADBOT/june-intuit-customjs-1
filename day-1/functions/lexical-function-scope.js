'use strict';
let x = 4;

function doStuff() {
  let z = x + 4;
  console.log(z);
  let a = 10;
}

doStuff();

let a = 1;
function outer() {
  let a = 2;
  let b = 10;
  function inner() {
    let a = 4;
    b = 4;
    console.log('a is equal: ' + a);
    console.log(`a is equal: ${a}`); 
    console.log(b);
  }
  console.log(b); //
  inner();
}
outer();
inner();

function a() {
  let x = 4;
  function b() {
    let x = 10;
    let x = 15;
  }
}
