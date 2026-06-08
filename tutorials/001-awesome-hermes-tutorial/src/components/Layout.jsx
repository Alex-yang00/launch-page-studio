import { NavLink, Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import './Layout.css'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="page">
      <nav className="nav">
        <div className="nav-inner">
          <NavLink to="/" className="nav-brand">
            Hermes Agent
          </NavLink>
          <div className="nav-links">
            <NavLink to="/" end className="nav-link">Home</NavLink>
            <NavLink to="/novita" className="nav-link">Novita AI Guide</NavLink>
            <NavLink to="/event" className="nav-link">Event</NavLink>
            <a
              className="nav-link nav-link--external"
              href="https://github.com/Alex-wuhu/awesome-hermes-tutorial"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="footer">
        <p>
          <strong>Hermes Agent</strong> &mdash; Open Source AI Agent Framework by{' '}
          <a href="https://nousresearch.com" target="_blank" rel="noopener noreferrer">Nous Research</a>
        </p>
      </footer>
    </div>
  )
}
