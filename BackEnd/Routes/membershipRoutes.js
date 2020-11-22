const { json } = require("body-parser");
const express = require("express");
const Members = require("../Schemas/membershipSchema");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51HndUcEynMwgZp7ZkpUr5Gn8XVucBYgvZqt7CBgSfU7HXBsIpfP3WfwQBDWHpIFASzfHNHqyigvoAi6g4ZL7ebAm00m85IKY3n"
);
const uuid = require("uuid");
const {
  registerValidation,
  loginValidation,
} = require("../Schemas/joiValidations");

router.get("/", async (req, res) => {
  try {
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/signIn", async (req, res) => {
  // console.log(`Data of Existed Member : ${req.body.email.toLowerCase()}`);
  try {
    const { error } = loginValidation(req.body);
    if (error) res.status(400).send(error.details[0].message);
    const members = await Members.find({
      email: req.body.email.toLowerCase(),
      password: req.body.password,
    });
    if (Object.entries(members).length !== 0) {
      res.json(members);
    } else {
      res.status(401).send("No account of this data exist ");
    }
  } catch (error) {
    res.json({ message: "error" });
  }
});

router.post("/", async (req, res) => {
  try {
    // console.log(`Data of New Member : ${req.body.fullName}`);
    const { error } = registerValidation(req.body);
    console.log("error", error);
    if (error) {
      res.status(400).send(error.details[0].message);
    }

    const members = await Members.find({ email: req.body.email });
    if (Object.entries(members).length !== 0) {
      res.status(406).send("ID already Exist !! Try another ");
    } else {
      const members = new Members({
        name: req.body.fullName,
        email: req.body.email.toLowerCase(),
        password: req.body.password,
        contact: req.body.phoneNumber,
        type: req.body.membership,
      });
      members
        .save()
        .then((data) => {
          res.status(200).send("User has been addedd successfully");
          res.json(data);
        })
        .catch((error) => {
          res.json({ message: error });
        });
    }
  } catch (error) {
    res.json({ message: "error" });
  }
});

router.post("/payment", async (req, res) => {
  let error;
  let status;
  try {
    const { membership, token } = req.body;
    console.log("membership we got : ", membership);
    console.log("email we got :", token.email);
    const member = await Members.find(
      {
        type: "",
        email: token.email,
      },
      (error, msg) => {
        if (msg !== null) console.log(msg);
        else console.log("null ");
      }
    );
    if (Object.entries(member).length === 0) {
      console.log("Already a member");
      res.status(403).send("You are already a Member");
    } else {
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
      });

      const idempotency_key = uuid.v4();
      const charge = await stripe.charges.create(
        {
          amount:
            membership === "Standard"
              ? 12 * 100
              : membership === "Pro"
              ? 25 * 100
              : 39 * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the ${membership} membership`,
        },
        {
          idempotency_key,
        }
      );

      // console.log(`Token email ${token.email}`);
      await Members.updateOne(
        { email: token.email },
        { $set: { payment: "done", type: membership } }
      );
      status = "success";
      res.json({ status: status });
    }
  } catch (error) {
    status = "failure";
    console.log("error : ", error);
    res.json({ status: status });
  }
});
module.exports = router;
