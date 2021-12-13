import express from "express";
import {
  registerUser,
  fetchUsers,
  loginUser,
  userProfile,
  updateUser,
} from "../../controllers/users/usersController.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/profile", authMiddleware, userProfile);
router.put("/update", authMiddleware, updateUser);
router.post("/login", loginUser);
router.get("/", authMiddleware, fetchUsers);

export default router;
