//Avery Guillermo
//This is the server.js file.

//This code was obtained from the following websites:
// https://www.tutorialspoint.com/nodejs/nodejs_web_module.htm
// https://stackoverflow.com/questions/28822034/simple-node-js-server-that-sends-htmlcss-as-response

var http = require('http');
var fs = require('fs');
var url = require('url');


// Create a server
http.createServer( function (request, response) {
                  // Parse the request containing file name
                  var pathname = url.parse(request.url).pathname;
                  
                  // Print the name of the file for which request is made.
                  console.log("Request for " + pathname + " received.");
                  
                  // Read the requested file content from file system
                  fs.readFile(pathname.substr(1), function (err, data) {
                              if (err) {
                              console.log(err);
                              // HTTP Status: 404 : NOT FOUND
                              // Content Type: text/plain
                              response.writeHead(404, {'Content-Type': 'text/html'});
                              }
                              else {
                              //check what type of file the request is
                              var dotoffset = request.url.lastIndexOf('.');
                              var mimetype = dotoffset == -1
                              ? 'text/plain'
                              : {
                              '.html' : 'text/html',
                              '.ico' : 'image/x-icon',
                              '.jpg' : 'image/jpeg',
                              '.png' : 'image/png',
                              '.gif' : 'image/gif',
                              '.css' : 'text/css',
                              '.js' : 'text/javascript'
                              }[ request.url.substr(dotoffset) ];
                              response.setHeader('Content-type' , mimetype);
                              response.write(data.toString());
                              }
                              // Send the response body
                              response.end();
                              
                              });
                  }).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
