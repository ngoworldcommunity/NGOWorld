const shortid = require("shortid");
const Razorpay = require("razorpay");
const { paymentSchema } = require('../../validation/payment')

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const razorpayController = async (req, res) => {

  try {
    const payload = await paymentSchema.validateAsync(req.body);
    const payment_capture = 1;
    const amount = payload.amount * 100;

    const currency = "INR";

    const options = {
      amount: amount,
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };


    const response = await razorpay.orders.create(options);
    return res.status(200).json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  razorpayController
};