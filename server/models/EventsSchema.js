const mongoose = require("mongoose");

const EventsSchems = mongoose.Schema({
  Eventname: {
    type: String,
  },
  Eventlocation: {
    type: String,
  },
  Eventdate: {
    type: Date,
    default: new Date(),
  },
  Eventdescription: {
    type: String,
  },
});

module.exports = mongoose.model("Events", EventsSchema);
