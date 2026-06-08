# Vibe Landing Lab

An open-source collection of vibe-coded landing pages, experiments, and campaign microsites.

Each folder under `landings/` is a standalone landing page source. Most projects can be opened, edited, and deployed from their own folder.

## Landings

| # | Project | Source Folder | Live Demo | Original Repo |
|---|---|---|---|---|
| 001 | Harbor Agent Benchmark Novita Sandbox | [`landings/001-harbor-agent-benchmark-novita-sandbox`](./landings/001-harbor-agent-benchmark-novita-sandbox) | https://outputs-orpin-beta.vercel.app | https://github.com/Alex-yang00/harbor-agent-benchmark-novita-sandbox |

## Workflow

Add each new landing page as its own folder:

```txt
landings/
  001-harbor-agent-benchmark-novita-sandbox/
  002-next-landing/
```

For Vercel deployment, create one Vercel project per standalone landing page and set the project Root Directory to the landing folder.
