import PageHero from '../components/PageHero'
import './EventPage.css'

export default function EventPage() {
  return (
    <>
      <PageHero
        tag="Community Event"
        title="Build Your First Agent (ft. Hermes)"
        subtitle="A hands-on workshop for building a functional AI agent with Hermes Agent and Novita AI"
      />

      <section className="section">
        <div className="section-inner">
          <div className="event-card">
            <div className="event-card-header">
              <img src="/images/novita-logo.svg" alt="Novita AI" className="event-host-logo" />
              <div className="event-host-info">
                <span className="event-hosted-by">Presented by Novita AI</span>
                <span className="event-hosted-sub">Hosted by Johnny Chin</span>
              </div>
            </div>

            <div className="event-details">
              <div className="event-detail">
                <span className="event-label">Location</span>
                <span className="event-value">San Francisco, CA · Register to see address</span>
              </div>
              <div className="event-detail">
                <span className="event-label">Format</span>
                <span className="event-value">In-person workshop · Approval required</span>
              </div>
              <div className="event-detail">
                <span className="event-label">Attendees</span>
                <span className="event-value">125 going</span>
              </div>
            </div>

            <div className="event-schedule">
              <h4>Schedule</h4>
              <div className="event-timeline">
                <div className="event-time-slot">
                  <span className="event-time">5:30 - 6:00 PM</span>
                  <span className="event-activity">Check In</span>
                </div>
                <div className="event-time-slot">
                  <span className="event-time">6:00 - 7:00 PM</span>
                  <span className="event-activity">Workshop</span>
                </div>
              </div>
            </div>

            <div className="event-about">
              <h4>About</h4>
              <p>
                Go from zero to building a functional AI agent in under an hour
                using Hermes Agent and Novita AI. Your agent will become your
                marketing assistant and email manager. No coding experience required.
              </p>
              <ul className="event-bring">
                <li>Bring your laptop</li>
                <li>Have Discord installed before you arrive</li>
                <li>Compute costs are covered during the session</li>
              </ul>
            </div>

            <a
              href="https://luma.com/m7lhnu94"
              target="_blank"
              rel="noopener noreferrer"
              className="event-rsvp-btn"
            >
              RSVP on Luma →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
