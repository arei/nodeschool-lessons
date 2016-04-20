"use strict";

var combine = require("stream-combiner");
var split = require("split");
var through = require("through2");
var zlib = require("zlib");

module.exports = function() {
    var books = {};
    var current = null;

    var thru = through(function(buffer,encoding,next){
        var line = buffer.toString("utf8");
        if (!line) return next();

        var obj = JSON.parse(line);
        if (obj.type==="genre") {
            current = obj.name;
        }
        
        if (current) {
            books[current] = books[current] || [];
            if (obj.type==="book") books[current].push(obj.name);
        }

        next();
    },function(done){
        var me = this;
        Object.keys(books).forEach(function(genre){
            var row = {
                name: genre,
                books: books[genre]
            };
            var json = JSON.stringify(row);
            me.push(json+"\n");
        });
        done();
    });

    return combine(split(),thru,zlib.createGzip());
};

