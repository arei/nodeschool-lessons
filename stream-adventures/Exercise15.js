"use strict";

var crypto = require("crypto");
var zlib = require("zlib");
var tar = require("tar");
var concat = require("concat-stream");

var args = process.argv.slice(2);
var algorythm = args[0];
var passphrase = args[1];

var decrypt = crypto.createDecipher(algorythm,passphrase);

var parser = tar.Parse();
parser.on("entry",function(entry){
	if (entry.type==="Directory") return;

	var hasher = crypto.createHash("md5", { 
		encoding: "hex" 
	});

	entry.pipe(hasher).pipe(concat(function(hash){
		console.log(hash+" "+entry.path);
	}));
});

process.stdin.pipe(decrypt).pipe(zlib.createGunzip()).pipe(parser);
