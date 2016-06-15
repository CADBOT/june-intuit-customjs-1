var numbers = [1, 3, 5, 10];

var times2 = numbers.map(function(n) {
  return n * 2;
})

var odd = numbers.filter(function(n) {
  return n % 2 !== 0;
});

var sum = numbers.reduce(function(acc, n) {
  return acc + n; // 4 + 5
}, 0);

var sum = numbers.reduce(function(acc, n) {
  return acc + n; // 4 + 5
});
