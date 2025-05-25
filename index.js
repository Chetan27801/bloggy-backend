import dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
// import mongoSanitize from "express-mongo-sanitize";

import { connectDB } from "./config/db.js";

import authRouter from "./routes/auth.routes.js";
import postRouter from "./routes/post.routes.js";
import userRouter from "./routes/user.routes.js";
import commentRouter from "./routes/comment.routes.js";

const app = express();

//middleware for cors error
app.use(
	cors({
		origin: process.env.CLIENT_URL || "*",
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
	})
);

//middleware for security
app.use(helmet());
// app.use(mongoSanitize());

//db connection
connectDB();

//middlewares
app.use(express.json());

// Serve static files from uploads directory
app.use("/uploads", express.static("uploads"));

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/post", postRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/comment", commentRouter);

//server starts
app.listen(process.env.PORT, () => {
	console.log(`Server is running on port: ${process.env.PORT}`);
});

//error handler middleware
app.use((error, req, res, next) => {
	const statusCode = error.statusCode || 500;
	const message = error.message || "Internal Server Error";
	res.status(statusCode).json({
		success: false,
		statusCode,
		message,
	});
});
