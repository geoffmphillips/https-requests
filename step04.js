var https = require('https');

function getHTML (options, callback) {
  var output;

  https.get(requestOptions, response => {
    response.setEncoding('utf8');

    response.on('data', data => {
      output += data;
    });

    response.on('end', () => {
      printHTML(output);
    });
  });
}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions);
