"use strict";

var fs = require("fs");
var path = require("path");

var args = process.argv;
var dir = args[2];
var ext = "."+args[3];

fs.readdir(dir,function(err,files){
	files.filter(function(file){
		return path.extname(file)===ext;
	}).forEach(function(file){
		console.log(file);
	});
});
