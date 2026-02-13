import { useState, useEffect } from 'react'

// Placeholder documentation items – replace with real event titles/images as needed
const docItems = [
  { id: 1, title: 'Event Dokumentasi 1', subtitle: 'Corporate Event', color: 'from-amber-900/40 to-transparent' },
  { id: 2, title: 'Event Dokumentasi 2', subtitle: 'Product Launch', color: 'from-amber-800/30 to-transparent' },
  { id: 3, title: 'Event Dokumentasi 3', subtitle: 'Brand Activation', color: 'from-amber-700/20 to-transparent' },
  { id: 4, title: 'Event Dokumentasi 4', subtitle: 'Conference', color: 'from-amber-900/40 to-transparent' },
  { id: 5, title: 'Event Dokumentasi 5', subtitle: 'Exhibition', color: 'from-amber-800/30 to-transparent' },
]

const CARD_GAP = 24
const CARD_WIDTH = 320

export default function DocCarousel() {
  const [index, setIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const maxIndex = Math.max(0, docItems.length - 1)
  const goPrev = () => setIndex((i) => Math.max(0, i - 1))
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1))

  // Optional autoplay
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), 5000)
    return () => clearInterval(t)
  }, [maxIndex])

  const minSwipeDistance = 50
  const onTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX)
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const dist = touchStart - touchEnd
    if (dist > minSwipeDistance) goNext()
    else if (dist < -minSwipeDistance) goPrev()
    setTouchStart(null)
    setTouchEnd(null)
  }

  const offset = -index * (CARD_WIDTH + CARD_GAP)

  return (
    <section id="dokumentasi" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Dokumentasi Acara
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Portofolio acara yang telah kami selenggarakan.
        </p>

        <div className="relative max-w-[min(100%,320px)] md:max-w-[calc(320px*3+24px*2)] mx-auto">
          <div
            className="overflow-hidden rounded-2xl"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex gap-6 transition-transform duration-500 ease-out w-max"
              style={{ transform: `translateX(${offset}px)` }}
            >
              {docItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-[280px] md:w-[320px] rounded-2xl overflow-hidden bg-sparrow-slate border border-sparrow-gold/20 hover:border-sparrow-gold/50 transition-colors"
                >
                  <div
                    className={`aspect-[4/3] bg-gradient-to-b ${item.color} bg-sparrow-charcoal flex items-center justify-center`}
                  >
                    <div className="text-center p-4">
                      <p className="text-sparrow-gold font-semibold">{item.subtitle}</p>
                      <p className="text-white/90 text-lg font-medium mt-1">{item.title}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-400 text-sm">{item.subtitle}</p>
                    <p className="font-medium">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goPrev}
            disabled={index === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-12 h-12 rounded-full bg-sparrow-gold/20 border border-sparrow-gold/40 flex items-center justify-center text-sparrow-gold hover:bg-sparrow-gold/30 disabled:opacity-40 disabled:pointer-events-none transition-all"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={index >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-12 h-12 rounded-full bg-sparrow-gold/20 border border-sparrow-gold/40 flex items-center justify-center text-sparrow-gold hover:bg-sparrow-gold/30 disabled:opacity-40 disabled:pointer-events-none transition-all"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {docItems.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index ? 'bg-sparrow-gold w-8' : 'bg-sparrow-gold/40 hover:bg-sparrow-gold/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
