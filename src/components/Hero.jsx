import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="bg-blue-50">
      <div className="mx-auto px-6 grid gap-10 items-center hero-banner-main-contnr">
        <div className="hero-overlay">
          <div className="hero-text-contnr">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              Book Appointment With Trusted Doctors
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Professional healthcare services for you and your family.
            </p>

            <Link
              to="/appointment"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
            >
              Book Appointment
            </Link>
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