import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Mission from './components/Mission'
import ServiceScope from './components/ServiceScope'
import Services from './components/Services'
import Clients from './components/Clients'
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
        <About />
        <Mission />
        <ServiceScope />
        <Services />
        <Clients />
        <DocCarousel />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
