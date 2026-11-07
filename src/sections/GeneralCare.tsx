import { ArrowUpRight } from 'lucide-react'
import { contact } from '../data/content'

const services = [
  { title: 'Limpeza', detail: 'Profilaxia para o cuidado com a saúde bucal.' },
  { title: 'Restaurações e canal', detail: 'Atendimentos que fazem parte da clínica geral.' },
  { title: 'Clareamento', detail: 'Converse com a doutora sobre esse tratamento.' },
  { title: 'Próteses dentárias', detail: 'Próteses totais e removíveis.' },
]

export function GeneralCare() {
  return (
    <section className="general-section section-space" aria-labelledby="general-title">
      <div className="container">
        <div className="general-heading" data-reveal>
          <h2 id="general-title">Clínica geral para<br /><em>adultos e crianças.</em></h2>
          <p>Além do atendimento em DTM, o consultório oferece estes cuidados odontológicos. A indicação de cada tratamento depende de uma avaliação individual.</p>
        </div>
        <div className="general-services" data-stagger>
          {services.map(service => (
            <a className="general-service" key={service.title} href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`Perguntar sobre ${service.title}`}>
              <h3>{service.title}</h3><p>{service.detail}</p><ArrowUpRight size={22} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
