//* All routes related to Product's

const express = require("express");
const router = express.Router();
const { addProduct, getAllProduct, getproductSlugById } = require('../controller/shop/Product');
//* Route 1  -  Adding Products

router.post("/addproduct", addProduct);

//* Route 2  -  Fetching all Products

router.get("/allproducts", getAllProduct);

// Route 3 - Fetching a single product by slug

router.get("/:productSlug", getproductSlugById);

module.exports = router;
