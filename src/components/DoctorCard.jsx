function DoctorCard({ doctor }) {
  return (
    <div className="bg-white shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">
          {doctor.name}
        </h3>

        <p className="text-blue-600 mt-2">
          {doctor.speciality}
        </p>

        <p className="text-gray-500 mt-1">
          Experience: {doctor.experience}
        </p>
      </div>
    </div>
  )
}

export default DoctorCard