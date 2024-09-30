import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

//routers
import jobRouter from "./Routes/jobRouter.js";
import authRouter from "./Routes/authRouter.js";
import userRouter from "./Routes/userRouter.js";

//middlewares
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world ...");
});

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port} ....`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connect();
