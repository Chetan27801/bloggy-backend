import express from "express";
import {
	createPost,
	deletePost,
	getPostById,
	getPosts,
	updatePost,
} from "../controllers/post.controller.js";
import { protect, roleCheck } from "./../middlewares/authMiddleware.js";

const router = express.Router();

//routes
router.post("/create-post", protect, roleCheck(["author"]), createPost);
router.get("/", protect, getPosts);
router.get("/:id", protect, getPostById);
router.delete(
	"/delete-post",
	protect,
	roleCheck(["admin", "author"]),
	deletePost
);
router.put("/update/:id", protect, roleCheck(["author"]), updatePost);
export default router;
