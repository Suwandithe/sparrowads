export default function About() {
  return (
    <section id="tentang-kami" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sparrow-gold">
              Tentang Kami
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Kami adalah event organizer full-service yang menghadirkan acara yang strategis, berdampak, dan dieksekusi dengan baik untuk brand, agensi, dan institusi.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Dari pengembangan konsep hingga eksekusi di lapangan, kami memastikan setiap detail selaras dengan tujuan, keterlibatan audiens, dan hasil yang terukur.
            </p>
            <p className="mt-12 text-sparrow-gold/80 font-medium tracking-widest text-sm">
              Sparrow Advertising
            </p>
          </div>
          <div className="relative order-first md:order-last">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-sparrow-gold/20 bg-sparrow-charcoal">
              <img
                src="/image/<test>.png"
                alt="Sparrow Advertising - Event Organizer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextElementSibling?.classList.remove('hidden')
                }}
              />
              <div className="hidden w-full h-full bg-gradient-to-br from-sparrow-gold/20 to-sparrow-slate flex items-center justify-center">
                <span className="text-sparrow-gold/60 text-sm">Tentang Kami</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
