const express = require("express");
const router = express.Router();
const { getAllUser, getClub, getAllEvent } = require('../controller/display/Display');

//* Route 1  - Show all avaialble Users in the DB
router.get("/allusers", getAllUser);

// * Route 2 - Show all available Clubs in the DB
router.get("/clubs", getClub);

//* Route 3 - Show all the other events
router.get("/allevents", getAllEvent);

module.exports = router;
