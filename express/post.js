const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use("/", express.static("styles"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/res.html", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.send("yo");
});

app.listen(3000, () => {
  console.log("Server is live");
});
