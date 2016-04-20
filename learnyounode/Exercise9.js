"use strict";

var http = require("http");

var urls = process.argv.slice(2);
var results = [];

var get = function(url,callback) {
	http.get(url,function(response){
		response.setEncoding("utf8");

		var content = "";

		response.on("error",function(err){
			callback(err);
		});
		response.on("end",function(){
			callback(null,content);
		});
		response.on("data",function(data){
			content += data;
		});
	});
};

var done = function() {
	if (!urls.every(function(s){
		return s===null;
	})) return;

	results.forEach(function(result){
		console.log(result);
	});
};

urls.forEach(function(url,i){
	get(url,function(err,data){
		if (err) {
			console.error(err);
		}
		else {
			urls[i] = null;
			results[i] = data;
			done();
		}
	});
});



