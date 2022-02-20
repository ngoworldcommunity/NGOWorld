//* All routes related to club's LOGIN AND REGISTER

const express = require("express");
const Club = require("../models/ClubsSchema");
const User = require("../models/UserSchema");
const router = express.Router();

//* Route 1  - Show all avaialble Users in the DB
router.get("/allusers", async (req, res) => {
  try {
    const allusers = await User.find({});
    return res.json(allusers);
  } catch (error) {
    return res.status(500);
  }
});

// * Route 2 - Show all available Clubs in the DB
router.get("/allclubs", async (req, res) => {
  try {
    const allClubs = await Club.find({});
    return res.json(allClubs);
  } catch (error) {
    return res.status(500);
  }
});

//* Route 3 - Show all the other events

module.exports = router;
