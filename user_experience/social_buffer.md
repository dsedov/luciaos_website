---
layout: base.njk
title: Social Buffer
eleventyNavigation:
  key: Social Buffer
  parent: User Experience
  order: 1
---

# Assistant-as-Social-Buffer — Specification

## 1 · Why This Hits a Nerve

* Phone numbers and personal inboxes have become de-facto IDs; once shared they leak location, social graph, and 2FA vectors.  
* Existing privacy tools are fragmented. Email aliases protect mail but not text; proxy numbers mask SMS but ignore email or chat.  
* Introverts crave a polite wall that declines invites and answers follow-ups without the emotional labor of real-time engagement.  
* Opportunity: an *Identity Gateway* that sits in front of **all** channels, applies AI triage, and enforces calm computing.

---

## 2 · High-Level Flow

```

\[Stranger / Service]
↓
Identity Gateway  (alias generator & channel router)
↓
Context Engine    (spam filter ▸ priority score ▸ empathy style-transfer)
↓
User Digest or Auto-Responder

```

---

## 3 · Component Blueprint

### 3.1 Alias Factory  
* Creates disposable or long-lived identifiers for every counter-party.  
* Email: sub-domain forwarding (SimpleLogin-style).  
* Phone/SMS: masked numbers via Twilio Proxy.  
* Telegram (or similar): bot-powered relay that rewrites sender handles.

### 3.2 Routing Core  
* Normalises inbound payloads into a single JSON schema: `{sender, channel, sentiment, intent, timestamp}`.  
* Ingests via webhooks (SMS, email), long-poll (Telegram), or call-to-text transcription.

### 3.3 Triage Brain  
* Stage 1 — Spam / harassment filter.  
* Stage 2 — Urgency classifier (now, today, this week, someday).  
* Stage 3 — Emotion & topic tagging.  
* Stage 4 — Suggested response with empathy style-transfer tuned for introverts.

### 3.4 Auto-Responder  
* Chooses one of four actions:  
  * **Ghost** (ignore)  
  * **Soft Decline**  
  * **Ask Clarifying Question**  
  * **Route to Human**  
* Uses a library of quiet, courteous templates plus the user’s personal tone.

### 3.5 Digest & Control UI  
* Batches low-priority items into morning / evening summaries.  
* Shows an “energy cost” badge (e.g., “<2 min”, “5-10 min”) for each task.  
* Lets the user promote, snooze, or delete messages with one tap.

### 3.6 Privacy Vault  
* Stores only necessary metadata; full contents are end-to-end encrypted on device.  
* Supports one-command export to plain JSON / Markdown for data-portability.  
* Optional off-device backup in user-owned cloud with their encryption keys.

---

## 4 · Signature Features Competitors Don’t Offer

* **One Contact Card to Rule Them All** — a single vCard hides rotating aliases per counter-party.  
* **Anxiety-Adaptive Replies** — if wearables detect stress, the assistant throttles pings and switches to auto-screen mode.  
* **Form-Fill Relay** — spins up a temp number for SMS codes, injects it, retires the number.  
* **Conversation Escalation Ladder** — preview → suggest → live proxy chat → reveal real ID (rare, user-approved).  
* **Cross-Channel Threading** — merges email, SMS, and chat from the same human into one timeline while IDs stay masked.

---

## 5 · Implementation Hints

* Rent local numbers in pools; map `external ↔ proxy ↔ user` in a short-lived session, recycle after inactivity.  
* Catch-all sub-domains (`*@u.example.com`) piped through postfix or an alias service; re-write headers, DKIM-sign per alias.  
* Telegram bot in privacy-mode OFF; use `forwardMessage` to preserve originals, append metadata tags.  
* Sign outbound email, rate-limit SMS bursts, hash caller IDs in logs.  
* Every alias auto-includes a “/stop” or unsubscribe command that tears it down instantly.

---

## 6 · Risks & Mitigations

* **Abuse for spam blasts** → rate-limit per recipient, CAPTCHA for bulk sends.  
* **Legal interception of harassment evidence** → keep minimal encrypted logs for 30 days; user holds the key.  
* **Provider shutdown (Twilio ban, domain loss)** → maintain warm-spare providers and secondary domains.  
* **Lost 2FA codes if vault offline** → emergency bypass path that temporarily reveals alias linkage.

---

## 7 · Assistant-to-Assistant Network (“Social Media 2.0”)

* **Opt-In Federation** — assistants expose ActivityPub-like endpoints; users follow *people* by following their assistants, not their email addresses.  
* **Privacy Layering** — only high-level intents and content hashes travel between assistants; raw messages remain local.  
* **Digital Hygiene by Design**  
  * No algorithmic engagement farming; feeds are strictly reverse-chron digests.  
  * Muted‐by-default public channels; the assistant recommends joining only if the topic matches explicit goals.  
  * Automatic *content expiry*: posts auto-vanish after user-selected TTL unless bookmarked.  
* **Cross-Assistant Collaboration** — scheduling a call, sharing receipts, co-authoring docs: assistants negotiate APIs behind the scenes, then surface a concise “ready to confirm?” card.  
* **Quiet Communities** — small groups of users let their assistants exchange daily summaries; humans jump in only when something sparks genuine interest.  
* **Fallback to Human** — any federated thread can escalate to direct human chat, preserving the full assistant-maintained context for clarity.

---

## 8 · North-Star Experience Script

> **Alice** scans the QR on your badge.  
> **Assistant** issues `alice-2025-05@u.example.com` and `+1-669-555-0318`.  
> **Alice** emails at 11 pm: *“Brunch tomorrow?”*  
> **Triage Brain** tags it as social-low-urgency outside quiet hours and queues it.  
> **8 am Digest** shows the invite with two options: **Decline politely** or **Propose later**.  
> You tap **Propose later**.  
> **Assistant** replies: “Thanks, Alice! This week’s packed—can we aim for next month?”  
> Alice never sees your real inbox or number, and you never felt the 11 pm guilt ping.

---

## 9 · Positioning Tag-Line

> **Give the world your assistant, keep your serenity.**
