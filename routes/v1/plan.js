let express = require("express");
let plan = require("../../controller/plan");
let router = express.Router();

router.route("/addPlan").post(plan);
module.exports = router;
