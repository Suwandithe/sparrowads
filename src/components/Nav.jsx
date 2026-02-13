const links = [
  { href: '#hero', label: 'Home' },
  { href: '#legalitas', label: 'Legalitas' },
  { href: '#tentang-kami', label: 'Tentang Kami' },
  { href: '#misi', label: 'Misi' },
  { href: '#cakupan-layanan', label: 'Service' },
  { href: '#dokumentasi', label: 'Dokumentasi' },
  { href: '#kontak', label: 'Kontak' },
]

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-sparrow-dark/90 backdrop-blur-md border-b border-sparrow-gold/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="text-sparrow-gold font-bold tracking-wider text-lg">
            Sparrow Advertising
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-sparrow-gold text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <details className="md:hidden relative group">
            <summary className="list-none cursor-pointer p-2 text-sparrow-gold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <ul className="absolute right-0 top-full mt-2 w-48 py-2 bg-sparrow-charcoal border border-sparrow-gold/20 rounded-lg shadow-xl">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-4 py-2 text-gray-300 hover:text-sparrow-gold hover:bg-sparrow-slate/50 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </nav>
  )
}
