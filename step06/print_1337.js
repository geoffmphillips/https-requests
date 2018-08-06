var getHTML = require("./http-functions.js");

function print1337(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

getHTML(requestOptions, print1337);
