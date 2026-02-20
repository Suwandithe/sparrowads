import { useState, useEffect } from 'react'

const docItems = [
  { id: 1, title: 'Enervon Nusantara Run', subtitle: 'Brand Activation', image: '/enervon.png' },
  { id: 2, title: 'Event Documentation 2', subtitle: 'Product Launch', image: '/enervon.png' },
  { id: 3, title: 'Event Documentation 3', subtitle: 'Brand Activation', image: '/enervon.png' },
  { id: 4, title: 'Event Documentation 4', subtitle: 'Conference', image: '/enervon.png' },
  { id: 5, title: 'Event Documentation 5', subtitle: 'Exhibition', image: '/enervon.png' },
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
    <section id="dokumentasi" className="py-24 border-b border-white/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Event Documentation
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Portfolio of events we have delivered.
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
                  <div className="aspect-[4/3] relative bg-sparrow-charcoal overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                      <p className="text-sparrow-gold font-semibold text-sm">{item.subtitle}</p>
                      <p className="text-white font-medium mt-0.5">{item.title}</p>
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
