import Hero from './components/Hero'
import Strip from './components/Strip'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="top" className="font-sans bg-[#0B0C0E] text-[#F4EFE6] min-h-screen">
      <Hero />
      <Strip />
      <Work />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}
