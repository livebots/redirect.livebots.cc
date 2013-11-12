var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(301,
    {Location: 'http://livebots.azurewebsites.net/'}
  );
  res.end();
}).listen(process.env.PORT || 8080);
