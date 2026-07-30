import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Web Design',
    desc: 'Websites designed around clarity, conversion and longevity. Built to elevate your positioning from day one.',
    code: 'SPEC_DESIGN',
  },
  {
    num: '02',
    title: 'Development',
    desc: 'Fast, custom coded experiences built for performance. Zero bloated site builders or template workarounds.',
    code: 'SPEC_DEV',
  },
  {
    num: '03',
    title: 'Brand Systems',
    desc: 'Identity systems that remain crisp and consistent across every digital touchpoint and screen size.',
    code: 'SPEC_BRAND',
  },
  {
    num: '04',
    title: 'Care & Strategy',
    desc: 'Ongoing support, continuous optimization, and rapid feature iterations without open-ticket delays.',
    code: 'SPEC_CARE',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function Services() {
  return (
    <section
      id="services"
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
            <span>[ SECTION 02 // SERVICES ]</span>
            <span className="w-12 h-px bg-[#D9642C]" />
          </div>

          <h2
            className="font-display font-semibold text-[#F4EFE6] leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)', lineHeight: 0.92 }}
          >
            Capabilities & Services<br />
            <span className="text-[#F4EFE6]/35">Engineered for growth.</span>
          </h2>
          
          {/* Thin hairline beneath heading */}
          <div className="mt-8 w-24 h-px bg-[#D9642C]" />
        </motion.div>

        {/* Editorial Numbered List */}
        <div className="flex flex-col">
          {services.map((s, i) => (
            <div key={s.num} className="relative group">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1, ease, delay: i * 0.14 }}
                className="grid grid-cols-1 md:grid-cols-12 items-baseline py-12 md:py-16 gap-6 md:gap-8"
              >
                {/* 01 Copper Numeral & Code */}
                <div className="md:col-span-2 flex items-baseline justify-between md:justify-start gap-4">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.14 }}
                    className="font-display text-2xl md:text-3xl font-semibold text-[#D9642C]"
                  >
                    {s.num}
                  </motion.span>
                  <span className="font-mono text-[10px] text-[#F4EFE6]/30 tracking-widest uppercase">
                    [{s.code}]
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl md:text-4xl font-semibold text-[#F4EFE6] tracking-tight group-hover:text-white transition-colors duration-300">
                    {s.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6 max-w-xl">
                  <p className="text-sm md:text-base leading-relaxed text-[#F4EFE6]/50 tracking-wide font-sans">
                    {s.desc}
                  </p>
                </div>
              </motion.div>

              {/* Animated Growing Hairline Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease, delay: i * 0.14 + 0.2 }}
                style={{ transformOrigin: 'left' }}
                className="w-full h-px bg-[#F4EFE6]/10 group-hover:bg-[#D9642C]/40 transition-colors duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
