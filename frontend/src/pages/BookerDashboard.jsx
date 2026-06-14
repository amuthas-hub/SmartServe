import { useEffect, useState } from "react";
import axios from "axios";

const BookerDashboard = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    try {
      const res = await axios.get(
        "https://smartserve-7duf.onrender.com/api/providers"
      );

      setProviders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBooking = async (provider) => {
    const user = JSON.parse(localStorage.getItem("user"));

    try {
      await axios.post(
        "https://smartserve-7duf.onrender.com/api/bookings",
        {
          bookerId: user._id,
          providerId: provider._id,
          serviceType: provider.serviceType,
        }
      );

      alert("Booking Created");
    } catch (error) {
      alert("Booking Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">
        Available Providers
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {providers.map((provider) => (
          <div
            key={provider._id}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold">
              {provider.name}
            </h2>

            <p>{provider.serviceType}</p>

            <p>{provider.place}</p>

            <p>
              Experience: {provider.experience} Years
            </p>

            <button
              onClick={() =>
                handleBooking(provider)
              }
              className="mt-4 bg-blue-600 text-white px-5 py-2 rounded"
            >
              Book Service
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookerDashboard;