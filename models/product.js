let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ProductSchema = new Schema(
  {
    product_name: {
      type: String,
    },
    plan_id: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
