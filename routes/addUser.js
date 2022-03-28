const express = require("express");
const path = require("path");
const router = express.Router();
const addUserController = require("../controllers/addUser")

router.get("/users-form", addUserController.getAddUser);

router.post("/users-form", addUserController.postAddUser);

exports.routes = router;
