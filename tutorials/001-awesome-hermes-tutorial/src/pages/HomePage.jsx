import CodeBlock from '../components/CodeBlock'
import Step from '../components/Step'
import GuideCard from '../components/GuideCard'
import './HomePage.css'

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-logos">
            <div className="logo-badge badge-hermes">
              <img src="/images/hermes-icon.png" alt="Hermes Agent" />
            </div>
          </div>
          <h1>
            Build Your First
            <br />
            <em>Hermes Agent</em>
          </h1>
          <p className="hero-sub">
            A step-by-step guide to creating a self-improving AI agent
            powered by Hermes and your choice of LLM provider
          </p>
        </div>
      </section>

      {/* ── What is Hermes Agent ── */}
      <section id="hermes" className="section">
        <div className="section-inner">
          <span className="section-tag">Introduction</span>
          <h2>What is Hermes Agent?</h2>
          <p className="section-lead">
            Hermes Agent is an open-source, self-improving AI agent framework
            built by <strong>Nous Research</strong>. Unlike traditional chatbots,
            Hermes learns from interactions, builds reusable skills,
            and maintains persistent memory across sessions.
          </p>
          <a className="section-link" href="https://hermes-agent.nousresearch.com/" target="_blank" rel="noopener noreferrer">
            Visit Hermes Agent &rarr;
          </a>
          <figure className="section-screenshot">
            <img src="/images/hermes-web.png" alt="Hermes Agent website" />
          </figure>
          <div className="cards">
            <div className="card">
              <h4>Self-Improving</h4>
              <p>
                Built-in learning loop that creates and refines
                skills from experience automatically.
              </p>
            </div>
            <div className="card">
              <h4>Memory System</h4>
              <p>
                Three-layer memory architecture for short-term,
                medium-term, and long-term recall.
              </p>
            </div>
            <div className="card">
              <h4>40+ Built-in Tools</h4>
              <p>
                Terminal, browser automation, web search,
                file operations, code execution, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tutorial ── */}
      <section id="tutorial" className="section">
        <div className="section-inner">
          <span className="section-tag">Hands-on</span>
          <h2>Step-by-Step Tutorial</h2>
          <p className="section-lead">
            Follow these steps to get your first Hermes Agent up and running.
          </p>

          <div className="steps">
            <Step number={1} title="Install Hermes Agent">
              <p>
                Run the one-liner installer. Works on Linux, macOS, and WSL2.
              </p>
              <CodeBlock
                language="bash"
                code={`curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
source ~/.bashrc
hermes --version`}
              />
              <figure className="step-screenshot">
                <img src="/images/hermes-version.png" alt="hermes --version output" />
              </figure>
            </Step>

            <Step number={2} title="Setup Your Hermes Agent">
              <p>Run the setup wizard to configure Hermes:</p>
              <CodeBlock language="shell" code="hermes setup" />

              <p>
                Choose <strong>Quick Setup</strong> to get started fast.
              </p>
              <figure className="step-screenshot">
                <img src="/images/setup-telegram/01-choose-quick-setup.png" alt="Choose quick setup" />
              </figure>

              <p>
                Select your LLM provider and model. Hermes works with any
                OpenAI-compatible API.
              </p>
              <figure className="step-screenshot">
                <img src="/images/setup-telegram/02-select-provider-and-model.png" alt="Select your provider and model" />
              </figure>
            </Step>

            <Step number={3} title="Connect a Messaging Channel">
              <p>
                Hermes can chat with you through Telegram, Discord, Slack, and more.
                During setup, choose a messaging port to connect.
              </p>
              <figure className="step-screenshot">
                <img src="/images/setup-telegram/03-connect-message-port.png" alt="Connect a message port" />
              </figure>

              <p>
                For example, choose <strong>Telegram</strong> as your channel:
              </p>
              <figure className="step-screenshot">
                <img src="/images/setup-telegram/04-choose-telegram.png" alt="Choose Telegram as messaging channel" />
              </figure>

              <p>
                You&apos;ll need your Telegram Bot Token and your Telegram User ID.
                Use a third-party bot like{' '}
                <strong>@raw_data_bot</strong> to find your ID:
              </p>
              <figure className="step-screenshot">
                <img src="/images/setup-telegram/05-find-telegram-id-via-bot.png" alt="Find your Telegram ID via bot" />
              </figure>

              <p>
                Enter your Bot Token and Telegram ID to complete the connection:
              </p>
              <figure className="step-screenshot">
                <img src="/images/setup-telegram/06-input-bot-token-and-telegram-id.png" alt="Input bot token and Telegram ID" />
              </figure>
            </Step>

            <Step number={4} title="Start Your First Conversation">
              <p>Launch Hermes and start chatting:</p>
              <CodeBlock language="bash" code="hermes" />
              <figure className="step-screenshot">
                <img src="/images/start-conversation.png" alt="Hermes Agent first conversation" />
              </figure>
              <p>
                Try asking it to search the web, write code, or manage files.
                Hermes will use your configured LLM provider to power every response.
              </p>
            </Step>

            <Step number={5} title="Build Your Own Agent">
              <p>
                Ready to build something real? Pick a use-case template to get started.
              </p>
              <div className="guide-cards">
                <GuideCard
                  to="/email-agent"
                  title="Email Agent"
                  description="Automate email drafting, replies, and inbox management with a personal AI assistant."
                />
                <GuideCard
                  to="/marketing-agent"
                  title="Marketing Agent"
                  description="Generate campaigns, social posts, and marketing copy powered by your Hermes Agent."
                />
              </div>
            </Step>

            <Step number={6} title="Pro Tips" last>
              <p>
                Level up your Hermes workflow with handy tricks and shortcuts.
              </p>
              <div className="guide-cards">
                <GuideCard
                  to="/pro-tips"
                  title="Tips & Tricks"
                  description="Updating, debugging, and getting the most out of Hermes Agent."
                />
              </div>
            </Step>
          </div>
        </div>
      </section>

      {/* ── References ── */}
      <section id="references" className="section">
        <div className="section-inner">
          <span className="section-tag">Resources</span>
          <h2>References</h2>
          <div className="ref-grid">
            <a
              className="ref-card"
              href="https://github.com/NousResearch/hermes-agent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>NousResearch/hermes-agent</h4>
              <p>Official Hermes Agent repository &mdash; the core framework</p>
              <span className="ref-meta">&star; 23k+</span>
            </a>
            <a
              className="ref-card"
              href="https://github.com/0xNyk/awesome-hermes-agent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>awesome-hermes-agent</h4>
              <p>Curated list of skills, tools, and ecosystem resources</p>
              <span className="ref-meta">&star; 1.2k+</span>
            </a>
            <a
              className="ref-card"
              href="https://github.com/alchaincyf/hermes-agent-orange-book"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Hermes Agent Orange Book</h4>
              <p>Comprehensive guide &mdash; from beginner to advanced</p>
              <span className="ref-meta">&star; 2.5k+</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
