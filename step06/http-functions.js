var https = require('https');
var output = "";

module.exports = function getHTML(options, callback) {

  https.get(options, response => {
    response.setEncoding('utf8');

    response.on('data', data => {
      output += data;
    });

    response.on('end', () => {
      return callback(output);
    });
  });
};
