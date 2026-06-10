import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-cyan-400">
          SmartServe
        </h1>

        <div className="flex gap-8 text-lg">
          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>

          <Link to="/about" className="hover:text-cyan-400">
            About
          </Link>

          <Link to="/login" className="hover:text-cyan-400">
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;