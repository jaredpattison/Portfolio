# Post Drafts

Short public drafts around agentic coding. Keep them plain. Build log, not thought leadership. One concrete observation + one question.

---

## 1) The last 10% is the work

The first 90% of AI-assisted coding feels easy: scaffold, implement, even tests sometimes.

The last 10% is still iteration: weird edge cases, build failures, flaky tests, integration details, docs.

AI helps, but you still need a tight feedback loop.

Question: What part of “release-ready” takes you the longest right now: tests, integration, CI, or debugging?

---

## 2) Prompt engineering churn vs real leverage

Prompt tricks get obsolete fast.

What seems to hold up is context management: keeping the model grounded in the right files, constraints, and acceptance criteria.

Question: In your workflow, what’s more important than the exact prompt: context selection, verification gates, or iteration speed?

---

## 3) Agents need state, not vibes

Multi-step work breaks down when you don’t track state.

A checklist isn’t enough once you have retries, partial progress, or multiple roles.

You need explicit transitions, checkpoints, and a place to store decisions.

Question: If you were building an agent workflow, what’s the first reliability feature you’d add: checkpoints, budgets, or explicit state transitions?

---

## 4) Automation can become procrastination

I keep catching myself trying to automate the workflow instead of shipping.

Sometimes the best automation is just a saved checklist + a couple scripts.

Question: Where’s your line between useful automation and automation procrastination?

---

## 5) Verification beats generation

The bottleneck isn’t producing code anymore.

It’s verifying behavior: tests, types, lint, CI, and running the thing end-to-end.

Question: What’s your non-negotiable gate for AI-assisted code before merge: tests, types, lint, or manual review?

---

## 6) Fast feedback loops are the real superpower

Agents are only as good as the loop.

Short loops — run tests, check types, small diffs — beat long loops: big PRs, manual QA, vague review.

Question: What’s one thing you’ve done that made your feedback loop meaningfully faster?

---

## 7) One agent vs roles

I’ve had better results splitting roles — scout, builder, reviewer — than asking one model to do everything.

It reduces self-justifying output and makes verification more natural.

Question: Have you tried role-splitting for AI-assisted coding, and did it help or just add overhead?

---

## 8) The boring stuff still matters

Most real time goes into the boring parts: error handling, edge cases, migrations, backwards compatibility, monitoring.

AI can help, but it doesn’t remove the need to think clearly about failure modes.

Question: What’s the most common failure mode you see when AI writes “mostly correct” code?

---

## 9) Tooling half-life

I try not to invest too much in heavy agent tooling that will be obsolete after the next model release.

Canned prompt packs especially feel like they expire quickly.

The durable pieces seem to be tests, checklists, explicit state, and reusable validation.

Question: What’s the most durable AI workflow artifact you’ve found: tests, checklists, eval harnesses, or reusable tooling?

---

## 10) Build vs reuse

I’m trying to reuse what’s already available instead of building yet another wrapper.

But sometimes the wrapper is the product — or the workflow is the differentiator.

Question: How do you decide when to build a custom workflow vs adopt an existing tool/framework?

---

## 11) Refining AI workflow

One pattern I like: use one session to refine the system, then fresh sessions to test whether the changes actually improve behavior.

If the same old failure mode comes back, the workflow didn’t really improve.

Question: How do you test whether your AI workflow is better, instead of just different?

---

## 12) Local competence, global myopia

A common agent failure mode: local competence, global myopia.

The agent fixes the bug, but adds three checks, a wrapper, and a fallback. The immediate issue disappears. The system gets worse.

This is why I’m increasingly interested in periodic complexity review for AI-assisted code.

Question: What’s the worst kind of complexity AI tends to add in your codebase?

---

## 13) Durable context should be rare

Not every observation belongs in long-term memory.

For agent workflows, durable context should be non-obvious and impactful: real decisions, rejected paths, blockers, dead ends, architecture constraints, test-seam choices.

Everything else becomes context sludge.

Question: What do you think agents should remember across sessions — and what should they forget?

---

## 14) From TDD to agent evals

TDD helps anchor expected behavior for code.

But agent workflows need another layer: evals for the workflow itself.

Did the agent miss requirements? Add complexity? Need too much review? Choose the wrong files? Ignore architecture?

That’s the eval space I want to explore next.

Question: If you were evaluating an AI coding agent, what would you measure beyond “did the tests pass?”

---

## Notes / angle options

- Keep tone: build log, not thought leadership.
- Prefer small specifics: tests, CI, flaky e2e, context windows, diffs, review burden.
- Avoid: agents will replace developers, revolution, game changer, 10x.
- Good pattern: one failure mode + one concrete mitigation.
