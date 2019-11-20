const http = require("http");

var server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello gamers and ninjas");
});

server.listen(3000, "127.0.0.1");
console.log("YOYO");
