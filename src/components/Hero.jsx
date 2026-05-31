// import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import AppointmentModal from './AppointmentModal'

function Hero() {
  // const MotionLink = motion(Link);
  const [showModal, setShowModal] = useState(false);
  
  return (
    <section className="bg-blue-50">
      <div className="mx-auto px-6 grid gap-10 items-center hero-banner-main-contnr">
        <div className="hero-overlay">
          <div className="hero-text-contnr">
            <motion.h1 className="text-5xl font-bold text-gray-800 leading-tight"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Book Appointment With Trusted Doctors
            </motion.h1>

            <motion.p className="mt-6 text-gray-600 text-sm"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Book Appointment With Trusted Doctors
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* <MotionLink
              onClick={() => setShowModal(true)}
                to="/appointment"
                className="inline-block border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 mt-8 cursor-pointer rounded-full shadow hover:bg-blue-700 transition"
              >
                Book Appointment
              </MotionLink> */}
              <motion.button
                onClick={() => setShowModal(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block border border-white text-white px-6 py-2 rounded-full shadow mt-8"
              >
                Book Appointment
              </motion.button>
            </motion.div>
            {showModal && (
              <AppointmentModal
                onClose={() => setShowModal(false)}
              />
            )}
          </div>
        </div>
        <div className="hero-banner">
          <img
            src="./src/assets/hero_banner.jpg"
            alt="Doctor"
            className="shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero