import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: doctor.id * 0.15
              }}
            >
              <Link to={`/doctor/${doctor.id}`}>
                <DoctorCard key={doctor.id} doctor={doctor} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DoctorsSection