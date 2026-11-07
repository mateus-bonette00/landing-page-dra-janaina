import { useEffect, useRef } from 'react'
import { useAnimate, useReducedMotion } from 'motion/react'

export function usePageMotion() {
  const [scope, animate] = useAnimate<HTMLDivElement>()
  const reduced = useReducedMotion()
  const played = useRef(false)

  useEffect(() => {
    const root = scope.current
    if (!root) return
    const animations: Array<{ stop: () => void }> = []
    if (!played.current && window.scrollY < 100) {
      played.current = true
      root.querySelectorAll<HTMLElement>('.hero-line').forEach((element, index) => {
        animations.push(animate(element, reduced ? { opacity: [0.7, 1] } : { opacity: [0.25, 1], transform: ['translateY(18%)', 'translateY(0%)'] }, { duration: reduced ? 0.2 : 0.8, delay: reduced ? 0 : index * 0.07, ease: [0.23, 1, 0.32, 1] }))
      })
      const photo = root.querySelector<HTMLElement>('.hero-portrait')
      if (photo && !reduced) animations.push(animate(photo, { opacity: [0.65, 1], clipPath: ['inset(3% 0 0 3%)', 'inset(0% 0 0 0%)'] }, { duration: 0.8, ease: [0.23, 1, 0.32, 1] }))
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        observer.unobserve(entry.target)
        const element = entry.target as HTMLElement
        if (element.hasAttribute('data-stagger')) {
          Array.from(element.children).forEach((child, index) => {
            animations.push(animate(child as HTMLElement, reduced ? { opacity: [0.8, 1] } : { opacity: [0.6, 1], transform: ['translateY(12px)', 'translateY(0px)'] }, { duration: reduced ? 0.2 : 0.5, delay: reduced ? 0 : index * 0.06, ease: [0.23, 1, 0.32, 1] }))
          })
        } else if (element.hasAttribute('data-image-reveal') && !reduced) {
          animations.push(animate(element, { opacity: [0.65, 1], clipPath: ['inset(3% 0% 3% 0%)', 'inset(0% 0% 0% 0%)'] }, { duration: 0.8, ease: [0.23, 1, 0.32, 1] }))
        } else {
          animations.push(animate(element, reduced ? { opacity: [0.8, 1] } : { opacity: [0.5, 1], transform: ['translateY(20px)', 'translateY(0px)'] }, { duration: reduced ? 0.2 : 0.65, ease: [0.23, 1, 0.32, 1] }))
        }
      })
    }, { threshold: 0.15 })
    root.querySelectorAll('[data-reveal], [data-image-reveal], [data-stagger]').forEach(element => observer.observe(element))
    return () => { observer.disconnect(); animations.forEach(animation => animation.stop()) }
  }, [animate, reduced, scope])

  useEffect(() => {
    if (reduced || !window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches) return
    let dispose: (() => void) | undefined
    let cancelled = false
    // ponytail: GSAP só é carregado em telas com espaço para o parallax; rever se surgirem outras cenas.
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)
      const context = gsap.context(() => {
        gsap.fromTo('.care-portrait img', { yPercent: -3 }, { yPercent: 3, ease: 'none', scrollTrigger: { trigger: '.care-section', start: 'top bottom', end: 'bottom top', scrub: 1 } })
      }, scope)
      dispose = () => context.revert()
    }).catch(() => { /* A fotografia permanece estática se o módulo não carregar. */ })
    return () => { cancelled = true; dispose?.() }
  }, [reduced, scope])

  return scope
}
