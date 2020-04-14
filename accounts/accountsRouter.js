const express = require("express");

const accounts = require("./accountsModel");
//const db = require("../data/dbConfig");

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

// get an account by acc id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  accounts
    .findById(id)
    .then((account) => {
      if (account) {
        res.json(account);
      } else {
        res
          .status(404)
          .json({ message: "Could not find account with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get account" });
    });
});

// add an account
router.post("/", (req, res) => {
  const newPost = req.body;
  //console.log(newPost);
  accounts
    .insert(newPost)
    .then((result) => res.status(201).json(result))
    .catch((err) =>
      res.status(400).json({
        errorMessage: "Please provide name and budget for the account.",
      })
    );
});

//update account

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  accounts
    .findById(id)
    .then((account) => {
      if (account) {
        accounts.update(changes, id).then((updatedAccount) => {
          res.json({ updated: updatedAccount });
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find account with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update account" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  accounts
    .remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find account with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete account" });
    });
});

module.exports = router;
