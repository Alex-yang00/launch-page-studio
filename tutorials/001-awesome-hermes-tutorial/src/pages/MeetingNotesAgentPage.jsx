import PageHero from '../components/PageHero'
import CodeBlock from '../components/CodeBlock'
import Step from '../components/Step'
import './MeetingNotesAgentPage.css'

const QUICK_PROMPT = `I just finished a meeting. Here is the transcript:

[paste transcript here, or point to a local .txt / .vtt file]

Please turn it into a meeting follow-up package:

1. Write a concise summary with no more than 5 bullets.
2. List key decisions separately.
3. Extract every action item. For each item include:
   - Task
   - Owner
   - Deadline, or "TBD" if none was mentioned
   - Context from the discussion
4. Format action items as a table I can directly turn into Jira, Linear, Todoist, or Notion tasks.
5. Draft a follow-up message I can post to Discord or Slack.

Do not create tasks or post publicly yet. Show me the draft first.`

const AUTOMATION_PROMPT = `Create an automated meeting-notes workflow.

Every 30 minutes, check ~/meeting-transcripts/ for new .txt or .vtt files.
When a new transcript appears:

1. Parse the transcript into:
   - Date and attendees
   - Key decisions
   - Discussion summary
   - Action items with owner, deadline, and context
   - Open questions
2. Create one task per action item in Linear, Jira, Todoist, or Notion.
3. Post a compact summary to Discord or Slack.
4. Move the processed file to ~/meeting-transcripts/processed/.
5. For action items with deadlines, schedule a reminder one day before due date.

Keep a log file named meeting-notes-runs.md with processed filenames, created task links, and any failures.`

export default function MeetingNotesAgentPage() {
  return (
    <>
      <PageHero
        tag="Use Case"
        title="Meeting Notes & Action Items"
        subtitle="Start with a pasted transcript, then turn the same workflow into tasks, team updates, and reminders"
      />

      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Quick Demo</span>
          <h2>Show the Value in 2 Minutes</h2>
          <p className="section-lead">
            For the workshop, keep it light: paste a short transcript and ask
            Hermes for a structured follow-up package. No Jira, Linear, or
            production integrations are required to see the core value.
          </p>

          <div className="meeting-insight">
            <strong>The original insight:</strong>
            <p>
              Meeting summaries are easy to ignore. The useful part is turning
              discussion into assigned, trackable follow-up work.
            </p>
          </div>

          <div className="meeting-flow">
            <div>
              <span>1</span>
              <strong>Paste Transcript</strong>
              <p>Use notes from a real call or a short sample transcript.</p>
            </div>
            <div>
              <span>2</span>
              <strong>Extract Structure</strong>
              <p>Summary, decisions, action items, owners, and deadlines.</p>
            </div>
            <div>
              <span>3</span>
              <strong>Draft Follow-up</strong>
              <p>Generate a message for Discord, Slack, or email.</p>
            </div>
            <div>
              <span>4</span>
              <strong>Review First</strong>
              <p>Approve the output before posting or creating tasks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--accent">
        <div className="section-inner">
          <span className="section-tag">Setup</span>
          <h2>Run the Lightweight Demo</h2>
          <p className="section-lead">
            Use the Discord connection from the main Novita guide. The first
            run should only draft output, not post publicly or create tasks.
          </p>

          <div className="steps">
            <Step number={1} title="Prepare a Transcript">
              <p>
                Start with the lowest-friction input: paste a meeting transcript
                into Hermes. For recorded meetings, export a <code>.txt</code>,
                <code>.vtt</code>, or <code>.srt</code> file from your meeting
                tool and place it somewhere Hermes can read.
              </p>
              <div className="meeting-source-grid">
                <div>
                  <h4>Manual demo</h4>
                  <p>Paste transcript text directly into Discord or the Hermes CLI.</p>
                </div>
                <div>
                  <h4>File workflow</h4>
                  <p>Save meeting exports under <code>~/meeting-transcripts/</code>.</p>
                </div>
                <div>
                  <h4>Later automation</h4>
                  <p>Connect Otter.ai, Fireflies.ai, Zoom, or Google Meet exports.</p>
                </div>
              </div>
            </Step>

            <Step number={2} title="Run the First Summary Prompt">
              <p>
                Ask Hermes to draft the summary and action table first. Keeping
                approval before public posting makes the workflow safer for live
                meetings and workshops.
              </p>
              <CodeBlock language="text" code={QUICK_PROMPT} />
            </Step>

            <Step number={3} title="Review the Draft Output">
              <p>
                Check whether the summary is accurate, the action items have
                owners, and the follow-up message is ready to send. This keeps
                the live demo safe and easy to understand.
              </p>
            </Step>

            <Step number={4} title="Optional: Automate Later" last>
              <p>
                After the manual prompt works, turn the same workflow into a
                folder watcher or scheduled process for real meeting exports.
              </p>
              <CodeBlock language="text" code={AUTOMATION_PROMPT} />
            </Step>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Business Hints</span>
          <h2>How This Connects to Real Work</h2>
          <p className="section-lead">
            Once the lightweight demo works, connect it to the systems where
            your team already captures meetings, tracks work, and reads updates.
          </p>

          <div className="meeting-insight meeting-insight--compact">
            <strong>Business rule:</strong>
            <p>
              Treat the summary as context. Treat action items as the product.
              Every real deployment should end with owners, deadlines, and a
              place where work is tracked.
            </p>
          </div>

          <div className="meeting-automation-grid">
            <div>
              <span>Input</span>
              <h3>Transcript Sources</h3>
              <p>Otter.ai, Fireflies.ai, Zoom summaries, Google Meet transcripts, or local <code>.txt</code> / <code>.vtt</code> files.</p>
            </div>
            <div>
              <span>Work Tracking</span>
              <h3>Jira / Linear / Todoist / Notion</h3>
              <p>Create one task per approved action item with owner, deadline, and source context.</p>
            </div>
            <div>
              <span>Team Record</span>
              <h3>Slack / Discord</h3>
              <p>Post approved summaries to <code>#meeting-notes</code> or <code>#team-updates</code>.</p>
            </div>
            <div>
              <span>Follow-up</span>
              <h3>Scheduler / Cron</h3>
              <p>Watch an export folder and remind owners before deadlines.</p>
            </div>
          </div>

          <div className="meeting-output-grid">
            <div className="meeting-output-card">
              <h3>Date & Attendees</h3>
              <p>Start every note with meeting context and who participated.</p>
            </div>
            <div className="meeting-output-card">
              <h3>Key Decisions</h3>
              <p>Number the decisions so the team can reference them later.</p>
            </div>
            <div className="meeting-output-card">
              <h3>Action Items</h3>
              <p>Use a table with task, owner, deadline, status, and task link.</p>
            </div>
            <div className="meeting-output-card">
              <h3>Open Questions</h3>
              <p>Separate unresolved topics from confirmed work.</p>
            </div>
          </div>

          <div className="meeting-reference">
            Adapted for Hermes from the open-source{' '}
            <a
              href="https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/meeting-notes-action-items.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Automated Meeting Notes & Action Items
            </a>{' '}
            use case.
          </div>
        </div>
      </section>
    </>
  )
}
