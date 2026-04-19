import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/order.js";
import productRoutes from "./routes/product.js";


dotenv.config();

const app = express(); 

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/product", productRoutes);

// ✅ NOW use routes (after app created)
app.use("/api/auth", authRoutes);
app.use("/api/order", orderRoutes);

// DB connection
mongoose.connect("mongodb+srv://kathyayanichoudhari_db_user:kathy123@cluster0.8j8eedd.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// server start
app.listen(5000, () => {
  console.log("Server running on port 5000 🔥");
});
