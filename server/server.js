var http = require('http')
    url = '127.0.0.1'
    port = 1337
    sensor = '28-0000053075a1';

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(port, url);

console.log('Server running at http://' + url + ':' + port + '/');