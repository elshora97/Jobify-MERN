import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world ...");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port} ....`);
});
