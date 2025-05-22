---
layout: base.njk
title: Hardware
eleventyNavigation:
  key: Roadmap
  parent: Architecture
  order: 1
eleventyExcludeFromCollections: false
---

# Roadmap

# LUCIA OS – Two‑Track Roadmap

**Draft v0.1 – 21 May 2025**

---

### Concept

LUCIA OS advances along two parallel, loosely coupled rails:

1. **User Experience (UX)** – the human‑facing surface that grows in fluency and initiative.
2. **Cognitive Technology Stack** – the substrate that implements those abilities, evolving from today’s LLM foundations toward brain‑inspired kernels.

The separation lets us ship useful features early while re‑architecting the core in the background.

---

## Layer 1 — Proactive User Experience (UX)

* **Rising capability curve**: picture a diagonal line that climbs as the interface learns to understand, remember, and reason across modalities.
* **Proactivity from day one**:

  * The OS owns its own **e‑mail address and phone number**.
  * It can **receive messages from external senders** (friends, services, IoT devices) and ingest them as first‑class events.
  * It **initiates conversations** with the user: summarising incoming information, asking clarifying questions, proposing actions.
* **Early implementation**: off‑the‑shelf LLMs wrapped in a conversational shell handle language parsing, intent extraction, and basic summarisation.
* **Progression**: memory becomes persistent, dialogue spans contexts, and the agent starts chaining reasoning loops (planning, simulation, delegation). The UI remains stable; only the depth behind interactions changes.

---

## Layer 2 — Cognitive Technology Stack

| Phase                     | Underlying modules                                    | Key traits                                              |
| ------------------------- | ----------------------------------------------------- | ------------------------------------------------------- |
| **0 → 1**                 | Conventional LLMs, vision encoders, vector DB         | Rapid prototype; cloud‑heavy; short‑term memory         |
| **Sparse HTM kernels**    | Columnar memory, temporal pooling                     | On‑device inference; continuous learning; event‑driven  |
| **Full neocortical mesh** | Multi‑region predictive hierarchy, sensor‑motor loops | Low‑power; real‑time world model; cross‑modal reasoning |

*(Table is illustrative; precise milestones to be refined.)*

---

## Why Keep the Tracks Uncoupled?

* **Parallel progress** – designers iterate on interaction patterns while research teams push the algorithmic frontier.
* **Graceful fallback** – immature modules can be swapped with stable ones without user‑visible regressions.
* **Clear road‑mapping** – UX capability is measured on one axis; substrate maturity on another.

---

## Next Steps 

1. Define concrete UX milestone definitions (e.g., "Inbox triage autopilot", "Multi‑modal memory recall").
2. Map technology phases to silicon requirements (CPU / GPU / ASIC).
3. Draft risk register and fallback scenarios for each coupling point.
4. Decide data/privacy guardrails for OS‑owned e‑mail/phone endpoints.

---
