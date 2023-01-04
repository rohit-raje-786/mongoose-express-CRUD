var express = require("express");
var Plan = require("../models/plan");
var router = express.Router();

router.post("/addPlan", async (req, res) => {
  const {
    plan_name,
    quoted_price,
    discount,
    is_active,
    free_trial,
    grace_trial,
    allowed_limits,
  } = req.body;

  if (
    plan_name &&
    quoted_price &&
    discount &&
    free_trial &&
    grace_trial &&
    allowed_limits.max_queries &&
    allowed_limits.max_queries
  ) {
    var newPlan = new Plan({
      plan_name: plan_name,
      quoted_price: quoted_price,
      discount: discount,
      is_active: is_active,
      free_trial: free_trial,
      grace_trial: grace_trial,
      allowed_limits: allowed_limits,
    });
    newPlan.save(function (err, plan) {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "error saving product" });
      } else {
        console.log(plan);
        return res.status(201).send(plan);
      }
    });
  } else {
    return res.status(400).json({ msg: "Bad Request" });
  }
});
module.exports = router;
