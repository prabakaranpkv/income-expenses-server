import express from "express";
import {
  createExpense,
  fetchAllExpense,
  fetchDetailExpense,
  updateExpense,
  deleteExpense,
} from "../../controllers/expenses/expenseController.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const expenseRouter = express.Router();

expenseRouter.post("/", authMiddleware, createExpense);
expenseRouter.get("/", authMiddleware, fetchAllExpense);
expenseRouter.get("/:id", authMiddleware, fetchDetailExpense);
expenseRouter.put("/:id", authMiddleware, updateExpense);
expenseRouter.delete("/:id", authMiddleware, deleteExpense);

export default expenseRouter;
