const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET all products
router.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// GET one product by productId
router.get("/products/:productId", async (req, res) => {
    try {

        const product = await Product.findOne({
            productId: req.params.productId
        });

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json(product);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// GET ALL for testing
router.get("/getAll", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// CREATE product
router.post("/products", async (req, res) => {

    try {

        const product = new Product(req.body);
        await product.save();

        res.json(product);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

// UPDATE product
router.put("/products/:id", async (req, res) => {

    try {

        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updated);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

// DELETE product
router.delete("/products/:id", async (req, res) => {

    try {

        await Product.findByIdAndDelete(req.params.id);

        res.json({
            message: "Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;