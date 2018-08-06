var getHTML = require("./http-functions.js");

function printReverse(html) {
  output = html.split('').reverse().join('');

  console.log(output);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptions, printReverse);
