var express = require("express");
var quizzes = require('./quizzes.json'); // json file path
var questions = require('./questions.json'); // json file path
var app = express();


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/quizzes", function (req, res, next) {
  res.send(quizzes);
});

app.get("/questions", function (req, res, next) {
  res.send(questions);
});

app.listen(5000, () => console.log('Example app listening on port 5000!'));