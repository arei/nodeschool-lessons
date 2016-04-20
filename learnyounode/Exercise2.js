"use strict";

// Get args
var args = process.argv;
// Strip off the first two items in args
args = args.slice(2);

// The fancy way
var sum = args.reduce(function(prev,current){
	return prev+parseInt(current,10);
},0);

// Write it out
console.log(sum);
