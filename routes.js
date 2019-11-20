const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const reader = fs.createReadStream(`${__dirname}/index.html`);
    reader.pipe(res);
  } else if (req.url === "/second") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const reader = fs.createReadStream(`${__dirname}/second.html`);
    reader.pipe(res);
  } else if (req.url === "/jsonn") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const jsonn = {
      name: "Luigi",
      state: "depressed"
    };
    console.log("hey json");
    res.end(JSON.stringify(jsonn));
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Your routes have been set");
});
