const Club = require("../../schema/club/ClubSchema");
const User = require("../../schema/user/UserSchema");
const Events = require("../../schema/club/EventSchema");

//* Controller 1  - Show all avaialble Users in the DB
const getAllUser = async (req, res) => {
  try {
    const allusers = await User.find({});
    res.status(200).json(allusers);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// * Controller 2 - Show all available Clubs in the DB
const getClub = async (req, res) => {
  try {
    if (req.query.id) {
      const clubdetails = await Club.findById(req.query.id);
      return res.status(200).json(clubdetails);
    }
    const allClubs = await Club.find({});
    res.json(allClubs);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//* Controller 3 - Show all the other events
const getAllEvent = async (req, res) => {
  try {
    const allEvents = await Events.find({});
    res.json(allEvents);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllUser,
  getAllEvent,
  getClub
};
