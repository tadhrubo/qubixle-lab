import { motion } from 'framer-motion'

const ACCENT = '#D9642C'
const ease = [0.22, 1, 0.36, 1]

const plans = [
  {
    name: 'Starter',
    desc: 'For a business that just needs to be found online.',
    price: '$500',
    priceNote: 'starting',
    featured: false,
    features: [
      'Up to 5 pages',
      'Mobile-first design',
      'Contact & booking form',
      'Basic search setup',
      '2-5 days turnaround',
    ],
    cta: 'Start with this',
  },
  {
    name: 'Growth',
    desc: 'For a business ready to sell and grow online.',
    price: '$1,000',
    priceNote: 'starting',
    featured: true,
    badge: 'Most chosen',
    features: [
      'Everything in Starter',
      'Online store or booking system',
      'Content you can edit yourself',
      'Analytics & search setup',
      '1-2 week turnaround',
    ],
    cta: 'Start with this',
  },
  {
    name: 'Custom',
    desc: 'For anything bigger than a standard build.',
    price: "Let's talk",
    priceNote: '',
    featured: false,
    features: [
      'Custom features & integrations',
      'Multi-location or multi-language',
      'Ongoing support plan',
      'Scoped after discovery',
    ],
    cta: 'Tell us more',
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
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
              Pricing
              <span className="inline-block w-6 h-px bg-[#D9642C]" />
            </span>
            <h2
              className="mt-5 font-semibold text-[#F4EFE6] leading-none tracking-tight font-display"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 0.95 }}
            >
              Straightforward<br />
              <span className="text-[#F4EFE6]/35">no hidden line items.</span>
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed sm:text-right max-w-xs text-[#F4EFE6]/40 tracking-wide"
          >
            Every project starts with a fixed quote after the discovery call. What follows are starting points.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.5, ease }}
              className={`relative flex flex-col p-8 rounded-sm bg-[#131519] border ${
                plan.featured ? 'border-[#D9642C]' : 'border-[#F4EFE6]/10'
              }`}
            >
              {plan.badge && (
                <span
                  className="absolute -top-3 right-6 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 bg-[#D9642C] text-[#0B0C0E] font-display rounded-xs shadow-sm"
                >
                  {plan.badge}
                </span>
              )}

              {/* Plan name */}
              <p
                className={`text-[10px] font-semibold tracking-widest uppercase mb-2 font-display ${
                  plan.featured ? 'text-[#D9642C]' : 'text-[#F4EFE6]/40'
                }`}
              >
                {plan.name}
              </p>
              <p className="text-xs leading-relaxed mb-6 text-[#F4EFE6]/40 min-h-[36px]">
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mb-6 border-b border-[#F4EFE6]/10 pb-6">
                <span
                  className="font-semibold text-[#F4EFE6] font-display"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.02em' }}
                >
                  {plan.price}
                </span>
                {plan.priceNote && (
                  <span className="text-xs ml-2 text-[#F4EFE6]/40">
                    {plan.priceNote}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-xs text-[#F4EFE6]/50">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#D9642C" strokeWidth="2"
                      className="w-3.5 h-3.5 mt-0.5 flex-shrink-0">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`flex items-center justify-center py-3 px-6 text-[11px] font-semibold tracking-widest uppercase transition-all duration-200 font-display ${
                  plan.featured
                    ? 'bg-[#D9642C] text-[#0B0C0E] hover:bg-[#c4531d]'
                    : 'border border-[#D9642C] text-[#D9642C] hover:bg-[#D9642C] hover:text-[#0B0C0E]'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
