const Budget = require("../../models/Expenses/budget.js");

exports.addBudget = async (req, res, next) => {
  try {
    const { budget, currentMonth } = req.body;
    const userID = req.UserID;
    const budgetResponse = new Budget({
      budget: budget,
      currentMonth: currentMonth,
      userID: userID,
    });
    if (await budgetResponse.save()) {
      res.status(200).json({ message: "Saved Successfully" });
    }
  } catch (err) {
    if (err.code === 11000) {
      res
        .status(409)
        .json({ message: "Budget is already fixed for this month!" });
    } else {
      res.status(404).json({ message: "Something Went Wrong" });
    }
  }
};
