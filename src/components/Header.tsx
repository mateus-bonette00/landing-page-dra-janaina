import { useEffect, useRef, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { contact, navigation } from '../data/content'
import { WhatsAppIcon } from './WhatsAppIcon'

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const button = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id === 'inicio' ? '' : `#${entry.target.id}`)
    }, { rootMargin: '-15% 0px -55% 0px' })
    const sections = ['#inicio', ...navigation.map(item => item.href)]
    sections.forEach(href => { const section = document.querySelector(href); if (section) observer.observe(section) })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); button.current?.focus() }
    }
    const wide = window.matchMedia('(min-width: 1024px)')
    const resize = () => { if (wide.matches) setOpen(false) }
    document.addEventListener('keydown', dismiss)
    wide.addEventListener('change', resize)
    return () => { document.removeEventListener('keydown', dismiss); wide.removeEventListener('change', resize) }
  }, [open])

  const goToSection = (href: string) => {
    setOpen(false)
    window.requestAnimationFrame(() => document.querySelector<HTMLElement>(href)?.focus({ preventScroll: true }))
  }

  return <header className="site-header">
    <div className="header-inner container">
      <a href="#inicio" className="brand" aria-label="Dra. Janaína Carvalho — início"><img src="/images/logo-colorida.webp" width={280} height={184} alt="Dra. Janaína Carvalho, cirurgiã-dentista" /></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(item => <a key={item.href} href={item.href} aria-current={active === item.href ? 'location' : undefined}>{item.label}</a>)}</nav>
      <a className="header-cta" href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><span className="desktop-cta-label">Agendar consulta</span><span className="compact-cta-label">Agendar</span><ArrowUpRight size={18} aria-hidden="true" /></a>
      <button className="menu-toggle" ref={button} type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button>
    </div>
    <nav id="mobile-navigation" className="mobile-nav" hidden={!open} aria-label="Navegação mobile">
      <div className="container">{navigation.map(item => <a key={item.href} href={item.href} onClick={() => goToSection(item.href)}>{item.label}<ArrowUpRight size={20} aria-hidden="true" /></a>)}
      <a className="mobile-contact" href={contact.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}><span><WhatsAppIcon size={18} />Conversar pelo WhatsApp</span><ArrowUpRight size={20} aria-hidden="true" /></a></div>
    </nav>
  </header>
}
