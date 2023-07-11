const mongoose = require("mongoose");
async function DataBaseConnection() {
  const response = await mongoose.connect(
    `mongodb+srv://${process.env.MONGOOSE_USERNAME}:${process.env.MONGOOSE_PASSWORD}@expense-tracker.h6a6qxo.mongodb.net/expense-tracker?retryWrites=true&w=majority`
  );
  if (response) {
    console.log("connected");
  } else {
    console.log("something went wrong");
  }
}

module.exports = DataBaseConnection;

// const Model = require('../models/userAccess/user.js');

// async function truncateCollection() {
//   try {
//     await Model.deleteMany();
//     console.log('truncated successfully.');
//   } catch (error) {
//     console.error(error);
//   }
// }

// truncateCollection();
