export const contact = {
  name: 'Dra. Janaína Carvalho',
  fullName: 'Janaína Carvalho Carneiro Silva',
  whatsapp: 'https://wa.me/5535992741867?text=Ol%C3%A1%2C%20Dra.%20Jana%C3%ADna!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20para%20agendar%20uma%20consulta.',
  whatsappDisplay: '(35) 99274-1867',
  phone: 'tel:+553536221362',
  phoneDisplay: '(35) 3622-1362',
  instagram: 'https://www.instagram.com/dra.janaina_carvalho/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rua%20Coronel%20Francisco%20Braz%20391%20Centro%20Itajub%C3%A1%20MG',
  address: 'Rua Coronel Francisco Braz, 391',
  city: 'Centro · Itajubá, MG',
}

export const navigation = [
  { href: '#sobre', label: 'A doutora' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
]

export const treatments = [
  { title: 'DTM, bruxismo e dor orofacial', description: 'A Dra. Janaína atende pessoas com disfunção temporomandibular (DTM), bruxismo e dor orofacial. Entre em contato para consultar os horários disponíveis.' },
  { title: 'Clínica geral e prevenção', description: 'Atendimento odontológico para adultos e crianças, com profilaxia (limpeza) entre os cuidados oferecidos.' },
  { title: 'Clareamento dental', description: 'O consultório oferece clareamento dental. A indicação do tratamento depende da avaliação da doutora.' },
  { title: 'Restaurações e canal', description: 'Restaurações dentárias e tratamento de canal fazem parte dos atendimentos da clínica geral.' },
  { title: 'Próteses dentárias', description: 'Atendimento para próteses totais e removíveis. Agende uma consulta para conversar sobre esse tratamento.' },
]

export const questions = [
  { question: 'Quais tratamentos são oferecidos?', answer: 'O consultório oferece clínica geral para adultos e crianças, atendimento em DTM, bruxismo e dor orofacial, limpeza, clareamento, restaurações, tratamento de canal e próteses totais e removíveis.' },
  { question: 'Como agendar uma consulta?', answer: 'Entre em contato pelo WhatsApp (35) 99274-1867 para mensagens ou chamadas pelo aplicativo. Para ligações convencionais, utilize o telefone fixo (35) 3622-1362.' },
  { question: 'Onde fica o consultório?', answer: 'O consultório da Dra. Janaína Carvalho, dentista em Itajubá, fica na Rua Coronel Francisco Braz, 391, no Centro de Itajubá, Minas Gerais.' },
  { question: 'Há atendimento para crianças?', answer: 'Sim. A clínica geral atende adultos e crianças. Entre em contato com o consultório para conversar sobre o atendimento.' },
]

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Dentist',
      name: 'Consultório Odontológico Dra. Janaína Carvalho',
      description: 'Dentista em Itajubá. Atendimento com acolhimento e escuta. Clínica geral, DTM, bruxismo e dor orofacial.',
      telephone: '+55-35-3622-1362',
      address: { '@type': 'PostalAddress', streetAddress: contact.address, addressLocality: 'Itajubá', addressRegion: 'MG', addressCountry: 'BR' },
      sameAs: [contact.instagram],
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Wednesday'], opens: '08:00', closes: '17:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:30' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '12:00' },
      ],
    },
    { '@type': 'FAQPage', mainEntity: questions.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
  ],
}
