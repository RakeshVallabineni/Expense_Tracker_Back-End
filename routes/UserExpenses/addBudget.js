const express = require("express");
const Router = express.Router();

const addBudgetController = require("../../controllers/UserExpenses/addBudgetController");

const Authorization = require("../../Authorization/Authorization");

Router.post(
  "/user/home/savebudget",
  Authorization,
  addBudgetController.addBudget
);

module.exports = Router;
