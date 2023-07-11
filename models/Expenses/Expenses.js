const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Expenses = new Schema({
  expenseName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
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
  },
});

module.exports = mongoose.model("Expenses", Expenses);
