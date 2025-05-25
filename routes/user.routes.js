import express from "express";
import {
	deleteUser,
	getAllUsers,
	getUser,
	imageUpload,
	updataUser,
} from "../controllers/user.controller.js";
import { protect, roleCheck } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = express.Router();

//routes
router.get("/:id", protect, getUser);
router.get("/", protect, roleCheck(["admin"]), getAllUsers);
router.delete("/delete/:id", protect, roleCheck(["admin"]), deleteUser);
router.put("/update/:id", protect, updataUser);

router.post("/image-upload", protect, upload.single("image"), imageUpload);

export default router;
