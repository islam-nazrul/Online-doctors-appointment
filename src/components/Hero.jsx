// import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import AppointmentModal from './AppointmentModal'

function Hero() {
  // const MotionLink = motion(Link);
  const [showModal, setShowModal] = useState(false);
  
  return (
    <section className="bg-blue-50">
      <div className="mx-auto px-6 grid gap-10 items-center relative">
        <div className="absolute inset-0 bg-black/60">
          <div className="hero-text-contnr">
            <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
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