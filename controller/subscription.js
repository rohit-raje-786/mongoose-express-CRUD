let express = require("express");
let Subscription = require("../models/subscription");
let router = express.Router();

router.post("/addSubscription", async (req, res) => {
  try {
    const {
      user_id,
      plan_id,
      subscription_name,
      bool_free_trial,
      free_trial_end_date,
      start_date,
      end_date,
      free_trial_period,
      grace_period,
      plan_duration,
      valid_till,
      source,
      is_active,
      agreed_price,
      grace_period_end_date,
      previous_subscription_id,
      money_back_duration,
      payment_details,
      allowed_limits,
      end_reason,
      deal_owner,
    } = req.body;

    if (
      user_id &&
      plan_id &&
      subscription_name &&
      plan_duration &&
      start_date &&
      valid_till &&
      agreed_price &&
      grace_period_end_date &&
      allowed_limits.max_queries &&
      allowed_limits.max_results
    ) {
      let newSubscription = new Subscription({
        user_id: user_id,
        plan_id: plan_id,
        subscription_name: subscription_name,
        bool_free_trial: bool_free_trial,
        free_trial_end_date: free_trial_end_date,
        start_date: start_date,
        end_date: end_date,
        free_trial_period: free_trial_period,
        grace_period: grace_period,
        plan_duration: plan_duration,
        valid_till: valid_till,
        source: source,
        is_active: is_active,
        agreed_price: agreed_price,
        grace_period_end_date: grace_period_end_date,
        previous_subscription_id: previous_subscription_id,
        money_back_duration: money_back_duration,
        payment_details: payment_details,
        allowed_limits: allowed_limits,
        end_reason: end_reason,
        deal_owner: deal_owner,
      });
      newSubscription.save(function (err, subscription) {
        if (err) {
          console.log(err);
          return res.status(500).json({ msg: "error saving subscription" });
        } else {
          console.log(subscription);
          return res.status(201).send(subscription);
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
