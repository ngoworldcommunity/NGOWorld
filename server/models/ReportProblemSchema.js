const mongoose = require("mongoose");

const ReportProblemSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  reportmessage: {
    type: String,
    required: true,
  },
},
  {timestamps: true}
);

module.exports = mongoose.model("report", ReportProblemSchema);
