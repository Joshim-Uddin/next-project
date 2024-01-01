import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Partners from "../Components/Partners"
import Characterstic from "../Components/Characterstic"
import Testimonial from "../Components/Testimonial"
import Footer from "../Components/Footer"

export default function Home() {
  return (
   <main className='bg-slate-50 text-blue-600 w-full mx-auto'>
     <Navbar />
    <Hero />
    <Characterstic />
    <Partners />
    <Testimonial />
    <Footer />
   </main>
  )
}
