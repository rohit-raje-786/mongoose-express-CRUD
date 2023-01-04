var express = require("express");
var product = require("../../controller/product");
var router = express.Router();

router.route("/addProduct").post(product);
module.exports = router;
