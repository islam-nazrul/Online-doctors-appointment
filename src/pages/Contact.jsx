function Contact() {
  return (
    <section className="py-16 bg-blue-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Contact Us
        </h1>

        <form className="bg-white p-8 rounded-3xl shadow-lg mt-12 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl border outline-none"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl border outline-none"
          ></textarea>

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact