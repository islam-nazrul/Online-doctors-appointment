import doctors from '../data/doctorsData'
import DoctorCard from './DoctorCard'

function DoctorsSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Top Doctors
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DoctorsSection