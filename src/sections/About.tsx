import { ContactLink } from '../components/ContactLink'
import { Portrait } from '../components/Portrait'

export function About() {
  return <section id="sobre" className="about-section section-space" aria-labelledby="about-title" tabIndex={-1}>
    <div className="container about-grid">
      <div className="about-visual" data-image-reveal><div className="about-color" aria-hidden="true" /><Portrait name="sobre" alt="Dra. Janaína em um retrato descontraído, sentada e usando blazer salmão" /><p className="photo-note">Dra. Janaína Carvalho · Cirurgiã-dentista</p></div>
      <div className="about-copy" data-reveal>
        <h2 id="about-title">Conheça a<br /><em>Dra. Janaína.</em></h2>
        <p className="lead">O consultório começou em 2020, em Itajubá, com foco no alívio da dor e na escuta dos pacientes.</p>
        <p>A Dra. Janaína Carvalho, dentista em Itajubá, atende adultos e crianças na clínica geral e oferece atendimento em DTM, bruxismo e dor orofacial.</p>
        <p>Empatia, honestidade, pontualidade e transparência são os valores que orientam o atendimento.</p>
        <div className="signature"><span>Dra. Janaína Carvalho</span><small>Janaína Carvalho Carneiro Silva · Cirurgiã-dentista</small></div>
        <ContactLink className="button-text">Falar com o consultório</ContactLink>
      </div>
    </div>
  </section>
}
