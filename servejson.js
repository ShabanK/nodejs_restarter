const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const json = {
    name: "Shaban",
    age: 20,
    problems: "CSS"
  };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(json));
});

server.listen(3000, "127.0.0.1", () => {
  console.log("JSON being served");
});
