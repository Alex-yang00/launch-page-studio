import { useState, useEffect, useCallback } from 'react'
import PageHero from '../components/PageHero'
import CodeBlock from '../components/CodeBlock'
import Step from '../components/Step'
import './EmailAgentPage.css'

const EMAIL_USE_CASES = [
  {
    id: 'digest',
    label: '1 · Automation',
    title: 'Daily Inbox Digest at 9 AM',
    icon: '📬',
    summary:
      'Set up a cron job that reads your inbox every morning, categorizes by urgency, and delivers a prioritized summary.',
    content: () => (
      <>
        <p>
          Set up a <strong>cron job</strong> that triggers every morning
          at 9:00 AM. Hermes reads your inbox, categorizes emails by
          urgency, and delivers a prioritized summary &mdash; so you start
          the day knowing exactly what needs attention.
        </p>
        <CodeBlock
          language="text"
          code={`Create a cron job that runs every day at 9:00 AM
to read my inbox from the last 24 hours and
generate a summary grouped by priority:

🔴 Urgent — needs reply today
🟡 Important — needs reply this week
🟢 FYI — no action needed

For each email, show: sender, subject, one-line
summary, and suggested action. Sort urgent items
by deadline.`}
        />
      </>
    ),
  },
  {
    id: 'replies',
    label: '2 · Productivity',
    title: 'Batch-Draft Replies for Unread Emails',
    icon: '✍️',
    summary:
      'Scan all unread emails and draft context-aware replies for each — review them all at once, then send.',
    content: () => (
      <>
        <p>
          Instead of replying one by one, ask Hermes to scan all unread
          emails and <strong>draft context-aware replies</strong> for each.
          Review them all at once, tweak if needed, then send &mdash; inbox
          zero in minutes instead of hours.
        </p>
        <CodeBlock
          language="text"
          code={`Read all my unread emails. For each one, draft a
reply based on the content:

- If it's a meeting request → accept and confirm
  the time, or suggest an alternative if it
  conflicts with my calendar
- If it's a question → answer it based on context
- If it's a newsletter or notification → skip it

Show me all drafts for review before sending.
Format: Subject | From | Draft Reply`}
        />
      </>
    ),
  },
  {
    id: 'cleanup',
    label: '3 · Maintenance',
    title: 'Weekly Inbox Cleanup & Unsubscribe',
    icon: '🧹',
    summary:
      'Audit subscriptions, find newsletters you never open, and bulk-unsubscribe and archive.',
    content: () => (
      <>
        <p>
          Once a week, let Hermes audit your subscriptions. It identifies
          newsletters you never open, promotional emails that pile up, and
          mailing lists you forgot about &mdash; then helps you{' '}
          <strong>unsubscribe and archive in bulk</strong>.
        </p>
        <CodeBlock
          language="text"
          code={`Analyze my inbox from the past 7 days and find:

1. Newsletters & promotional emails — list them
   with sender, frequency, and whether I opened
   or replied to any in the past month
2. Automated notifications (GitHub, Jira, etc.)
   that I never interact with

For each, recommend: Keep / Unsubscribe / Filter.
Then help me unsubscribe from the ones I approve
and create email filters to auto-archive the rest.`}
        />
      </>
    ),
  },
  {
    id: 'analytics',
    label: '4 · Insights',
    title: 'Weekly Email Analytics Report',
    icon: '📊',
    summary:
      'Get a data-driven view of your email habits — volume, top contacts, response time, and overdue replies.',
    content: () => (
      <>
        <p>
          Get a data-driven view of your email habits. Hermes counts
          incoming vs outgoing emails, identifies your most frequent
          contacts, measures your average response time, and flags
          emails that have been <strong>waiting for a reply too long</strong>.
        </p>
        <CodeBlock
          language="text"
          code={`Generate a weekly email analytics report for the
past 7 days:

📊 Volume: total received vs sent
👥 Top 5 contacts by email count
⏱️ My average reply time
🚨 Emails older than 48 hours still unanswered
📁 Breakdown by label/category

Present it as a clean summary I can review in
under 2 minutes.`}
        />
      </>
    ),
  },
  {
    id: 'gws-cli',
    label: 'Tool · Advanced',
    title: 'Google Workspace CLI',
    icon: '🔧',
    tool: true,
    summary:
      'Go beyond email — give Hermes access to Gmail, Calendar, Sheets, and Docs via the official GWS CLI.',
    content: () => (
      <>
        <p>
          The official{' '}
          <a
            href="https://github.com/googleworkspace/cli"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Workspace CLI
          </a>{' '}
          gives Hermes access to nearly all Google services &mdash; Gmail,
          Calendar, Sheets, Docs, and more. Install it once, and your
          agent gains full workspace integration.
        </p>

        <h4>Prompt 1 · Install Google Workspace CLI</h4>
        <CodeBlock
          language="text"
          code={`Please install the Google Workspace CLI for this environment.

Official repo:
https://github.com/googleworkspace/cli

Use this workshop install command:
npm install -g @googleworkspace/cli

After installation, verify that the gws command is available and show me
the version or help output.`}
        />

        <h4>Prompt 2 · Configure Google Account and Skill</h4>
        <CodeBlock
          language="text"
          code={`Please configure Google Workspace access for this Hermes agent.

1. Verify that the gws CLI is installed and available.
2. Guide me through Google account authentication with gws.
3. Show me recommended Google Workspace skills and ask which ones I want
   to install before installing anything:
   - Gmail: https://github.com/googleworkspace/cli/tree/main/skills/gws-gmail
   - Calendar: https://github.com/googleworkspace/cli/tree/main/skills/gws-calendar
   - Drive: https://github.com/googleworkspace/cli/tree/main/skills/gws-drive
   - Sheets: https://github.com/googleworkspace/cli/tree/main/skills/gws-sheets
   - Docs: https://github.com/googleworkspace/cli/tree/main/skills/gws-docs
4. Install only the skills I choose.
5. Test each installed skill with a safe read-only action.

After setup, act as my email assistant. You can triage inbox messages,
draft replies, organize labels, and summarize email threads, but always
ask before sending or deleting anything.`}
        />

        <h4>What You Unlock</h4>
        <div className="cards">
          <div className="card">
            <h4>Gmail</h4>
            <p>
              Read, draft, send, and organize emails.
              Automate replies and manage labels.
            </p>
          </div>
          <div className="card">
            <h4>Google Calendar</h4>
            <p>
              Create events, check availability, send invites,
              and manage your schedule.
            </p>
          </div>
          <div className="card">
            <h4>Google Sheets</h4>
            <p>
              Read and write spreadsheet data, generate reports,
              and automate data entry.
            </p>
          </div>
          <div className="card">
            <h4>Google Docs</h4>
            <p>
              Create, edit, and format documents.
              Generate content and summarize files.
            </p>
          </div>
        </div>
      </>
    ),
  },
]

function UseCaseModal({ uc, onClose }) {
  const handleOverlay = useCallback(
    (e) => {
      if (e.target === e.currentTarget) onClose()
    },
    [onClose],
  )

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="uc-modal-overlay" onClick={handleOverlay}>
      <div className="uc-modal-panel">
        <button type="button" className="uc-modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="uc-card-label">{uc.label}</div>
        <h3>{uc.title}</h3>
        {uc.content()}
      </div>
    </div>
  )
}

export default function EmailAgentPage() {
  const [active, setActive] = useState(null)
  const activeUc = active ? EMAIL_USE_CASES.find((u) => u.id === active) : null

  return (
    <>
      <PageHero
        tag="Use Case"
        title="Build an Email Agent"
        subtitle="Automate email drafting, replies, and inbox management with Hermes"
      />

      {/* ── Himalaya Setup ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Setup</span>
          <div className="method-header">
            <h2>Himalaya Skill</h2>
            <span className="method-badge method-badge--simple">Simple</span>
          </div>
          <p className="section-lead">
            Hermes has a built-in <strong>himalaya</strong> skill for email
            management. No extra installation required &mdash; just start a
            conversation and give it a prompt.
          </p>

          <div className="steps">
            <Step number={1} title="Send the Prompt and Set Up Gmail">
              <p>
                Launch Hermes and paste the following prompt. The agent will
                guide you through configuring your Gmail account:
              </p>
              <CodeBlock
                language="text"
                code={`You are [Name], one of your daily tasks is managing my email.
Using the built-in himalaya skill, first configure my email account,
then help me read, draft, and send emails.`}
              />
              <figure className="step-screenshot">
                <img src="/images/email_agent/mail_agent1-send prompt and set gmail account.png" alt="Send prompt and set up Gmail account" />
              </figure>
            </Step>

            <Step number={2} title="Create an App Password">
              <p>
                Hermes will ask you to create a Google App Password for
                secure access. Follow the agent&apos;s instructions to
                generate one from your Google Account settings.
              </p>
              <figure className="step-screenshot">
                <img src="/images/email_agent/mail_agent2-create app passward.png" alt="Create Google App Password" />
              </figure>
            </Step>

            <Step number={3} title="Verify Configuration">
              <p>
                Once the app password is entered, Hermes will confirm
                that your email account is configured successfully.
              </p>
              <figure className="step-screenshot">
                <img src="/images/email_agent/email_agenmt_configure_succeed.png" alt="Email agent configuration succeeded" />
              </figure>
            </Step>

            <Step number={4} title="Send Your First Email" last>
              <p>
                Try asking Hermes to send a test email &mdash; you should
                see it land in the recipient&apos;s inbox right away.
              </p>
              <figure className="step-screenshot">
                <img src="/images/email_agent/test_email_from_hermes.png" alt="Test email sent from Hermes" />
              </figure>
            </Step>
          </div>
        </div>
      </section>

      {/* ── Use Cases + GWS Tool Card ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Use Cases</span>
          <h2>What Can Your Email Agent Do?</h2>
          <p className="section-lead">
            Sending a single draft is just the beginning. Here are real workflows
            you can set up with your Hermes Email Agent &mdash; click any card
            to see the full prompt.
          </p>

          <div className="uc-grid">
            {EMAIL_USE_CASES.map((uc) => (
              <button
                key={uc.id}
                className={`uc-card${uc.tool ? ' uc-card--tool' : ''}`}
                onClick={() => setActive(uc.id)}
              >
                <div className="uc-card-icon">{uc.icon}</div>
                <div className="uc-card-label">{uc.label}</div>
                <h3>{uc.title}</h3>
                <p>{uc.summary}</p>
                <span className="uc-card-link">
                  {uc.tool ? 'View setup guide →' : 'View prompt →'}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeUc && (
        <UseCaseModal uc={activeUc} onClose={() => setActive(null)} />
      )}
    </>
  )
}
