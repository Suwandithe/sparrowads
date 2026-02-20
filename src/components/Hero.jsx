export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden border-b border-white/50">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      />
      <div className="absolute inset-0 bg-sparrow-dark/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-sparrow-charcoal/60 via-transparent to-sparrow-dark/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,162,39,0.12),transparent)]" />
      <div className="container mx-auto px-6 relative z-10 animate-fade-in">
        <p className="text-sparrow-gold tracking-[0.35em] text-sm font-medium uppercase mb-4 opacity-90">
          Event Organizer
        </p>
        <div className="flex items-center gap-4 md:gap-6 mb-6">
          <img
            src="/logo-removebg-preview.png"
            alt=""
            className="h-16 md:h-20 w-auto object-contain flex-shrink-0"
          />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-sparrow-gold">
            Sparrow Advertising
          </h1>
        </div>
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
          We are a full-service event organizer delivering strategic, impactful, and well-executed events for brands, agencies, and institutions. From concept development and creative direction to production, technical setup, and on-site operations, we bring your vision to life with precision and professionalism.
        </p>
      </div>
    </section>
  )
}
