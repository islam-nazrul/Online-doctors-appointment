import { useParams } from "react-router-dom";
import doctors from "../data/doctorsData";

function DoctorDetail() {
  const { id } = useParams();

  const doctor = doctors.find(
    (doc) => doc.id === Number(id)
  );

  if (!doctor) {
    return <h2>Doctor not found</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* Doctor Info */}
      <div className="flex flex-col md:flex-row gap-6">

        {/* Left Image */}
        <div className="w-full md:w-[320px]">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full bg-blue-500 rounded-xl"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 border border-gray-300 rounded-xl p-6 text-left">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">
            {doctor.name}
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-5 text-gray-800">
            <span className="text-gray-600">
              {doctor.degree}
            </span>

            <span className="border px-3 py-1 rounded-full text-sm">
              {doctor.experience} Years
            </span>
          </div>

          <h3 className="font-semibold mb-2">
            About
          </h3>

          <p className="text-gray-600 leading-7 text-gray-800">
            {doctor.about}
          </p>

          <p className="mt-5 text-lg text-gray-800">
            Appointment Fee :
            <span className="font-bold ml-2">
              ₹{doctor.fee}
            </span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="mt-10">

        <h2 className="text-xl font-semibold mb-5 text-gray-800">
          Booking Slots
        </h2>

        {/* Days */}
        <div className="flex gap-4 overflow-x-auto pb-3">

          {["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue"].map(
            (day, index) => (
              <button
                key={index}
                className="min-w-[80px] h-[90px] border rounded-full flex flex-col items-center justify-center hover:bg-blue-600 hover:text-white transition text-gray-800"
              >
                <span>{day}</span>
                <span>{index + 4}</span>
              </button>
            )
          )}
        </div>

        {/* Time Slots */}
        <div className="flex gap-3 overflow-x-auto mt-6 pb-3">

          {[
            "10:00 AM",
            "10:30 AM",
            "11:00 AM",
            "11:30 AM",
            "12:00 PM",
            "12:30 PM",
            "01:00 PM",
            "01:30 PM",
          ].map((time) => (
            <button
              key={time}
              className="border rounded-full px-6 py-2 whitespace-nowrap hover:bg-blue-600 hover:text-white transition text-gray-800"
            >
              {time}
            </button>
          ))}
        </div>

        {/* Button */}
        <button className="mt-8 bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition">
          Book an Appointment
        </button>

      </div>
    </div>
  );
}

export default DoctorDetail;