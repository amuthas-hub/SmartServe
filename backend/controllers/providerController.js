const Provider = require("../models/Provider");
exports.getProviders = async (req, res) => {
  try {
    const providers = await Provider.find();

    res.status(200).json(providers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};