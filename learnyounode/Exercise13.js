"use strict";

var http = require("http");
var url = require("url");

var port = process.argv[2];

var handleParseTime = function(request,response,params) {
	var iso = params.iso;
	var date = new Date(iso);
	var obj = {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	};
	response.writeHead(200,"application/json");
	response.end(JSON.stringify(obj));
};

var handleUnixTime = function(request,response,params) {
	var iso = params.iso;
	var date = new Date(iso);
	var obj = {
		unixtime: date.getTime()
	};
	response.writeHead(200,"application/json");
	response.end(JSON.stringify(obj));
};

var server = http.createServer(function(request,response) {
	var parsed = url.parse(request.url,true);
	if (parsed.pathname==="/api/parsetime") handleParseTime(request,response,parsed.query);
	else if (parsed.pathname==="/api/unixtime") handleUnixTime(request,response,parsed.query);
	else {
		response.writeHead(404);
		response.end();
	}
});
server.listen(port);




