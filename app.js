const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

const productRoutes = require("./routes/products");
app.use("/", productRoutes);

module.exports = app;