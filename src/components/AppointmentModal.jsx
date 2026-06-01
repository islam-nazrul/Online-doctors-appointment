import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

function AppointmentModal({ onClose }) {
  return (
    <motion.div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Book Appointment</h2>

          <button
            onClick={onClose}
            className="text-xl font-bold cursor-pointer text-gray-800"
          >
            ✕
          </button>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded text-gray-800"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded text-gray-800"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded text-gray-800"
          />

          <input
            type="date"
            className="w-full border p-3 rounded text-gray-800"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded"
          >
            Book Appointment
          </button>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default AppointmentModal