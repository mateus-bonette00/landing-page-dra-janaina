import { Plus, ArrowUpRight } from 'lucide-react'
import { contact, treatments } from '../data/content'

export function Treatments() {
  return <section id="tratamentos" className="treatments-section section-space" aria-labelledby="treatments-title" tabIndex={-1}>
    <div className="container treatments-grid">
      <div className="treatments-intro" data-reveal><h2 id="treatments-title">Tratamentos<br /><em>odontológicos.</em></h2><p>Conheça os atendimentos oferecidos no consultório, da limpeza ao tratamento de canal.</p><a className="text-link" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">Perguntar sobre um tratamento<ArrowUpRight size={19} aria-hidden="true" /></a></div>
      <div className="treatment-list">{treatments.map((item, index) => <details key={item.title} name="treatments" open={index === 0} className="treatment-item"><summary><span>{item.title}</span><Plus size={23} strokeWidth={1.25} aria-hidden="true" /></summary><div className="treatment-description"><p>{item.description}</p><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`Conversar sobre ${item.title}`}>Conversar sobre este cuidado<ArrowUpRight size={16} aria-hidden="true" /></a></div></details>)}<p className="treatment-note">Cada indicação depende de uma avaliação individual.</p></div>
    </div>
  </section>
}
