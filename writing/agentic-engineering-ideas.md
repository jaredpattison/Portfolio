# Agentic Engineering Ideas

## Core view

Agents can create high-quality, elegant code when pointed in the right direction. The same agents can go completely off the rails when direction, context, constraints, or feedback are weak.

The interesting problem is not making a loop run. Loops are easy. The hard part is the harness around the loop: planning, context management, validation, adversarial review, architectural constraints, and human checkpoints.

## Local competence, global myopia

The most common failure mode is local competence with global myopia. Agents can focus too tightly on the task at hand and miss the larger system shape.

Example: a bug appears, and the agent makes sure that exact bug never appears again by checking for it three times. The code may look careful, but the system accumulates complexity. Over time this creates wrappers, fallbacks, duplicated checks, special cases, and shallow abstractions.

This is why a garbage-collection / complexity-review skill matters. It should probably run periodically, not only after obvious failures.

## What helps

- Define architecture and code-structure rules before implementation.
- Define scope during planning, including what not to change.
- Use TDD and adversarial review together: one role writes or anchors tests, another implements, another reviews.
- Keep a long-haul orchestrator responsible for context and direction.
- Use disposable workers such as scout, builder, fixer, and reviewer.
- Let workers return compact evidence and outcomes, not their full mental history.
- Use branch/tree workflows to explore, summarize useful findings, and discard bad paths without poisoning the main context.
- Use durable decision tracking only for non-obvious and impactful context: decisions, rejected options, blockers, dead ends, architecture/test-seam decisions, and outcomes that should affect future work.

## Lessons from experiments

- Early idea-evaluation repo helped flesh out and prioritize ideas.
- Adversarial loops with handoffs, tasks, and post-hooks showed that loops can work but only for a few steps without human input.
- Tested different loops, including a personal harness, Ralph loop, and Attractor. They all worked somewhat.
- Sustained loop performance depends heavily on planning and feedback.
- Spec-driven development was too flaky when treated as a handoff from spec to implementation. You only get out what you put into planning and review.
- BMAD-style specification can help create structure, but it does not replace feedback loops or context stewardship.
- Context management is one of the central problems.
- Pi's lightweight context and tree functionality are valuable because exploratory work can be discarded or summarized instead of dragging irrelevant context forward.
- Cost/model routing was an initial motivation for agent teams, but the bigger benefit became context management.

## Current architecture preference

Long-haul orchestrator context + disposable specialist workers + vertical slices + verify-first workflow + TDD/adversarial review + periodic complexity garbage collection + durable decision graph.

## Commons origin / orchestration ideas

Commons was prompted by reviewing ExoMonad during Shellpad `/run` orchestration work.

Useful ExoMonad ideas:

- token arbitrage: route tasks to the cheapest model that can do them well
- tree of worktrees: each agent gets an isolated git worktree, nested recursively
- bidirectional messaging across models
- context inheritance for spawned subtrees

Commons direction:

- lightweight TypeScript orchestration instead of heavy Nix/Haskell/Zellij dependency stack
- unified message bus across Claude, Gemini, Codex-style agents
- worktree manager for isolated agent work
- model router for role-to-model mapping
- durable decision tracking for progress, blockers, decisions, and confidence
- orchestrator that reads specs, decomposes acceptance criteria, spawns agents, and monitors work

Key discovery from Commons research:

> The useful part of agentic coding is not just the model. It is the control plane around the model: routing, isolation, messaging, state, validation, and context stewardship.

## Current gap / next area to study

Written evals are the obvious missing piece. The current workflow has validation gates, TDD, reviewer gates, output scoring, and durable decision tracking, but not enough formal eval design yet.

Portfolio angle:

> I am starting to treat evals as the bridge between agent workflows and engineering reliability: what does the agent need to know, what output should count as good, what failure modes matter, and how do we compare context/planning changes against code review quality, test failures, deployment errors, and complexity added over time?

Potential future post:

## From TDD to Agent Evals

- TDD anchors expected behavior for code.
- Reviewer gates catch architectural and complexity problems.
- Evals can test whether agent context, prompts, and role structure improve outcomes over repeated tasks.
- Useful evals should measure more than "did it compile?": complexity added, defects caught, unnecessary abstractions, missed requirements, and review burden.

## Resume / portfolio translation

This is not just "I use AI tools." The stronger claim is:

> I have been experimenting with agentic development as a systems problem: how to structure context, validation, adversarial feedback, architectural constraints, and human review so agents can produce useful code without accumulating hidden complexity.

Potential project line:

> Built and tested agentic development workflows using orchestrator/scout/builder/reviewer roles, validation gates, TDD/adversarial review, context pruning, and durable decision tracking to improve reliability and control complexity in AI-assisted coding.

## Possible long-form posts

1. Loops Are Easy; Harnesses Are Hard
2. Local Competence, Global Myopia
3. From TDD to Agent Evals
4. Durable Context Should Be Non-Obvious and Impactful
5. Why Agentic Workflows Need Garbage Collection
6. Designing Developer Tools for Humans and Agents
7. What Spec-Driven Development Got Wrong for Me
8. Context Stewardship Is the Real Agentic Skill
