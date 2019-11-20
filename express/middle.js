const express = require("express");
const app = express();

app.use("/", express.static("styles"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(3000, () => {
  console.log("Server is live");
});
