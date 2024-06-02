import express, { urlencoded } from "express";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";


config({ path: "./config/config.env" });
export const app = express();
import paymentRoute from "./routes/router.js";
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/api", paymentRoute);
app.get("/api/getkey", (req, res) =>
  res.status(200).json({
    key: process.env.API_KEY,
  })
);
