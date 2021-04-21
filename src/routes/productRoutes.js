const express = require("express");
const router = express.Router();
const mongoose = require("../database/database");

const Product = require("../models/Product");

router.get("/", (req, res) => {
  Product.find()
    .exec()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((erro) => {
      res.status(500).json({
        erro: erro,
      });
      console.log(erro);
    });
});

router.post("/", (req, res) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  product
    .save()
    .then((result) => {
      res.status(201).json({
        product: product,
      });
    })
    .catch((erro) => {
      res.status(500).json({
        error: erro,
      });
    });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  res.status(200).json({
    product,
  });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  product.name = req.body.name;
  product.price = req.body.price;

  await product.save();

  res.status(200).json({
    message: "Product changed",
    product,
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  product.name = req.body.name;
  product.price = req.body.price;

  await product.remove();

  res.status(200).json({
    message: "Product Removed",
  });
});

module.exports = router;
