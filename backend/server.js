import { app } from "./app.js";
import razorpay from "razorpay";
import { connectDB } from "./config/db.js";
connectDB();

export const instance = new razorpay({
  key_id: process.env.API_KEY,
  key_secret: process.env.SECRET_KEY,
});

app.listen(process.env.PORT, () =>
  console.log(`server is working on ${process.env.PORT}`)
);
