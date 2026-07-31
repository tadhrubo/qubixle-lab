import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Set default version: 'color' or 'bw'
const PRELOADER_TYPE = 'color' // change to 'bw' to swap

const ASSETS = {
  color: {
    webm: '/assets/preloader/qubixle_preloader_color.webm',
    mp4: '/assets/preloader/qubixle_preloader_color.mp4',
    poster: '/assets/preloader/qubixle_preloader_color_poster.jpg',
  },
  bw: {
    webm: '/assets/preloader/qubixle_preloader_bw.webm',
    mp4: '/assets/preloader/qubixle_preloader_bw.mp4',
    poster: '/assets/preloader/qubixle_preloader_bw_poster.jpg',
  },
}

export default function Preloader({ onComplete }) {
  const [videoError, setVideoError] = useState(false)
  const currentAssets = ASSETS[PRELOADER_TYPE] || ASSETS.color

  useEffect(() => {
    // 1. Accessibility: Skip for prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      onComplete()
      return
    }

    // 2. Frequency: Only show once per session
    const hasSeenPreloader = sessionStorage.getItem('qubixle_seen_preloader')
    if (hasSeenPreloader) {
      onComplete()
      return
    }

    // Lock body scrolling during preloading
    document.body.style.overflow = 'hidden'

    const handleComplete = () => {
      sessionStorage.setItem('qubixle_seen_preloader', 'true')
      document.body.style.overflow = ''
      onComplete()
    }

    // Minimum display duration of 1.2s
    const minTimer = setTimeout(() => {
      handleComplete()
    }, 1200)

    // Maximum wait of 3s
    const maxTimer = setTimeout(() => {
      handleComplete()
    }, 3000)

    return () => {
      clearTimeout(minTimer)
      clearTimeout(maxTimer)
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F4EFE6]"
    >
      <div className="relative w-full h-[18vh] sm:h-[25vh] md:h-[35vh] flex items-center justify-center overflow-hidden">
        {videoError ? (
          <img
            src={currentAssets.poster}
            alt="Qubixle Preloader"
            className="h-full w-auto object-contain select-none pointer-events-none"
          />
        ) : (
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-auto object-contain select-none pointer-events-none bg-transparent"
            poster={currentAssets.poster}
            onError={() => setVideoError(true)}
          >
            <source src={currentAssets.webm} type="video/webm" />
            <source src={currentAssets.mp4} type="video/mp4" />
          </video>
        )}
      </div>
    </motion.div>
  )
}
