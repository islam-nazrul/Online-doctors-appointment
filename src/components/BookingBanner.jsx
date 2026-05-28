import { Link } from 'react-router-dom'

function BookingBanner() {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold">
          Need Medical Consultation?
        </h2>

        <p className="mt-4 text-lg">
          Book your appointment with experienced doctors today.
        </p>

        <Link
          to="/appointment"
          className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold"
        >
          Book Now
        </Link>
      </div>
    </section>
  )
}

export default BookingBanner