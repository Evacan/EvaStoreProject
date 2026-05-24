const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    storeId: String,
    storeName: String,
    productId: String,
    productName: String,
    price: Number
});

module.exports = mongoose.model("Product", ProductSchema);