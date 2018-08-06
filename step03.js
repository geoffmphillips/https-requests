var https = require('https');

function getAndPrintHTML (options) {
  var output;

  https.get(requestOptions, response => {
    response.setEncoding('utf8');

    response.on('data', data => {
      output += data;
    });

    response.on('end', () => {
      console.log(output);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
