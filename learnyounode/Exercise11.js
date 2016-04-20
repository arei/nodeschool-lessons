"use strict";

var http = require("http");
var fs = require("fs");

var port = process.argv[2];
var filename = process.argv[3];

var server = http.createServer(function(request,response) {
	response.writeHead(200,"text/plain");
	var file = fs.createReadStream(filename);
	file.pipe(response);
});
server.listen(port);