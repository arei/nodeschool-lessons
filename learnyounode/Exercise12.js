"use strict";

var http = require("http");
var map = require("through2-map");

var port = process.argv[2];

var server = http.createServer(function(request,response) {
	request.pipe(map(function(data) {
	  return data.toString().toUpperCase();
	})).pipe(response);
});
server.listen(port);




