"use strict";

var duplexer = require("duplexer2");
var through = require("through2").obj;

module.exports = function (counter) {
	var countries = {};
	
	var thru = through(function(obj,encoding,next) {
		var country = obj.country || "??";
		countries[country] = countries[country] && countries[country]+1 || 1;

		next();
	},function(done){
		counter.setCounts(countries);
		done();
	});
	return duplexer(thru,counter);
};
