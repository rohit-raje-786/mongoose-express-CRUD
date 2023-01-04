var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SubscriptionSchema = new Schema(
  {
    user_id: {
      //store the user id
      type: String,
      require: true,
    },
    plan_id: {
      //store the plan id
      type: String,
      require: true,
    },
    subscription_name: {
      //store the subscription name
      type: String,
      require: true,
    },
    bool_free_trial: {
      //wether the user is getting this plan through free trial or payment
      type: Boolean,
    },
    free_trial_end_date: {
      //end date of free trial
      type: Date,
    },
    subscribe_after_trial: {
      // does the user subscribe after the free trial ends
      type: Boolean,
      default: false,
    },
    date_subscribed: {
      //date when the user subscribed
      type: Date,
    },
    date_unsubscribed: {
      //date when the user unsubscribed
      type: Date,
    },
    expiry: {
      //expiry date of the subscription
      type: Date,
      require: true,
    },
    source: {
      //from where the user landed on the subscription page
      type: String,
      default: "website",
    },
    is_active: {
      // does the subscription plan is still active?
      type: Boolean,
      default: true,
    },
    agreed_price: {
      // the selling price of the product
      type: Number,
      require: true,
    },
    grace_period_end_date: {
      // grace period of the subscription
      type: Date,
      require: true,
    },
    renewal_date: {
      // date when the subscription was renewed again
      type: Date,
      require: true,
    },
    payment_details: {
      //payment details
      transaction_id: {
        type: String,
        require: true,
      },
      user_id: {
        type: String,
        require: true,
      },
      product_id: {
        type: String,
        require: true,
      },
      amount: {
        type: Number,
        require: true,
      },
      status: {
        //wether the transaction was successfull or not
        type: String,
        require: true,
      },
    },
    allowed_limits: {
      max_queries: {
        type: Number,
        require: true,
      },
      max_result: {
        type: Number,
        require: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Subscription", SubscriptionSchema);
