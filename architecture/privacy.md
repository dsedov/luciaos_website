---
layout: base.njk
title: Privacy
eleventyNavigation:
  key: Privacy
  parent: Architecture
  order: 2
eleventyExcludeFromCollections: false
---

# Privacy & Access‑Control Framework for LUCIA Personal Assistant (Draft)

## 1. Purpose

Provide a clear, staged privacy model that governs who can see what when interacting with the owner‑centric assistant during early development (Stage 0/1) and beyond.

---

## 2. Data Taxonomy

* Short‑Term (Ephemeral): Volatile data scoped to a single turn—recent user utterance, transient tool results.
* Conversation Context: Rolling window for the active thread that blends short‑term memory with a running summary.
* Fact Sheet (Public): Curated, owner‑approved facts deemed safe for disclosure such as job title and general interests.
* Long‑Term Memory (Private): Persisted personal data and project archives—health notes, detailed roadmaps, etc.  Sharded by sensitivity and protected with separate keys.
* Tool & System Logs: Internal telemetry and execution traces, useful for debugging and audit.

---

## 3. Access Levels & Trust Tiers

* Level 0 — Owner (Dennis): Full read/write access to every tier.
* Level 1 — Trusted Collaborator: Reads the Fact Sheet and any private shards the owner explicitly whitelists.
* Level 2 — Known Contact: Reads the Fact Sheet only.
* Level 3 — Unknown / First‑Time: Receives a minimal public greeting card.

Exceptions can be attached to any user or thread, selectively adding or removing individual facts regardless of tier.

---

## 4. Message Flow & Context Construction

### 4.1 Owner ➜ Assistant

* Context supplied: the full stack (short‑term, conversation context, Fact Sheet, long‑term memory, and relevant tool logs).
* Typical tasks: brainstorming, personal reminders, high‑sensitivity queries.

### 4.2 Assistant ➜ Owner

1. Internal reflections stay invisible unless the owner explicitly requests them.
2. Operational replies deliver answers, suggestions, and tool outcomes.
3. Conversation digests summarize external chats and label them with the external party’s trust tier.

### 4.3 External User ➜ Assistant

* Initial context: Fact Sheet only.
* Escalation path: the assistant pauses, asks the owner for guidance, receives explicit approval before expanding context.
* Guard‑rails: deny‑list checks, rate limits, and a prompt‑injection filter on every turn.

---

## 5. External LLM Usage (Stage 0/1)

* Each outbound call includes: (a) the user message, (b) only the context slices allowed by the trust tier, and (c) a role‑specific system prompt.
* The context builder enforces least‑privilege by design, never bundling more data than necessary.
* All payloads are encrypted in transit, logged, and stored for later audit while respecting shard boundaries.

---

## 6. Governance & Security Controls

* End‑to‑end encryption both at rest and in transit for every memory shard.
* An append‑only audit trail hashed in a Merkle tree to detect tampering.
* A consent ledger that records who has been granted which exceptions and when they expire.
* A right‑to‑be‑forgotten workflow that cascades deletions across memory shards and tool logs.
* Regular key rotation; keys for high‑sensitivity shards live in a separate hardware module.

---

## 7. Problems & Open Questions

* Context Leakage: How to ensure sensitive embeddings cannot be reconstructed from model outputs?
* Prompt Injection: What additional sandboxing is needed to contain sophisticated attacks by external users?
* Cross‑Thread Correlation: How to prevent a persistent external user from assembling private data across multiple sessions?
* Model Contamination: Which contractual and technical measures guarantee that third‑party LLM providers do not train on our payloads?
* Granular Revocation: How to retract access mid‑conversation when trust assumptions change?
* Regulatory Compliance: How do the memory shards map to GDPR/CCPA categories, and what is the data‑subject request flow?
* Key Management: Who holds which keys, and how frequently should they rotate?
* Latency vs. Privacy: What is an acceptable performance hit for heavy encryption and context building?

---

## 8. Next Steps

* Define concrete data schemas and encryption policies for each memory tier.
* Prototype the context‑builder that enforces the trust matrix.
* Draft a consent UI for granting and revoking exceptions.
* Run red‑team exercises that target prompt injection and context‑leak pathways.
* Revisit the framework after Stage 2 when the project migrates to in‑house model hosting.
