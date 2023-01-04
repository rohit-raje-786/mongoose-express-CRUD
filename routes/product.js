var express = require("express");
var Product = require("../models/product");
var router = express.Router();

router.post("/addProduct", async (req, res) => {
  const { product_name, plan_id } = req.body;

  if (product_name) {
    var newProduct = new Product({
      product_name: product_name,
      plan_id: plan_id,
    });
    newProduct.save(function (err, product) {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "error saving product" });
      } else {
        console.log(product);
        return res.status(201).send(product);
      }
    });
  } else {
    return res.status(400).json({ msg: "Bad Request" });
  }
});
module.exports = router;
