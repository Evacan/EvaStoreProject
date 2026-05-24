const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

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