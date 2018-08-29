'use strict';
const exec = require('node-exec-promise').exec;

//Get args from terminal command
const args = process.argv;
const url = args[2];
const filename = args[3];

//Sanity check
console.log(url);
console.log(filename);

//Execute the dectape command
exec('decktape webslides '+url+' '+filename).then(function(out) {
  console.log(out.stdout, out.stderr);
}, function(err) {
  console.error(err);
});