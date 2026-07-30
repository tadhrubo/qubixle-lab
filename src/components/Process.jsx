import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    code: 'STAGE_01',
    title: 'DISCOVER',
    subtitle: 'Scope & Architecture',
    desc: 'Discovery call to map out goals, target audience, and explicit requirements. Zero assumptions.',
  },
  {
    code: 'STAGE_02',
    title: 'DESIGN',
    subtitle: 'Interface & Systems',
    desc: 'Bespoke UI design in high fidelity. You review and approve exact layouts before code is written.',
  },
  {
    code: 'STAGE_03',
    title: 'BUILD',
    subtitle: 'Code & Performance',
    desc: 'Hand-crafted React & Vite implementation. Built for lightning speed, mobile responsiveness, and SEO.',
  },
  {
    code: 'STAGE_04',
    title: 'LAUNCH',
    subtitle: 'Deploy & Support',
    desc: 'Production deployment to your custom domain. Includes 30 days of direct post-launch monitoring.',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function Process() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 50%'],
  })

  const progressLineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      id="process"
      ref={containerRef}
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
            <span>[ SECTION 03 // PROCESS TIMELINE ]</span>
            <span className="w-12 h-px bg-[#D9642C]" />
          </div>

          <h2
            className="font-display font-semibold text-[#F4EFE6] leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)', lineHeight: 0.92 }}
          >
            Construction Process<br />
            <span className="text-[#F4EFE6]/35">Four stages. Zero surprises.</span>
          </h2>
          
          <div className="mt-8 w-24 h-px bg-[#D9642C]" />
        </motion.div>

        {/* Blueprint Horizontal Construction Line */}
        <div className="relative mb-20 hidden md:block">
          {/* Base hairline track */}
          <div className="w-full h-px bg-[#F4EFE6]/15 absolute top-[14px] left-0" />
          
          {/* Animated copper scroll line */}
          <motion.div
            style={{ width: progressLineWidth }}
            className="h-px bg-[#D9642C] absolute top-[14px] left-0 shadow-[0_0_8px_#D9642C]"
          />

          {/* Blueprint Horizontal Milestones */}
          <div className="grid grid-cols-4 relative z-10">
            {steps.map((s, i) => (
              <div key={s.title} className="flex flex-col items-start pr-6">
                {/* Small circular node */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-7 h-7 rounded-full border border-[#D9642C] bg-[#0B0C0E] flex items-center justify-center text-[#D9642C] font-mono text-[10px] font-semibold">
                    0{i + 1}
                  </div>
                  <span className="font-mono text-[9px] text-[#F4EFE6]/40 uppercase tracking-widest">
                    [{s.code}]
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-[#F4EFE6] tracking-wider uppercase mb-2">
                  {s.title}
                </h3>
                <span className="font-mono text-[11px] text-[#D9642C] tracking-widest uppercase mb-3">
                  {s.subtitle}
                </span>
                <p className="text-xs text-[#F4EFE6]/40 leading-relaxed max-w-[24ch]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View Timeline (Vertical Blueprint) */}
        <div className="md:hidden flex flex-col gap-12 relative border-l border-[#F4EFE6]/15 pl-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, ease, delay: i * 0.1 }}
              className="relative flex flex-col gap-2"
            >
              {/* Circular node positioning */}
              <div className="absolute -left-[37px] top-0 w-6 h-6 rounded-full border border-[#D9642C] bg-[#0B0C0E] flex items-center justify-center text-[#D9642C] font-mono text-[9px]">
                0{i + 1}
              </div>
              <span className="font-mono text-[10px] text-[#D9642C] tracking-widest uppercase">
                [{s.code}]
              </span>
              <h3 className="font-display text-xl font-semibold text-[#F4EFE6] tracking-wider uppercase">
                {s.title}
              </h3>
              <p className="text-xs text-[#F4EFE6]/50 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
