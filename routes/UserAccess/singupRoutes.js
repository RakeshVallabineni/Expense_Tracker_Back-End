const express = require("express");
const Router = express.Router();

const singupController = require("../../controllers/UserAccess/signupController");

Router.post("/User/signup", singupController.createUser);

module.exports = Router;
