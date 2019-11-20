const http = require("http");
const fs = require("fs");

const read = fs.createReadStream(`${__dirname}/lorem.txt`, "utf8"); //extends from eventEmitter

read.on("data", chunk => {
  console.log(chunk);
});
