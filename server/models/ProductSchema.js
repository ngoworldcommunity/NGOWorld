const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productType: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    productQty: {
      type: Number,
      required: true,
    },
    productSlug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timetamps: true },
);

module.exports = mongoose.model("Products", ProductSchema);
