import { ArrowDown, MoveUpRight } from 'lucide-react'
import { ContactLink } from '../components/ContactLink'
import { Portrait } from '../components/Portrait'

export function Hero() {
  return <section id="inicio" className="hero" aria-labelledby="hero-title" tabIndex={-1}>
    <div className="hero-grid container">
      <div className="hero-copy">
        <h1 id="hero-title"><span className="hero-line">Cuidando </span><span className="hero-line">além do </span><span className="hero-line hero-emphasis">dente.</span></h1>
        <p className="hero-description">Dentista em Itajubá, com foco em DTM, bruxismo e dor orofacial. Clínica geral para adultos e crianças.</p>
        <ContactLink>Agendar minha consulta</ContactLink>
        <a className="hero-discover" href="#sobre"><span className="circle-arrow"><ArrowDown size={17} aria-hidden="true" /></span>Conheça a Dra. Janaína</a>
      </div>
      <figure className="hero-portrait">
        <Portrait name="hero" priority alt="Dra. Janaína Carvalho sorrindo, com blazer azul-claro" />
        <figcaption><span>Dra. Janaína Carvalho<small>Cirurgiã-dentista</small></span><MoveUpRight size={25} strokeWidth={1} aria-hidden="true" /></figcaption>
      </figure>
    </div>
    <div className="hero-bottom container"><span>Rua Coronel Francisco Braz, 391 · Centro</span><span className="hero-bottom-line" /><span>Itajubá, Minas Gerais</span></div>
  </section>
}
