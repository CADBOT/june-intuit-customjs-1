function add() {
  var sum = 0;
  Array.prototype.forEach.call(arguments, function(val) {
    sum += val;
  });
  return sum;
}

console.log(add(2, 4, 10, 15, 100))
