import { Plus } from 'lucide-react'
import { questions } from '../data/content'

export function Questions() {
  return <section className="questions-section section-space" aria-labelledby="questions-title"><div className="container questions-grid"><div data-reveal><h2 id="questions-title">Dúvidas antes<br /><em>de agendar?</em></h2><p>Veja os tratamentos, os canais de contato e onde fica o consultório.</p></div><div>{questions.map(item => <details className="question-item" key={item.question}><summary><h3>{item.question}</h3><Plus size={20} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div></div></section>
}
