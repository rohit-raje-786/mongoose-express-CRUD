let express = require("express");
let Product = require("../models/product");
let router = express.Router();

router.post("/addProduct", async (req, res) => {
  try {
    const { product_name, plan_id } = req.body;

    if (product_name) {
      let newProduct = new Product({
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
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
