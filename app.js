let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let port = 8080;
let users = require("./routes/v1/user");
let plan = require("./routes/v1/plan");
let product = require("./routes/v1/product");
let subscription = require("./routes/v1/subscription");

const connectToMongo = require("./db");
connectToMongo();

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
