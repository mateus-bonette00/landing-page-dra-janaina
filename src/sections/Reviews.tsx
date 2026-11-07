import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Pause, Play, Quote, Star } from 'lucide-react'
import { reviews } from '../data/reviews'

const AUTOPLAY_MS = 5000

export function Reviews() {
  const track = useRef<HTMLUListElement>(null)
  const [playing, setPlaying] = useState(true)
  // measured evita esmaecer cards no HTML pré-renderizado antes da primeira medição real.
  const [position, setPosition] = useState({ index: 0, visible: 1, atEnd: false, measured: false })
  const [expanded, setExpanded] = useState<Set<number>>(() => new Set())

  useEffect(() => {
    const list = track.current
    if (!list) return
    let frame = 0
    const update = () => {
      const first = list.firstElementChild as HTMLElement | null
      if (!first) return
      const step = first.getBoundingClientRect().width + Number.parseFloat(getComputedStyle(list).columnGap)
      setPosition({
        index: Math.round(list.scrollLeft / step),
        visible: Math.max(1, Math.round(list.clientWidth / step)),
        atEnd: list.scrollLeft + list.clientWidth >= list.scrollWidth - 2,
        measured: true,
      })
    }
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update) }
    const observer = new ResizeObserver(update)
    observer.observe(list)
    list.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => { cancelAnimationFrame(frame); observer.disconnect(); list.removeEventListener('scroll', onScroll) }
  }, [])

  const move = (direction: number) => {
    const list = track.current
    const first = list?.firstElementChild as HTMLElement | null
    if (!list || !first) return
    const step = first.getBoundingClientRect().width + Number.parseFloat(getComputedStyle(list).columnGap)
    list.scrollBy({ left: direction * step, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }

  useEffect(() => {
    const list = track.current
    const section = list?.closest('section')
    if (!list || !section || !playing || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let hovering = false
    let visible = false
    let lastTouch = 0
    const tick = () => {
      // Pausa enquanto a pessoa lê, navega pelo teclado, interage ou não está vendo a seção.
      if (hovering || !visible || document.hidden || section.querySelector(':focus-visible') || Date.now() - lastTouch < AUTOPLAY_MS) return
      if (list.scrollLeft + list.clientWidth >= list.scrollWidth - 2) list.scrollTo({ left: 0, behavior: 'smooth' })
      else move(1)
    }
    const timer = window.setInterval(tick, AUTOPLAY_MS)
    const enter = () => { hovering = true }
    const leave = () => { hovering = false }
    const touch = () => { lastTouch = Date.now() }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting }, { threshold: 0.4 })
    observer.observe(list)
    section.addEventListener('pointerenter', enter)
    section.addEventListener('pointerleave', leave)
    list.addEventListener('touchstart', touch, { passive: true })
    return () => {
      window.clearInterval(timer); observer.disconnect()
      section.removeEventListener('pointerenter', enter); section.removeEventListener('pointerleave', leave); list.removeEventListener('touchstart', touch)
    }
  }, [playing])

  // No fim do trilho, o arredondamento do scroll pode apontar um card antes; fixa a janela nos últimos.
  const start = position.atEnd ? Math.max(0, reviews.length - position.visible) : position.index
  const end = Math.min(start + position.visible, reviews.length)

  const toggle = (index: number) => setExpanded(current => {
    const next = new Set(current)
    if (next.has(index)) next.delete(index)
    else next.add(index)
    return next
  })

  return (
    <section id="avaliacoes" className="reviews-section section-space" aria-labelledby="reviews-title" aria-roledescription="carrossel" tabIndex={-1}>
      <div className="container">
        <div className="reviews-heading">
          <div data-reveal>
            <h2 id="reviews-title">Quem já passou<br /><em>pelo consultório.</em></h2>
            <p>Relatos de quem foi atendido pela Dra. Janaína.</p>
            <p className="reviews-summary"><span className="review-stars" aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={15} fill="currentColor" strokeWidth={0} />)}</span>{reviews.length} relatos de pacientes</p>
          </div>
          <div className="carousel-controls" aria-label="Controles das avaliações">
            <button type="button" className="carousel-toggle" aria-label={playing ? 'Pausar avaliações' : 'Retomar avaliações'} onClick={() => setPlaying(current => !current)}>{playing ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}</button>
            <button type="button" aria-label="Avaliação anterior" aria-controls="reviews-track" disabled={position.index === 0} onClick={() => move(-1)}><ArrowLeft size={22} aria-hidden="true" /></button>
            <button type="button" aria-label="Próxima avaliação" aria-controls="reviews-track" disabled={position.atEnd} onClick={() => move(1)}><ArrowRight size={22} aria-hidden="true" /></button>
          </div>
        </div>
        <ul id="reviews-track" className="reviews-track" ref={track} tabIndex={0} data-stagger aria-label="Avaliações; use as setas do teclado para navegar" onKeyDown={event => {
          if (event.target !== event.currentTarget) return
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1) }
          if (event.key === 'Home' || event.key === 'End') { event.preventDefault(); track.current?.scrollTo({ left: event.key === 'Home' ? 0 : track.current.scrollWidth, behavior: 'instant' }) }
        }}>
          {reviews.map((review, index) => (
            <li className={`review-card ${position.measured && (index < start || index >= end) ? 'is-out' : ''}`} key={review.name} aria-label={`${index + 1} de ${reviews.length}`}>
              <div className="review-top">
                <div className="review-stars" role="img" aria-label={`${review.rating} de 5 estrelas`}>{Array.from({ length: review.rating }, (_, i) => <Star key={i} size={17} fill="currentColor" strokeWidth={0} aria-hidden="true" />)}</div>
                <Quote className="review-quote" size={34} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <blockquote id={`review-${index}`} className={`review-text ${expanded.has(index) || review.text.length <= 140 ? 'is-expanded' : ''}`}>{review.text}</blockquote>
              {review.text.length > 140 && <button className="review-expand" type="button" aria-controls={`review-${index}`} aria-expanded={expanded.has(index)} onClick={() => toggle(index)}>{expanded.has(index) ? 'Recolher avaliação' : 'Ler avaliação completa'}</button>}
              <div className="review-profile"><span className="review-avatar" aria-hidden="true">{review.name.charAt(0)}</span><div><h3>{review.name}</h3><span>Paciente</span></div></div>
            </li>
          ))}
        </ul>
        <div className="reviews-footer">
          <p>As avaliações relatam experiências individuais.</p>
          <div className="reviews-progress">
            <span className="reviews-progress-bar" aria-hidden="true"><span style={{ transform: `scaleX(${end / reviews.length})` }} /></span>
            <span aria-live={playing ? 'off' : 'polite'} aria-atomic="true">{start + 1}{end - start > 1 ? `–${end}` : ''} de {reviews.length}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
