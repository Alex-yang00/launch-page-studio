import './Step.css'

export default function Step({ number, title, children, last }) {
  return (
    <div className={`step${last ? ' step--last' : ''}`}>
      <div className="step-rail">
        <span className="step-num">{number}</span>
        {!last && <div className="step-line" />}
      </div>
      <div className="step-body">
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  )
}
