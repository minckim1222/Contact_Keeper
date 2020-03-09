const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const User = require("../models/User");
const Contact = require("../models/Contacts");

// @route    GET api/contacts
// @desc     Get user contacts
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
  res.send("Get contacts");
});
// @route    POST api/contacts
// @desc     Post new contact
// @access   Private
router.post("/", (req, res) => {
  res.send("Register a user");
});
// @route    PUT api/contacts/:id
// @desc     Update a contact
// @access   Private
router.put("/:id", (req, res) => {
  res.send("Contact updated");
});
// @route    DELETE api/contacts/:id
// @desc     Delete a contact
// @access   Private
router.delete("/:id", (req, res) => {
  res.send("Contact deleted");
});

module.exports = router;
