import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [role, setRole] = useState("booker");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    place: "",
    password: "",
    serviceType: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url =
        role === "booker"
          ? "http://localhost:5000/api/auth/booker/register"
          : "http://localhost:5000/api/auth/provider/register";

      const res = await axios.post(url, formData);

      alert("Registration Successful");
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-[450px]"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Sign Up
        </h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        >
          <option value="booker">Service Booker</option>
          <option value="provider">Service Provider</option>
        </select>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        />

        <input
          type="text"
          name="place"
          placeholder="Place"
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        />

        {role === "provider" && (
          <>
            <input
              type="text"
              name="serviceType"
              placeholder="Service Type"
              onChange={handleChange}
              className="w-full border p-3 mb-3 rounded"
            />

            <input
              type="number"
              name="experience"
              placeholder="Experience"
              onChange={handleChange}
              className="w-full border p-3 mb-3 rounded"
            />
          </>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <button
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;