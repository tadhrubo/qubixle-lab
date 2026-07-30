import { motion } from 'framer-motion'

const ACCENT = '#D9642C'
const ease = [0.22, 1, 0.36, 1]

const services = [
  {
    title: 'Website Design',
    desc: "A site built around how your customers actually find you, not a generic template with your logo dropped on top.",
    num: '01',
    icon: (
      <svg viewBox="0 0 34 34" fill="none" className="w-8 h-8">
        <path d="M4 12L17 4L30 12V24L17 30L4 24V12Z" stroke="#D9642C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12L17 18L30 12" stroke="#D9642C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 18V30" stroke="#D9642C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Development & Build',
    desc: "Hand-coded for speed. Every site we ship loads fast and holds up on a slow connection or an old phone.",
    num: '02',
    icon: (
      <svg viewBox="0 0 34 34" fill="none" className="w-8 h-8">
        <path d="M4 12L17 4L30 12V24L17 30L4 24V12Z" stroke="#D9642C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 4V16" stroke="#D9642C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12L17 16L30 12" stroke="#D9642C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'E-Commerce',
    desc: "Sell directly from your site. A simple checkout, real inventory tracking, no plugin graveyard to maintain.",
    num: '03',
    icon: (
      <svg viewBox="0 0 34 34" fill="none" className="w-8 h-8">
        <rect x="6" y="6" width="10" height="10" stroke="#D9642C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="18" y="18" width="10" height="10" stroke="#D9642C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="18" y="6" width="10" height="10" stroke="#D9642C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Care & Support',
    desc: "Once you're live, we don't disappear. Updates and small changes handled without opening a ticket.",
    num: '04',
    icon: (
      <svg viewBox="0 0 34 34" fill="none" className="w-8 h-8">
        <circle cx="17" cy="17" r="12" stroke="#D9642C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 10V17L22 20" stroke="#D9642C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section
      id="services"
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
              Services
              <span className="inline-block w-6 h-px bg-[#D9642C]" />
            </span>
            <h2
              className="mt-5 font-semibold text-[#F4EFE6] leading-none tracking-tight font-display"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 0.95 }}
            >
              Everything you need<br />
              <span className="text-[#F4EFE6]/35">to show up online,</span><br />
              done properly.
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed sm:text-right max-w-xs text-[#F4EFE6]/40 tracking-wide"
          >
            No bundled add-ons you don't need. Pick what your business actually requires and we build it right.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.5, ease }}
              whileHover={{ y: -3 }}
              className="group p-8 flex flex-col justify-between gap-8 rounded-sm border border-[#F4EFE6]/10 bg-[#131519] transition-all duration-200 hover:border-[#D9642C] hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.9)] cursor-default"
            >
              <div className="flex items-start justify-between">
                {/* Flat geometric stroke icon */}
                <div className="p-1">
                  {s.icon}
                </div>

                {/* Copper Numeral */}
                <span
                  className="font-semibold text-sm tracking-widest text-[#D9642C] font-display"
                >
                  {s.num}
                </span>
              </div>

              <div>
                <h3
                  className="text-base font-semibold text-[#F4EFE6] tracking-wide mb-3 font-display group-hover:text-white transition-colors"
                >
                  {s.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#F4EFE6]/40">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
