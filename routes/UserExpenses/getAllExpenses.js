const express = require("express");
const Router = express.Router();

const getAllExpenseController = require("../../controllers/UserExpenses/getAllExpenseController");

const Authorization = require("../../Authorization/Authorization");

Router.get(
  "/user/home/expenses",
  Authorization,
  getAllExpenseController.getAllExpense
);

module.exports = Router;
