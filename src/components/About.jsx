import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function About() {
  return (
    <section className="bg-[#0B0C0E] py-40 md:py-52 border-b border-[#F4EFE6]/10 font-sans text-[#F4EFE6] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] text-[#D9642C] uppercase mb-16">
          <span>[ SECTION 04 // MANIFESTO ]</span>
          <span className="w-12 h-px bg-[#D9642C]" />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start mb-28 md:mb-40">
          {/* Left: Large Statement */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease }}
            className="md:col-span-6"
          >
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-[#F4EFE6] tracking-tight leading-[1.1]">
              Small teams deserve enterprise-level websites.
            </h2>
            <div className="mt-8 w-20 h-px bg-[#D9642C]" />
          </motion.div>

          {/* Right: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease, delay: 0.14 }}
            className="md:col-span-6 flex flex-col gap-6 text-sm md:text-base leading-relaxed text-[#F4EFE6]/60 font-sans max-w-xl"
          >
            <p>
              Most small business websites are built on bloated, slow templates that break under updates or look indistinguishable from competitors.
            </p>
            <p>
              At Qubixle Lab, we build bespoke web platforms from scratch. We focus on clean code, instant load times, sharp design hierarchy, and long-term scalability.
            </p>
          </motion.div>
        </div>

        {/* Below: Three Restrained Blueprint Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-[#F4EFE6]/10 pt-16">
          {[
            { value: '100%', label: 'Custom Code', spec: 'ZERO_FRAMEWORK_BLOAT' },
            { value: '0', label: 'Templates Used', spec: '100%_BESPOKE_DESIGNS' },
            { value: 'Fast', label: 'Turnaround & Delivery', spec: 'ENGINEERED_TIMELINES' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, ease, delay: i * 0.14 }}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center justify-between font-mono text-[10px] text-[#D9642C] tracking-widest uppercase mb-2">
                <span>[ STAT_0{i + 1} ]</span>
                <span>↓</span>
              </div>
              <span className="font-display text-4xl md:text-6xl font-semibold text-[#F4EFE6] tracking-tight">
                {stat.value}
              </span>
              <span className="font-display text-base font-semibold text-[#F4EFE6] tracking-wide mt-1">
                {stat.label}
              </span>
              <span className="font-mono text-[10px] text-[#F4EFE6]/30 uppercase tracking-widest mt-1">
                [{stat.spec}]
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
