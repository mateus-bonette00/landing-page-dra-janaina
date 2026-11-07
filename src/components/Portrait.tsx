type PortraitProps = { name: 'hero' | 'sobre' | 'cuidado' | 'dtm'; alt: string; priority?: boolean; className?: string }

export function Portrait({ name, alt, priority, className = '' }: PortraitProps) {
  return <img className={className} src={`/images/janaina-${name}-960.webp`}
    srcSet={`/images/janaina-${name}-640.webp 640w, /images/janaina-${name}-960.webp 960w, /images/janaina-${name}-1365.webp 1365w`}
    sizes="(max-width: 767px) 100vw, 48vw" width={1365} height={2048} alt={alt}
    loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" />
}
