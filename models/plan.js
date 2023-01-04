var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PlanSchema = new Schema(
  {
    plan_name: {
      //store the plan name
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
      require: true,
    },
    is_active: {
      //wether the plan is still active or not
      type: Boolean,
      default: true,
    },
    bool_free_trial: {
      //wethere the free trial plan is still active
      type: Boolean,
    },
    free_trial_period: {
      type: Number,
      require: true,
    },
    grace_period: {
      // no of days after the free trial as expired,
      type: Number,
      require: true,
    },
    allowed_limits: {
      max_queries: {
        // max queries the user can execute
        type: Number,
        require: true,
      },
      max_result: {
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
