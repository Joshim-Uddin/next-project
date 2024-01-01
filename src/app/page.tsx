import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Partners from "../Components/Partners"

export default function Home() {
  return (
   <main className='bg-slate-50 text-blue-600 w-full mx-auto'>
     <Navbar />
    <Hero />
    <Partners />
   </main>
  )
}
