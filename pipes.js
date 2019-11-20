const http = require("http");
const fs = require("fs");

// const writer = fs.createWriteStream(`${__dirname}/pipedLorem.txt`);

// reader.pipe(writer);
// //pipe from readable to writeable

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const reader = fs.createReadStream(`${__dirname}/lorem.txt`, "utf8");
  reader.pipe(res);
});
server.listen(3000, "127.0.0.1", () => {
  console.log("Server is live");
});
