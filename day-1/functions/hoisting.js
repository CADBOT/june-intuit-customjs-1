function doStuff() {
  console.log(x); // undefined
  var x = 4;
}

function doStuff() {
  var x;
  console.log(x);
  x = 4;
}

doStuff();


function complex() {
  var a = 10;
  var b = a + 4;
  var c = 20;
  b = c;
  var d = a;
}

function complex() {
  var a, b, c, d;
  a = 10;
  b = a + 4;
  c = 10;
  b = c;
  function inner() {
    var a, b, c,
  }
  d = a;
}



