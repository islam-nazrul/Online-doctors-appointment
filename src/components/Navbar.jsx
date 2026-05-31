import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AppointmentModal from "./AppointmentModal";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className={`text-2xl font-bold ${
            scrolled ? "text-blue-600" : "text-white"
          }`}
        >
          MediCare
        </Link>

        <div
          className={`flex gap-6 font-medium ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/doctors" className="hover:text-blue-600 transition">
            Doctors
          </Link>
          {/* <Link to="/appointment" className="hover:text-blue-600 transition" onClick={() => setShowModal(true)}>
            Appointment
          </Link> */}
          <button
            onClick={() => setShowModal(true)}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Appointment
          </button>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
    {showModal && (
      <AppointmentModal
        onClose={() => setShowModal(false)}
      />
    )}
    </>
  );
}

export default Navbar;