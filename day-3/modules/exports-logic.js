/*
 * This file is for notes only. If you want to run it, each scenario should be
 * extracted to its own file
 *
 */
// Scenario 1. Only a top level export. Both idiomatic and the only correct way.
module.exports = function() {
  console.log('my top level function');
}

// this on the other hand, will not work
exports = function() {
  console.log('my top level function');
}

// Scenario 2. exporting an object that contains multiple properties
// Will work, and is the most idiomatic
exports.add = function(x, y) {
  return x + y;
}
exports.sub = function(x,y) {
  return x - y;
}
// Will work just fine, but isn't the most idiomatic
module.exports.add = function(x,y) {
  return x + y;
}

// unidiomatic but possible. exporting only one thing, and doing so as a property
// instead of an overwrite
exports.onlyFunction = function() {
  console.log('I am the only thing being exported');
}




function add(x,y) {
  return x + y;
}
function sub(x,y) {
  return x - y;
}

exports.add = add
exports.sub = sub

module.exports = {
  add: add,
  sub: sub
}




