'use strict';
const exec = require('node-exec-promise').exec;
const express = require('express');

//Start the server
const app = express();
const httpServer = require('http').createServer(app);
httpServer.listen('3000');

//Run the function
app.get('/', function(req, res) {

  //Get the query params
  const url = decodeURIComponent(req.query.url);
  let filename = decodeURIComponent(req.query.filename);

  //Ensure we have a file extension
  filename.includes('.pdf') ? null : filename += '.pdf';

  url && filename ?
    //Run the decktape command
    exec(`decktape automatic ${url} ${filename}`).then(function(out) {
      console.log(`Created: ${filename}`);
    }, function(e) {
      console.error(e);
    })
  :
    console.error('Please provide query vars "url" and "filename".');
    
  res.end();
  process.exit();

});