"use strict";

var fs = require("fs");
var path = require("path");

var filteredDirectoryListing = function(dir,ext,callback) {
	fs.readdir(dir,function(err,files){
		if (err) return callback(err);
		
		ext = "."+ext;
		callback(null,files.filter(function(file){
			return path.extname(file)===ext;
		}));
	});
};

module.exports = filteredDirectoryListing;


