var myArray = [2, 7];
var [a, b] = myArray;
console.log(a);
console.log(b);
[b, a] = [a, b];
console.log(a);
console.log(b);

var otherArray = [3, 5, 10, 2, 14];
var [first, second, third] = otherArray;
console.log(first, second, third);

var [,two,,four] = otherArray;
console.log(two, four);

// pull every element out of an array into a variable
var someArray = [10, 4, 3, 'hello'];
var [a, b, c, d] = someArray;
// make a largeish array and pull out the first, third, and fifth element
// to a shift right three way swap. a, b, c. make b = a. c = b. a = b.
