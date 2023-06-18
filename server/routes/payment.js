const express = require("express");
const router = express.Router();
const { razorpayController } = require('../controller/payment/Payment');

router.post("/razorpay", razorpayController);

module.exports = router;
