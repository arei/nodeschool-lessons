"use strict";

var filteredDirectoryListing = require("./Exercise6Module");

var args = process.argv;
var dir = args[2];
var ext = args[3];

filteredDirectoryListing(dir,ext,function(err,data){
	data.forEach(function(file){
		console.log(file);
	});
});