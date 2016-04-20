"use strict";

var through = require("through2");
var split = require("split");

var linecount = 0;
var thru = through(function(buffer,encoding,next) {
	var line = buffer.toString("utf8");

	linecount += 1;
	var even = linecount % 2===0;

	if (even) this.push(line.toUpperCase()+"\n");
	else this.push(line.toLowerCase()+"\n");

	next();
});

process.stdin.pipe(split()).pipe(thru).pipe(process.stdout);