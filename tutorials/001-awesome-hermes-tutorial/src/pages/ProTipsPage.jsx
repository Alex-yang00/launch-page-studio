import PageHero from '../components/PageHero'
import CodeBlock from '../components/CodeBlock'
import './ProTipsPage.css'

export default function ProTipsPage() {
  return (
    <>
      <PageHero
        tag="Tips & Tricks"
        title="Pro Tips"
        subtitle="Handy tips to get the most out of your Hermes Agent"
      />

      <section className="section">
        <div className="section-inner">
          <div className="tips-grid">

            <div className="tip-card">
              <h3>Update Hermes</h3>
              <p>
                Keep your agent up to date with the latest features and fixes.
              </p>
              <CodeBlock language="bash" code="hermes update" />
              <figure className="step-screenshot">
                <img src="/images/hermes-update.png" alt="hermes update output" />
              </figure>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
