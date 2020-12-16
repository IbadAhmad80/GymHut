const express = require("express");
const Products = require("../Schemas/productSchema");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51HndUcEynMwgZp7ZkpUr5Gn8XVucBYgvZqt7CBgSfU7HXBsIpfP3WfwQBDWHpIFASzfHNHqyigvoAi6g4ZL7ebAm00m85IKY3n"
);
const uuid = require("uuid");

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

router.get("/pricey", async (req, res) => {
  try {
    const products = await Products.find().sort({
      price: -1,
    });
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/cheapest", async (req, res) => {
  try {
    const products = await Products.find().sort({
      price: 0,
    });
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:name", async (req, res) => {
  try {
    const product = await Products.find({ name: req.params.name });
    res.json(product);
  } catch (error) {
    res.send(401).send(error);
  }
});

router.put("/productCustomers", async (req, res) => {
  try {
    console.log(`product name ${req.body.name}`);
    console.log(
      `email ${req.body.data.email} \n user ${req.body.data.name} \n product quantity ${req.body.data.quantity}`
    );
    const product = Products.updateOne(
      { name: req.body.name },
      { $push: { buyers: req.body.data } }
    );
    res.json(product);
  } catch (error) {
    console.log(`error is : ${error}`);
    res.status(401).send(error);
  }
});

router.post("/productPayment", async (req, res) => {
  try {
    console.log(req.body.token);
    const customer = await stripe.customers.create({
      email: req.body.token.email,
      source: req.body.token.id,
    });

    const idempotencyKey = uuid.v4();

    const charge = await stripe.charges.create(
      {
        amount: req.body.totalPrice,
        currency: "usd",
        customer: customer,
        receipt_email: req.body.token.email,
        description: `Purchased the ${req.body.totalPrice}$ prodcucts from Gym Accesories`,
      },
      {
        idempotencyKey,
      }
    );
    status = "success";
    res.json({ status: status });
  } catch (error) {
    status = "failure";
    console.log(`error is in stripe payment : ${error}`);
    res.json({ status: status });
  }
});

module.exports = router;
