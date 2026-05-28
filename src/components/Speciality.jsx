function Speciality() {
  const specialities = [
    'Cardiology',
    'Neurology',
    'Dermatology',
    'Dentistry',
    'Orthopedics',
    'Pediatrics'
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Medical Specialities
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
          {specialities.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-blue-700">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speciality