const services = [
  {
    title: 'Konsep',
    desc: 'Konsep strategis yang selaras dengan tujuan brand dan keterlibatan audiens.',
    icon: '◆',
  },
  {
    title: 'Produksi',
    desc: 'Produksi end-to-end, setup teknis, dan eksekusi di lokasi.',
    icon: '◇',
  },
  {
    title: 'Operasional',
    desc: 'Manajemen timeline, logistik, dan operasional event yang lancar.',
    icon: '○',
  },
]

export default function Services() {
  return (
    <section id="servis" className="py-24 bg-sparrow-charcoal/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Servis Kami
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Kami menawarkan layanan event yang komprehensif untuk mencakup seluruh siklus acara. Setiap layanan disusun secara terstruktur untuk memastikan efisiensi, konsistensi, dan eksekusi berkualitas tinggi sesuai dengan tujuan klien.
        </p>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-sm">
          Pendekatan kami memungkinkan brand dan institusi bekerja dengan satu mitra yang andal, sekaligus tetap memiliki kendali penuh atas strategi, anggaran, dan eksekusi.
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
