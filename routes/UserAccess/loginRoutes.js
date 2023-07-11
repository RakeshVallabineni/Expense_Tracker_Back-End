const express = require("express");
const Router = express.Router();

const loginController = require("../../controllers/UserAccess/loginController");

Router.post("/user/login", loginController.checkUser);

module.exports = Router;
