import { useState } from 'react'
import { motion } from 'framer-motion'

const ACCENT = '#D9642C'
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
      className="bg-[#0B0C0E] py-28 md:py-36 font-sans border-b border-[#F4EFE6]/10"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease }}
          className="mb-20 md:mb-24"
        >
          <span
            className="text-[10px] font-semibold tracking-widest uppercase flex items-center gap-2 text-[#D9642C] font-display"
          >
            Contact
            <span className="inline-block w-6 h-px bg-[#D9642C]" />
          </span>
          <h2
            className="mt-5 font-semibold text-[#F4EFE6] leading-none tracking-tight font-display"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: 0.92 }}
          >
            Let's build something<br />
            <span className="text-[#F4EFE6]/35">exceptional.</span>
          </h2>
          <p
            className="mt-5 text-sm leading-relaxed max-w-sm text-[#F4EFE6]/40 tracking-wide"
          >
            Ready to start a project with Qubixle Lab, or just want to chat? Drop us a line.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.07, duration: 0.5, ease }}
          onSubmit={handleSubmit}
          className="max-w-lg flex flex-col gap-8"
        >
          {status === 'sent' ? (
            <div className="py-16">
              <p
                className="font-semibold text-[#F4EFE6] tracking-tight font-display"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1 }}
              >
                Thanks —<br />
                <span className="text-[#F4EFE6]/35">we'll be in touch soon.</span>
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
                  placeholder="Name"
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-[#F4EFE6]/20 text-[#F4EFE6] text-sm font-semibold py-3 outline-none placeholder:text-[#F4EFE6]/30 transition-colors duration-300"
                  style={{
                    borderBottomColor: focusedField === 'name' ? ACCENT : 'rgba(244, 239, 230, 0.2)',
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-[#D9642C]"
                  initial={{ width: '0%' }}
                  animate={{ width: focusedField === 'name' ? '100%' : '0%' }}
                  transition={{ duration: 0.25, ease }}
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="Email"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-[#F4EFE6]/20 text-[#F4EFE6] text-sm font-semibold py-3 outline-none placeholder:text-[#F4EFE6]/30 transition-colors duration-300"
                  style={{
                    borderBottomColor: focusedField === 'email' ? ACCENT : 'rgba(244, 239, 230, 0.2)',
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-[#D9642C]"
                  initial={{ width: '0%' }}
                  animate={{ width: focusedField === 'email' ? '100%' : '0%' }}
                  transition={{ duration: 0.25, ease }}
                />
              </div>

              <div className="relative">
                <textarea
                  id="contact-details"
                  name="details"
                  required
                  placeholder="Project Details"
                  rows={4}
                  onFocus={() => setFocusedField('details')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-[#F4EFE6]/20 text-[#F4EFE6] text-sm font-semibold py-3 outline-none placeholder:text-[#F4EFE6]/30 transition-colors duration-300 resize-y"
                  style={{
                    borderBottomColor: focusedField === 'details' ? ACCENT : 'rgba(244, 239, 230, 0.2)',
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-[#D9642C]"
                  initial={{ width: '0%' }}
                  animate={{ width: focusedField === 'details' ? '100%' : '0%' }}
                  transition={{ duration: 0.25, ease }}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase px-8 py-4 bg-[#D9642C] text-[#0B0C0E] hover:bg-[#c4531d] font-display rounded-xs transition-all duration-200 hover:-translate-y-0.5"
                >
                  Send Message
                  <svg
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
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
