const express = require("express");
const Club = require("../models/ClubsSchema");
const User = require("../models/UserSchema");
const Events = require("../models/EventsSchema");
const router = express.Router();

const shortid = require("shortid");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

router.post("/razorpay", async (req, res) => {
  const payment_capture = 1;
  const amount = parseInt(req.body.donatedmoney);
  console.log(typeof amount);
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
