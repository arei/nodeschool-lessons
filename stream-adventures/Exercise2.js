"use strict";

var fs = require('fs');

var args = process.argv.slice(2);
var filename = args[0];

fs.createReadStream(filename).pipe(process.stdout);