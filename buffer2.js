const http = require("http");
const fs = require("fs");

const read = fs.createReadStream(`${__dirname}/lorem.txt`, "utf8");
const writer = fs.createWriteStream(`${__dirname}/loremwritten.txt`);

read.on("data", chunk => {
  console.log("chunk received");
  writer.write(chunk);
});
