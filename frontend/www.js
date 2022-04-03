const http = require("http");
const fs = require("fs").promises;

const requestListener = function (_req, res) {
  fs.readFile(__dirname + "/index.html").then((contents) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(contents);
  });
};

const server = http.createServer(requestListener);
const host = "localhost";
const port = 8080;

fs.readFile(__dirname + "/index.html")
  .then((contents) => {
    indexFile = contents;
    server.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
    });
  })
  .catch((err) => {
    console.error(`Could not read index.html file: ${err}`);
    process.exit(1);
  });
