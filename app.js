import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/db.js";
import router from "./routes/users/usersRoute.js";
import incomeRouter from "./routes/income/incomeRoutes.js";
import expenseRouter from "./routes/expenses/expensesRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import accountStatsRoute from "./routes/accountStatsRoute/accountStatsRoute.js";
const app = express();

dotenv.config();

dbConnect();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Node App Running");
});

app.use("/api/users", router);
app.use("/api/income", incomeRouter);
app.use("/api/expenses", expenseRouter);
app.use("/", accountStatsRoute);

app.use(notFound);
app.use(errorHandler);

export default app;
