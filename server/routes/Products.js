//* All routes related to Product's

const express = require("express");
const Products = require("../models/productSchema");
const router = express.Router();

router.post("/addproduct", async (req, res) => {
  try {
    const {
      productType,
      productName,
      productPrice,
      productDescription,
      productImage,
      productQty,
      productSize,
      productSlug,
    } = req.body;

    //we can reduce this extra code by just using the req.body as all the fields are same

    // Create a new product object based on the schema
    const newProduct = new Products({
      productType,
      productName,
      productPrice,
      productDescription,
      productImage,
      productQty,
      productSize,
      productSlug,
    });

    // Save the new product to the database
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct); // Return the saved product as a response
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Failed to add product" });
  }
});
module.exports = router;
