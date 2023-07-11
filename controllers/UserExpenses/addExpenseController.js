const Expenses = require("../../models/Expenses/Expenses.js");

exports.addExpense = async (req, res, next) => {
  try {
    const { expenseName, amount, date, currentMonth } = req.body;
    const userID = req.UserID;

    if (
      expenseName != "" ||
      amount != "" ||
      date != "" ||
      currentMonth != "" ||
      expenseName != null ||
      amount != null ||
      date != null ||
      currentMonth != null
    ) {
      const saveExpenseResponse = await new Expenses({
        expenseName: expenseName,
        amount: amount,
        date: date,
        currentMonth: currentMonth,
        userID: userID,
      });
      if (await saveExpenseResponse.save()) {
        res.status(200).json({ message: "Saved Successfully" });
      }
    }
  } catch (err) {
    res.status(404).json({ message: "Something Went Wrong" });
  }
};
