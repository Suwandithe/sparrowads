const clients = [
  { name: 'Tokocrypto', logo: '/clients/tokocrypto.png' },
  { name: 'Sutra', logo: '/clients/Sutra.png' },
  { name: 'Ruckus', logo: '/clients/ruckus.png' },
  { name: 'MPL', logo: '/clients/MPL.png' },
  { name: "McDonald's", logo: '/clients/mcd.png' },
  { name: 'ids international design school', logo: '/clients/ids.png' },
  { name: 'CARRO', logo: '/clients/carro.png' },
  { name: 'Bounty Media', logo: '/clients/bountyMedia.png' },
  { name: 'Jago', logo: '/clients/jago.png' },
  { name: 'Andalan', logo: '/clients/andalan.png' },
  { name: '99.co', logo: '/clients/99.png' },
  { name: 'TCL', logo: '/clients/TCL.png' },
  { name: 'Enervon', logo: '/clients/enervon.jpeg' },
  { name: 'Baygon', logo: '/clients/baygon.png' },
]

export default function Clients() {
  return (
    <section id="clients" className="py-24 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-16 text-sparrow-gold tracking-tight">
          Clients We Worked With
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center min-h-[100px] p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-sparrow-gold/40 hover:bg-gray-100 transition-all"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 w-full max-w-[140px] object-contain object-center"
                />
              ) : (
                <span className="text-gray-600 text-sm font-medium text-center leading-tight">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
