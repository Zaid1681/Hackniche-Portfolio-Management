const express = require("express");
const router = express.Router();
const userRoute = require("./user.routes");
const portfolioRoutes = require("./portfolio.routes.js");
const assetRoutes = require("./asset.routes.js");
const stockRoutes = require("./stocks.routes.js");

router.use("/user", userRoute);
router.use("/portfolio", portfolioRoutes);
router.use("/asset", assetRoutes);
router.use("/stock", stockRoutes);

module.exports = router;
