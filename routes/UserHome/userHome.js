const express = require("express");
const Router = express.Router();

const userHomeController = require("../../controllers/UserHomeAccess/userHomeController");

const Authorization = require("../../Authorization/Authorization");

Router.post(
  "/user/home/budget",
  Authorization,
  userHomeController.getMothlyBudget
);

module.exports = Router;
