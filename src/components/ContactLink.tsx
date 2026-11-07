import { ArrowUpRight } from 'lucide-react'
import { contact } from '../data/content'

export function ContactLink({ children = 'Agendar consulta', light = false, className = '' }: { children?: React.ReactNode; light?: boolean; className?: string }) {
  return <a className={`button ${light ? 'button-light' : ''} ${className}`} href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
    <span>{children}</span><span className="button-icon"><ArrowUpRight aria-hidden="true" size={20} /></span>
  </a>
}
