import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

//api all product
app.get("/api/products", (req, res) => {
  res.json(products);
});

// api detail product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((item) => item.id === req.params.id);
  res.json(product);
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`server is running port ${PORT}...`));
