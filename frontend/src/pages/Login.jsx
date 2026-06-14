import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "booker",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://smartserve-7duf.onrender.com/api/auth/login",
        loginData
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.account)
      );

      alert("Login Successful");

      if (loginData.role === "provider") {
        navigate("/provider-dashboard");
      } else {
        navigate("/booker-dashboard");
      }
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-[450px]"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <select
          name="role"
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        >
          <option value="booker">Service Booker</option>
          <option value="provider">Service Provider</option>
        </select>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <button
          className="w-full bg-green-600 text-white p-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;