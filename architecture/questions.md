---
layout: base.njk
title: Questions
eleventyNavigation:
  key: Questions
  parent: Architecture
  order: 3
eleventyExcludeFromCollections: false
---

### High-leverage questions to pressure-test the roadmap

#### Vision & product-market fit

1. What specific pain points will each stage solve for early adopters, and how will we measure that we solved them?
2. Which user segments (e.g. power emailers, solo founders, creatives) give the strongest pull today—and how might they change by Stage 2 or 3?
3. How will we capture feedback loops fast enough to steer UX before we invest in heavier back-end refactors?

#### UX & interaction design

4. What “weird” failure cases in the conversational shell could erode trust (mis-summaries, timing mishaps, false urgency)?
5. How can users override, mute, or audit proactive actions at every stage?
6. What minimum visual tooling (dashboards, logs) is required once we add contextual overlays and multimodal data?
7. Where does the assistant need a physical presence (menu bar, mobile widget) versus being purely chat-based?

#### Data & privacy

8. What is the *least* amount of personal data we can ingest at Stage 0.5 while still providing value?
9. How will we let users inspect, edit, or delete embeddings and long-term memories?
10. At what stage do we need end-to-end encryption of personal vaults, and what threat models are we protecting against?

#### Architecture choices

11. Flask vs Django: What plugins or admin capabilities might we miss if we stay on Flask past Stage 1?
12. Can one Postgres instance stay authoritative for both transactional data and pgvector, or do we need a read replica strategy by Stage 2?
13. Where do we draw the boundary between Python orchestration and Rust/C++ kernels—file-level, class-level, or ABI boundary?
14. How will we version and migrate memory schemas without breaking older kernels or embeddings?

#### Cost & scalability

15. What unit-economics metric (e.g. *cost per proactive message*, *cost per thousand tokens retrieved*) will alert us when to optimise or switch providers?
16. How do API pricing changes from OpenAI/Anthropic affect Stage 0.5 versus Stage 3 economics?
17. What’s the ceiling of Fly.io for GPU bursting, and when should we move inference to a dedicated cloud?

#### Performance & hardware path

18. Which kernels are most likely to hit CPU bottlenecks first: spatial pooling, temporal memory, or vector search?
19. What profiling tools will we standardise on (Py-Spy, perf, nvprof) to decide when to rewrite in Rust or target CUDA/Metal?
20. How will we benchmark “acceptable latency” for on-device NPU inference across iPhone, Mac, and generic ARM laptops?
21. What power-budget targets must a future ASIC beat to justify tape-out (e.g. < 50 mW for continual learning on mobile)?

#### Reliability & ops

22. What is the minimum observability stack (logs, traces, metrics) we need by Stage 1 to debug proactive actions gone wrong?
23. How will we replay user interactions safely in staging to diagnose bugs without leaking private content?
24. What is our disaster-recovery story once the personal vault spans multiple devices—who is the final source of truth?

#### Security & compliance

25. At what point do we need SOC 2 / GDPR compliance, and what groundwork can we lay in Stage 0?
26. How will we authenticate external agents (other LLMs, third-party services) that negotiate on the user’s behalf?

#### Team & process

27. What skill sets (Rust performance engineer, GPU kernel specialist, FPGA prototyper) must be hired *before* each major rewrite?
28. How will we keep documentation of the evolving kernel API in sync with fast prototype iterations?
29. What experiments are safe to ship to production users versus those that require a gated beta cohort?

#### Long-term research bets

30. Which HTM concepts (sparse distributed representations, sensor-motor loops) give the biggest practical gain—and how will we validate them early with ablation studies?
31. What indicators would convince us *not* to pursue custom silicon and instead double-down on commodity hardware?
32. How could advances in open-weight multimodal models over the next 2 years collapse or reorder our staged plan?

Use these prompts as a checklist during planning sessions or design reviews; answering them crisply will expose hidden risks and inform the timing of each technical leap.
