import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./src/Config/db.js";
import userRouter from "./src/Routes/UsersRoutes.js";
import blogRouter from "./src/Routes/BlogsRoutes.js";
import commentRouter from "./src/Routes/CommentsRoutes.js";

connectDB();

const app = express();

app.use(
  cors({
    origin: process.env.DB_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/comment", commentRouter);

export default app;
