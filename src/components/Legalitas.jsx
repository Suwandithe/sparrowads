const items = [
  { label: 'PKP', desc: 'Pengusaha Kena Pajak' },
  { label: 'Pajak', desc: 'Terdaftar & taat pajak' },
  { label: 'Akte Pendirian', desc: 'Legal entity resmi' },
  { label: 'SKT KUMHAM', desc: 'Kementerian Hukum & HAM' },
]

export default function Legalitas() {
  return (
    <section id="legalitas" className="py-24 bg-sparrow-charcoal/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Legalitas Perusahaan
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Perusahaan kami terdaftar dan memenuhi persyaratan hukum yang berlaku.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={item.label}
              className="bg-sparrow-slate/80 border border-sparrow-gold/20 rounded-xl p-6 text-center hover:border-sparrow-gold/50 transition-colors"
            >
              <span className="inline-block text-sparrow-gold text-2xl font-bold mb-2">
                {item.label}
              </span>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
