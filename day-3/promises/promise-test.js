var p = new Promise((resolve, reject) => {
  reject('yo');
});

p.then(d => {
  console.log(d);
}).catch(e => {
  console.log(e);
});
console.log('hi');

var fs = require('fs');

function pFs(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      resolve(data)
    });
  });
}

var p = pFs('./promise-test.js');
p.then(d => console.log(d))
