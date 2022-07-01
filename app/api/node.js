const { MongoClient } = require('mongodb');
const http = require('http');
const port = 3000


// Connection URL
const url = 'mongodb://root:example@mongo:27017/';
const client = new MongoClient(url);

// Database Name
const dbName = 'people';
const colName = 'people';
let db = null;

const requestHandler = (req, res) => {
    const collection = db.collection(colName)
    if (req.url === '/api/people' && req.method === 'GET') {
        collection.find({}).toArray().then(data => {
            res.statusCode = 200;
            res.end(JSON.stringify(data));
        });

    } else if (req.url === '/api/people' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const data = JSON.parse(body);
            collection.insertMany([{ name: data.name }]).then(data => {
                res.statusCode = 200;
                res.end(data.name);
            });
        });
    } else {
        res.statusCode = 404;
        res.end('404: Path not found');
    }
}

const server = http.createServer(requestHandler)

client.connect().then(() => {
    db = client.db(dbName)
    server.listen(port, (err) => {
        if (err) {
          return console.log('something bad happened', err)
        }
      
        console.log(`server is listening on ${port}`)
      })
      
})
