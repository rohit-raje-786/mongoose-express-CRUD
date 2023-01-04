let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let SubscriptionSchema = new Schema(
  {
    user_id: {
      //user id
      type: String,
      require: true,
    },
    plan_id: {
      //plan id
      type: String,
      require: true,
    },
    subscription_name: {
      // subscription name
      type: String,
      require: true,
    },
    bool_free_trial: {
      //wether the user is getting this plan through free trial or payment
      type: Boolean,
      default: false,
    },
    free_trial_end_date: {
      //end date of free trial
      type: Date,
    },
    start_date: {
      //date when the user subscribed
      type: Date,
    },
    end_date: {
      //date when the user unsubscribed(it can be less than or equal to valid_till)
      type: Date,
    },
    free_trial_period: {
      // no of free trial days
      type: Number,
    },
    grace_period: {
      // free trials days remaining after the trial period is over
      type: Number,
    },
    plan_duration: {
      // plan duration of the subscription
      type: Number,
      require: true,
    },
    valid_till: {
      //scheduled end date of the subscription
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
    previous_subscription_id: {
      // if the user updated the subscription package then the old subscription id will be mapped over here
      type: String,
    },
    money_back_duration: {
      // money refund back duration
      type: Number,
    },
    payment_details: {
      transaction_id: {
        type: String,
      },
      user_id: {
        type: String,
      },
      product_id: {
        type: String,
      },
      amount: {
        type: Number,
      },
      status: {
        //wether the transaction was successfull or not
        type: String,
      },
    },
    allowed_limits: {
      max_queries: {
        type: Number,
        require: true,
      },
      max_results: {
        type: Number,
        require: true,
      },
    },
    end_reason: {
      // reason why the user ended the subscription
      type: String,
    },
    deal_owner: {
      // who referred the subscription
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Subscription", SubscriptionSchema);
