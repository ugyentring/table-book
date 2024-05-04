const express = require("express");
const router = express.Router();

//controllers
const { showMessage } = require("../controllers/authController.js");


router.get("/:message", showMessage);

module.exports = router;
