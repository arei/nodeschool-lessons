"use strict";

var http = require("http");

var url = process.argv[2];

http.get(url,function(response){
	response.setEncoding("utf8");

	var content = "";

	response.on("error",function(err){
		console.error(err);
	});
	response.on("end",function(){
		console.log(content.length);
		console.log(content);
	});
	response.on("data",function(data){
		content += data;
	});
});