var nums = [1, 5, 10, 20, 2];

for (var i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

nums.forEach(function(number) {
  console.log(number);
});

var newNums = [];
nums.forEach(function(number, i) {
  newNums[i] = nums[i] + 100; // THIS IS BAD DON'T DO THIS. USE MAP INSTEAD
});


function forEach(array, cb) {
  for (var i=0; i < array.length; i++) {
    cb(array[i], i)
  }
}

forEach(['tim', 'sally', 'jake'], function(name, index) {
  console.log(index + name);
});

var newNums2 = nums.map(function(number) {
  number = 10;
}); // [10, 10, 10, 10, 10]

var greater100 = [2, 200, 4, 400, 5].filter(function(n) {
  return n > 100;
});
console.log(greater100);








