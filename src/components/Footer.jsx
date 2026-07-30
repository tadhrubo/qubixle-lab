export default function Footer() {
  return (
    <footer
      className="bg-[#0B0C0E] pt-20 pb-10 font-sans"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">

        {/* Top */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-14 border-b border-[#F4EFE6]/10"
        >
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="/assets/qubixle_Q_mono-white_transparent.svg"
              alt="Qubixle Lab"
              className="h-9 w-auto mb-3 opacity-90"
            />
            <p
              className="text-[10px] font-semibold tracking-widest uppercase mb-4 text-[#F4EFE6]/50 font-display"
            >
              Qubixle Lab
            </p>
            <p
              className="text-xs leading-relaxed max-w-[24ch] text-[#F4EFE6]/60 tracking-wide"
            >
              Websites for businesses that never got around to it. Serving small businesses across the US and Europe.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4
              className="text-[10px] font-semibold tracking-widest uppercase mb-5 text-[#F4EFE6]/30 font-display"
            >
              Sitemap
            </h4>
            <ul className="flex flex-col gap-3">
              {['Work', 'Services', 'Process', 'Pricing', 'Contact'].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-xs tracking-wide text-[#F4EFE6]/60 hover:text-[#D9642C] transition-colors duration-200"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[10px] font-semibold tracking-widest uppercase mb-5 text-[#F4EFE6]/30 font-display"
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:qubixlelab@gmail.com"
                  className="text-xs tracking-wide text-[#F4EFE6]/60 hover:text-[#D9642C] transition-colors duration-200"
                >
                  qubixlelab@gmail.com
                </a>
              </li>
              <li>
                <span
                  className="text-xs tracking-wide text-[#F4EFE6]/40"
                >
                  Remote — US & EU hours
                </span>
              </li>
            </ul>
          </div>

          {/* Elsewhere */}
          <div>
            <h4
              className="text-[10px] font-semibold tracking-widest uppercase mb-5 text-[#F4EFE6]/30 font-display"
            >
              Elsewhere
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://www.instagram.com/qubixlelab?igsh=MTl5Nng0ZmFjMm8yaQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-wide text-[#F4EFE6]/60 hover:text-[#D9642C] transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-6">
          <span
            className="text-[11px] text-[#F4EFE6]/40 tracking-wide"
          >
            © 2026 Qubixle Lab. All rights reserved.
          </span>
          <a
            href="#top"
            className="group flex items-center gap-2 text-[11px] text-[#F4EFE6]/60 hover:text-[#D9642C] transition-colors duration-200 tracking-wide"
          >
            Back to top
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-1">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
