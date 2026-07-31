import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X, Smartphone, Shield, Zap } from 'lucide-react'

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
  initial: { opacity: 0, y: 24 },
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
      className="relative flex flex-col justify-between min-h-[100dvh] sm:min-h-screen overflow-hidden font-sans bg-white py-4 sm:py-6"
    >
      {/* ── Background Video ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-[90%_12%] sm:object-[80%_center] md:object-right z-0 scale-75 sm:scale-100 origin-top-right"
        src="/assets/qanimationRIght.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Light overlay — stronger on mobile for text readability */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.55) 55%, rgba(255,255,255,0.05) 100%)' }}
      />
      {/* Desktop: minimal overlay */}
      <div className="absolute inset-0 z-[1] bg-white/5 pointer-events-none hidden sm:block" />

      {/* ── Navigation ── */}
      <nav className="relative z-10 flex items-center justify-between px-4 sm:px-8 md:px-12 pt-2 sm:pt-4">
        {/* Logo */}
        <motion.div
          custom={0}
          variants={fadeDown}
          initial="initial"
          animate="animate"
          className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0"
        >
          <img
            src="/assets/qubixle_Q_mono-black_transparent.svg"
            alt="Qubixle Lab"
            className="h-7 sm:h-9 w-auto"
          />
          <span
            className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-black font-display"
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
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black flex flex-col items-center justify-center gap-1 flex-shrink-0"
        >
          <span className="w-3.5 sm:w-4 h-0.5 bg-white block" />
          <span className="w-3.5 sm:w-4 h-0.5 bg-white block" />
          <span className="w-3.5 sm:w-4 h-0.5 bg-white block" />
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
            className="fixed inset-0 z-50 bg-[#F4EFE6] flex flex-col px-6 sm:px-8 py-6"
          >
            {/* Top Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/qubixle_Q_mono-black_transparent.svg"
                  alt="Qubixle Lab"
                  className="h-8 sm:h-9 w-auto"
                />
                <span className="text-[11px] font-semibold tracking-widest uppercase text-black font-display">
                  Qubixle Lab
                </span>
              </div>
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black flex items-center justify-center"
              >
                <X size={16} color="white" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-6 sm:gap-8 mt-12 sm:mt-16 font-display">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-2xl sm:text-3xl font-semibold tracking-widest uppercase text-black hover:opacity-50 transition-opacity"
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
                className="flex items-center gap-2 text-lg sm:text-xl font-semibold tracking-widest uppercase font-display"
                style={{ color: ACCENT }}
              >
                Start Your Website
                <ArrowUpRight size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="flex-1 min-h-[4rem] sm:min-h-[6rem] md:min-h-[8rem]" />

      {/* ── Main Content Container ── */}
      <div className="relative z-10 px-4 sm:px-8 md:px-12 pb-16 md:pb-24 max-w-4xl flex flex-col items-start text-left">
        {/* Main Heading */}
        <div className="flex flex-col items-start font-display">
          {['YOUR BUSINESS', 'LOOKS BETTER', 'ONLINE.'].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.4 + i * 0.14,
                  duration: 0.7,
                  ease,
                }}
                className="font-bold uppercase text-black leading-none whitespace-nowrap tracking-tight font-display"
                style={{
                  fontSize: 'clamp(1.6rem, 7.5vw, 6rem)',
                  lineHeight: 0.9,
                }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Supporting Copy */}
        <motion.p
          custom={6}
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="mt-6 text-sm sm:text-base md:text-[17px] font-medium text-neutral-600 max-w-lg leading-relaxed font-sans"
        >
          Modern websites for local businesses.<br />
          Starting at <span className="font-bold" style={{ color: ACCENT }}>$200</span>. No upfront payment.<br />
          Built to help customers find and trust your business.
        </motion.p>

        {/* Buttons Row */}
        <motion.div
          custom={7}
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="mt-8 md:mt-10 flex flex-row items-center gap-6"
        >
          {/* Start Your Website Button */}
          <a
            href="#contact"
            className="flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-white font-bold tracking-wider text-xs sm:text-sm uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/10"
            style={{ backgroundColor: ACCENT }}
          >
            Start Your Website &nbsp;↗
          </a>

          {/* View Our Work Link */}
          <a
            href="#work"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-black hover:opacity-75 transition-opacity"
          >
            View Our Work &nbsp;↗
          </a>
        </motion.div>
      </div>

      {/* ── Bottom Trust Elements ── */}
      <div className="relative z-10 px-4 sm:px-8 md:px-12 pb-6 md:pb-8 flex flex-wrap md:flex-nowrap items-center justify-between gap-6 md:gap-4 border-t border-black/5 pt-6 mt-auto">
        {/* Item 1: Mobile Friendly */}
        <div className="flex items-center gap-3 w-[45%] md:w-auto">
          <Smartphone size={22} className="text-black stroke-[1.5] flex-shrink-0" />
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-black leading-none">Mobile Friendly</span>
            <span className="text-[9px] sm:text-[10px] text-neutral-500 mt-1">Looks perfect on every device</span>
          </div>
        </div>

        {/* Item 2: Google Friendly */}
        <div className="flex items-center gap-3 w-[45%] md:w-auto">
          <span className="font-display font-black text-xl sm:text-2xl leading-none select-none text-black">G</span>
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-black leading-none">Google Friendly</span>
            <span className="text-[9px] sm:text-[10px] text-neutral-500 mt-1">Built with SEO best practices</span>
          </div>
        </div>

        {/* Item 3: No Risk */}
        <div className="flex items-center gap-3 w-[45%] md:w-auto">
          <Shield size={22} className="text-black stroke-[1.5] flex-shrink-0" />
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-black leading-none">No Risk</span>
            <span className="text-[9px] sm:text-[10px] text-neutral-500 mt-1">Pay only when you're happy</span>
          </div>
        </div>

        {/* Item 4: Fast Delivery */}
        <div className="flex items-center gap-3 w-[45%] md:w-auto">
          <Zap size={22} className="text-black stroke-[1.5] flex-shrink-0" />
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-black leading-none">Fast Delivery</span>
            <span className="text-[9px] sm:text-[10px] text-neutral-500 mt-1">Get your site up and running</span>
          </div>
        </div>
      </div>
    </section>
  )
}
