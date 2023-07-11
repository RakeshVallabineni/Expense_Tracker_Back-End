const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Budget = new Schema({
  budget: {
    type: Number,
    required: true,
  },
  currentMonth: {
    type: Number,
    required: true,
  },
  userID: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Budget", Budget);
