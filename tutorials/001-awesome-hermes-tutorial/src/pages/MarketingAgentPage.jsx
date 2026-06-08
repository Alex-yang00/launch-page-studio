import { useState, useEffect, useCallback } from 'react'
import PageHero from '../components/PageHero'
import CodeBlock from '../components/CodeBlock'
import Step from '../components/Step'
import './MarketingAgentPage.css'

function RedditLogo() {
  return (
    <span className="reddit-logo" aria-label="Reddit">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#ff4500" />
        <circle cx="11.1" cy="15.4" r="1.8" fill="#ffffff" />
        <circle cx="20.9" cy="15.4" r="1.8" fill="#ffffff" />
        <path
          d="M10.8 20.1c1.35 1.2 3.05 1.8 5.2 1.8s3.85-.6 5.2-1.8"
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeWidth="1.75"
        />
        <path
          d="M16 10.2l1.3-5 4.5 1"
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.45"
        />
        <circle cx="23.4" cy="6.6" r="1.8" fill="#ffffff" />
        <path
          d="M7.4 13.6c1.9-2.1 4.9-3.3 8.6-3.3s6.7 1.2 8.6 3.3"
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeWidth="1.6"
        />
      </svg>
    </span>
  )
}

const USE_CASES = [
  {
    id: 'reddit-listening',
    label: '1 · Reddit Intelligence',
    title: 'Find Real Customer Pain in Reddit Communities',
    icon: <RedditLogo />,
    summary:
      'Run a fast Reddit scan for one real pain signal with a source URL and a short reply draft.',
    content: () => (
      <>
        <p>
          Use this for a quick visible demo: find one real Reddit thread,
          summarize the user pain, and draft a reply for human review.
        </p>
        <div className="reddit-policy-note">
          <RedditLogo />
          <div>
            <strong>Rule:</strong>
            <p>
              Listening only. Do not post, comment, DM, vote, or follow anyone.
            </p>
          </div>
        </div>
        <CodeBlock
          language="text"
          code={`Find one recent Reddit post or comment where a developer complains about expensive LLM inference, API pricing, or GPU deployment pain.

Search r/LocalLLaMA or r/OpenAI.

Return:
1. Reddit URL
2. Post title and subreddit
3. One-sentence pain summary
4. Why Novita AI might fit
5. A short reply draft for me to review

Only use a real Reddit URL. Do not post anything.`}
        />
        <div className="reddit-flow">
          <div><span>1</span>Search</div>
          <div><span>2</span>Cite</div>
          <div><span>3</span>Draft</div>
        </div>
        <div className="reddit-reference-box">
          <h4>Output must include a real Reddit URL</h4>
          <ul>
            <li>
              <strong>Reddit URL</strong>
              <span>No source URL means the result is not usable.</span>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'competitor-intel',
    label: '2 · Competitive Intelligence',
    title: 'Find Unhappy Users of Competitor APIs',
    icon: '🕵️',
    summary:
      'Search Reddit, GitHub, and dev forums for pricing complaints and deployment issues with OpenAI, Together AI, Fireworks, OpenRouter, and Replicate — then draft targeted replies.',
    content: () => (
      <>
        <p>
          Hermes can search developer communities in real time, find users
          who are frustrated with competitor pricing, rate limits, or
          deployment pain &mdash; and generate persuasive, context-aware
          replies positioning Novita AI as the alternative. A chatbot
          can&apos;t do this &mdash; it has no access to live forum data.
        </p>
        <CodeBlock
          language="text"
          code={`Search Reddit, GitHub discussions, and developer forums
for complaints, pricing frustrations, or deployment
issues related to:
- OpenAI API
- Together AI
- Fireworks AI
- OpenRouter
- Replicate

Identify the top 6 discussions where users are actively
unhappy or looking for alternatives.

For each case:
1. Summarize the complaint
2. Map Novita AI's relevant advantage
3. Generate a persuasive replacement recommendation reply

Save everything to a folder called novita_competitor_intel.`}
        />
      </>
    ),
  },
  {
    id: 'lead-prospecting',
    label: '3 · Lead Prospecting',
    title: 'Find High-Intent Leads Across Developer Communities',
    icon: '🔍',
    summary:
      'Search Reddit, Hacker News, and GitHub for developers seeking cheaper inference or open-source LLM deployment — then draft personalized outreach.',
    content: () => (
      <>
        <p>
          Hermes can search Reddit, Hacker News, and GitHub discussions
          for developers actively looking for cheaper inference, open-source
          LLM deployment, or alternatives to providers like Together AI and
          OpenRouter &mdash; then draft personalized outreach for each lead.
        </p>
        <CodeBlock
          language="text"
          code={`Search Reddit, Hacker News, and GitHub discussions for developers asking about:
- cheaper OpenAI API alternatives
- affordable inference providers
- open-source LLM deployment
- serverless GPU endpoints
- alternatives to Together AI, Fireworks, or OpenRouter

Find the 8 highest-intent discussions where Novita AI is a relevant solution.

For each lead:
1. summarize the user's pain point,
2. explain why Novita AI fits,
3. generate a personalized outreach reply.

Save everything into a folder called novita_lead_outreach.
Also open the best opportunity in browser and prefill the reply draft.`}
        />
      </>
    ),
  },
  {
    id: 'lead-magnets',
    label: '4 · Growth & Retention',
    title: 'Brainstorm Lead Magnets for Novita AI',
    icon: '🧲',
    summary:
      'Generate 10 lead magnet ideas — checklists, templates, mini-courses — aimed at developers evaluating novita.ai.',
    content: () => (
      <>
        <p>
          A <strong>lead magnet</strong> is a free, high-value resource
          you trade for an email or signup &mdash; checklists, templates,
          mini-courses, calculators. The best magnets solve one sharp
          problem for one specific persona.
        </p>
        <p>
          Use the <strong>lead-magnets</strong> skill to generate 10
          ideas aimed at developers evaluating novita.ai.
        </p>
        <CodeBlock
          language="text"
          code={`Use the lead-magnets skill to brainstorm 10 lead
magnet ideas for developers evaluating
https://novita.ai. Mix formats: checklists,
templates, mini-courses, comparison tools,
notebooks. For each, give me:
- Title
- Format (PDF / Notion / GitHub repo / web tool)
- Target persona (indie hacker / ML eng / enterprise)
- Distribution channel (X, Reddit, HN, newsletter)`}
        />
      </>
    ),
  },
  {
    id: 'seo',
    label: '5 · SEO',
    title: 'Run an SEO Audit on novita.ai',
    icon: '📈',
    summary:
      'Full SEO audit covering title tags, Core Web Vitals, content gaps vs competitors, and schema markup — with top 5 fixes ranked by traffic impact.',
    content: () => (
      <>
        <p>
          Use the <strong>seo-audit</strong> and <strong>ai-seo</strong> skills
          to get actionable SEO improvements.
        </p>
        <CodeBlock
          language="text"
          code={`Run a full SEO audit on https://novita.ai. Check:
- Title tags, meta descriptions, and H1 structure
- Page load speed and Core Web Vitals issues
- Internal linking and site architecture
- Content gaps vs competitors (together.ai, replicate)
- Schema markup (Organization, Product, FAQ)
Prioritize the top 5 fixes by traffic impact.`}
        />

        <div className="seo-time-warning">
          <span className="seo-time-warning-icon">&#9200;</span>
          <div>
            <strong>This audit takes 10&ndash;15 minutes to complete.</strong>
            <p>The agent visits multiple pages, runs performance checks, and compares against competitors. Not recommended for live workshop testing &mdash; review the results below instead.</p>
          </div>
        </div>

        <div className="result-label">Agent Output</div>

        <div className="seo-audit-details">
          <div className="seo-audit-detail">
            <h4>1. On-Page SEO: Title Tags, Meta Descriptions, H1 Structure</h4>
            <div className="seo-table-wrap">
              <table className="seo-table">
                <thead>
                  <tr>
                    <th>Page</th>
                    <th>Title</th>
                    <th>Issues</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Homepage</td>
                    <td className="seo-status--good">&ldquo;Novita AI - AI &amp; Agent Cloud for Developers&rdquo; (43 chars)</td>
                    <td>3 pairs of duplicate H2s</td>
                  </tr>
                  <tr>
                    <td>/models</td>
                    <td className="seo-status--bad">&ldquo;MoonshotAI&rdquo; (JS override)</td>
                    <td>Dynamic JS overwrites title; H1 says &ldquo;Dedicated Endpoint&rdquo; (wrong)</td>
                  </tr>
                  <tr>
                    <td>/pricing</td>
                    <td className="seo-status--bad">&ldquo;Mistral&rdquo; (JS override)</td>
                    <td>2 H1 tags; H3 text bugs (&ldquo;MoonshotAIMoonshotAI&rdquo;)</td>
                  </tr>
                  <tr>
                    <td>/docs/guides/introduction</td>
                    <td className="seo-status--warn">&ldquo;Introduction - Documentation&rdquo; (28 chars, generic)</td>
                    <td>No meta description at all</td>
                  </tr>
                  <tr>
                    <td>/sandbox</td>
                    <td className="seo-status--warn">71 chars (over 60 limit)</td>
                    <td>Title too long; H2 typo &ldquo;andConcurrency&rdquo;</td>
                  </tr>
                  <tr>
                    <td>/gpus-console/templates-library</td>
                    <td className="seo-status--good">Title ok</td>
                    <td>No H1 tag; no headings at all</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="seo-audit-note">
              Critical: Client-side JS is overwriting &lt;title&gt; on /models and /pricing with random model names. Google sees nonsensical titles.
            </p>
          </div>

          <div className="seo-audit-detail">
            <h4>2. Core Web Vitals &amp; Page Speed</h4>
            <div className="seo-table-wrap">
              <table className="seo-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Mobile</th>
                    <th>Desktop</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Performance Score</td>
                    <td>52/100</td>
                    <td>53/100</td>
                    <td className="seo-status--bad">Poor</td>
                  </tr>
                  <tr>
                    <td>LCP</td>
                    <td>3.3s</td>
                    <td>3.4s</td>
                    <td className="seo-status--warn">Needs Work (&le;2.5s)</td>
                  </tr>
                  <tr>
                    <td>CLS</td>
                    <td>0</td>
                    <td>0</td>
                    <td className="seo-status--good">Good</td>
                  </tr>
                  <tr>
                    <td>Speed Index</td>
                    <td>27.1s</td>
                    <td>12.0s</td>
                    <td className="seo-status--bad">Poor</td>
                  </tr>
                  <tr>
                    <td>Total Blocking Time</td>
                    <td>2,630ms</td>
                    <td>1,980ms</td>
                    <td className="seo-status--bad">Poor (&le;200ms)</td>
                  </tr>
                  <tr>
                    <td>TTFB (lab)</td>
                    <td>70ms</td>
                    <td>80ms</td>
                    <td className="seo-status--good">Good</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="seo-audit-note">
              Root cause: 54&ndash;65 seconds of JavaScript main-thread work. Massive un-split Next.js bundles block rendering and interactivity.
            </p>
          </div>

          <div className="seo-audit-detail">
            <h4>3. Internal Linking &amp; Site Architecture</h4>
            <div className="seo-list-columns">
              <div>
                <div className="seo-list-heading seo-list-heading--good">What&apos;s Working</div>
                <ul className="seo-list-good">
                  <li>Canonical tags on all pages, consistent HTTPS non-www</li>
                  <li>HTTP&rarr;HTTPS redirect (308), www&rarr;non-www redirect (301)</li>
                  <li>HSTS header with 2-year max-age</li>
                  <li>7 sub-sitemaps covering ~655 URLs</li>
                </ul>
              </div>
              <div>
                <div className="seo-list-heading seo-list-heading--bad">Issues Found</div>
                <ul className="seo-list-bad">
                  <li>GPU dropdown is JS-only &mdash; no crawlable links to /gpus, /gpus-spot, /gpu-baremetal, /serverless</li>
                  <li>2 orphan pages in sitemap but not linked from site</li>
                  <li>Model sub-category pages only reachable via JS tabs</li>
                  <li>415 docs pages are 3+ clicks deep</li>
                  <li>Blog on separate subdomain &mdash; doesn&apos;t pass link authority to main domain</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="seo-audit-detail">
            <h4>4. Content Gaps vs Competitors</h4>
            <div className="seo-table-wrap">
              <table className="seo-table">
                <thead>
                  <tr>
                    <th>Content Type</th>
                    <th>Novita</th>
                    <th>Together.ai</th>
                    <th>Replicate</th>
                    <th>Gap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Main-site pages</td>
                    <td>~20</td>
                    <td>~568</td>
                    <td>~6,300+</td>
                    <td className="seo-status--bad">10&ndash;300x</td>
                  </tr>
                  <tr>
                    <td>Model landing pages</td>
                    <td>0</td>
                    <td>222</td>
                    <td>5,867</td>
                    <td className="seo-status--bad">Critical</td>
                  </tr>
                  <tr>
                    <td>&ldquo;/vs-X&rdquo; comparison pages</td>
                    <td>0</td>
                    <td>Several</td>
                    <td>0</td>
                    <td className="seo-status--warn">High</td>
                  </tr>
                  <tr>
                    <td>OpenAI alternative page</td>
                    <td>0</td>
                    <td>Yes</td>
                    <td>0</td>
                    <td className="seo-status--warn">High</td>
                  </tr>
                  <tr>
                    <td>Model provider pages</td>
                    <td>0</td>
                    <td>54</td>
                    <td>0</td>
                    <td className="seo-status--warn">High</td>
                  </tr>
                  <tr>
                    <td>Deploy/quickstart guides</td>
                    <td>0</td>
                    <td>9</td>
                    <td>Many</td>
                    <td className="seo-status--warn">Medium</td>
                  </tr>
                  <tr>
                    <td>Use-case/solution pages</td>
                    <td>0</td>
                    <td>1</td>
                    <td>39</td>
                    <td className="seo-status--warn">Medium</td>
                  </tr>
                  <tr>
                    <td>Enterprise page</td>
                    <td>404</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td className="seo-status--warn">Medium</td>
                  </tr>
                  <tr>
                    <td>Customer case studies</td>
                    <td>0</td>
                    <td>18</td>
                    <td>Some</td>
                    <td className="seo-status--warn">Medium</td>
                  </tr>
                  <tr>
                    <td>Cookbooks/tutorials</td>
                    <td>0</td>
                    <td>10+</td>
                    <td>30+</td>
                    <td className="seo-status--warn">Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="seo-audit-detail">
            <h4>5. Schema Markup</h4>
            <p className="seo-audit-note" style={{ marginBottom: 12, marginTop: 0 }}>
              Effectively zero structured data. The only JSON-LD found is auto-generated by Mintlify on the docs page and credits Mintlify, not Novita AI.
            </p>
            <div className="seo-table-wrap">
              <table className="seo-table">
                <thead>
                  <tr>
                    <th>Schema Type</th>
                    <th>Status</th>
                    <th>Impact if Added</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Organization</td>
                    <td className="seo-status--bad">Missing</td>
                    <td>Knowledge panel in SERPs</td>
                  </tr>
                  <tr>
                    <td>WebSite</td>
                    <td className="seo-status--bad">Missing</td>
                    <td>Sitelinks search box</td>
                  </tr>
                  <tr>
                    <td>SoftwareApplication</td>
                    <td className="seo-status--bad">Missing</td>
                    <td>Software app rich results</td>
                  </tr>
                  <tr>
                    <td>Product</td>
                    <td className="seo-status--bad">Missing</td>
                    <td>Product rich results with pricing</td>
                  </tr>
                  <tr>
                    <td>FAQPage</td>
                    <td className="seo-status--bad">Missing</td>
                    <td>FAQ rich snippets &mdash; doubles SERP visibility</td>
                  </tr>
                  <tr>
                    <td>BreadcrumbList</td>
                    <td className="seo-status--bad">Missing</td>
                    <td>Breadcrumb trail in SERPs</td>
                  </tr>
                  <tr>
                    <td>Service + Offer</td>
                    <td className="seo-status--bad">Missing</td>
                    <td>Service listings</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="seo-overview">
          <div className="seo-score">
            <span className="seo-score-badge seo-score--red">Needs Work</span>
            <p>
              Solid technical foundations (HTTPS, canonicals, sitemaps) but major gaps
              in on-page optimization, page speed, content depth, and structured data.
            </p>
          </div>
          <div className="seo-metrics">
            <div className="seo-metric">
              <span className="seo-metric-value seo-metric--red">52</span>
              <span className="seo-metric-label">Mobile Score</span>
            </div>
            <div className="seo-metric">
              <span className="seo-metric-value seo-metric--red">3.3s</span>
              <span className="seo-metric-label">LCP</span>
            </div>
            <div className="seo-metric">
              <span className="seo-metric-value seo-metric--green">0</span>
              <span className="seo-metric-label">CLS</span>
            </div>
            <div className="seo-metric">
              <span className="seo-metric-value seo-metric--red">~20</span>
              <span className="seo-metric-label">Pages (vs 6K+)</span>
            </div>
          </div>
        </div>

        <div className="seo-fixes">
          <div className="seo-fix">
            <div className="seo-fix-rank">#1</div>
            <div className="seo-fix-body">
              <div className="seo-fix-header">
                <h4>Launch Model-Specific Landing Pages</h4>
                <span className="seo-fix-impact seo-fix-impact--high">Very High Impact</span>
              </div>
              <p>
                200+ models but 0 dedicated pages. Together.ai has 222, Replicate has 5,867.
                Templatize and generate at scale for &ldquo;deepseek api&rdquo;, &ldquo;qwen api&rdquo; keywords.
              </p>
              <span className="seo-fix-estimate">+5K&ndash;50K organic visits/mo</span>
            </div>
          </div>

          <div className="seo-fix">
            <div className="seo-fix-rank">#2</div>
            <div className="seo-fix-body">
              <div className="seo-fix-header">
                <h4>Fix Broken Title Tags</h4>
                <span className="seo-fix-impact seo-fix-impact--high">High Impact</span>
              </div>
              <p>
                Client-side JS overwrites &lt;title&gt; on /models and /pricing with random model
                names (&ldquo;MoonshotAI&rdquo;, &ldquo;Mistral&rdquo;). Google sees nonsensical titles.
              </p>
              <span className="seo-fix-estimate">+20&ndash;40% CTR &middot; Fix in 1&ndash;2 days</span>
            </div>
          </div>

          <div className="seo-fix">
            <div className="seo-fix-rank">#3</div>
            <div className="seo-fix-body">
              <div className="seo-fix-header">
                <h4>Add Schema Markup</h4>
                <span className="seo-fix-impact seo-fix-impact--high">High Impact</span>
              </div>
              <p>
                Zero structured data. FAQ page has 20+ Q&amp;As with no markup &mdash; adding
                FAQPage schema doubles SERP visibility. Also missing Organization &amp; Product schemas.
              </p>
              <span className="seo-fix-estimate">+10&ndash;25% CTR &middot; Fix in 1&ndash;3 days</span>
            </div>
          </div>

          <div className="seo-fix">
            <div className="seo-fix-rank">#4</div>
            <div className="seo-fix-body">
              <div className="seo-fix-header">
                <h4>Create &ldquo;/vs&rdquo; Comparison Pages</h4>
                <span className="seo-fix-impact seo-fix-impact--medium">High Impact</span>
              </div>
              <p>
                No &ldquo;openai alternative&rdquo; or comparison pages. Build /vs-openai,
                /vs-together-ai, /vs-replicate to capture bottom-of-funnel searchers.
              </p>
              <span className="seo-fix-estimate">+1K&ndash;10K organic visits/mo</span>
            </div>
          </div>

          <div className="seo-fix">
            <div className="seo-fix-rank">#5</div>
            <div className="seo-fix-body">
              <div className="seo-fix-header">
                <h4>Fix Core Web Vitals</h4>
                <span className="seo-fix-impact seo-fix-impact--medium">Medium-High</span>
              </div>
              <p>
                Mobile performance 52/100. 54&ndash;65s of JS main-thread work. Code-split bundles,
                remove 76 KiB unused CSS, add font-display: swap.
              </p>
              <span className="seo-fix-estimate">+5&ndash;15% ranking improvement</span>
            </div>
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

export default function MarketingAgentPage() {
  const [active, setActive] = useState(null)
  const activeUc = active ? USE_CASES.find((u) => u.id === active) : null

  return (
    <>
      <PageHero
        tag="Use Case"
        title="Build a Marketing Agent"
        subtitle="Turn Hermes into a full-stack marketing teammate with marketingskills"
      />

      {/* ── Intro ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Overview</span>
          <h2>What is marketingskills?</h2>
          <p className="section-lead">
            <a href="https://github.com/coreyhaines31/marketingskills" target="_blank" rel="noopener noreferrer">
              <strong>marketingskills</strong>
            </a>{' '}
            is an open-source skill pack that gives Hermes Agent deep expertise
            in marketing &mdash; from copywriting and SEO to conversion
            optimization and paid ads. Install once, and every marketing task
            gets handled by a specialist.
          </p>
        </div>
      </section>

      {/* ── Skills Overview ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Capabilities</span>
          <h2>What&apos;s Included</h2>
          <p className="section-lead">
            The skill pack covers 6 key marketing areas with 30+ specialized skills.
          </p>

          <div className="skill-category">
            <h3>Conversion Optimization</h3>
            <div className="skill-tags">
              <span className="skill-tag">page-cro</span>
              <span className="skill-tag">signup-flow-cro</span>
              <span className="skill-tag">onboarding-cro</span>
              <span className="skill-tag">form-cro</span>
              <span className="skill-tag">popup-cro</span>
              <span className="skill-tag">paywall-upgrade-cro</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Content &amp; Copy</h3>
            <div className="skill-tags">
              <span className="skill-tag">copywriting</span>
              <span className="skill-tag">copy-editing</span>
              <span className="skill-tag">cold-email</span>
              <span className="skill-tag">email-sequence</span>
              <span className="skill-tag">social-content</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>SEO &amp; Discovery</h3>
            <div className="skill-tags">
              <span className="skill-tag">seo-audit</span>
              <span className="skill-tag">ai-seo</span>
              <span className="skill-tag">programmatic-seo</span>
              <span className="skill-tag">site-architecture</span>
              <span className="skill-tag">competitor-alternatives</span>
              <span className="skill-tag">schema-markup</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Paid &amp; Distribution</h3>
            <div className="skill-tags">
              <span className="skill-tag">paid-ads</span>
              <span className="skill-tag">ad-creative</span>
              <span className="skill-tag">social-content</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Measurement</h3>
            <div className="skill-tags">
              <span className="skill-tag">analytics-tracking</span>
              <span className="skill-tag">ab-test-setup</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Strategy &amp; Growth</h3>
            <div className="skill-tags">
              <span className="skill-tag">marketing-ideas</span>
              <span className="skill-tag">marketing-psychology</span>
              <span className="skill-tag">launch-strategy</span>
              <span className="skill-tag">pricing-strategy</span>
              <span className="skill-tag">churn-prevention</span>
              <span className="skill-tag">referral-program</span>
              <span className="skill-tag">free-tool-strategy</span>
              <span className="skill-tag">revops</span>
              <span className="skill-tag">sales-enablement</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Setup ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Setup</span>
          <h2>Install &amp; Configure</h2>
          <p className="section-lead">
            Make sure you have{' '}
            <a href="/#tutorial" className="section-link" style={{ marginBottom: 0, display: 'inline' }}>
              Hermes Agent installed
            </a>{' '}
            first, then follow these steps.
          </p>

          <div className="steps">
            <Step number={1} title="Start Hermes and Give It the Prompt" last>
              <p>
                Launch Hermes and paste the following prompt. The agent will
                install the skill pack and configure itself automatically:
              </p>
              <CodeBlock
                language="text"
                code={`You are my marketing assistant. First install the
marketingskills skill pack from
https://github.com/coreyhaines31/marketingskills,
then help me with my marketing tasks — I'll describe
what I need, and you pick the best skill and walk me
through it step by step.`}
              />
              <figure className="step-screenshot">
                <img src="/images/marketing_agent/marketing-agent-installskills-sucess.png" alt="Marketing skills installed successfully" />
              </figure>
            </Step>
          </div>
        </div>
      </section>

      {/* ── Try It: Use Case Cards ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Try It Now</span>
          <h2>Create Content for Novita AI</h2>
          <p className="section-lead">
            Let&apos;s put the skills to work &mdash; click any card below to see
            the prompt and agent output.
          </p>

          <div className="uc-grid">
            {USE_CASES.map((uc) => (
              <button
                key={uc.id}
                className="uc-card"
                onClick={() => setActive(uc.id)}
              >
                <div className="uc-card-icon">{uc.icon}</div>
                <div className="uc-card-label">{uc.label}</div>
                <h3>{uc.title}</h3>
                <p>{uc.summary}</p>
                <span className="uc-card-link">View prompt &amp; output &rarr;</span>
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
