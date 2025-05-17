import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
	createComment,
	deleteComment,
	editComment,
	getComments,
	getPostComments,
	likeComments, 
	reply,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", protect, createComment);
router.get("/", getComments);
router.get("/:id", getPostComments);
router.delete("/delete/:id", protect, deleteComment);
router.put("/edit/:id", protect, editComment);
router.post("/like/:id", protect, likeComments);
router.post("/reply", protect, reply);

export default router;
