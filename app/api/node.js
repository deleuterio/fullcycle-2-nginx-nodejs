const http = require('http')
const port = 3000

const requestHandler = (req, res) => {
    if (req.url === '/api/people' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.statusCode = 200;
        res.end(JSON.stringify(['Welcome Home', 'Doug', 'Annie']));
    } else if (req.url === '/people' && req.method === 'POST') {
        // res.write('Doug');
        res.end('ok');
    } else {
        res.statusCode = 404;
        res.end('404: Path not found');
    }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
