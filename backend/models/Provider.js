const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      default: "provider",
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    place: {
      type: String,
      required: true,
    },

    serviceType: {
      type: String,
      required: true,
    },

    experience: {
      type: Number,
      required: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    password: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Provider", providerSchema);