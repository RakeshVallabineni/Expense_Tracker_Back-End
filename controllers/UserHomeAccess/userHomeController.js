const Expenses = require("../../models/Expenses/Expenses.js");
const Budget = require("../../models/Expenses/budget.js");

exports.getMothlyBudget = async (req, res, next) => {
  try {
    const { currentMonth } = req.body;
    const IdVerification = req.UserID;
    const checkBudget = await Budget.findOne({
      userID: IdVerification,
      currentMonth: currentMonth,
    });

    if (checkBudget) {
      const expensesResponse = await Expenses.find({
        userID: IdVerification,
        currentMonth: currentMonth,
      });
      // .aggregate([
      //     {
      //       $match: {
      //         userID: IdVerification,
      //         currentMonth: currentMonth
      //       }
      //     },
      //     {
      //       $group: {
      //         _id: IdVerification,
      //         totalAmount: { $sum: "$amount" }
      //       }
      //     }
      //   ]);
      //
      let amount = 0;

      expensesResponse.map((e) => {
        amount += e.amount;
      });
      if (checkBudget.budget > amount) {
        res.status(200).json({
          message: "Successfull",
          status: "positive",
          remainingBudget: checkBudget.budget - amount,
        });
      }
      if (checkBudget.budget < amount) {
        res.status(200).json({
          message: "Successfull",
          status: "negative",
          remainingBudget: checkBudget.budget - amount,
        });
      }
    } else {
      res
        .status(200)
        .json({ message: "Please do add your budget for this Month" });
    }
  } catch (err) {
    res.status(404).json({ message: "Something Went Wrong" });
  }
};
