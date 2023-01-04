var express = require("express");
let subscription = require("../../controller/subscription");
var router = express.Router();

router.route("/addSubscription").post(subscription);
module.exports = router;
