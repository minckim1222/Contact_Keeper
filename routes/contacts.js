const express = require("express");
const router = express.Router();

// @route    GET api/contacts
// @desc     Get user contacts
// @access   Private
router.get("/", (req, res) => {
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
