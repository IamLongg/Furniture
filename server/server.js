import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/MongoDB.js";
import ImportData from "./Seed.js";

dotenv.config();
connectDB();
const app = express();

app.use("/api/import", ImportData);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`server is running port ${PORT}...`));
