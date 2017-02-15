// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World neu 4\nZeile2");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(process.env.PORT);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1" + process.env.PORT );      