"use strict";

var through = require("through2");

var thru = through(function(buffer,encoding,next) {
	this.push(buffer.toString("utf8").toUpperCase());
	next();
});

process.stdin.pipe(thru).pipe(process.stdout);