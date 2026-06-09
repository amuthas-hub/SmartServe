const express = require("express");

const router = express.Router();

const {
  registerBooker,
  registerProvider,
  login,
} = require("../controllers/authController");

router.post("/booker/register", registerBooker);

router.post("/provider/register", registerProvider);

router.post("/login", login);

module.exports = router;