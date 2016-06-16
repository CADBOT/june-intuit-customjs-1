var myPromise = new Promise((resolve, reject) => {
  var noErrors = false;
  if (noErrors) {
    resolve(15);
  }
  else {
    reject();
  }
})

myPromise.then((data) => {
  console.log(data);
  console.log('in the then');
}).catch((e) => console.log(e))

console.log('end of main context');

/*
var Sql = require('sql');

var people = Sql.query('select * from people')
Sql.query('select * from people', (err, data) => {
    
})
var people = Sql.query('select * from people').then(data => {

})
*/
