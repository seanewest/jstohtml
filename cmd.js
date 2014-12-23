#!/usr/bin/env node

var concat = require('concat-stream');

var scriptToIndex = function(script) {
  var html = "<html><body><script>";
  html += script;
  html += "</script></body></html>";
  return html;
}

process.stdin
  .pipe(concat(function(data) {
    process.stdout.write(scriptToIndex(data));
  }))
