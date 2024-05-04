const express = require("express");

const router = express.Router();

router.get("/:message", (req, res) => {
  res.status(200).send(`Here is your message: ${req.params.message}`);
});

module.exports = router;
