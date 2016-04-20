"use strict";

var concat = require("concat-stream");

var reverse = function(buffer) {
	var str = buffer.toString("utf8");
	var rev = "";
	for (var i=0;i<str.length;i++) rev += str.charAt(str.length-i-1);
	return rev;
};

process.stdin.pipe(concat(function(data){
	console.log(reverse(data));
}));