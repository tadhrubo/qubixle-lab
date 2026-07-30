import { motion } from 'framer-motion'

const items = [
  {
    code: '01',
    title: 'FAST TURNAROUND',
    desc: 'Launch in days, not months. Scoped & executed with engineering precision.',
  },
  {
    code: '02',
    title: 'CUSTOM CODEBASE',
    desc: 'Zero templates. Every line crafted for your specific business requirements.',
  },
  {
    code: '03',
    title: 'COMPLETE OWNERSHIP',
    desc: 'No ongoing hostage fees or vendor lock-in. You own your code forever.',
  },
  {
    code: '04',
    title: 'GLOBAL COVERAGE',
    desc: 'Serving ambitious small businesses & studios across the US and Europe.',
  },
]

const revealVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.14,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Strip() {
  return (
    <section className="bg-[#0B0C0E] py-28 md:py-40 border-b border-[#F4EFE6]/10 font-sans text-[#F4EFE6] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Header coordinate tag */}
        <div className="flex items-center justify-between mb-12 font-mono text-[10px] tracking-[0.22em] text-[#F4EFE6]/40 uppercase">
          <span>[ SPECIFICATION // CORE_STANDARDS ]</span>
          <span className="text-[#D9642C]">+ SYSTEM.01</span>
        </div>

        {/* Blueprint Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 relative">
          {items.map((item, i) => (
            <motion.div
              key={item.code}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={revealVariant}
              className={`flex flex-col justify-between py-6 md:py-4 md:px-8 ${
                i !== 0 ? 'md:border-l border-[#F4EFE6]/10' : 'md:pl-0'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[11px] text-[#D9642C] tracking-widest">[ SYS.{item.code} ]</span>
                  <span className="w-1.5 h-1.5 bg-[#D9642C]/60 rounded-full" />
                </div>
                <h3 className="font-display font-semibold text-lg text-[#F4EFE6] tracking-wide mb-3 uppercase">
                  {item.title}
                </h3>
                <p className="text-xs text-[#F4EFE6]/50 leading-relaxed max-w-[28ch]">
                  {item.desc}
                </p>
              </div>

              {/* Blueprint hairline tick */}
              <div className="mt-8 pt-4 border-t border-[#F4EFE6]/10 flex items-center justify-between font-mono text-[9px] text-[#F4EFE6]/30 uppercase tracking-widest">
                <span>VERIFIED</span>
                <span className="text-[#D9642C]">OK</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
