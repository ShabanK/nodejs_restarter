const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Landing page");
});
app.get("/id/:name", (req, res) => {
  res.send(`This is the page for ${req.params.name}`);
});
app.listen(3000, () => {
  console.log("Server is live");
});
