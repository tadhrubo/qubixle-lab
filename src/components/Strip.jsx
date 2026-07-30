import { motion } from 'framer-motion'

const items = [
  {
    title: 'FAST TURNAROUND',
    desc: 'Launch in days, not months.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#D9642C" strokeWidth="1.5">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
      </svg>
    ),
  },
  {
    title: 'CUSTOM BUILT',
    desc: 'Every site is built for your business.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#D9642C" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'NO HOSTAGE FEES',
    desc: 'Pay once. Own it forever.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#D9642C" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'US & EUROPE',
    desc: 'Built for businesses, everywhere.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#D9642C" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function Strip() {
  return (
    <div
      className="bg-[#0B0C0E] border-t border-b border-[#F4EFE6]/10 font-sans"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.07, duration: 0.45, ease }}
            className={`flex items-center gap-4 py-6 px-4 ${
              i !== 0 ? 'border-t sm:border-t-0 sm:border-l border-[#F4EFE6]/10' : ''
            }`}
          >
            <div className="flex-shrink-0 p-2.5 rounded-sm bg-[#F4EFE6]/[0.02] border border-[#F4EFE6]/10">
              {item.icon}
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-[#F4EFE6] font-display">{item.title}</p>
              <p className="text-[11px] mt-1 text-[#F4EFE6]/50">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
