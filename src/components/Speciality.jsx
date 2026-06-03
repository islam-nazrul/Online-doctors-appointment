import {
  FaUserMd,
  FaTooth,
  FaEye,
  FaHeartbeat,
  FaAmbulance,
} from "react-icons/fa";

function Speciality() {
  // const specialities = [
  //   'Cardiology',
  //   'Neurology',
  //   'Dermatology',
  //   'Dentistry',
  //   'Orthopedics',
  //   'Pediatrics'
  // ]

  const specialties = [
  {
    id: 1,
    name: "General Care",
    icon: <FaUserMd />,
  },
  {
    id: 2,
    name: "Dental Care",
    icon: <FaTooth />,
  },
  {
    id: 3,
    name: "Eye Care",
    icon: <FaEye />,
  },
  {
    id: 4,
    name: "Cardiology",
    icon: <FaHeartbeat />,
  },
  {
    id: 5,
    name: "Emergency",
    icon: <FaAmbulance />,
  },
];

  return (
    // <section className="py-16 bg-white">
    //   <div className="max-w-7xl mx-auto px-6 text-center">
    //     <h2 className="text-4xl font-bold text-gray-800">
    //       Medical Specialities
    //     </h2>

    //     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
    //       {specialities.map((item, index) => (
    //         <div
    //           key={index}
    //           className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
    //         >
    //           <h3 className="font-semibold text-blue-700">{item}</h3>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <>
      <section className="bg-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Medical Specialties
          </h2>

          <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialties.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm p-8 text-center
                          hover:bg-blue-600 hover:text-white
                          transition-all duration-300 cursor-pointer"
              >
                <div className="text-5xl mb-4 flex justify-center">
                  {item.icon}
                </div>

                <h3 className="text-xl font-medium">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Speciality