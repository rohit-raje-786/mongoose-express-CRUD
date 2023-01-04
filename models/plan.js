let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let PlanSchema = new Schema(
  {
    plan_name: {
      //store the plan name
      type: String,
      require: true,
    },
    plan_duration: {
      type: Number,
      require: true,
    },
    product_id: {
      type: String,
      require: true,
    },
    quoted_price: {
      //store the current price
      type: Number,
      require: true,
    },
    discount: {
      //store the discount on the given plan
      type: Number,
      deafult: 0,
    },
    is_active: {
      //wether the plan is still active or not
      type: Boolean,
      default: true,
    },
    bool_free_trial: {
      //wethere the free trial plan is still active
      type: Boolean,
      deafult: false,
    },
    free_trial_period: {
      // no of free trial days
      type: Number,
    },
    grace_period: {
      // free trials days remaining after the trial period is over
      type: Number,
    },
    money_back_duration: {
      // money refund back duration
      type: Number,
    },
    allowed_limits: {
      max_queries: {
        // max queries the user can execute
        type: Number,
        require: true,
      },
      max_results: {
        //max result the user can get
        type: Number,
        require: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Plan", PlanSchema);
