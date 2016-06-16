var fs = require('fs');

fs.readFile('./without-promises.js', (err, data) => {
  if (err) {
    //handle the err
    return
  }
  console.log('first file is finished');
  fs.readFile('./without-promises.js', (err, data) => {
    if (err) {
      //handle the err
      return
    }
    console.log('second file is finished');
    fs.readFile('./without-promises.js', (err, data) => {
      if (err) {
        //handle the err
        return
      }
      console.log('third file is finished');
      fs.readFile('./without-promises.js', (err, data) => {
        if (err) {
          //handle the err
          return
        }
        console.log('third file is finished');
      });
    });
  });
});

console.log('first file finished');
console.log('second file finished');
console.log('third file finished');
