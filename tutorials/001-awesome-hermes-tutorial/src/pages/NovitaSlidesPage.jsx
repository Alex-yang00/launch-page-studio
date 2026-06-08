import { useEffect, useRef, useState, useCallback } from 'react'
import Reveal from 'reveal.js'
import 'reveal.js/reveal.css'
import 'reveal.js/theme/white.css'
import './NovitaSlidesPage.css'

const TOC_ITEMS = [
  { label: 'Overview' },
  { label: 'Novita AI' },
  { label: 'Hermes' },
  { label: 'Ready' },
  { label: 'Install' },
  { label: 'Configure' },
  { label: 'Discord Setup' },
  { label: 'Discord (a–c)' },
  { label: 'Discord (d–f)' },
  { label: 'Your Server' },
  { label: 'Verify' },
  { label: 'Use Case' },
  { label: 'Thanks' },
]

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="slide-lightbox" onClick={onClose}>
      <button type="button" className="slide-lightbox-close" onClick={onClose}>✕</button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

function SlideCode({ code, language = 'bash' }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(code) } catch {
      const ta = document.createElement('textarea')
      ta.value = code; ta.style.cssText = 'position:fixed;opacity:0'
      document.body.appendChild(ta); ta.select()
      document.execCommand('copy'); document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className="slide-code">
      <div className="slide-code-header">
        <span className="slide-code-lang">{language}</span>
        <button type="button" className="slide-code-copy" onClick={handleCopy}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  )
}

function ConfigRow({ label, value, placeholder = false }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(value) } catch {
      const ta = document.createElement('textarea')
      ta.value = value; ta.style.cssText = 'position:fixed;opacity:0'
      document.body.appendChild(ta); ta.select()
      document.execCommand('copy'); document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className="slide-config-row">
      <span className="slide-config-label">{label}</span>
      <div className={`slide-config-value${placeholder ? ' is-placeholder' : ''}`}>
        <code>{value}</code>
        {!placeholder && (
          <button type="button" className="slide-config-copy" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>
    </div>
  )
}

function SlideModelChoice({ badge, name, model, context }) {
  return (
    <div className="slide-model-choice">
      <div className="slide-model-choice-header">
        <span>{badge}</span>
        <strong>{name}</strong>
      </div>
      <ConfigRow label="Model name:" value={model} />
      <ConfigRow label="Context length:" value={context} />
    </div>
  )
}

function SlideToc({ currentIndex, onJump }) {
  return (
    <nav className="slides-toc">
      <a href="/" className="slides-toc-home">← Home</a>
      <ul>
        {TOC_ITEMS.map((item, i) => (
          <li key={i}>
            <button
              type="button"
              className={`slides-toc-item${i === currentIndex ? ' is-active' : ''}`}
              onClick={() => onJump(i)}
            >
              <span className="slides-toc-dot" />
              <span className="slides-toc-label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ClickableImg({ src, alt, onOpen }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ cursor: 'zoom-in' }}
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); onOpen(src, alt) }}
    />
  )
}

export default function NovitaSlidesPage() {
  const deckRef = useRef(null)
  const revealRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = useCallback((src, alt) => setLightbox({ src, alt }), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  const handleJump = useCallback((index) => {
    if (revealRef.current) revealRef.current.slide(index)
  }, [])

  useEffect(() => {
    if (!deckRef.current || revealRef.current) return
    const deck = new Reveal(deckRef.current, {
      hash: true,
      slideNumber: false,
      transition: 'slide',
      width: 1060,
      height: 700,
      margin: 0.04,
      center: false,
      progress: true,
      controls: false,
    })
    deck.initialize()
    deck.on('slidechanged', (e) => setCurrentSlide(e.indexh))
    revealRef.current = deck
    return () => {
      try { deck.destroy() } catch { /* reveal.js may already be destroyed */ }
      revealRef.current = null
    }
  }, [])

  return (
    <div className="slides-wrapper">
      <div className="slides-main">
        <div className="reveal" ref={deckRef}>
          <div className="slides">

            {/* ─── 1. Title ─── */}
            <section className="slide-title">
              <div className="slide-title-grid">
                <div className="slide-title-copy">
                  <span className="slide-tag">Workshop Guide</span>
                  <h1>Build Your First Hermes Agent with Novita AI</h1>
                  <p className="slide-subtitle">
                    A 40-minute hands-on workshop from zero to a working AI agent.
                  </p>
                  <div className="slide-title-meta" aria-label="Workshop scope">
                    <span>40 min</span>
                    <span>GLM-5.1</span>
                    <span>Discord</span>
                  </div>
                </div>

                <div className="slide-title-agenda">
                  <div className="slide-agenda-heading">
                    <span>Run of show</span>
                    <strong>40 min</strong>
                  </div>
                  <div className="slide-agenda-compact">
                    <div className="slide-agenda-compact-item">
                      <span className="slide-agenda-time">4 min</span>
                      <div>
                        <h4>Context</h4>
                        <p>Novita AI platform and Hermes overview</p>
                      </div>
                    </div>
                    <div className="slide-agenda-compact-item is-primary">
                      <span className="slide-agenda-time">10 min</span>
                      <div>
                        <h4>Launch agent</h4>
                        <p>Install Hermes, configure Novita, connect Discord</p>
                      </div>
                    </div>
                    <div className="slide-agenda-compact-item is-primary">
                      <span className="slide-agenda-time">20 min</span>
                      <div>
                        <h4>Build use case</h4>
                        <p>Pick a workflow and make it repeatable</p>
                      </div>
                    </div>
                    <div className="slide-agenda-compact-item">
                      <span className="slide-agenda-time">6 min</span>
                      <div>
                        <h4>Verify and share</h4>
                        <p>Test the agent, then share on X or Discord</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="slide-title-outcomes">
                <div>
                  <span>Leave with</span>
                  <strong>A running Hermes agent</strong>
                </div>
                <div>
                  <span>Use it in</span>
                  <strong>Discord workflows</strong>
                </div>
                <div>
                  <span>Powered by</span>
                  <strong>Novita AI Model API</strong>
                </div>
              </div>
            </section>

            {/* ─── 2. Novita AI Platform ─── */}
            <section>
              <span className="slide-tag">1 min</span>
              <h2>Novita AI Platform</h2>
              <p>Three product lines for building and running AI applications.</p>

              <div className="slide-platform-products">
                <div className="slide-platform-product">
                  <h4>Model API</h4>
                  <p>OpenAI-compatible access to 200+ models.</p>
                </div>
                <div className="slide-platform-product">
                  <h4>Sandbox</h4>
                  <p>Cloud dev environments for AI projects.</p>
                </div>
                <div className="slide-platform-product">
                  <h4>GPU Instances</h4>
                  <p>On-demand GPU compute for heavier workloads.</p>
                </div>
              </div>

              <div className="slide-screenshot slide-screenshot--wide">
                <ClickableImg src="/images/Novita-web.png" alt="Novita AI platform dashboard" onOpen={openLightbox} />
              </div>
            </section>

            {/* ─── 4. Hermes Highlights ─── */}
            <section>
              <span className="slide-tag">1 min</span>
              <h2>Hermes Agent Highlights</h2>
              <p>Hermes connects models to memory, tools, skills, chat platforms, and scheduled automations.</p>

              <div className="slide-hermes-summary">
                <strong>For this workshop:</strong>
                <span>we are turning a model endpoint into a Discord-based agent that can use tools and remember context.</span>
              </div>

              <div className="slide-cards slide-cards--6">
                <div className="slide-feature">
                  <span className="slide-feature-icon">🔄</span>
                  <div><h4>Self-Improving</h4><p>Feedback, memory, and reusable instructions</p></div>
                </div>
                <div className="slide-feature">
                  <span className="slide-feature-icon">🧠</span>
                  <div><h4>Memory</h4><p>Durable facts across conversations</p></div>
                </div>
                <div className="slide-feature">
                  <span className="slide-feature-icon">🛠️</span>
                  <div><h4>Tools + Skills</h4><p>Built-in tools and reusable workflows</p></div>
                </div>
                <div className="slide-feature">
                  <span className="slide-feature-icon">💬</span>
                  <div><h4>Gateways</h4><p>Discord, Slack, and Telegram</p></div>
                </div>
                <div className="slide-feature">
                  <span className="slide-feature-icon">⏱️</span>
                  <div><h4>Schedules</h4><p>Daily briefings and reminders</p></div>
                </div>
                <div className="slide-feature">
                  <span className="slide-feature-icon">🌐</span>
                  <div><h4>Web Work</h4><p>Search, browse, and extract context</p></div>
                </div>
              </div>
            </section>

            {/* ─── 4. Workshop Readiness ─── */}
            <section>
              <span className="slide-tag">Quality check</span>
              <h2>Before We Install Anything</h2>
              <p>Get these ready now so the setup steps move quickly.</p>

              <div className="slide-ready-checklist">
                <div className="slide-quality-card slide-quality-card--checklist">
                  <span className="slide-card-badge">Ready</span>
                  <h4>Setup Checklist</h4>
                  <ul className="slide-list">
                    <li>Terminal access</li>
                    <li>Discord installed and logged in</li>
                    <li>Novita API key ready</li>
                    <li>Own Discord server for testing</li>
                    <li>Discord Developer Portal opens</li>
                  </ul>
                </div>
              </div>

              <div className="slide-api-ready">
                <div>
                  <span className="slide-card-badge">Novita AI</span>
                  <h4>Get Your API Key</h4>
                  <p>Go to Novita AI to register and create your own key. We will use it next.</p>
                  <a href="https://novita.ai" target="_blank" rel="noopener noreferrer" className="slide-api-ready-link">
                    Create API key →
                  </a>
                </div>
                <div className="slide-screenshot">
                  <ClickableImg src="/images/novita-get-api-key-3.webp" alt="Novita AI API key dashboard" onOpen={openLightbox} />
                </div>
              </div>
            </section>

            {/* ─── 5. Install Hermes ─── */}
            <section>
              <span className="slide-tag">10 min · Hands-on</span>

              <div className="slide-step-section">
                <div className="slide-step-header">
                  <span className="slide-step-num">1</span>
                  <h3>Install Hermes Agent</h3>
                </div>
                <div className="slide-install-grid">
                  <div className="slide-install-panel">
                    <h4>1a · Install and load shell changes</h4>
                    <SlideCode language="bash" code={`curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
source ~/.bashrc`} />
                  </div>

                  <div className="slide-install-panel">
                    <h4>1b · Check install</h4>
                    <SlideCode language="bash" code="hermes --version" />
                    <ClickableImg src="/images/hermes-version.png" alt="hermes --version output" onOpen={openLightbox} />
                  </div>

                  <div className="slide-install-panel">
                    <h4>1c · Already installed?</h4>
                    <SlideCode language="bash" code="hermes update" />
                    <ClickableImg src="/images/hermes-update.png" alt="hermes update output" onOpen={openLightbox} />
                  </div>
                </div>
              </div>
            </section>

            {/* ─── 6. Configure Novita ─── */}
            <section>
              <div className="slide-step-section">
                <div className="slide-step-header">
                  <span className="slide-step-num">2</span>
                  <h3>Run Hermes Setup</h3>
                </div>
                <div className="slide-two-col slide-two-col--text-img">
                  <div>
                    <p>Launch the setup wizard, choose custom endpoint:</p>
                    <SlideCode language="shell" code="hermes setup" />
                  </div>
                  <div className="slide-screenshot">
                    <ClickableImg src="/images/setup1-choose-custom-endpoint.png" alt="Choose custom endpoint" onOpen={openLightbox} />
                  </div>
                </div>
              </div>

              <div className="slide-divider" />

              <div className="slide-step-section">
                <div className="slide-step-header">
                  <span className="slide-step-num">3</span>
                  <h3>Configure Novita Endpoint</h3>
                </div>
                <p className="text-primary" style={{ margin: '0 0 6px' }}>Paste the shared values first, then pick one model option and copy its matching context length:</p>
                <div className="slide-config">
                  <ConfigRow label="API base URL:" value="https://api.novita.ai/openai" />
                  <ConfigRow label="API Key:" value="YOUR-OWN-KEY" placeholder />
                  <ConfigRow label="Display name:" value="NovitaAI" />
                </div>
                <div className="slide-model-choice-grid">
                  <SlideModelChoice
                    badge="Option A"
                    name="GLM-5.1"
                    model="zai-org/glm-5.1"
                    context="204800"
                  />
                  <SlideModelChoice
                    badge="Option B"
                    name="Kimi K2.6"
                    model="moonshotai/kimi-k2.6"
                    context="262144"
                  />
                </div>
              </div>
            </section>

            {/* ─── 7. Select Discord as Message Channel ─── */}
            <section>
              <div className="slide-step-header">
                <span className="slide-step-num">5</span>
                <h2>Connect Discord</h2>
              </div>
              <p>Hermes supports Discord, Slack, and Telegram — for today's workshop we'll all use <strong>Discord</strong> so everyone lands in the same playground.</p>
              <p>When the setup wizard asks for a messaging platform, pick <strong>Discord</strong>:</p>

              <div className="slide-screenshot" style={{ marginTop: 12 }}>
                <ClickableImg src="/images/setup-discord/01-select-discord.png" alt="Select Discord as the messaging platform in Hermes" onOpen={openLightbox} />
              </div>

              <div className="slide-tip slide-tip--compact">
                <h4>💡 Tips</h4>
                <p>Press <code>Space</code> to select Discord, then press <code>Enter</code> to proceed to the next step.</p>
              </div>
            </section>

            {/* ─── 8. Step 5 a–c ─── */}
            <section>
              <div className="slide-step-header">
                <span className="slide-step-num">5</span>
                <h2>Discord Setup (a–c)</h2>
              </div>

              <div className="slide-three-col">
                <div className="slide-substep-card">
                  <h4 className="slide-substep">5a · Create App</h4>
                  <p>
                    <a href="https://discord.com/developers/applications" target="_blank" rel="noopener noreferrer">Developer Portal</a>{' '}
                    → <strong>New Application</strong><br />
                    Name it "Hermes Agent" → <strong>Create</strong>
                  </p>
                  <div className="slide-screenshot">
                    <ClickableImg src="/images/setup-discord/02-create-discord-app.png" alt="Create Discord app" onOpen={openLightbox} />
                  </div>
                </div>

                <div className="slide-substep-card">
                  <h4 className="slide-substep">5b · Enable Intents</h4>
                  <p><strong>Bot</strong> tab → Privileged Gateway Intents:</p>
                  <ul className="slide-list">
                    <li><strong>Server Members Intent</strong></li>
                    <li><strong>Message Content Intent</strong></li>
                  </ul>
                  <div className="slide-screenshot">
                    <ClickableImg src="/images/setup-discord/03-choose-bot-permission.png" alt="Gateway Intents" onOpen={openLightbox} />
                  </div>
                </div>

                <div className="slide-substep-card">
                  <h4 className="slide-substep">5c · Copy Bot Token</h4>
                  <p>
                    <strong>Bot</strong> tab → <strong>Reset Token</strong><br />
                    Copy immediately — Discord only shows it once. Treat it like a password.
                  </p>
                  <div className="slide-tip slide-tip--compact">
                    <p>⚠️ If you lose the token, you'll need to reset it again.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ─── 9. Step 5 d–f ─── */}
            <section>
              <div className="slide-step-header">
                <span className="slide-step-num">5</span>
                <h2>Discord Setup (d–f)</h2>
              </div>

              <div className="slide-three-col">
                <div className="slide-substep-card">
                  <h4 className="slide-substep">5d · Invite Bot</h4>
                  <p><strong>Installation</strong> tab → <strong>Guild Install</strong></p>
                  <div className="slide-mini-table">
                    <div><strong>Scopes</strong></div>
                    <div><code>bot</code>, <code>applications.commands</code></div>
                    <div><strong>Permissions</strong></div>
                    <div>View Channels, Send Messages, Embed Links, Attach Files, Read History</div>
                  </div>
                  <div className="slide-screenshot">
                    <ClickableImg src="/images/setup-discord/install your-app-on-your-sever.png" alt="Install bot" onOpen={openLightbox} />
                  </div>
                </div>

                <div className="slide-substep-card">
                  <h4 className="slide-substep">5e · Find User ID</h4>
                  <p>
                    Discord → <strong>Settings</strong> → <strong>Advanced</strong><br />
                    → Turn on <strong>Developer Mode</strong>
                  </p>
                  <p>Right-click your username → <strong>Copy User ID</strong></p>
                  <div className="slide-screenshot">
                    <ClickableImg src="/images/setup-discord/copy-your-userID.png" alt="Copy User ID" onOpen={openLightbox} />
                  </div>
                </div>

                <div className="slide-substep-card">
                  <h4 className="slide-substep">5f · Paste into Hermes</h4>
                  <p>
                    Back in the setup wizard, paste:<br />
                    • <strong>Bot Token</strong><br />
                    • <strong>User ID</strong>
                  </p>
                  <p>Hermes writes them to <code>~/.hermes/.env</code></p>
                  <div className="slide-screenshot">
                    <ClickableImg src="/images/setup-discord/set-up-finished.png" alt="Setup finished" onOpen={openLightbox} />
                  </div>
                </div>
              </div>
            </section>

            {/* ─── 10. Create Your Server ─── */}
            <section>
              <div className="slide-step-header">
                <span className="slide-step-num">5</span>
                <h2>Create Your Discord Server</h2>
              </div>
              <p>Before starting Hermes, make sure you have your <strong>own Discord server</strong> ready for the bot to join.</p>

              <div className="slide-two-col" style={{ gap: 24 }}>
                <div>
                  <h3>Quick Steps</h3>
                  <ul className="slide-list" style={{ fontSize: '0.72em' }}>
                    <li>Open Discord → click the <strong>+</strong> button in the server sidebar</li>
                    <li>Choose <strong>"Create My Own"</strong> → name your server (e.g. "Hermes Workshop")</li>
                    <li>Go back to the <a href="https://discord.com/developers/applications" target="_blank" rel="noopener noreferrer">Developer Portal</a> → your app → <strong>Installation</strong> tab</li>
                    <li>Click the <strong>install link</strong> and select your new server to invite the bot</li>
                    <li>Confirm the bot appears in your server's member list</li>
                  </ul>

                  <div className="slide-tip slide-tip--compact">
                    <h4>💡 Why your own server?</h4>
                    <p>Your Hermes agent needs a server where it has the right permissions. A personal server gives you full control to test and experiment.</p>
                  </div>
                </div>
                <div className="slide-screenshot slide-screenshot--fill">
                  <ClickableImg src="/images/setup-discord/install your-app-on-your-sever.png" alt="Invite bot to your server" onOpen={openLightbox} />
                </div>
              </div>
            </section>

            {/* ─── 11. Step 6 + Pro Tip ─── */}
            <section>
              <div className="slide-step-header">
                <span className="slide-step-num">6</span>
                <h2>Verify Gateway Status</h2>
              </div>

              <div className="slide-two-col" style={{ gap: 18 }}>
                <div>
                  <p>Start the Hermes gateway and confirm it's running:</p>
                  <SlideCode language="bash" code="hermes gateway status" />
                  <p>You should see the gateway service listed as <strong>active / running</strong>. If everything is green, head to your Discord server and start chatting.</p>
                </div>
                <div className="slide-screenshot slide-screenshot--fill">
                  <ClickableImg src="/images/gateway status .png" alt="hermes gateway status showing active" onOpen={openLightbox} />
                </div>
              </div>

              <div className="slide-verify-support">
                <div className="slide-quality-card slide-quality-card--compact">
                  <span className="slide-card-badge">Commands</span>
                  <h4>Check and Restart</h4>
                  <SlideCode language="bash" code={`hermes gateway status
hermes gateway stop
hermes gateway start
tail -f ~/.hermes/logs/gateway.log`} />
                </div>

                <div className="slide-quality-card slide-quality-card--compact">
                  <span className="slide-card-badge">Symptoms</span>
                  <h4>Fast Diagnosis</h4>
                  <ul className="slide-list">
                    <li><strong>Bot offline:</strong> start or restart the gateway.</li>
                    <li><strong>Cannot read messages:</strong> enable Message Content Intent.</li>
                    <li><strong>No plain replies:</strong> mention the bot or disable <code>discord.require_mention</code>.</li>
                    <li><strong>Cron does not run:</strong> confirm the gateway scheduler is active.</li>
                  </ul>
                </div>
              </div>

              <div className="slide-tip slide-tip--compact">
                <h4>Pro tip: skip the @mention</h4>
                <p>Send: <code>Can you set the config that I don't need to ping you and you can still answer me</code>. Then restart Hermes.</p>
              </div>
            </section>

            {/* ─── 12. Use Cases ─── */}
            <section className="slide-scrollable">
              <span className="slide-tag">20 min · Hands-on</span>
              <h2>Build Your Use Case</h2>

              <div className="slide-usecase-grid slide-usecase-grid--4">
                <a href="/email-agent" target="_blank" rel="noopener noreferrer" className="slide-usecase">
                  <div className="slide-usecase-top">
                    <span className="slide-usecase-badge">Use Case A</span>
                    <span className="slide-usecase-icon">📧</span>
                  </div>
                  <h3>Email Manager</h3>
                  <p>AI-powered email triage &amp; responses using Himalaya (built-in) + Google CLI.</p>
                  <span className="slide-usecase-link">Start building →</span>
                </a>
                <a href="/marketing-agent" target="_blank" rel="noopener noreferrer" className="slide-usecase">
                  <div className="slide-usecase-top">
                    <span className="slide-usecase-badge">Use Case B</span>
                    <span className="slide-usecase-icon">📝</span>
                  </div>
                  <h3>Marketing Assistant</h3>
                  <p>Content creation agent with soul.md &amp; popular marketing skills.</p>
                  <span className="slide-usecase-link">Start building →</span>
                </a>
                <a href="/meeting-notes-agent" target="_blank" rel="noopener noreferrer" className="slide-usecase">
                  <div className="slide-usecase-top">
                    <span className="slide-usecase-badge">Use Case C</span>
                    <span className="slide-usecase-icon">✅</span>
                  </div>
                  <h3>Meeting Notes</h3>
                  <p>Watch transcripts, create Jira or Linear tasks, post Slack or Discord summaries.</p>
                  <span className="slide-usecase-link">Start building →</span>
                </a>
                <a href="/daily-briefing-agent" target="_blank" rel="noopener noreferrer" className="slide-usecase">
                  <div className="slide-usecase-top">
                    <span className="slide-usecase-badge">Use Case D</span>
                    <span className="slide-usecase-icon">🌅</span>
                  </div>
                  <h3>Daily Briefing</h3>
                  <p>Schedule a weekday digest that searches current AI agent news, summarizes top stories, and posts to Discord.</p>
                  <span className="slide-usecase-link">Start building →</span>
                </a>
              </div>

              <div className="slide-usecase-support">
                <figure className="slide-agent-meme">
                  <ClickableImg
                    src="/images/before vs after agent.png"
                    alt="Software engineers before vs after agents meme"
                    onOpen={openLightbox}
                  />
                </figure>

                <div className="slide-faq-panel">
                  <div className="slide-panel-heading">
                    <span>FAQ</span>
                    <strong>Open Q&amp;A</strong>
                  </div>
                  <p className="slide-session-note">We will pause here for questions before everyone starts building their use case.</p>
                </div>

                <div className="slide-protips-panel">
                  <div className="slide-panel-heading">
                    <span>Pro tips</span>
                    <strong>Make it yours</strong>
                  </div>
                  <ol className="slide-protip-list">
                    <li>
                      <h4>Define the agent personality with <code>SOUL.md</code></h4>
                      <p>Use it for role, tone, priorities, and how the agent should behave in your workflow.</p>
                    </li>
                    <li>
                      <h4>Explore more use cases</h4>
                      <p>
                        Browse official Hermes user stories for more workflow ideas:
                        {' '}
                        <a
                          href="https://hermes-agent.nousresearch.com/docs/user-stories"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          user stories →
                        </a>
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* ─── 13. Share + Thanks ─── */}
            <section>
              <span className="slide-tag">Wrap-up</span>
              <h2>Thanks for joining the workshop</h2>
              <p>Share your agent build with the community and keep exploring Novita AI workflows.</p>

              <div className="slide-share-cta">
                <div className="slide-share-cta-icon">🎉</div>
                <h3>Share Your Agent &amp; Earn Extra Credits</h3>

                <div className="slide-share-channels">
                  <div className="slide-share-channel">
                    <h4>💬 Discord</h4>
                    <p>Join our server and post a screenshot of your agent in <code>#built-on-novita</code> to receive <strong>extra Novita AI credits</strong>.</p>
                    <a href="https://discord.gg/dTVYXBvMP6" target="_blank" rel="noopener noreferrer" className="slide-share-btn slide-share-btn--discord">
                      Join Discord
                    </a>
                  </div>

                  <div className="slide-share-channel-divider" />

                  <div className="slide-share-channel">
                    <h4>𝕏 Twitter / X</h4>
                    <p>Screenshot your agent in action, follow <strong>@novita_labs</strong>, then hit share — the tweet is pre-filled for you.</p>
                    <div className="slide-share-cta-actions">
                      <a href="https://x.com/intent/follow?screen_name=novita_labs" target="_blank" rel="noopener noreferrer" className="slide-share-btn slide-share-btn--x">
                        Follow @novita_labs
                      </a>
                      <a href="https://twitter.com/intent/tweet?text=Just%20built%20my%20first%20Hermes%20AI%20agent%20powered%20by%20%40novita_labs!%20%F0%9F%A4%96%0A%0A%23BuiltOnNovita" target="_blank" rel="noopener noreferrer" className="slide-share-btn slide-share-btn--x-share">
                        Post on X
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      <SlideToc currentIndex={currentSlide} onJump={handleJump} />
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />}
    </div>
  )
}
