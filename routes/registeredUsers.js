const express = require("express");
const router = express.Router();
const registeredUsersController = require("../controllers/registeredUsers");

router.get("/users", registeredUsersController.getRegisteredUsers);

module.exports = router;
