// Commonjs. The system used by Node js
// Webpack and browserify will allow you to use CommonJS on the frontend
// Often, even if es6 module syntax is used, it will be compiled to CommonJS

console.log('lib executed')
// exporting a library of functions
module.exports.add = (x, y) => {
 x + y;
}

module.exports.sub = (x, y) => {
 x - y;
}
