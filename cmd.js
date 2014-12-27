#!/usr/bin/env node

var jstohtml = require('./');
var concat = require('concat-stream');

process.stdin
  .pipe(concat(function(data) {
    process.stdout.write(jstohtml(data));
  }))
