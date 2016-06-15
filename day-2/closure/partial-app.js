function sum(x, y) {
  return x + y;
}

sum(4, 2);
sum(4, 3);
sum(4, 4);
sum(4, 1);
sum(4, 10);
sum(4, 20);

function sum4(y) {
  return 4 + y;
}

sum4(2);
sum4(3);
sum4(4);
sum4(1);
sum4(10);
sum4(20);


function generator(x) {
  return function(y) {
    return x + y;
  }
}

var add4 = generator(4);
var add5 = generator(5);

add4(10);// 14
add5(11);// 16

generator(5)(10); // add(5, 10);

function curriedAdd(x) {
  return function(y) {
    return function(z) {
      return function(a) {
        return x + y + z + a; 
      }
    }
  }
}

curriedAdd(2)(1)(1)(2) // 6
var x = curriedAdd(2)(1)  // function
x(1)(2) // 6


