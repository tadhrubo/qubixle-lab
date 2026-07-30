import { motion } from 'framer-motion'

const projects = [
  {
    num: '01',
    code: 'PRJ_NICOLETTA',
    title: "Nicoletta's Family Restaurant",
    category: 'Restaurant & Hospitality — Altoona, PA',
    image: '/assets/work/work-1.jpg',
    href: 'https://nicoletta-s.vercel.app/',
    aspect: '16/10',
    location: 'ALTOONA, PA',
    year: '2026',
  },
  {
    num: '02',
    code: 'PRJ_CHEFS',
    title: "Chef's Lounge",
    category: 'Fine Dining & Culinary Experience',
    image: '/assets/work/work-2.jpg',
    href: 'https://chefs-lounge.vercel.app/',
    aspect: '16/10',
    location: 'NEW YORK, NY',
    year: '2026',
  },
  {
    num: '03',
    code: 'PRJ_WOLFIES',
    title: 'Wolfies Restaurant & Sports Bar',
    category: 'Sports Bar & Restaurant',
    image: '/assets/work/work-3.jpg',
    href: 'https://wolfies-restaurant.vercel.app/',
    aspect: '16/10',
    location: 'DALLAS, TX',
    year: '2025',
  },
  {
    num: '04',
    code: 'PRJ_LAFORGE',
    title: "LaForge's BBQ",
    category: 'BBQ Restaurant — Carterville',
    image: '/assets/work/work-4.jpg',
    href: 'https://la-forge-s-bbq.vercel.app/',
    aspect: '16/10',
    location: 'CARTERVILLE, IL',
    year: '2025',
  },
  {
    num: '05',
    code: 'PRJ_MADY',
    title: 'Mady Restaurant',
    category: 'Fresh & Bold Flavors',
    image: '/assets/work/work-5.jpg',
    href: 'https://mady-bd.vercel.app/',
    aspect: '16/10',
    location: 'DHAKA, BD',
    year: '2025',
  },
  {
    num: '06',
    code: 'PRJ_GROTTO',
    title: 'The Grotto',
    category: 'Caribbean-Italian Fusion — Brooklyn',
    image: '/assets/work/work-7.jpg',
    href: 'https://tanjiddhrubo.github.io/the-grotto-restaurant/',
    aspect: '16/10',
    location: 'BROOKLYN, NY',
    year: '2025',
  },
  {
    num: '07',
    code: 'PRJ_FORGETME',
    title: 'Forget Me Not Cafe',
    category: 'Cafe & Bakery — Bristol, UK',
    image: '/assets/work/work-8.jpg',
    href: 'https://forget-me-not-cafe.vercel.app/',
    aspect: '16/10',
    location: 'BRISTOL, UK',
    year: '2025',
  },
  {
    num: '08',
    code: 'PRJ_LAWNS',
    title: 'Lawns by Dallas',
    category: 'Lawn Care & Landscaping Services',
    image: '/assets/work/work-9.jpg',
    href: 'https://lawnsbydallas--tanjiddhrubo56.replit.app/',
    aspect: '16/10',
    location: 'DALLAS, TX',
    year: '2025',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function Work() {
  return (
    <section
      id="work"
      className="bg-[#0B0C0E] py-28 md:py-52 border-b border-[#F4EFE6]/10 font-sans text-[#F4EFE6] relative overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 md:mb-40"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] text-[#D9642C] uppercase mb-6">
            <span>[ SECTION 01 // SELECTED WORK ]</span>
            <span className="w-12 h-px bg-[#D9642C]" />
          </div>

          <h2
            className="font-display font-semibold text-[#F4EFE6] leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)', lineHeight: 0.92 }}
          >
            Built for businesses<br />
            <span className="text-[#F4EFE6]/35">that value craft.</span>
          </h2>

          <div className="mt-8 flex items-center gap-6">
            <div className="w-24 h-px bg-[#D9642C]" />
            <p className="font-mono text-xs text-[#F4EFE6]/40 uppercase tracking-widest">
              [ 08 VERIFIED CLIENT PROJECTS ]
            </p>
          </div>
        </motion.div>

        {/* Project Alternating Layout Spreads */}
        <div className="flex flex-col gap-24 md:gap-48">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0
            return (
              <div
                key={project.title}
                className="group relative flex flex-col gap-6 md:gap-8 border-b border-[#F4EFE6]/10 pb-16 md:pb-32"
              >
                {/* Blueprint Metadata Bar */}
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-[#F4EFE6]/40 uppercase pb-2">
                  <span>[ {project.code} // NO.{project.num} ]</span>
                  <div className="flex items-center gap-4">
                    <span>LOC: {project.location}</span>
                    <span className="text-[#D9642C]">// {project.year}</span>
                  </div>
                </div>

                {/* Alternating Image & Info Layout */}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Large Image Container with Reliable Mobile Reveal */}
                  <div className={`w-full ${isEven ? 'md:col-span-8' : 'md:col-span-8 md:order-2'}`}>
                    <motion.div
                      initial={{ opacity: 0, clipPath: 'inset(40% 0 0 0)' }}
                      whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                      viewport={{ once: true, amount: 0.05 }}
                      transition={{ duration: 0.8, ease }}
                      className="relative overflow-hidden w-full bg-[#131519]"
                      style={{ aspectRatio: '16/10' }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top opacity-100 sm:opacity-90 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.02] group-hover:opacity-100"
                      />

                      {/* Blueprint Corner Ticks */}
                      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/40 pointer-events-none" />
                      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/40 pointer-events-none" />
                      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/40 pointer-events-none" />
                      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/40 pointer-events-none" />
                    </motion.div>
                  </div>

                  {/* Project Info Block */}
                  <div className={`w-full flex flex-col justify-between ${
                    isEven ? 'md:col-span-4' : 'md:col-span-4 md:order-1'
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.05 }}
                      transition={{ duration: 0.8, ease, delay: 0.1 }}
                      className="flex flex-col gap-4 sm:gap-6"
                    >
                      <span className="font-mono text-xs text-[#D9642C] tracking-widest uppercase">
                        {project.category}
                      </span>

                      {/* Title with upward hover transition */}
                      <h3 className="font-display text-xl sm:text-3xl md:text-4xl font-semibold text-[#F4EFE6] tracking-tight transition-transform duration-300 ease-out group-hover:-translate-y-1">
                        {project.title}
                      </h3>

                      {/* Monospace Caption */}
                      <p className="font-mono text-[11px] text-[#F4EFE6]/50 leading-relaxed uppercase tracking-wider">
                        Custom interface design, front-end development, and performance optimization for {project.title}.
                      </p>

                      {/* Hover Arrow + Copper Line Extension */}
                      <div className="mt-2 sm:mt-4 flex items-center gap-3">
                        <span className="text-xs font-mono tracking-widest text-[#D9642C] sm:text-[#F4EFE6]/60 uppercase group-hover:text-white transition-colors">
                          PREVIEW WEBSITE ↗
                        </span>
                        <svg
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                          className="w-4 h-4 text-[#D9642C] transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
                        >
                          <path d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </div>

                      {/* Extending copper line on hover */}
                      <div className="w-full sm:w-0 h-px bg-[#D9642C] group-hover:w-full transition-all duration-500 ease-out mt-1 sm:mt-2" />
                    </motion.div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
