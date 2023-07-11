const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

const body_parser = require("body-parser");
app.use(body_parser.json());

const singupRouter = require("./routes/UserAccess/singupRoutes");
app.use(singupRouter);

const loginRouter = require("./routes/UserAccess/loginRoutes");
app.use(loginRouter);

const userHomeRouter = require("./routes/UserHome/userHome");
app.use(userHomeRouter);

const AddExpenseRouter = require("./routes/UserExpenses/addExpenses");
app.use(AddExpenseRouter);

const AddBudgetRouter = require("./routes/UserExpenses/addBudget");
app.use(AddBudgetRouter);

const getAllExpenseRouter = require("./routes/UserExpenses/getAllExpenses");
app.use(getAllExpenseRouter);

const dbConnection = require("./utils/db");
dbConnection();

app.listen(5000);
