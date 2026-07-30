import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function Testimonials() {
  return (
    <section className="bg-[#0B0C0E] py-40 md:py-52 border-b border-[#F4EFE6]/10 font-sans text-[#F4EFE6] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] text-[#D9642C] uppercase mb-20">
          <span>[ SECTION 05 // ENDORSEMENT ]</span>
          <span className="w-12 h-px bg-[#D9642C]" />
        </div>

        {/* Large Minimal Quotation Spread */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease }}
          className="max-w-4xl flex flex-col gap-10"
        >
          <span className="font-mono text-sm text-[#D9642C] tracking-widest uppercase">
            [ VERIFIED_FEEDBACK ]
          </span>

          <blockquote
            className="font-display font-semibold text-[#F4EFE6] tracking-tight leading-[1.08]"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
          >
            "They understood our business before writing a single line of code. The execution was flawless."
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-[#F4EFE6]/10">
            <span className="font-display font-semibold text-lg text-[#F4EFE6] tracking-wide">
              Nicoletta’s Family Restaurant
            </span>
            <span className="hidden sm:inline text-[#F4EFE6]/30">—</span>
            <span className="font-mono text-xs text-[#F4EFE6]/40 uppercase tracking-widest">
              ALTOONA, PA // FULL DIGITAL OVERHAUL
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
