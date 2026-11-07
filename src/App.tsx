import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Treatments } from './sections/Treatments'
import { Care } from './sections/Care'
import { Questions } from './sections/Questions'
import { Contact } from './sections/Contact'
import { Focus } from './sections/Focus'
import { GeneralCare } from './sections/GeneralCare'
import { Reviews } from './sections/Reviews'
import { structuredData } from './data/content'
import { usePageMotion } from './hooks/usePageMotion'

export default function App() {
  const scope = usePageMotion()
  return <div ref={scope}><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header /><main id="conteudo" tabIndex={-1}><Hero /><About /><Focus /><Treatments /><Care /><GeneralCare /><Reviews /><Questions /><Contact /></main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} /></div>
}
