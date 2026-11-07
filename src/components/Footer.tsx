import { ArrowUp } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { contact, navigation } from '../data/content'

export function Footer() {
  return <><footer className="site-footer"><div className="container"><div className="footer-top"><a href="#inicio" aria-label="Voltar ao início"><img src="/images/logo-branca.webp" width={280} height={184} alt="Dra. Janaína Carvalho, cirurgiã-dentista" loading="lazy" /></a><p>Cuidando além do dente.<br /><span>Dentista em Itajubá, MG.</span></p><a className="back-top" href="#inicio" aria-label="Voltar ao início da página"><ArrowUp size={23} aria-hidden="true" /></a></div><div className="footer-bottom"><span>Janaína Carvalho Carneiro Silva · Cirurgiã-dentista</span><nav aria-label="Navegação do rodapé">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><span>Itajubá, Minas Gerais</span></div></div></footer><a className="floating-contact" href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Conversar com o consultório pelo WhatsApp"><WhatsAppIcon size={26} /><span>Agendar consulta</span></a></>
}
