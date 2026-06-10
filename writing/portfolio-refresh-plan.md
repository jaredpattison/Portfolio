# Anthropic Portfolio Refresh Plan

Goal: update `jaredpattison.com` quickly enough to support the Anthropic application without turning this into a full redesign.

## Constraint
Time matters. Do **not** rebuild the whole site before applying. Ship a credible portfolio refresh in one focused pass, then iterate later.

## Recommended timeline

### Pass 1: 60-90 minutes, application-support version
Ship only the changes that stop the site from underselling Jared.

1. Replace the homepage positioning.
2. Add 3 current featured items.
3. Move old bootcamp projects into an Archive section.
4. Add a short Writing / Notes section with 1-2 planned post titles and a few favorite resources.
5. Deploy.

### Pass 2: after application submission
Add fuller case studies, screenshots, diagrams, and real blog posts.

---

## Current problem
The current site positions Jared as:

> Full-Stack JavaScript Software Developer ... coding bootcamp ... old bootcamp projects

That anchors too junior for Anthropic and Senior SWE roles. The new site should position Jared as:

> Senior Software Engineer with OCI identity, full-stack product, developer tooling, observability, and agentic development experience.

---

## Target homepage structure

### 1. Hero

Suggested copy:

> Senior Software Engineer building identity systems, developer tools, and agentic development workflows.
>
> I spent 6+ years at Oracle Cloud Infrastructure building customer-facing identity product surfaces, Java APIs, OAuth/session-management workflows, SDK tooling, and observability for production cloud systems. Lately I have been exploring how agentic coding workflows can be made more reliable through validation gates, retry loops, output scoring, and clear trust boundaries.

Primary links:
- Resume PDF
- GitHub
- LinkedIn
- utills.dev
- Email

Optional short tag line:

> React, TypeScript, Java, OAuth, observability, developer experience, and practical AI-assisted engineering.

### 2. Featured Work

Show these above the fold or immediately after hero.

#### A. Multi-Agent LLM System

Title:

> Multi-Agent Development Workflow

Short card copy:

> A personal agentic coding system that turns product requirements into structured development workflows: PRD parsing, task decomposition, dependency graphs, role-specialized agents, validation gates, retry loops, and output scoring.

Emphasize:
- agent orchestration
- acceptance criteria generation
- graph/dependency modeling
- validation gates
- retry loops
- output scoring
- lessons learned about where human review belongs

CTA:
- `Case study coming soon` or `Read notes`
- Link to GitHub only if repo is public and presentable

#### B. utills.dev

Title:

> utills.dev - Private Browser-based Developer Utilities

Short card copy:

> A live React/TypeScript developer tools app for JSON, JWT, Base64, regex, hashes, URL encoding, and character encoding workflows. Standard tools run locally in the browser, so sensitive payloads and tokens do not need to be uploaded.

Emphasize:
- live product: https://utills.dev/
- React / TypeScript / Vite
- privacy-first browser-only utilities
- JWT/security-adjacent workflows
- guides/content for developer education
- fast, focused UX

CTA:
- `Open app`
- `Read guides`

#### C. OCI Identity Case Study

Title:

> OCI Identity: Enterprise Admin Surfaces, APIs, and Observability

Short card copy:

> Sanitized case study from Oracle Cloud Infrastructure work across customer-facing identity console features, Java REST APIs, OAuth/session workflows, SDK generation, authentication observability, and canary reliability improvements.

Emphasize:
- React components/hooks for Identity Console
- Dynamic Groups, Policies, Reports, Applications
- metadata-driven reports UI generated from backend templates
- Java REST endpoint for MySessions visibility/session workflows
- authentication observability for high-scale identity platform
- canary refactor reducing alert noise by 50%
- SDK generation and examples for enterprise developers

CTA:
- `Read case study` if page exists
- Otherwise include as an expanded card without separate page

#### D. Sheervue, optional lower priority

Only include if it can be described cleanly. Keep below the three above.

Suggested framing:

> Early-stage web app for [domain/problem]. Current web app is live but unreleased; included as an in-progress product build.

Do not oversell it if the UI is not impressive yet.

---

## Archive old projects

Move bootcamp-era projects under:

> Archive: Earlier React / JavaScript Projects

Intro copy:

> Earlier projects from my transition into software engineering. Kept here as a record of progression; current work is featured above.

This keeps the React/Sass signal but prevents old projects from defining Jared's current level.

---

## Writing / Notes section

Add a lightweight section now, even before full posts exist.

Title:

> Notes on Agentic Development

Intro copy:

> I am writing short notes on what practical agentic coding has taught me: where agents help, where they fail, and how validation, tests, permissions, and human review make the difference between impressive demos and reliable workflows.

Initial planned posts:

1. **What Agentic Coding Taught Me About Trust Boundaries**
   - agents need constrained permissions
   - autonomy is useful only when failures are contained
   - identity/security thinking applies directly to AI tooling

2. **Validation Gates Beat Vibes**
   - acceptance criteria
   - tests and lint/typecheck gates
   - retry loops with limits
   - output scoring and review checkpoints

3. **Designing Developer Tools for Humans and Agents**
   - predictable interfaces
   - CLI-friendly workflows
   - examples and docs as part of the product
   - structured outputs and clear failure states

If there is not enough time to write full posts, add these as `Coming soon` cards or short notes.

---

## Favorite resources section

Add a compact `Reading / Watching` section. Each link should have one sentence on why it matters. Do not create a giant link dump.

Suggested categories:

### Anthropic / Claude / agentic development
- Anthropic: Claude Code product page
- Anthropic Engineering: Advanced tool use
- Anthropic Engineering: How we contain Claude across products
- Anthropic Candidate AI Guidance

### Developer tools / DX
- Good docs/examples/resources Jared actually likes
- CLI/productivity talks if relevant

### AI safety / reliability / evals
- Practical resources on evals, tool use, containment, and agent failure modes

Important: only include resources Jared genuinely knows or can speak about in interview.

---

## Anthropic-specific application advantage

The portfolio should make these three teams obvious fits:

1. **Enterprise Foundations**
   - identity and permissions
   - security/compliance controls
   - admin analytics
   - enterprise adoption blockers

2. **Developer Experience**
   - console, SDKs, docs, observability
   - developer confidence and trust
   - agentic development for human and AI developers

3. **Public Sector**
   - regulated cloud experience
   - access boundaries
   - on-call discipline
   - critical authentication systems
   - government-access-sensitive environments, if accurate and shareable

---

## Copy blocks ready to paste

### Short bio

Senior Software Engineer with 6+ years at Oracle Cloud Infrastructure building identity, authentication, developer tooling, and customer-facing cloud product surfaces. I work across React, TypeScript, Java APIs, OAuth, observability, and production reliability. I am especially interested in practical AI-assisted development: agent workflows that are constrained, evaluated, and useful in real engineering systems.

### Longer about

I started in technical program management before moving fully into software engineering, which shaped how I work: I care about clear requirements, tradeoffs, delivery constraints, and whether a system actually helps the people using it. At Oracle Cloud Infrastructure, I worked across Identity Console features, OAuth/session-management APIs, SDK workflows, and authentication observability. That mix gave me a strong appreciation for enterprise trust boundaries: permissions, auditability, reliability, and operational discipline.

Recently I have been building and studying agentic development workflows. The interesting part is not just getting an AI model to produce code. It is designing the surrounding system: decomposition, acceptance criteria, tool access, validation gates, retry limits, output scoring, and human review. That is the layer where engineering judgment still matters most.

### Portfolio meta description

Senior Software Engineer focused on identity systems, full-stack product engineering, developer tools, and practical agentic development workflows.

---

## Implementation notes for existing repo

The repo appears to be a React/Sass portfolio app. Likely quick path:

1. Find content JSON files under `src`.
2. Update intro/about copy first.
3. Update project data to feature current projects.
4. Add an Archive section if the existing `Projects` component supports categories; otherwise add archive labels in project titles/descriptions.
5. Add a simple Writing/Notes component or reuse project-card styling for note cards.
6. Run:

```bash
npm start
npm run build
```

7. Deploy using the repo's existing deployment path.

---

## Do-not-do list

- Do not spend hours redesigning CSS.
- Do not lead with bootcamp.
- Do not make unfinished projects look more mature than they are.
- Do not publish confidential OCI details.
- Do not mention SCIF/classified details unless the wording is accurate, non-sensitive, and allowed.
- Do not delay the Anthropic application waiting for a perfect portfolio.

## Definition of done for application support

Good enough before applying:

- Homepage no longer reads junior/bootcamp-first.
- utills.dev is featured.
- Multi-Agent LLM System is featured.
- OCI Identity case study or card is visible.
- Old projects are clearly archived.
- Agentic development notes/resources section exists, even if lightweight.
- Site deploys successfully.
