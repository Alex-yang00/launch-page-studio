import './PageHero.css'

export default function PageHero({ tag, title, subtitle, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" aria-hidden="true" />
      <div className="page-hero-content">
        {tag && <span className="page-hero-tag">{tag}</span>}
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-sub">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
