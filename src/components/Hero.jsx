import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
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

        <div>
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
            alt="Doctor"
            className="shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero