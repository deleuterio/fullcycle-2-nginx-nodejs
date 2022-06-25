const http = require('http');

const requestListener = function (req, res) {
    if (req.url === '/people' && req.method === 'GET') {
        res.end(['Welcome Home', 'Doug', 'Annie']);
    } else if (req.url === '/people' && req.method === 'POST') {
        res.end('Doug');
    } else {
        res.statusCode = 404;
        res.end('404: Path not found');
    }
};

const server = http.createServer(requestListener);
const host = 'localhost';
const port = 3000;

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
