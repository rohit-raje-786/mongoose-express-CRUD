var express = require("express");
var Subscription = require("../models/subscription");
var router = express.Router();

router.post("/addSubscription", async (req, res) => {
  const {
    user_id,
    plan_id,
    subscription_name,
    free_trial,
    subscribe_after_trial,
    date_subscribed,
    date_unsubscribed,
    expiry,
    source,
    is_active,
    agreed_price,
    grace_period_end_date,
    renewal_date,
    payment_details,
    allowed_limits,
  } = req.body;

  if (
    user_id &&
    plan_id &&
    subscription_name &&
    free_trial &&
    expiry &&
    agreed_price &&
    grace_period_end_date &&
    renewal_date &&
    payment_details.transaction_id &&
    payment_details.user_id &&
    payment_details.product_id &&
    payment_details.amount &&
    payment_details.status &&
    allowed_limits.max_queries &&
    allowed_limits.max_queries
  ) {
    var newSubscription = new Subscription({
      user_id: user_id,
      plan_id: plan_id,
      subscription_name: subscription_name,
      subscribe_after_trial: subscribe_after_trial,
      date_subscribed: date_subscribed,
      date_unsubscribed: date_unsubscribed,
      source: source,
      is_active: is_active,
      free_trial: free_trial,
      agreed_price: agreed_price,
      grace_period_end_date: grace_period_end_date,
      renewal_date: renewal_date,
      payment_details: payment_details,
      allowed_limits: allowed_limits,
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
});
module.exports = router;
