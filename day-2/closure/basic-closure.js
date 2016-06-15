function printNumbers(x) {
  var num1 = x + 1;
  var num2 = x + 2;
  var num3 = x + 3;
  console.log(num1)
  console.log(num2)
  console.log(num3)
}


function createClosure() {
  var closureVariable = 10;
  function read() {
    console.log(closureVariable);
  }
  function write(x) {
    closureVariable = x
  }
  return {
    read: read,
    write: write  
  };
}

var obj = createClosure();
obj.read();
obj.write(40);
obj.read();

var obj2 = createClosure();
obj2.read();

/*
 * Create a Person module with name and age
 * name is "read only"
 * age is 'read and write, but only goes up'
 */

function Person(name, age) {
  function getName() {
    return name;
  }
  function getAge() {
    return age
  }
  function setAge(newAge) {
    if (newAge > age) {
      age = newAge;
    }
  }
  return {
    getName: getName,
    getAge: getAge,
    setAge: setAge
  }
}



