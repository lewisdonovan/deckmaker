'use strict';
const util = require('util');

const args = process.argv;
const url = args[2];
const filename = args[3];

const exec = util.promisify(require('child_process').exec);
async function createPdf() {
  const { stdout, stderr } = await exec('decktape '+url+' webslides '+filename);
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}

createPdf();