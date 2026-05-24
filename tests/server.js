const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 30000
        });

        console.log("MongoDB Connected");

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.log("MongoDB connection error:", error.message);
    }
}

startServer();