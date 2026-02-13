import Nav from './components/Nav'
import Hero from './components/Hero'
import Legalitas from './components/Legalitas'
import About from './components/About'
import Mission from './components/Mission'
import ServiceScope from './components/ServiceScope'
import Services from './components/Services'
import DocCarousel from './components/DocCarousel'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ChatBot from './components/ChatBot'

export default function App() {
  return (
    <>
      <Nav />
      <WhatsAppButton />
      <ChatBot />
      <main>
        <Hero />
        <Legalitas />
        <About />
        <Mission />
        <ServiceScope />
        <Services />
        <DocCarousel />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
