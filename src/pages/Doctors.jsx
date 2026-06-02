import { Link } from 'react-router-dom'
import doctors from '../data/doctorsData'
import DoctorCard from '../components/DoctorCard'

function Doctors() {
  return (
    <section className="py-16 bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Our Doctors
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {doctors.map((doctor) => (
            <Link to={`/doctor/${doctor.id}`}>
              <DoctorCard key={doctor.id} doctor={doctor} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Doctors