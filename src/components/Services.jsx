const services = [
  {
    title: 'Concept',
    desc: 'Strategic concepts aligned with brand goals and audience engagement.',
    icon: '◆',
  },
  {
    title: 'Production',
    desc: 'End-to-end production, technical setup, and on-site execution.',
    icon: '◇',
  },
  {
    title: 'Operational',
    desc: 'Timeline management, logistics, and smooth event operations.',
    icon: '○',
  },
]

export default function Services() {
  return (
    <section id="servis" className="py-24 bg-sparrow-charcoal/50 border-b border-white/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Services
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          We offer comprehensive event services covering the full event lifecycle. Each service is structured to ensure efficiency, consistency, and high-quality execution aligned with client objectives.
        </p>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-sm">
          Our approach lets brands and institutions work with one reliable partner while retaining full control over strategy, budget, and execution.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-sparrow-slate/60 border border-sparrow-gold/20 rounded-2xl p-8 hover:border-sparrow-gold/50 transition-colors"
            >
              <span className="text-sparrow-gold text-3xl mb-4 block">{s.icon}</span>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
