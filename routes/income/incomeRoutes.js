import express from "express";
import {
  createIncome,
  fetchAllIncome,
  fetchDetailIncome,
  updateIncome,
  deleteIncome,
} from "../../controllers/income/incomeController.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const incomeRouter = express.Router();

incomeRouter.post("/", authMiddleware, createIncome);
incomeRouter.get("/", authMiddleware, fetchAllIncome);
incomeRouter.get("/:id", authMiddleware, fetchDetailIncome);
incomeRouter.put("/:id", authMiddleware, updateIncome);
incomeRouter.delete("/:id", authMiddleware, deleteIncome);

export default incomeRouter;
