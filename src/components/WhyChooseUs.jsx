function WhyChooseUs() {
  const features = [
    'Experienced Doctors',
    '24/7 Support',
    'Easy Appointment Booking',
    'Modern Medical Facilities'
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-50 p-8 rounded-3xl shadow"
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs