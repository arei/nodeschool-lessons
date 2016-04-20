"use strict";

var fs = require("fs");

var args = process.argv;
var filename = args[2];

fs.readFile(filename,"utf8",function(err,data){
	var matches = data.match(/\n/g);

	console.log(matches.length);
});
