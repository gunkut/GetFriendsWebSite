const express = require("express");
const router = express.Router();
const pricePageController = require("../controllers/prices");

router.get("/prices", pricePageController.getPricePage);

module.exports = router;