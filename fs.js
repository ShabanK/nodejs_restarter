const fs = require("fs");

fs.mkdir("dir", err => {
  if (err) console.log(err, "Folder already exists");
});

const write = fs.createWriteStream(".dir/textfile.txt", err => {
  if (err) console.log(err, "File does not exist ");
});

// fs.rmdir("dir", err => {
//   if (err) console.log(err, "Folder does not exist");
// });
