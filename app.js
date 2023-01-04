var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = 8080;
var db = "mongodb://localhost:27017/reunion";

var users = require("./routes/user");
var product = require("./routes/product");
var plan = require("./routes/plan");
var subscription = require("./routes/subscription");

mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((res) => console.log("Connected to DB"));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/v1/users", users);
app.use("/v1/product", product);
app.use("/v1/plan", plan);
app.use("/v1/subscription", subscription);

app.get("/", function (req, res) {
  console.log("app starting on port: " + port);
  res.send("tes express nodejs mongodb");
});

app.listen(port, function () {
  console.log("app listening on port: " + port);
});
