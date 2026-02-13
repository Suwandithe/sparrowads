export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sparrow-charcoal/80 via-sparrow-dark to-sparrow-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,162,39,0.15),transparent)]" />
      <div className="container mx-auto px-6 relative z-10 animate-fade-in">
        <p className="text-sparrow-gold tracking-[0.4em] text-sm font-medium uppercase mb-4 opacity-90">
          Event Organizer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="block">Presentation</span>
          <span className="block text-sparrow-gold mt-2">Sparrow Advertising</span>
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-gray-300 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Kami adalah event organizer full-service yang menghadirkan acara strategis, berdampak, dan dieksekusi dengan baik untuk brand, agensi, dan institusi.
        </p>
      </div>
    </section>
  )
}
