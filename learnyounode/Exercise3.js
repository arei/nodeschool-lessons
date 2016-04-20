"use strict";

var fs = require("fs");

var args = process.argv;
var filename = args[2];

var str = fs.readFileSync(filename,"utf8");
var matches = str.match(/\n/g);

console.log(matches.length);
