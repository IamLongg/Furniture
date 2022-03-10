import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/MongoDB.js";
import ImportData from "./Seed.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Error.js";

dotenv.config();
connectDB();
const app = express();

app.use("/api/import", ImportData);
app.use("/api/products", productRoute);

// error handler
app.use(notFound);
app.use(errorHandler);

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`server is running port ${PORT}...`));
