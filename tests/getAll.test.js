const mongoose = require("mongoose");
const request = require("supertest");
require("dotenv").config();

const app = require("../app");

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 30000
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

test("getAll to show all product", async () => {
    const response = await request(app).get("/getAll");

    if (response.status === 200) {
        console.log("evaaksoy9@gmail.com - getAll to show all product - 200 - PASSED");
    } else {
        console.log("evaaksoy9@gmail.com - getAll to show all product - " + response.status + " - FAILED");
    }

    expect(response.status).toBe(200);
});