function Appointment() {
  return (
    <section className="py-16 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Book Appointment
        </h1>

        <form className="bg-blue-50 p-8 rounded-3xl shadow-lg mt-12 space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-xl border outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-xl border outline-none"
          />

          <input
            type="date"
            className="w-full p-4 rounded-xl border outline-none"
          />

          <select className="w-full p-4 rounded-xl border outline-none">
            <option>Select Doctor</option>
            <option>Cardiologist</option>
            <option>Neurologist</option>
            <option>Dentist</option>
          </select>

          <textarea
            rows="5"
            placeholder="Describe Your Problem"
            className="w-full p-4 rounded-xl border outline-none"
          ></textarea>

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition">
            Submit Appointment
          </button>
        </form>
      </div>
    </section>
  )
}

export default Appointment