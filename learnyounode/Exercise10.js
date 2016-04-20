"use strict";

var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

var server = net.createServer(function (socket) {
	var timestr = strftime("%F %H:%M");
	socket.end(timestr,"utf8");
});
server.listen(port);