import { motion } from 'framer-motion'

const ACCENT = '#D9642C'
const ease = [0.22, 1, 0.36, 1]

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: "A short call about your business, your customers, and what the site actually needs to do for you.",
  },
  {
    num: '02',
    title: 'Design',
    desc: "A real design, built for your business, not a theme. You see and approve it before a single line of code gets written.",
  },
  {
    num: '03',
    title: 'Build',
    desc: "We build it clean, test it on real devices, and get the basics of search set up from day one.",
  },
  {
    num: '04',
    title: 'Launch',
    desc: "Your site goes live on your own domain. We stay on for the first month to catch anything that comes up.",
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#0B0C0E] py-28 md:py-36 font-sans border-b border-[#F4EFE6]/10"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-20 md:mb-24"
        >
          <div>
            <span
              className="text-[10px] font-semibold tracking-widest uppercase flex items-center gap-2 text-[#D9642C] font-display"
            >
              Process
              <span className="inline-block w-6 h-px bg-[#D9642C]" />
            </span>
            <h2
              className="mt-5 font-semibold text-[#F4EFE6] leading-none tracking-tight font-display"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 0.95 }}
            >
              Four steps.<br />
              <span className="text-[#F4EFE6]/35">No surprises.</span>
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed sm:text-right max-w-xs text-[#F4EFE6]/40 tracking-wide"
          >
            You know exactly what happens next at every stage, and you approve the design before we build anything.
          </p>
        </motion.div>

        {/* Steps Timeline Container */}
        <div className="relative border-t border-[#F4EFE6]/10">
          {/* Thin vertical connecting line in bone-at-20%-opacity */}
          <div
            className="absolute left-[16px] top-6 bottom-6 w-px bg-[#F4EFE6]/20 hidden sm:block"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.5, ease }}
              className="group relative grid gap-6 py-8 md:py-10 items-start border-b border-[#F4EFE6]/10 transition-colors duration-300 hover:bg-[#F4EFE6]/[0.015]"
              style={{
                gridTemplateColumns: '44px 1fr',
              }}
            >
              {/* Number sitting in a copper-outlined circle */}
              <div className="flex items-center justify-center z-10 bg-[#0B0C0E]">
                <div className="w-8 h-8 rounded-full border border-[#D9642C] text-[#D9642C] flex items-center justify-center font-semibold text-[11px] font-display shadow-sm">
                  {step.num}
                </div>
              </div>

              {/* Content */}
              <div className="sm:grid gap-6" style={{ gridTemplateColumns: '1fr 1.6fr' }}>
                <h3
                  className="text-lg sm:text-xl font-semibold text-[#F4EFE6] tracking-wide mb-3 sm:mb-0 font-display group-hover:text-white transition-colors"
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed text-[#F4EFE6]/40 tracking-wide"
                >
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
