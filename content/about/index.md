+++
title = 'About'
showDate = false
showReadingTime = false
showPagination = false
showAuthor = true
+++

### Bridging atom factories and token factories.

*Atom factories build AI's hardware — chips, servers, power. Token factories (data centers) turn that hardware into intelligence. My work lives in the translation between the two — between the physical constraints of supply and the AI workloads that run on top. I've worked both ends: running Google Home production lines in Suzhou, sitting on the supplier side of Dell's hardware supply chain at Wistron, and now operating 35 production AI models at TikTok.*



Hi, I'm **Chung-Hao (CH) Lee 李崇豪** — based in Sydney.

I started on factory floors and grew into AI systems. At **Pegatron Suzhou**, I led a 15-person cross-functional team operating the **Google Home** manufacturing line — 2M AIoT units per year. At **Wistron Taipei** — a global Tier-1 ODM for Dell — I brought industrial AI to **Dell laptop manufacturing**, delivering **$1.2M in annual cost savings** through AI-driven predictive maintenance across **20B+ telemetry records, scaling to 40B+**, and deployed LLM for log analysis at scale. Now at **TikTok Sydney**, I built the **Live RCA Copilot** human-AI collaboration system and platform from 0 to 1.


What carries across these roles isn't a domain — it's a method I've come to call **"Analysis + Process"**: deconstructing ambiguous problems into measurable parts (analysis), then designing repeatable workflows that close the loop (process). I wrote about [why these two keywords define my work](/posts/the-two-keywords-analysis-and-process/) — the Wistron "No Power recall plunge" case is the canonical example.

---

## Experience

#### TikTok — Product Operation Manager, Model Operation (AI/ML) · Sydney · 2025 – present

I own Root Cause Analysis for TikTok Live's content-moderation AI — the process, the platform, the models that evaluate it, and the day-to-day operation that keeps production models improving.

##### RCA process + platform — built both from 0→1
- Designed the end-to-end RCA process from scratch: how issues surface, how the right cases are found, how root cause is analysed, and how each finding is routed to the owning team — algorithm, labeling base, engineering, or policy — for the fix.
- Built the platform that operationalizes that process: consolidated data scattered across disconnected systems into one standardized workspace, unifying discovery, investigation, analysis, and issue hand-off in one place. Authored 15+ PRDs across Engineering, Data, Ops, and Policy.
- Cut end-to-end RCA time ~56% across the core team; 40+ active users, 10,000+ monthly queries, adoption spreading beyond RCA to adjacent functions.
- Third generation, RCA Copilot: an AI agent that plans the evidence it needs, retrieves it through purpose-built skills, and traces every model error to a single root cause — humans steering via human-in-the-loop. Evolved from human checklists → decision-tree attribution → agent platform.

##### AI model building + evaluation pipeline — from 0→1
- Built AI models from scratch to clean and validate data at scale (prompt engineering, multi-agent orchestration, agent-looping), producing the high-quality datasets used to evaluate production models.
- Stood up the team's first systematic, repeatable model-evaluation pipeline: 1M+ cases across 62 iterations at ~99% labeling accuracy over 13 batches.

##### RCA operation — 35 live models
- In the system's early days, ran RCA across all 35 production models moderating live content (nudity, hate speech, bullying, and more) — broad coverage while the process was still forming.
- As the RCA platform matured and the operation scaled across the organisation, my scope focused to owning nudity detection end-to-end in greater depth — raising that model's F1 score 38% (to 80%+) through multi-agent orchestration with an arbiter agent and describe-then-verify hallucination control.
- Established a recurring Product–Ops–Policy review that turns root-cause findings into owned fixes — replacing case-by-case escalation with a systematic feedback loop from risk discovery to downstream ownership.
- TikTok Spot Bonus Award, 2025 Q4 — for independently leading the RCA platform with minimal supervision, strong ownership, and cross-functional delivery.

#### Wistron — AI Project Manager · Taipei · 2022 – 2024

- Worked inside a **global Tier-1 ODM for Dell** — the supplier side of the hardware supply chain.
- Led a three-phase industrial AI program for Dell laptop manufacturing (smart diagnosis → predictive forecasting → knowledge consolidation) across 6 cross-functional teams and **20B+ telemetry records, scaling to 40B+**; also deployed LLMs for log analysis at scale.
- Results: **70% faster debugging · 50% fewer return-to-repairs · $1.2M annual savings.**

#### Pegatron — Factory Project Manager · Suzhou · 2018 – 2020

- Led a 15-person cross-functional team operating the **Google Home** manufacturing line — **2M AIoT units per year**.
- Owned end-to-end **SMT + FATP** process control on the factory floor.

#### University of Maryland — Supply Chain Analyst & Research Assistant · College Park · 2020 – 2022

- Owned the semiconductor portion of an NDIA study on supply-chain risk in defence-critical equipment — mapping single points of failure using public data only; covered by National Defense Magazine.

- Research became the **Springer-published** *MiLB → MLB promotion prediction model*, featured in *Maryland Today*.

*Earlier: Substitute Military Service at Taoyuan International Airport (2016 – 2017) — honorably discharged with a Ministry of the Interior certificate of merit.*

---

## Education

- **MBA + MS Information Systems** — University of Maryland, College Park (2020 – 2022), Smith Fellow Scholarship
- **BS + MS** — National Tsing Hua University, Taiwan

---

## Selected Achievements

- **TikTok Spot Bonus Award, 2025 Q4** — for leading RCA Copilot 0→1
- **Dell Outstanding Leadership & Execution Award, 2023** — presented to the Wistron AI Team for the program I led, signed by Dell's SVP of Worldwide Procurement
- **Wistron Excellent Digital Transformation Project Award, 2023**
- **Springer-published research** — *Baseball Informatics: From MiLB to MLB Debut*; featured in *Maryland Today* · UMD Outstanding Graduate Student Award nomination, 2022
- **Impact Consulting Fellowship, 1st Place (2021)** · Hearst Data Competition, 3rd Place (2022) · Graduate Research Day, 2nd Place (2022)
- VP, Smith Masters Supply Chain Management Association & APICS

*Earlier:* Scrum Master certified (2023) · NTHU Dean's List ×3

---

## Built in Public — Extending the Bridge

- **[multi-lens-thinking](https://github.com/lch99310/multi-lens-thinking)** — A six-stage AI reasoning pipeline routing questions through four parallel analytical lenses.
- **[WikiPolyDraft](https://github.com/lch99310/WikiPolyDraft)** — Open-source AI-drafted Wikipedia translation tool. First article: **Barangaroo** (Sydney). Same "AI drafts, human lands it" philosophy — applied to cross-language civic knowledge.
- **[My Daily Digest](https://github.com/lch99310/My_Daily_Digest)** — Automated daily intelligence on AI data center infrastructure (NEXTDC, AirTrunk, Equinix AU, AEMC/AEMO grid signals), geopolitical risk, and AI builder updates. Built to keep my own atom × token thesis live.

---

## What I Write About

Four pillars that hold together everything on this site:

- **AI Data Center Economics** → [Data Center 101 series](/tags/data-center-101/) (14 parts on PUE/WUE/GUE, cooling, power, supply chain, DCIM, RCA).
- **Sydney as an AI Infrastructure Nexus** → [The Global AI Training Pivot: Positioning Sydney as a Strategic Infrastructure Nexus](/posts/passport-to-ai-era-special-editionthe-global-ai-training-pivot-positioning-sydney-as-a-strategic-infrastructure-nexus/) · [The AI Supply Chain Dividend](/posts/the-ai-supply-chain-dividend/).
- **Atoms × Tokens — the hardware-AI bridge** → cross-cutting essays on supply-chain economics linking Taiwan ODM ecosystems to AI infrastructure deployment.
- **Human-AI Collaboration & Agent Design** → [Beyond the Interface: Designing a Common Language for Humans and AI](/posts/beyond-the-interface-designing-a-common-language-for-humans-and-ai/).

---

## Let's Talk

If you're working on AI infrastructure, data centers, or the supply chains and reliability operations behind them — especially in Sydney — I'd genuinely enjoy comparing notes. Reach me by [email](mailto:lch99310@gmail.com) or on [LinkedIn](https://www.linkedin.com/in/lch99310/).
