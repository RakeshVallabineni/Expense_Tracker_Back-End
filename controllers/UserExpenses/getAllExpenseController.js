const Expenses = require("../../models/Expenses/Expenses.js");

exports.getAllExpense = async (req, res, next) => {
  try {
    const userID = req.UserID;
    const getAllExpenses = await Expenses.find({ userID: userID }).sort({
      date: -1,
    });
    if (getAllExpenses) {
      res
        .status(200)
        .json({ message: "Saved Successfully", data: getAllExpenses });
    }
  } catch (err) {
    res.status(404).json({ message: "Something Went Wrong" });
  }
};
