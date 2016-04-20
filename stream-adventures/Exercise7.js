"use strict";

var through = require("through2");
// var split = require("split");
var http = require("http");

var args = process.argv.slice(2);
var port = args[0];

var handler = function(request,response) {
	request.pipe(through(function(buffer,encoding,next) {
		this.push(buffer.toString("utf8").toUpperCase());
		next();
	})).pipe(response);
};

var server = http.createServer(handler);
server.listen(port);

