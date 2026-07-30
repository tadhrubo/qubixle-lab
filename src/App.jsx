import Hero from './components/Hero'
import Strip from './components/Strip'
import Work from './components/Work'
import Services from './components/Services'
import Process from './components/Process'
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
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}
