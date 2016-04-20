"use strict";

var crypto = require('crypto');

var args = process.argv.slice(2);
var passphrase = args[0];

var decrypt = crypto.createDecipher("aes256",passphrase);
process.stdin.pipe(decrypt).pipe(process.stdout);
