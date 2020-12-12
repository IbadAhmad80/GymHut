const express = require("express");
const Products = require("../Schemas/productSchema");
const router = express.Router();

router.get("/allProducts", async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Products.find().limit(12);
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
