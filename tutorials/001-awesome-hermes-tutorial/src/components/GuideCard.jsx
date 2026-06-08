import { Link } from 'react-router'
import './GuideCard.css'

export default function GuideCard({ to, icon, title, description, disabled }) {
  if (disabled) {
    return (
      <div className="guide-card guide-card--disabled">
        {icon && <img className="guide-card-icon" src={icon} alt="" />}
        <div className="guide-card-text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }

  return (
    <Link to={to} className="guide-card">
      {icon && <img className="guide-card-icon" src={icon} alt="" />}
      <div className="guide-card-text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <span className="guide-card-arrow">&rarr;</span>
    </Link>
  )
}
