import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
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
import Preloader from './components/Preloader'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div id="top" className="font-sans bg-[#0B0C0E] text-[#F4EFE6] min-h-screen">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
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
