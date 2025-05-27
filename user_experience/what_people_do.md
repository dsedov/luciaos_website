---
layout: base.njk
title: What do people do?
eleventyNavigation:
  key: What do people do?
  order: 2
---

## 1. Three Core Archetypes

### 1.1 The Technical Geeky “Power Tinkerer”

* **Profile** – Comfortable with code, hardware hacks, Bash shells, APIs, self-hosted services. Enjoys optimizing life and machines alike.
* **Motivations** – Mastery, curiosity, measurable progress, brag-worthy automation.
* **Pain Points** – Context overload, maintaining many side-projects, glue code between tools, staying on top of fast-moving tech.
* **Assistant Jobs-to-be-Done**

  * Code snippets, stack-trace triage, API playgrounds.
  * Infra babysitting: uptime alerts, log summaries, “git pull & rebuild if CI passes.”
  * Dev-heavy life admin: automate bill pay with scripts, scrape DMV appointment APIs, auto-file receipts to Airtable.
* **Preferred Modes** – Desktop CLI, VS Code plugin, webhooks, push notifications to smartwatch, quick voice commands while soldering.

### 1.2 The Non-Technical Introvert “Quiet Organizer”

* **Profile** – Comfortable with apps but not debugging them; anxious about bureaucracy and social friction.
* **Motivations** – Peace of mind, tidy schedule, gentle nudges rather than alarms.
* **Pain Points** – Decision fatigue, paperwork dread, missed deadlines, small-talk exhaustion.
* **Assistant Jobs-to-be-Done**

  * Step-by-step walkthroughs for DMV, passport renewal, utility account setup.
  * Draft polite emails / texts, maintain “response-due” queue.
  * Curate calm media: evening reading list, podcast highlights, sleep-friendly playlists.
  * Mood check-ins, journaling prompts, CBT-style reframing.
* **Preferred Modes** – Chat UI, scheduled digests, low-key voice via earbuds, ambient mobile widgets (no flashing badges).

### 1.3 The Creative Multitasker “Flow Seeker”

* **Profile** – Designer / writer / indie founder juggling client work, personal brand, and side art.
* **Motivations** – Flow state, visible portfolio growth, serendipity.
* **Pain Points** – Context switches, scattered research, publishing pipeline grunt work.
* **Assistant Jobs-to-be-Done**

  * Idea capture anywhere → structured vault (tags, backlinks).
  * Auto-generate social posts, newsletters, press-kit updates.
  * Remind to invoice, chase payments, track revenue vs. burn.
  * Suggest skill-stretches (“try Midjourney prompt in \_\_\_ style”) and friendly competitions (NaNoWriMo, #100DaysOfDesign).
* **Preferred Modes** – Mobile notes share-sheet, voice memos transcribed, canvas-style whiteboard, integration with creative suites.

---

## 2. Exhaustive “What People Actually Do”

(Think of these as life verbs your assistant can attach itself to.)

* **Manage Money** – earn, budget, pay taxes, invest, donate, expense reports.
* **Consume Media** – read articles & books, binge series, scroll feeds, listen to podcasts/music, watch live streams.
* **Communicate** – email, messaging, calls, video meetings, social posts, community forums.
* **Maintain Health** – track workouts, log meals, take meds, book check-ups, mental-health routines, sleep hygiene.
* **Run a Household** – grocery runs, cooking, cleaning schedules, pet care, appliance maintenance, repairs.
* **Deal with Bureaucracy** – DMV, passports, visas, insurance claims, permits, voter registration.
* **Learn & Upskill** – online courses, language practice, coding katas, certification prep.
* **Travel & Commute** – plan itineraries, book tickets, track traffic, EV charging stops.
* **Create & Build** – coding, writing, art, woodworking, gardening, DIY electronics.
* **Work & Collaborate** – project management, Kanban boards, doc reviews, time tracking.
* **Shop & Sell** – wish-lists, price watching, reselling old gear, subscription juggling.
* **Play & Compete** – video games, fantasy leagues, fitness challenges, hobby tournaments.
* **Reflect & Grow** – journaling, goal setting, meditation, habit tracking, gratitude logs.
* **Socialize** – event planning, group voting on restaurants, remembering birthdays, icebreakers for introverts.

---

## 3. Assistant Use-Case Clusters (across archetypes)

1. **Life-Admin Automation** – bill payments, license/ID renewals, recurring reminders, document vault with OCR.
2. **Knowledge Concierge** – fast answers, long-form explainers, code review, “explain like I’m five” toggles.
3. **Proactive Personal CFO** – spend alerts, portfolio rebalancing nudges, tax-loss harvesting checks.
4. **Health & Wellness Coach** – context-aware activity nudges, stress-level estimations from wearable, sleep trend insights.
5. **Content DJ** – creates dynamic playlists, queues podcast snippets, summarises articles, surfaces niche newsletters.
6. **Communication Butler** – triages inbox, drafts replies in your tone, blocks spam callers, suggests meeting times.
7. **Creativity Catalyst** – brainstorm partner, mood-board generator, version control for ideas, friction-free publishing.
8. **Gamified Progress Tracker** – XP points for tasks, streaks, friendly leaderboards within a private cohort.
9. **House & IoT Manager** – smart-home routines, energy use reports, security camera anomaly alerts.
10. **Travel Sherpa** – visa checklist, flight disruption rebooking, language cheat-sheets, local SIM suggestions.

---

## 4. Modes of Interaction

* **Conversational Text** – chat apps, web widget, SMS fallback.
* **Voice** – phone call, smart-speaker, car infotainment, AirPods squeeze-and-speak.
* **Command Line / DevOps Hooks** – `lucia-cli pay --vendor pg&e --amount auto`, Git pre-commit hooks.
* **Email Threading** – assistant CC’d to auto-summarize long chains or schedule meetings.
* **Proactive Notifications** – push, digest emails, desktop cards, lock-screen widgets; frequency tuned to user persona.
* **APIs & Webhooks** – for integrations with home servers, Notion, Jira, Home Assistant, wearables.
* **Ambient Displays** – e-ink desk dashboard, smartwatch complications, AR glasses pop-ups.
* **Physical UI** – macro-pads, NFC tags, voice-only toggles, eventual robotic presence.
* **Collaborative Surfaces** – shared whiteboards, canvas docs, multiplayer editing with the assistant as one more cursor.

---

## 5. Motivational Levers & Emotional Hooks

* **Accomplishment & Mastery** – progress bars, badges, weekly retros.
* **Competition & Social Proof** – private leaderboards, pair-programming scorecards, reading challenges.
* **Peace & Trust** – for the introvert: low-noise default, data-privacy transparency, “quiet hours.”
* **Curiosity & Play** – easter eggs, random “Did-you-know?” drops, creative prompt of the day.
* **Safety Nets** – undo stack, explain-my-decision feature, audit trail.

---

## 6. Idea Starters for Your Specified Tasks

* **Paying Bills / Renewing DL**

  * Pre-filled forms, auto-submission with captcha-solver proxies, doc checklist reminders 30 / 7 / 1 days before.
  * “Explain this fee” deep-link to support chat.
* **Government Sites & Utilities**

  * Single dashboard scraping DMV, IRS, local trash pickup schedule, water usage API.
  * Alert when new parking citation appears, suggest appeal templates.
* **Banking & Investing**

  * Daily ledger reconciliation from Plaid, visualize cashflow, push deviations.
  * Portfolio risk heat-map vs. target allocation.
* **Podcast / Reading / Entertainment**

  * Morning feed: 3 podcast clip recs, 2 article summaries, 1 new comic chapter.
  * Auto-generate “TL;DR Friday” audio digest in your own voice clone.
* **Health & Relativity (?)**

  * If workouts drop below baseline → suggest 15-min desk stretch video.
  * “Relativity” could be assistant-curated explainers of tough physics concepts for fun learning goals.

---

### Final Thought

Start small: pick **one archetype plus two killer use-case clusters**, deliver them brilliantly, and let the other features accrete. Otherwise the “exhaustive” list quickly becomes a never-shipped product backlog.
