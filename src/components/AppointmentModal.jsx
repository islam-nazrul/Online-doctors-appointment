import { useState } from 'react'
import { motion } from "framer-motion";

function AppointmentModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Book Appointment</h2>

          <button
            onClick={onClose}
            className="text-xl font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded"
          />

          <input
            type="date"
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  )
}

export default AppointmentModal