const express = require("express");
const Router = express.Router();

const addExpenseController = require("../../controllers/UserExpenses/addExpenseController");

const Authorization = require("../../Authorization/Authorization");

Router.post(
  "/user/home/saveExpense",
  Authorization,
  addExpenseController.addExpense
);

module.exports = Router;
