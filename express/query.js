const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(req.query);
  res.send(req.query.name);
});

app.listen(3000, () => {
  console.log("Server is live");
});
