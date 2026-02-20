export default function About() {
  return (
    <section id="tentang-kami" className="py-24 border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sparrow-gold">
              About Us
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We are a full-service event organizer delivering strategic, impactful, and well-executed events for brands, agencies, and institutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From concept development to on-ground execution, we ensure every detail aligns with your goals, audience engagement, and measurable results.
            </p>
            <p className="mt-12 text-sparrow-gold/80 font-medium tracking-widest text-sm">
              Sparrow Advertising
            </p>
          </div>
          <div className="relative order-first md:order-last">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-sparrow-gold/20 bg-sparrow-charcoal">
              <img
                src="/about_images.jpg"
                alt="Sparrow Advertising - Event Organizer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextElementSibling?.classList.remove('hidden')
                }}
              />
              <div className="hidden w-full h-full bg-gradient-to-br from-sparrow-gold/20 to-sparrow-slate flex items-center justify-center">
                <span className="text-sparrow-gold/60 text-sm">About Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// test branch
