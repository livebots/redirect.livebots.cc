var http = require('http');
http.createServer(function (req, res) {
  var path = req.url || '' 
  res.writeHead(301,
    {Location: 'http://livebots.azurewebsites.net' + path}
  );
  res.end();
}).listen(process.env.PORT || 8080);
