import { useEffect, useState } from "react";
import axios from "axios";

const ProviderDashboard = () => {
  const [bookings, setBookings] = useState([]);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        "https://smartserve-7duf.onrender.com/api/bookings"
      );

      const providerBookings =
        res.data.filter(
          (booking) =>
            booking.providerId._id === user._id
        );

      setBookings(providerBookings);
    } catch (error) {
      console.log(error);
    }
  };
  const updateStatus = async (bookingId, status) => {
  try {
    await axios.put(
      `https://smartserve-7duf.onrender.com/api/bookings/${bookingId}`,
      { status }
    );

    alert(`Booking ${status}`);

    fetchBookings();
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">
        My Bookings
      </h1>

      {bookings.map((booking) => (
        <div
          key={booking._id}
          className="bg-white p-5 rounded-lg shadow mb-4"
        >
          <h2>
            Customer:
            {booking.bookerId.name}
          </h2>

          <p>
            Service:
            {booking.serviceType}
          </p>

         <p className="mb-3">
  Status: {booking.status}
</p>

<div className="flex gap-3">
  <button
    onClick={() =>
      updateStatus(
        booking._id,
        "Accepted"
      )
    }
    className="bg-green-600 text-white px-4 py-2 rounded"
  >
    Accept
  </button>

  <button
    onClick={() =>
      updateStatus(
        booking._id,
        "Rejected"
      )
    }
    className="bg-red-600 text-white px-4 py-2 rounded"
  >
    Reject
  </button>
</div>
        </div>
      ))}
    </div>
  );
};

export default ProviderDashboard;