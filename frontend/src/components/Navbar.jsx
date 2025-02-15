import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search?query=${encodeURIComponent(search)}`);
      setSearchOpen(false); // Close search bar after navigation
      setSearch(""); // Clear search input
    }
  };

  return (
    <nav className="bg-white p-4 shadow-lg fixed top-0 left-0 w-full z-50 font-['Open_Sans',sans-serif]" style={{height: "65px"}}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-1">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <h1 className="text-gray-700 text-2xl font-bold uppercase">Brand</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={`text-gray-700 text-sm transition duration-300 font-bold uppercase ${location.pathname === "/" ? " text-red-600" : "hover:text-red-600"}`}>Home</Link>
          <Link to="/about" className={`text-gray-700 text-sm transition duration-300 font-bold uppercase ${location.pathname === "/about" ? " text-red-600" : "hover:text-red-600"}`}>About</Link>
          <Link to="/services" className={`text-gray-700 text-sm transition duration-300 font-bold uppercase ${location.pathname === "/services" ? " text-red-600" : "hover:text-red-600"}`}>Services</Link>
          <Link to="/contact" className={`text-gray-700 text-sm transition duration-300 font-bold uppercase ${location.pathname === "/contact" ? " text-red-600" : "hover:text-red-600"}`}>Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="text-gray-700 cursor-pointer hover:text-red-600 transition duration-300"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search size={24} />
          </button>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Search Input and Button */}
      <div
        className={`fixed top-16 right-4 bg-white mt-2 rounded-md shadow-md transition-transform transform ${
          searchOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } duration-300 flex items-center gap-2`}
        style={{ zIndex: 1000 }} // Ensure search bar is above other elements
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300 w-48 md:w-64"
          placeholder="Search..."
        />
        <button
          onClick={handleSearch}
          className="p-3 cursor-pointer bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
        >
          <Search size={20} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col space-y-2 mt-5 bg-white p-4 rounded-lg shadow-lg transition-transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } duration-300`}
        style={{ zIndex: 1000 }} // Ensure mobile menu is above other elements
      >
        <Link
          to="/"
          className={`text-gray-700 font-bold transition duration-300 uppercase ${
            location.pathname === "/" ? " text-red-600" : "hover:text-red-600"
          }`}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`text-gray-700 font-bold transition duration-300 uppercase ${
            location.pathname === "/about" ? " text-red-600" : "hover:text-red-600"
          }`}
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/services"
          className={`text-gray-700 font-bold transition duration-300 uppercase ${
            location.pathname === "/services" ? " text-red-600" : "hover:text-red-600"
          }`}
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className={`text-gray-700 font-bold transition duration-300 uppercase ${
            location.pathname === "/contact" ? " text-red-600" : "hover:text-red-600"
          }`}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}