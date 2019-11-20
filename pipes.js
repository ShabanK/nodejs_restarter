const http = require("http");
const fs = require("fs");

const reader = fs.createReadStream(`${__dirname}/lorem.txt`, "utf8");
const writer = fs.createWriteStream(`${__dirname}/pipedLorem.txt`);

reader.pipe(writer);
//pipe from readable to writeable
