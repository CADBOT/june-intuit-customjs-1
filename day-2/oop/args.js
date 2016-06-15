function add() {
  //Array.prototype.map.call(arguments,
  var map = Array.prototype.map;
  var someArray = []
  var result = map.call(arguments, function(num) {
    return num * 2;  
  });
  return(result);
}

function correctAdd() {
  //arguments
  //Array.prototype ([].
  var reduce = Array.prototype.reduce;
  //reduce
  return reduce.call(arguments, function(acc, value) { 
    return acc + value;
  });
  //call
}
console.log(correctAdd(5, 10, 20, 3)); // 38



