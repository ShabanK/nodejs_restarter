const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/two", (req, res) => {
  res.send("Hello also");
});

app.listen(3000);
