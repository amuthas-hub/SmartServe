const User = require("../models/User");
const Provider = require("../models/Provider");
const bcrypt = require("bcryptjs");
exports.registerBooker = async (req, res) => {
  try {
    const { name, email, phone, place, password } = req.body;

    const existing = await User.findOne({ email });

    if (existing) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      phone,
      place,
      password: hashedPassword,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.registerProvider = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      place,
      serviceType,
      experience,
      password,
    } = req.body;

    const existing = await Provider.findOne({ email });

    if (existing) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const provider = await Provider.create({
      name,
      email,
      phone,
      place,
      serviceType,
      experience,
      password: hashedPassword,
    });

    res.status(201).json(provider);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    let account;

    if (role === "provider") {
      account = await Provider.findOne({ email });
    } else {
      account = await User.findOne({ email });
    }

    if (!account) {
      return res.status(404).json({
        message: "Account not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      account.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    res.status(200).json({
      success: true,
      account,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};