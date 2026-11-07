import { ArrowUpRight } from 'lucide-react'
import { Portrait } from '../components/Portrait'
import { ContactLink } from '../components/ContactLink'

export function Focus() {
  return (
    <section id="dtm" className="focus-section section-space" aria-labelledby="focus-title" tabIndex={-1}>
      <div className="container focus-grid">
        <figure className="focus-portrait" data-image-reveal>
          <Portrait name="dtm" alt="Dra. Janaína Carvalho de pé, em retrato profissional com blusa branca e calça clara" />
          <figcaption>Atendimento em DTM, bruxismo e dor orofacial</figcaption>
        </figure>
        <div className="focus-copy" data-reveal>
          <h2 id="focus-title">DTM, bruxismo<br />e <em>dor orofacial.</em></h2>
          <p className="lead">Esses atendimentos fazem parte do trabalho da Dra. Janaína em Itajubá.</p>
          <p>DTM é a sigla para disfunção temporomandibular. Se você procura atendimento nessa área, pode entrar em contato com o consultório e contar o motivo da sua consulta.</p>
          <div className="focus-topics" data-stagger>
            <a href="#tratamentos"><span>Disfunção temporomandibular</span><span>DTM <ArrowUpRight size={18} aria-hidden="true" /></span></a>
            <a href="#tratamentos"><span>Bruxismo</span><ArrowUpRight size={18} aria-hidden="true" /></a>
            <a href="#tratamentos"><span>Dor orofacial</span><ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <ContactLink>Consultar disponibilidade</ContactLink>
        </div>
      </div>
    </section>
  )
}
