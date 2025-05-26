---
layout: base.njk
title: Hardware
eleventyNavigation:
  key: Roadmap
  parent: Architecture
  order: 1
eleventyExcludeFromCollections: false
---

## Intro

This document translates the vision of Lucia OS into a stage‑by‑stage list of user‑facing experience milestones and the backend capabilities that enable them. It also tracks the architecture, engineering feasibility, and scalability implications at every step.

Throughout, I favour well‑known components like SQLite, Postgres, Django, Flask, C++ and home grown solutions before considering bespoke silicon. The brain‑inspired kernels will begin as straightforward Python, progress through native optimisation, and only if necessary graduate to GPUs and, much later, custom chips.

---

## Stage 0 – Prototype

Establish the minimum viable product; search for product‑market fit; validate conversational UX. The idea is to concentrate primarily on UX to allow for early discovery and fast paced iteration, before considering true kernel-like backend implementation. 

### UX

* Conversational shell owns a Telegram handle and a dedicated email address.
* Proactive alerts: "You have new mail from …" plus a summary.
* For emails containing questions, Lucia surfaces the questions, captures the user’s answers, and sends replies automatically.

### Backend

* Single Python process with a few system prompts (Owner -> Assistant, External -> Assistant).
* Storage: SQLite file holding persistent facts, short‑term facts, conversation context, and a problem / question queue.
* Mail - Mailgun or Fastmail depending on wether user can have SMTP acces to their email. Probably should go with mailgun, as user interacts with assistant not with his mailbox. 

### Hardware

* 1 vCPU / 1 GB RAM shared VPS; no GPU.

### Architecture

* Monolithic Flask/Django app. I have experience with Django, but leaning towards Flask because of its simplicity.
* REST calls to external LLMs (OpenAI, Anthropic, etc.).
* External email service (Mailgun)
* External messaging service (Telegram)

### Engineering feasibility

* Very high. One engineer.

### Scalability & resource demands

* Tens of concurrent chats; < 1 GB storage; API costs $20–50 mo.
* Fly.io is a good option for VPS hosting.

---

## Stage 0.5 – Extended Prototype

Harden the service, refine message timing and classification, begin cost analysis.

### UX

* Tune timing of communication. When do we ask the user? Can we ask a user when/how often we want assistant to interact with the owner?
* First‑pass message classification for importance/urgency/context.
* Describe rules via natural language?

### Backend

* Swap SQLite for Postgres while keeping the schema identical. Also evaluate if this is needed at all? How are managing context, shor/long term memory?
* Figure out background jobs. In-house vs Celery?
* Run A/B tests on multiple hosted LLMs; collect latency / cost metrics.

### Hardware

* 2 vCPU / 4 GB RAM VPS; Postgres on the same box.

### Architecture

* Modular Django/Flask project: web, worker, scheduler.
* Keep building on Fly.io. Or look at other options if requirements change.

### Engineering feasibility

* High. All mainstream tooling.

### Scalability & resource demands

* Hundreds of users; 20 GB Postgres; API spend trimmed via caching.

---

## Stage 1 – Context‑Aware Assistant

### UX

* Persistent memory of preferences and past conversations.
* Automatic embedding of browsing history and downloads; user query: "What did I read about ... yesterday?"
* Multi‑channel notifications (desktop, mobile, wearables).

### Backend

* Local vector store (pgvector inside Postgres) with incremental embeddings.
* Retrieval‑augmented generation (RAG) over personal corpus.
* Event bus (Django Channels / RabbitMQ) to ingest web pages, files, and IoT signals. This is very ambigous right now. Need more research.

### Hardware

* 4 vCPU / 8 GB RAM VPS with SSD.
* Optional burst GPU instance for large embedding batches.

### Architecture

* Django + pgvector; FastAPI microservice for RAG.
* There is probalby a lot of tech debt at this point. Architecture is not clear until we start reaching this stage.

### Engineering feasibility

* Medium‑high; open‑source parts, careful data modelling.

### Scalability & resource demands

* Thousands of docs; 100 GB NVMe; occasional GPU. Probably at around $100+ mo.

---

## Stage 2 – Multimodal Companion

### UX

* Vision and audio understanding from screenshots, camera, microphone.
* Contextual UI overlays (“Clip this chart?”) inside OS / browser.
* Timeline views that merge text, image, and audio history.

### Backend

* Sensing kernels (vision, audio) using off‑the‑shelf models (e.g., Whisper, CLIP).
* HTM kernels remain Python prototypes; profiler identifies hotspots.
* Begin porting compute‑heavy loops to Rust for 5–10× speed‑up.

### Hardware

* User devices leverage built‑in NPUs (Apple silicon, possibly other ARM based devices); backend GPU only for model fine‑tune.

### Architecture

* gRPC microservices: vision‑worker, audio‑worker, RAG‑core.
* C++ modules compiled to shared libraries, called from Python.
* Do we need our own browser? Where do our users live at this point in time? 

### Engineering feasibility

* Medium; multimodal glue code plus C++ FFI.

### Scalability & resource demands

* Each edge device handles inference; backend aggregates embeddings.
* Central: 8 vCPU / 32 GB RAM; small GPU pool?

---

## Stage 3 – Cognitive Partner

### UX

* Real‑time collaboration: anticipates needs, proposes plans, and can execute multi‑step workflows.
* Seamless hand‑off across devices.
* Mixed‑reality expressions using gesture and spatial audio.

### Backend

* Hierarchical kernel mesh initialised in C++; SIMD and multithreading exploited.
* Profiling reveals remaining bottlenecks; port hottest code paths to CUDA / Metal.
* Automated benchmarking pipeline compares CPU vs GPU throughput and power.

### Hardware

* Personal laptop/desktop GPU (RTX 40‑series or Apple M‑series) becomes primary accelerator.
* No custom silicon yet.

### Architecture

* Kernel mesh as C++ exposing gRPC; GPUs addressed via CUDA / Metal back‑ends.
* Graph database stores dynamic world model / kernel weights..

### Engineering feasibility

* Medium‑low; cross‑platform GPU back‑end, but no hardware changes.

### Scalability & resource demands

* GPU VRAM scaling becomes limiting factor (24 GB per active user workspace).
* Weekly infra cost around $0.50 per active heavy user on Spot GPUs.

---

## Stage 4 – Ultimate Cognitive OS

### UX

* Symbiotic companion understands long‑term goals, values, and emotions.
* Generates long‑horizon plans; negotiates with external agents.
* Ambient, zero‑interface mode.

### Backend

* Distributed swarm of HTM kernels across the user’s devices.
* Dynamic workload placement based on power, latency, and privacy.
* Continuous learning with differential privacy.

### Hardware

* Conventional CPUs/GPUs in phones, laptops, and home servers.
* We actively log performance counters to understand energy and latency ceilings.

### Architecture

* Peer‑to‑peer mesh for kernel coordination. No single point of failure.
* Encrypted personal vault (age + SQLite) replicated across devices.

### Engineering feasibility

* Challenging but feasible without new silicon; depends on efficient GPU kernels.

### Scalability & resource demands

* Millions of micro‑kernels per user; requires smart scheduling.

---

## Post‑Stage 4 – Custom Hardware Exploration

Triggered only if profiling data from Stage 3 and Stage 4 shows that commodity GPUs cannot meet latency and watt targets.

### Goals

* Evaluate ASIC / neuromorphic prototypes for HTM workloads.
* Define instruction‑level requirements from real trace logs.
* Build FPGA proof‑of‑concept, then iterate toward an SoC.

### Steps

1. Collect trace data during high‑load tasks; identify kernel primitives (spatial pooler, temporal memory, etc.).
2. Prototype on modern FPGA board.
3. Compare throughput and energy vs high‑end GPU.
4. If 10× better, kick‑off SoC tape‑out feasibility study.

### Engineering feasibility

* Experimental; requires hardware design expertise and 12–18 months R&D.

### Scalability & resource demands

* Initial FPGA boards ($2–3 k each) for the dev team.
* ASIC NRE only if ROI is clear 