import { ArrowUpRight, MapPin, Phone, Instagram } from 'lucide-react'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import { ContactLink } from '../components/ContactLink'
import { contact } from '../data/content'

export function Contact() {
  return <section id="contato" className="contact-section section-space" aria-labelledby="contact-title" tabIndex={-1}>
    <div className="container"><div className="contact-heading" data-reveal><h2 id="contact-title">Agende sua consulta<br /><em>em Itajubá.</em></h2><ContactLink>Agendar pelo WhatsApp</ContactLink></div>
      <div className="contact-grid">
        <div className="contact-address"><MapPin size={25} strokeWidth={1.25} aria-hidden="true" /><h3>Endereço do consultório</h3><address>{contact.address}<br />{contact.city}</address><a className="text-link" href={contact.maps} target="_blank" rel="noopener noreferrer">Como chegar<ArrowUpRight size={17} aria-hidden="true" /></a></div>
        <div className="contact-channels"><h3>Fale com o consultório</h3><a className="contact-channel" href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={20} /><span>{contact.whatsappDisplay}<small>Mensagens e chamadas pelo WhatsApp</small></span><ArrowUpRight size={18} aria-hidden="true" /></a><a className="contact-channel" href={contact.phone}><Phone size={20} aria-hidden="true" /><span>{contact.phoneDisplay}<small>Ligações convencionais · telefone fixo</small></span><ArrowUpRight size={18} aria-hidden="true" /></a><a className="instagram-link" href={contact.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={18} aria-hidden="true" />@dra.janaina_carvalho<ArrowUpRight size={16} aria-hidden="true" /></a></div>
        <div className="contact-hours"><h3>Horários de atendimento</h3><dl><div><dt>Segunda e quarta</dt><dd>8h às 17h</dd></div><div><dt>Terça, quinta e sexta</dt><dd>8h às 18h30</dd></div><div><dt>Sábado</dt><dd>8h às 12h</dd></div></dl><p>Entre em contato para consultar a disponibilidade de agendamento.</p></div>
      </div>
    </div>
  </section>
}
