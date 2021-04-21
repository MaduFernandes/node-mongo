const express = require("express");
const morgan = require("morgan");

const productRoutes = require("../src/routes/productRoutes");

const application = express();

//Morgan
application.use(morgan("dev"));

application.use(express.json());

application.use(productRoutes);

module.exports = application;
