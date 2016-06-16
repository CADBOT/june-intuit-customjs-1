var fs = require('fs');

function promiseFs(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(data);
      }
    })
  }); 
}
// chained fs with promise and implicit returns
promiseFs('/some/file').then(data => promiseFs('/other'))
                       .then(data => promiseFs('/yet/another'))

// chained fs promise
promiseFs('/some/file').then(data => {
  //handle data
  console.log(data);
  return promiseFs('/some/other/file/')
}).then(data => {

}).catch(e => {
  //handle error
});

var myFilePromise = promiseFs('/some/file');

// sometime later
myFilePromise.then(data => console.log(data));



function setTimeoutP(time) {
  // TODO return a new promise.
}

setTimeoutP(500).then(() => {

});









