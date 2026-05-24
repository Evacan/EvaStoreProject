const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.set("bufferCommands", false);

const productRoutes = require("./routes/products");
app.use("/", productRoutes);

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 30000
        });

        console.log("MongoDB Connected");

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.log("MongoDB connection error:", error.message);
    }
}

startServer();

module.exports = app;