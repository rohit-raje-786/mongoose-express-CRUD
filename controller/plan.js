let express = require("express");
let Plan = require("../models/plan");
let router = express.Router();

router.post("/addPlan", async (req, res) => {
  try {
    const {
      plan_name,
      plan_duration,
      product_id,
      quoted_price,
      discount,
      is_active,
      free_trial,
      grace_trial,
      allowed_limits,
    } = req.body;

    if (
      plan_name &&
      plan_duration &&
      quoted_price &&
      product_id &&
      allowed_limits.max_queries &&
      allowed_limits.max_results
    ) {
      let newPlan = new Plan({
        plan_name: plan_name,
        plan_duration: plan_duration,
        product_id: product_id,
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
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
