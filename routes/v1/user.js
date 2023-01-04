let express = require("express");
let router = express.Router();
let user = require("../../controller/user");

router.route("/register").post(user);

module.exports = router;
