import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'

const ACCENT = '#D9642C'

const ease = [0.22, 1, 0.36, 1]

const fadeDown = {
  initial: { opacity: 0, y: -20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease },
  }),
}

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease },
  }),
}

const navLinks = [
  { label: 'Work',     href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process',  href: '#process' },
  { label: 'Contact',  href: '#contact' },
]

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((v) => !v)
  const closeMenu = () => setMenuOpen(false)

  return (
    <section
      className="relative flex flex-col min-h-screen overflow-hidden font-sans bg-[#0B0C0E]"
    >
      {/* ── Background Video ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/Qanimation.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Light overlay so text stays readable */}
      <div className="absolute inset-0 z-[1] bg-[#F4EFE6]/20" />

      {/* ── Navigation ── */}
      <nav className="relative z-10 flex items-center justify-between px-5 sm:px-8 md:px-12 pt-5 md:pt-6">
        {/* Logo */}
        <motion.div
          custom={0}
          variants={fadeDown}
          initial="initial"
          animate="animate"
          className="flex items-center gap-3 flex-shrink-0"
        >
          <img
            src="/assets/qubixle_Q_mono-black_transparent.svg"
            alt="Qubixle Lab"
            className="h-9 w-auto"
          />
          <span
            className="hidden sm:block text-[11px] font-semibold tracking-widest uppercase text-black font-display"
          >
            Qubixle Lab
          </span>
        </motion.div>

        {/* Desktop Nav Links with Animated Underline */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              custom={i + 1}
              variants={fadeDown}
              initial="initial"
              animate="animate"
              className="relative text-sm font-semibold tracking-widest uppercase text-black hover:opacity-80 transition-opacity py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D9642C] transition-all duration-300 ease-out group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Hamburger */}
        <motion.button
          custom={5}
          variants={fadeDown}
          initial="initial"
          animate="animate"
          onClick={toggleMenu}
          aria-label="Open menu"
          className="w-9 h-9 rounded-full bg-black flex flex-col items-center justify-center gap-1 flex-shrink-0"
        >
          <span className="w-4 h-0.5 bg-white block" />
          <span className="w-4 h-0.5 bg-white block" />
          <span className="w-4 h-0.5 bg-white block" />
        </motion.button>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            className="fixed inset-0 z-50 bg-[#F4EFE6] flex flex-col px-8 py-6"
          >
            {/* Top Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/qubixle_Q_mono-black_transparent.svg"
                  alt="Qubixle Lab"
                  className="h-9 w-auto"
                />
                <span className="text-[11px] font-semibold tracking-widest uppercase text-black font-display">
                  Qubixle Lab
                </span>
              </div>
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center"
              >
                <X size={16} color="white" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-8 mt-16 font-display">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-3xl font-semibold tracking-widest uppercase text-black hover:opacity-50 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto">
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center gap-2 text-xl font-semibold tracking-widest uppercase font-display"
                style={{ color: ACCENT }}
              >
                Work With Us
                <ArrowUpRight size={22} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="flex-1" />

      {/* ── Bottom Content ── */}
      <div className="relative z-10 px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-6 md:gap-12">
        {/* Row A: Tagline + CTA */}
        <div className="flex items-center justify-between gap-4">
          <motion.p
            custom={5}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black max-w-[130px] sm:max-w-[160px] md:max-w-xs leading-snug font-sans"
          >
            Web Design For Businesses /<br />
            Ready To Be Found
          </motion.p>

          <motion.a
            custom={6}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            href="#contact"
            className="group flex items-center gap-1 sm:gap-2 text-base sm:text-xl md:text-2xl font-semibold tracking-widest uppercase whitespace-nowrap hover:opacity-80 transition-opacity font-display"
            style={{ color: ACCENT }}
          >
            Work With Us
            <ArrowUpRight size={18} className="sm:hidden transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            <ArrowUpRight size={22} className="hidden sm:block transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>
        </div>

        {/* Row B: Description + Heading */}
        <div className="flex items-end justify-between gap-3 sm:gap-4">
          {/* Left description */}
          <motion.div
            custom={7}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="w-[120px] sm:w-[180px] md:w-[280px] flex-shrink-0"
          >
            <p className="text-[9px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black text-left md:text-right leading-snug font-sans">
              Creative Studios Built Around Elevating Your Vision Into Striking Reality
            </p>
          </motion.div>

          {/* Main Heading */}
          <div className="flex flex-col items-end font-display">
          {['Be Found.', 'Be Trusted.', 'Get Booked.'].map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.h1
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.4 + i * 0.14,
                    duration: 0.7,
                    ease,
                  }}
                  className="font-semibold uppercase text-black text-right leading-none"
                  style={{
                    fontSize: 'clamp(1.8rem, 8vw, 8rem)',
                    lineHeight: 0.88,
                  }}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
