const mongoose = require("mongoose");

//Making Schema to store in the database
const dataSchema = new mongoose.Schema({
  _id: {
    type: Number,
    default: 1,
  },
  content: {
    type: String,
    required: true,
  },
});
const Data = new mongoose.model("Data", dataSchema);
module.exports = Data;
