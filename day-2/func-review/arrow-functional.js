var numbers = [1, 3, 10, 5];

numbers.map(function(n) {
  return n * 2;
});

// General purpose 
numbers.map((n) => {
  return n * 2;
});

// Special form 1: Drop ()'s if there is only 1 parameter
numbers.map(n => {
  return n * 2;
});

// Take note: Still required for 0 params
var sayHello = () => {
  console.log('hello');
};

// Special form 2: 1. Drop the {}'s if it's a one liner
// 2. omit the return
numbers.map(n => n * 2)

numbers.filter(n => n % 2 === 0)
       .map(n => n * 2)
       .forEach(n => console.log(n))


// remove all numbers greater than 100
// add 2 to each number
// sum the results
// print out the result

// solution
var solution = numbers.filter(n => n <= 100)
       .map(n => n + 2)
       .reduce((acc, n) => acc + n);

console.log(solution);
