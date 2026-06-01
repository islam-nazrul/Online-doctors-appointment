// import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import AppointmentModal from './AppointmentModal'

function BookingBanner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          Need Medical Consultation?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg"
        >
          Book your appointment with experienced doctors today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* <Link
          onClick={() => setShowModal(true)}
            to="/appointment"
            className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold"
          >
            Book Now
          </Link> */}
          <button
            onClick={() => setShowModal(true)}
            className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold"
          >
            Book Now
          </button>
        </motion.div>

        {/* {showModal && (
          <AppointmentModal
            onClose={() => setShowModal(false)}
          />
        )} */}
        <AnimatePresence>
          {showModal && (
            <AppointmentModal
              onClose={() => setShowModal(false)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default BookingBanner