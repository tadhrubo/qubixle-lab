import { useState } from 'react'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [focusedField, setFocusedField] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sent')
  }

  return (
    <section
      id="contact"
      className="bg-[#0B0C0E] py-40 md:py-52 border-b border-[#F4EFE6]/10 font-sans text-[#F4EFE6] relative overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease }}
          className="mb-24 md:mb-32"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] text-[#D9642C] uppercase mb-6">
            <span>[ SECTION 07 // INITIATE PROJECT ]</span>
            <span className="w-12 h-px bg-[#D9642C]" />
          </div>

          <h2
            className="font-display font-semibold text-[#F4EFE6] leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)', lineHeight: 0.92 }}
          >
            Let's build something<br />
            <span className="text-[#F4EFE6]/35">worth remembering.</span>
          </h2>
          
          <div className="mt-8 w-24 h-px bg-[#D9642C]" />
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.14, duration: 1, ease }}
          onSubmit={handleSubmit}
          className="max-w-2xl flex flex-col gap-10"
        >
          {status === 'sent' ? (
            <div className="py-16">
              <p
                className="font-display font-semibold text-[#F4EFE6] tracking-tight"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1 }}
              >
                Message received —<br />
                <span className="text-[#F4EFE6]/35">We will respond within 24 hours.</span>
              </p>
            </div>
          ) : (
            <>
              <div className="relative">
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="NAME"
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-[#F4EFE6]/15 text-[#F4EFE6] font-mono text-xs font-semibold py-4 outline-none placeholder:text-[#F4EFE6]/30 uppercase tracking-widest transition-colors duration-300"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-[#D9642C]"
                  initial={{ width: '0%' }}
                  animate={{ width: focusedField === 'name' ? '100%' : '0%' }}
                  transition={{ duration: 0.3, ease }}
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="EMAIL ADDRESS"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-[#F4EFE6]/15 text-[#F4EFE6] font-mono text-xs font-semibold py-4 outline-none placeholder:text-[#F4EFE6]/30 uppercase tracking-widest transition-colors duration-300"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-[#D9642C]"
                  initial={{ width: '0%' }}
                  animate={{ width: focusedField === 'email' ? '100%' : '0%' }}
                  transition={{ duration: 0.3, ease }}
                />
              </div>

              <div className="relative">
                <textarea
                  id="contact-details"
                  name="details"
                  required
                  placeholder="PROJECT DETAILS / TIMELINE"
                  rows={4}
                  onFocus={() => setFocusedField('details')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-[#F4EFE6]/15 text-[#F4EFE6] font-mono text-xs font-semibold py-4 outline-none placeholder:text-[#F4EFE6]/30 uppercase tracking-widest transition-colors duration-300 resize-y"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-[#D9642C]"
                  initial={{ width: '0%' }}
                  animate={{ width: focusedField === 'details' ? '100%' : '0%' }}
                  transition={{ duration: 0.3, ease }}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 font-mono text-xs font-semibold tracking-[0.18em] uppercase px-10 py-5 bg-[#D9642C] text-[#0B0C0E] hover:-translate-y-[2px] transition-transform duration-200"
                >
                  Send Message
                  <svg
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-[6px]"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </>
          )}
        </motion.form>
      </div>
    </section>
  )
}
