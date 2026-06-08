import PageHero from '../components/PageHero'
import CodeBlock from '../components/CodeBlock'
import Step from '../components/Step'
import './DailyBriefingAgentPage.css'

const DAILY_BRIEFING_PROMPT = `Create a scheduled daily briefing for me.

Schedule:
- Every weekday at 8:00 AM

Briefing task:
- Search the web for the latest news about AI agents, open-source LLMs, and developer AI tools.
- Pick the top 3 stories that are most useful for builders.
- For each story, include: title, 2-sentence summary, why it matters, and source link.
- Keep the whole briefing under 2 minutes to read.

Delivery:
- Post the briefing in this Discord channel.
- If you cannot verify a source link, leave that story out.`

export default function DailyBriefingAgentPage() {
  return (
    <>
      <PageHero
        tag="Use Case"
        title="Daily Briefing Bot"
        subtitle="Schedule a concise morning briefing with source links, delivered by Hermes in Discord"
      />

      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Workflow</span>
          <h2>From Fresh News to Daily Briefing</h2>
          <p className="section-lead">
            This is the simplest scheduled automation to try after your Discord
            agent is running. Hermes searches the web, selects useful stories,
            and posts a short briefing on a recurring schedule.
          </p>

          <div className="briefing-flow">
            <div>
              <span>1</span>
              <strong>Schedule</strong>
              <p>Run every weekday at 8:00 AM.</p>
            </div>
            <div>
              <span>2</span>
              <strong>Search</strong>
              <p>Find current AI agent and open-source LLM news.</p>
            </div>
            <div>
              <span>3</span>
              <strong>Summarize</strong>
              <p>Keep the top 3 stories short and sourced.</p>
            </div>
            <div>
              <span>4</span>
              <strong>Deliver</strong>
              <p>Post the briefing to this Discord channel.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--accent">
        <div className="section-inner">
          <span className="section-tag">Setup</span>
          <h2>Build the Briefing Bot</h2>
          <p className="section-lead">
            Copy the prompt into Hermes. Keep the schedule, topic, output
            format, and delivery destination in the same prompt because cron
            jobs start from a fresh session.
          </p>

          <div className="steps">
            <Step number={1} title="Copy the Scheduled Briefing Prompt">
              <CodeBlock language="text" code={DAILY_BRIEFING_PROMPT} />
            </Step>

            <Step number={2} title="Review the First Run">
              <p>
                Ask Hermes to run the briefing once manually before relying on
                the schedule. Confirm the links are real and the summary is
                short enough to scan.
              </p>
              <CodeBlock
                language="text"
                code="Run the daily briefing once now so I can review the format before the scheduled version starts."
              />
            </Step>

            <Step number={3} title="Keep the Prompt Self-Contained" last>
              <p>
                Scheduled prompts should not depend on earlier conversation
                context. Include what to search, how to summarize, where to
                deliver, and what to do when a source cannot be verified.
              </p>
            </Step>
          </div>
        </div>
      </section>
    </>
  )
}
