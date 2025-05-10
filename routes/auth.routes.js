import express from "express";
import {
	loginUser,
	registerUser,
	signout,
} from "../controllers/auth.controller.js";
import { protect } from "../middlewares/authMiddleware.js";
// import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

//routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/signout", protect, signout);
// router.get("/me", protect, getUser);

export default router;
