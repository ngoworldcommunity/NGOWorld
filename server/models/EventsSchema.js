const mongoose = require("mongoose");

const EventsSchema = mongoose.Schema({
  Eventname: {
    type: String,
  },
  Eventlocation: {
    type: String,
  },
  Eventdate: {
    type: String,
  },
  Eventdescription: {
    type: String,
  },
});

module.exports = mongoose.model("Events", EventsSchema);
