module.exports = function(js) {
  var html = "<html><body><script>";
  html += js;
  html += "</script></body></html>";
  return html;
}
