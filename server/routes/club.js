//* All routes related to club's LOGIN AND REGISTER

const express = require("express");
const router = express.Router();
const { clubRegister, clubLogin, createClubEvent } = require('../controller/club/Club');
//* Route 1  - Club Registration

router.post("/register", clubRegister);

//* Route 2 - Club Login

router.post("/login", clubLogin);

//* Route 3 - Create Event

router.post("/createevent", createClubEvent);

module.exports = router;
