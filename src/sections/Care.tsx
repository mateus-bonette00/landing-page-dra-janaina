import { Portrait } from '../components/Portrait'
import { ContactLink } from '../components/ContactLink'

export function Care() {
  return <section id="cuidado" className="care-section" aria-labelledby="care-title" tabIndex={-1}>
    <div className="container care-grid"><div className="care-copy"><h2 id="care-title" data-reveal>Como queremos<br /><em>receber você.</em></h2><p>O acolhimento e a escuta fazem parte do atendimento, da primeira conversa ao cuidado com sua saúde bucal.</p><div className="care-values" data-stagger><div><h3>Escuta e empatia</h3><p>Espaço para contar o que você sente e tirar suas dúvidas.</p></div><div><h3>Ética e transparência</h3><p>Honestidade ao conversar sobre o atendimento.</p></div><div><h3>Pontualidade</h3><p>Respeito pelo seu tempo e pelo horário da consulta.</p></div></div><ContactLink light>Agendar uma consulta</ContactLink></div>
    <figure className="care-portrait"><Portrait name="cuidado" alt="Dra. Janaína Carvalho em retrato profissional com blazer azul" /><figcaption>Dra. Janaína Carvalho<small>Dentista em Itajubá</small></figcaption></figure></div>
  </section>
}
