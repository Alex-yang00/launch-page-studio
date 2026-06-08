# Launch Page Studio

An open-source collection of vibe-coded landing pages, experiments, and campaign microsites.

Each project folder is a standalone source. Most projects can be opened, edited, and deployed from their own folder.

## Hackathons

| # | Project | Type | Source Folder | Live Demo |
|---|---|---|---|---|
| 001 | Harbor Agent Benchmark Novita Sandbox | Hackathon landing page | [`hackathons/001-harbor-agent-benchmark-novita-sandbox`](./hackathons/001-harbor-agent-benchmark-novita-sandbox) | https://outputs-orpin-beta.vercel.app |

## Tutorials

| # | Project | Type | Source Folder | Live Demo |
|---|---|---|---|---|
| 001 | Awesome Hermes Tutorial | Tutorial site | [`tutorials/001-awesome-hermes-tutorial`](./tutorials/001-awesome-hermes-tutorial) | TBD |

## Design Assets

Shared design references and extracted brand tokens live in [`design`](./design). These are optional inputs for future pages rather than runtime dependencies.

## Workflow

Add each new project as its own folder under the right category:

```txt
hackathons/
  001-harbor-agent-benchmark-novita-sandbox/
tutorials/
  001-awesome-hermes-tutorial/
```

For Vercel deployment, create one Vercel project per standalone project and set the project Root Directory to that folder.
