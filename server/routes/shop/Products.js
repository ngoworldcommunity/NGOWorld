//* All routes related to Product's

const express = require("express");
const Products = require("../../schema/shop/ProductSchema");
const router = express.Router();

//* Route 1  -  Adding Products

/**
 * @description Add Product
 * @route POST /addproduct
 * @access Public
 * @requires productSlug (string), other fields (as per the productSchema)
 * @returns Saved product object (JSON)
 */

router.post("/addproduct", async (req, res) => {
  try {
    const { productSlug, ...data } = req.body;

    const existingSlug = await Products.findOne({ productSlug }); //productSlug should be unique

    if (existingSlug) {
      return res.status(409).json({ message: "productSlug already exists" });
    }

    // Create a new product object based on the schema
    const newProduct = new Products({ ...data, productSlug });

    // Save the new product to the database
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct); // Return the saved product as a response
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Failed to add product" });
  }
});

//* Route 2  -  Fetching all Products
/**
 * @description Get all products
 * @route GET /products
 * @access Public
 * @returns Array of all products
 */
router.get("/allproducts", async (req, res) => {
  try {
    const allProducts = await Products.find();
    res.status(200).json(allProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

// Route 3 - Fetching a single product by slug
/**
 * @description Get a product by slug
 * @route GET /products/:productSlug
 * @access Public
 * @returns Product object (JSON)
 */
router.get("/:productSlug", async (req, res) => {
  try {
    const { productSlug } = req.params;

    const product = await Products.findOne({ productSlug });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Failed to fetch product" });
  }
});

module.exports = router;
