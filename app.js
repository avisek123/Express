const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hi from the express");
});
app.get("/about", (req, res) => {
  res.send("Hi from About");
});
app.listen(4000, () => {
  console.log("Listening the port from 4000");
});
