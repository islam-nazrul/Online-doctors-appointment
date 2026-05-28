function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold">MediCare</h2>
          <p className="mt-4 text-gray-400">
            Professional healthcare appointment booking platform.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="mt-4 text-gray-400">Email: info@medicare.com</p>
          <p className="text-gray-400">Phone: +91 9876543210</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="mt-4 text-gray-400">
            Healthcare Street, New Delhi, India
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer