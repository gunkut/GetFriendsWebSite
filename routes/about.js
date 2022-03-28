const express = require("express");
const router = express.Router();
const aboutPageController = require("../controllers/about");

router.get("/", aboutPageController.getAboutPage);

router.get("/about", aboutPageController.getAboutPage);

module.exports = router;
