const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const reader = fs.createReadStream(`${__dirname}/index.html`, "utf8");
  reader.pipe(res);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("HTML being served");
});
