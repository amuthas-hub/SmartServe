const Booking = require("../models/Booking");
const Provider = require("../models/Provider");
exports.createBooking = async (req, res) => {
  try {
    const {
      bookerId,
      providerId,
      serviceType,
    } = req.body;

    const provider = await Provider.findById(providerId);

    if (!provider) {
      return res.status(400).json({
        message: "Invalid Provider Selected",
      });
    }

    const booking = await Booking.create({
      bookerId,
      providerId,
      serviceType,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("bookerId")
      .populate("providerId");

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.updateBookingStatus = async (
  req,
  res
) => {
  try {
    const booking =
      await Booking.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status,
        },
        { new: true }
      );

    res.json(booking);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
