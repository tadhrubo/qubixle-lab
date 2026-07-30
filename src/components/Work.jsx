import { motion } from 'framer-motion'

const ACCENT = '#D9642C'
const ease = [0.22, 1, 0.36, 1]

const projects = [
  {
    title: "Nicoletta's Family Restaurant",
    category: 'Restaurant — Altoona, PA',
    image: '/assets/work/work-1.jpg',
    href: 'https://nicoletta-s.vercel.app/',
  },
  {
    title: "Chef's Lounge",
    category: 'Restaurant',
    image: '/assets/work/work-2.jpg',
    href: 'https://chefs-lounge.vercel.app/',
  },
  {
    title: 'Wolfies Restaurant & Sports Bar',
    category: 'Sports Bar & Restaurant',
    image: '/assets/work/work-3.jpg',
    href: 'https://wolfies-restaurant.vercel.app/',
  },
  {
    title: "LaForge's BBQ",
    category: 'BBQ Restaurant — Carterville',
    image: '/assets/work/work-4.jpg',
    href: 'https://la-forge-s-bbq.vercel.app/',
  },
  {
    title: 'Mady Restaurant',
    category: 'Restaurant — Fresh, Bold Flavors',
    image: '/assets/work/work-5.jpg',
    href: 'https://mady-bd.vercel.app/',
  },
  {
    title: 'The Grotto',
    category: 'Caribbean-Italian Fusion — Brooklyn',
    image: '/assets/work/work-7.jpg',
    href: 'https://tanjiddhrubo.github.io/the-grotto-restaurant/',
  },
  {
    title: 'Forget Me Not Cafe',
    category: 'Cafe & Bakery — Bristol, UK',
    image: '/assets/work/work-8.jpg',
    href: 'https://forget-me-not-cafe.vercel.app/',
  },
  {
    title: 'Lawns by Dallas',
    category: 'Lawn Care & Landscaping',
    image: '/assets/work/work-9.jpg',
    href: 'https://lawnsbydallas--tanjiddhrubo56.replit.app/',
  },
]

export default function Work() {
  return (
    <section
      id="work"
      className="bg-[#0B0C0E] py-28 md:py-36 font-sans border-b border-[#F4EFE6]/10"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">

        {/* Section Header */}
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
            Selected Work
            <span className="inline-block w-6 h-px bg-[#D9642C]" />
          </span>
          <h2
            className="mt-5 font-semibold text-[#F4EFE6] leading-none tracking-tight font-display"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: 0.92 }}
          >
            Built for businesses<br />
            <span className="text-[#F4EFE6]/35">that value craft.</span>
          </h2>
          <p
            className="mt-5 text-sm leading-relaxed max-w-md text-[#F4EFE6]/40 tracking-wide"
          >
            Every Qubixle Lab project starts from zero. No templates. No copy-paste.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 2) * 0.07, duration: 0.5, ease }}
              whileHover={{ y: -3 }}
              className="group block overflow-hidden rounded-sm border border-[#F4EFE6]/10 bg-[#131519] transition-all duration-200 hover:border-[#D9642C] hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.9)]"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-85 transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.02] group-hover:opacity-100"
                />
              </div>

              {/* Info with 1px divider */}
              <div
                className="flex items-center justify-between px-6 py-5 border-t border-[#F4EFE6]/10 bg-[#131519]"
              >
                <div>
                  <h3
                    className="font-semibold text-[#F4EFE6] text-sm sm:text-base leading-tight tracking-wide font-display group-hover:text-white transition-colors"
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-[10px] mt-1 tracking-widest uppercase text-[#F4EFE6]/40"
                  >
                    {project.category}
                  </p>
                </div>
                <svg
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  className="w-4 h-4 flex-shrink-0 text-[#F4EFE6]/30 transition-all duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#D9642C]"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
