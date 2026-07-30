export default function Footer() {
  return (
    <footer className="bg-[#0B0C0E] pt-32 pb-16 font-sans text-[#F4EFE6]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">

        {/* Blueprint Top Header Bar */}
        <div className="flex items-center justify-between pb-12 border-b border-[#F4EFE6]/10 font-mono text-[10px] tracking-[0.22em] text-[#F4EFE6]/40 uppercase">
          <span>[ QUBIXLE_LAB // DIGITAL_STUDIO ]</span>
          <span className="text-[#D9642C]">// US & EU OPERATIONS</span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 py-16 border-b border-[#F4EFE6]/10">
          
          {/* Column 1: Brand & Statement */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/qubixle_Q_mono-white_transparent.svg"
                alt="Qubixle Lab"
                className="h-8 w-auto opacity-90"
              />
              <span className="font-display text-sm font-semibold tracking-widest uppercase text-[#F4EFE6]">
                Qubixle Lab
              </span>
            </div>
            
            <p className="font-sans text-xs leading-relaxed text-[#F4EFE6]/50 max-w-sm tracking-wide">
              Hand-coded websites & digital systems for ambitious businesses across the US and Europe. Built for speed, clarity, and conversion.
            </p>

            <span className="font-mono text-[10px] text-[#D9642C] tracking-widest uppercase">
              [ DIRECT: QUBIXLELAB@GMAIL.COM ]
            </span>
          </div>

          {/* Column 2: Sitemap */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="font-mono text-[10px] font-semibold tracking-[0.22em] text-[#F4EFE6]/40 uppercase">
              [ INDEX ]
            </h4>
            <ul className="flex flex-col gap-3 font-mono text-xs">
              {['Work', 'Services', 'Process', 'Pricing', 'Contact'].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-[#F4EFE6]/60 hover:text-[#D9642C] transition-colors duration-200 uppercase tracking-widest"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <h4 className="font-mono text-[10px] font-semibold tracking-[0.22em] text-[#F4EFE6]/40 uppercase">
              [ CONTACT ]
            </h4>
            <ul className="flex flex-col gap-3 font-mono text-xs text-[#F4EFE6]/60 uppercase tracking-widest">
              <li>
                <a
                  href="mailto:qubixlelab@gmail.com"
                  className="hover:text-[#D9642C] transition-colors duration-200"
                >
                  EMAIL US
                </a>
              </li>
              <li>
                <span className="text-[#F4EFE6]/30">REMOTE / US & EU</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Elsewhere */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <h4 className="font-mono text-[10px] font-semibold tracking-[0.22em] text-[#F4EFE6]/40 uppercase">
              [ ELSEWHERE ]
            </h4>
            <ul className="flex flex-col gap-3 font-mono text-xs">
              <li>
                <a
                  href="https://www.instagram.com/qubixlelab?igsh=MTl5Nng0ZmFjMm8yaQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F4EFE6]/60 hover:text-[#D9642C] transition-colors duration-200 uppercase tracking-widest"
                >
                  INSTAGRAM
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-8 font-mono text-[10px] text-[#F4EFE6]/40 tracking-widest uppercase">
          <span>© 2026 QUBIXLE LAB. ALL RIGHTS RESERVED.</span>
          <a
            href="#top"
            className="group flex items-center gap-2 text-[#F4EFE6]/60 hover:text-[#D9642C] transition-colors duration-200"
          >
            BACK TO TOP
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-1">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
