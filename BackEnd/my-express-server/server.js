const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1> Hello world </h1>");
});

app.get("/contact", function (req, res) {
  res.send("contacy me: ashen60438@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("name: ashen");
});

app.get("/help", function (req, res) {
  res.send("support help me.");
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
