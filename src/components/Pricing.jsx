import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const plans = [
  {
    code: 'TIER_STARTER',
    name: 'Starter',
    desc: 'For a business that just needs a clear, high-converting digital presence.',
    price: '$500',
    priceNote: 'starting',
    featured: false,
    features: [
      'Up to 5 pages bespoke design',
      'Mobile-first performance build',
      'Contact & booking integration',
      'Basic search engine setup',
      '2–5 days turnaround',
    ],
    cta: 'Start with this',
  },
  {
    code: 'TIER_GROWTH',
    name: 'Growth',
    desc: 'For a business ready to sell, take online orders, or scale digital operations.',
    price: '$1,000',
    priceNote: 'starting',
    featured: true,
    badge: 'MOST CHOSEN',
    features: [
      'Everything in Starter',
      'Online store or booking platform',
      'Content management capability',
      'Analytics & search setup',
      '1–2 week turnaround',
    ],
    cta: 'Start with this',
  },
  {
    code: 'TIER_CUSTOM',
    name: 'Custom',
    desc: 'For enterprise platforms, multi-location brands, or custom web apps.',
    price: "Let's talk",
    priceNote: '',
    featured: false,
    features: [
      'Custom web application & APIs',
      'Multi-location or multi-language',
      'Dedicated support retainer',
      'Scoped after discovery call',
    ],
    cta: 'Tell us more',
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
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
            <span>[ SECTION 06 // PRICING & TIERS ]</span>
            <span className="w-12 h-px bg-[#D9642C]" />
          </div>

          <h2
            className="font-display font-semibold text-[#F4EFE6] leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)', lineHeight: 0.92 }}
          >
            Straightforward.<br />
            <span className="text-[#F4EFE6]/35">Fixed quote after discovery.</span>
          </h2>
          
          <div className="mt-8 w-24 h-px bg-[#D9642C]" />
        </motion.div>

        {/* Blueprint Sharp Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.14, duration: 1, ease }}
              className={`relative flex flex-col p-8 md:p-10 bg-[#0B0C0E] border ${
                plan.featured ? 'border-[#D9642C]' : 'border-[#F4EFE6]/10'
              }`}
            >
              {plan.badge && (
                <span
                  className="absolute -top-3 right-6 font-mono text-[9px] font-semibold tracking-widest uppercase px-3 py-1 bg-[#D9642C] text-[#0B0C0E]"
                >
                  {plan.badge}
                </span>
              )}

              {/* Code tag */}
              <div className="flex items-center justify-between font-mono text-[10px] text-[#F4EFE6]/30 uppercase tracking-widest mb-4">
                <span>[{plan.code}]</span>
                <span className="text-[#D9642C]">// FIXED</span>
              </div>

              {/* Plan name */}
              <h3 className="font-display text-2xl font-semibold text-[#F4EFE6] tracking-tight mb-2">
                {plan.name}
              </h3>
              <p className="text-xs leading-relaxed text-[#F4EFE6]/50 min-h-[36px] mb-8">
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mb-8 border-b border-[#F4EFE6]/10 pb-8">
                <span className="font-display font-semibold text-3xl md:text-5xl text-[#F4EFE6] tracking-tight">
                  {plan.price}
                </span>
                {plan.priceNote && (
                  <span className="font-mono text-xs text-[#F4EFE6]/40 ml-2">
                    {plan.priceNote}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-4 flex-1 mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-xs text-[#F4EFE6]/60">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#D9642C" strokeWidth="2"
                      className="w-3.5 h-3.5 mt-0.5 flex-shrink-0">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`group flex items-center justify-center gap-2 py-4 px-6 font-mono text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 ${
                  plan.featured
                    ? 'bg-[#D9642C] text-[#0B0C0E] hover:-translate-y-[2px]'
                    : 'border border-[#D9642C] text-[#D9642C] hover:bg-[#D9642C] hover:text-[#0B0C0E]'
                }`}
              >
                {plan.cta}
                <svg
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
