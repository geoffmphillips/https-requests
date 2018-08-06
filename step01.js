var https = require('https');

var requestOptions = {
  host: "github.com",
  path: "/"
};

https.get(requestOptions, function(response) {
  response.setEncoding('utf8');

  response.on('data', function(data) {
    console.log('Chunk Received. Length: ', data.length);
  });

  response.on('end', function() {
    console.log('response stream complete.');
  });

});
