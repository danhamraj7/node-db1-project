const express = require("express");

const accounts = require("./accountsModel");

const router = express.Router();

//get accounts
router.get("/", (req, res) => {
  accounts
    .find()
    .then((accounts) => res.status(200).json(accounts))
    .catch((err) =>
      res
        .status(500)
        .json({ error: "The accounts information could not be retrieved." })
    );
});

module.exports = router;
