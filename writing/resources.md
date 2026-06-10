# Resources

Links and notes to revisit for posts, portfolio notes, and agentic engineering experiments.

## Anthropic / Claude / agentic development

- Anthropic — Claude Code product page  
  Signal: agentic coding as a real product workflow: repo understanding, file edits, tests, git, CLI tools, CI failures, enterprise controls.

- Anthropic Engineering — Advanced tool use  
  Signal: tool discovery, programmatic tool calling, examples, and large tool libraries.

- Anthropic Engineering — How we contain Claude across products  
  Signal: sandboxing, permissions, blast-radius control, and containment as product/engineering concerns.

- Anthropic Candidate AI Guidance  
  Signal: thoughtful AI collaboration, transparency, and using AI to refine rather than replace judgment.

## Agent orchestration / inspiration

- ExoMonad — https://recursion.wtf/posts/exomonad/  
  Signal: heterogeneous LLM agent swarms, token arbitrage, tree of worktrees, bidirectional messaging, and session forking.

- ExoMonad repo — https://github.com/tidepool-heavy-industries/exomonad  
  Signal: heavy implementation, but portable ideas.

- Commons origin notes — `../aproject/commons/docs/origin.md`  
  Signal: why a lightweight TypeScript/Pi/Deciduous implementation made sense instead of adopting ExoMonad directly.

## Internal project references

- Commons shared agents  
  `../aproject/commons/shared/agents/`  
  Signal: orchestrator, scout, builder, reviewer roles.

- Commons Deciduous graph  
  Signal: durable decision tracking for goals, rejected options, dead ends, outcomes, and workflow evolution.

- Career-Ops post drafts  
  `../career-ops/data/networking/POSTS-CLIPBOARD.md`  
  Signal: older social-post drafts, now consolidated into `post-drafts.md`.

- Anthropic application notes  
  `../career-ops/output/companies/anthropic-fullstack/agentic-development-notes.md`  
  Signal: raw thesis from Anthropic application preparation, now consolidated into `agentic-engineering-ideas.md`.

## Topics to research next

- eval design for coding agents
- comparing context changes to outcomes
- code review burden as an eval signal
- complexity added over time by AI-generated code
- TDD + adversarial agent workflows
- garbage-collection / no-bloat review passes
- context pruning and branch/tree rollback
- model routing by task type and cost
