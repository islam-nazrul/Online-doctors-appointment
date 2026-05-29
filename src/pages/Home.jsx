import Hero from '../components/Hero'
import Speciality from '../components/Speciality'
import DoctorsSection from '../components/DoctorsSection'
import BookingBanner from '../components/BookingBanner'
import WhyChooseUs from '../components/WhyChooseUs'
  
function Home() {
  return (
    <div>
      <Hero />
      <Speciality />
      <DoctorsSection />
      <BookingBanner />
      <WhyChooseUs />
    </div>
  )
}
  
export default Home