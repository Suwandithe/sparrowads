export default function Mission() {
  return (
    <section
      id="misi"
      className="py-24 border-b border-white/50"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-first md:order-first">
            <div className="rounded-2xl overflow-hidden border border-white/10 h-[280px] sm:h-[320px] md:h-[300px] max-w-lg">
              <img
                src="/mission.jpg"
                alt="Event experience - Sparrow Advertising"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-amber-200/90">
              Our Mission
            </h2>
            <div className="space-y-5 text-gray-400 leading-relaxed text-[15px] md:text-base">
              <p>
                We design and execute events that align with brand objectives, audience behavior, and measurable outcomes—not only visually compelling but driven by strategy.
              </p>
              <p>
                From concept development, production, and technical coordination to on-ground operations, we maintain high standards, clear communication, and smooth execution at every stage.
              </p>
            </div>
            <p className="mt-10 text-amber-200/70 font-medium tracking-widest text-sm">
              Sparrow Advertising
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
