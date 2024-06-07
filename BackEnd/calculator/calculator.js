const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/calculator", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("Answer ;" + result);
});

app.post("/bmicalculator", function (req, res) {
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var bmi = weight / height ** 2;
  res.send("Your BMI value is: " + bmi);
});

app.listen(4000, function () {
  console.log("Serever is running on port 4000.");
});
