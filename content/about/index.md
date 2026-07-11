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

I started on factory floors and grew into AI systems. At **Pegatron Suzhou**, I ran a 15-person team operating the **Google Home** manufacturing line — 2M AIoT units per year. At **Wistron Taipei** — a global Tier-1 ODM for Dell — I brought industrial AI to **Dell laptop manufacturing**, delivering **$1.2M in annual cost savings** through AI-driven predictive maintenance across **40B+ sensor data records**, and deployed LLM for log analysis at scale. Now at **TikTok Sydney**, I built the **Live RCA Copilot** human-AI collaboration system and platform from 0 to 1.


What carries across these roles isn't a domain — it's a method I've come to call **"Analysis + Process"**: deconstructing ambiguous problems into measurable parts (analysis), then designing repeatable workflows that close the loop (process). I wrote about [why these two keywords define my work](/posts/the-two-keywords-analysis-and-process/) — the Wistron "No Power recall plunge" case is the canonical example.

---

## Experience

#### TikTok — Product Operation Manager, Model Operation (AI/ML) · Sydney · 2025 – present

- TikTok Live deploys AI models to review content at platform scale. When a model errs, my team traces the error to its root cause, fixes it, and restores normal operations.
- That root-cause work is my main line: I built the Root Cause Analysis (RCA) system from 0 to 1 — the process and the platform — and evolved it through three generations:
  - **v1 · Checklists** — humans ticked multi-select boxes to record error reasons. Fatal flaw: an unticked box could mean "no issue" *or* "reviewer missed it" — the data couldn't be trusted.
  - **v2 · Decision tree** — single-choice questions that walk a reviewer to exactly **one root cause per error**. Attribution became clean, but human throughput couldn't scale and every adjustment rolled out too slowly.
  - **v3 · RCA Copilot** — an AI agent working on a platform where all the data lives. The copilot **plans what evidence it needs, pulls it through purpose-built skills, and reasons its way to the root cause**. Scale unlocked — and when its analysis needs adjusting, humans correct it fast through human-in-the-loop.
- The platform speaks both languages by design: **skills + CLI for AI agents, GUI for people** — humans and agents collaborating in one system, each through its native interface.
- Separately, raised a critical review model's F1 score by +38%: multi-agent orchestration (specialist agents plus one arbiter making the final call), a describe-then-verify method that catches hallucination against an unbiased description, and a self-iterating loop where humans only review each round's summary.

#### Wistron — AI Project Manager · Taipei · 2022 – 2024

- Worked inside a **global Tier-1 ODM for Dell and HPE** — the supplier side of the hardware supply chain.
- Led a three-phase industrial AI program for Dell laptop manufacturing (smart diagnosis → predictive forecasting → knowledge consolidation) across 6 cross-functional teams and **40B+ sensor records**; also deployed LLMs for log analysis at scale.
- Results: **70% faster debugging · 50% fewer return-to-repairs · $1.2M annual savings.**

#### Pegatron — Factory Project Manager · Suzhou · 2018 – 2020

- Ran a 15-person team operating the **Google Home** manufacturing line — **2M AIoT units per year**.
- Owned end-to-end **SMT + FATP** process control on the factory floor.

#### University of Maryland — Graduate Research Assistant · College Park · 2020 – 2022

- Research became the **Springer-published** *MiLB → MLB promotion prediction model*, featured in *Maryland Today*.

*Earlier: Substitute Military Service at Taoyuan International Airport (2016 – 2017) — honorably discharged with a Ministry of the Interior certificate of merit.*

---

## Education

- **MBA + MS Information Systems** — University of Maryland, College Park (2020 – 2022), Smith Fellow Scholarship
- **BS + MS** — National Tsing Hua University, Taiwan

---

## Selected Achievements

- **TikTok Spot Bonus Award, 2025 Q4** — for leading RCA Copilot 0→1
- **Dell Outstanding Leadership & Execution Award, 2023** — recognition from Wistron's key customer for the industrial AI program; also co-hosted the Dell–Wistron Joint Engineering Workshop that year
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

- **AI Data Center Economics** → [Data Center 101 series](/tags/data-center-101/) (9 parts on PUE/WUE/GUE, cooling, power, supply chain, DCIM, RCA).
- **Sydney as an AI Infrastructure Nexus** → [The Global AI Training Pivot: Positioning Sydney as a Strategic Infrastructure Nexus](/posts/passport-to-ai-era-special-editionthe-global-ai-training-pivot-positioning-sydney-as-a-strategic-infrastructure-nexus/) · [The AI Supply Chain Dividend](/posts/the-ai-supply-chain-dividend/).
- **Atoms × Tokens — the hardware-AI bridge** → cross-cutting essays on supply-chain economics linking Taiwan ODM ecosystems to AI infrastructure deployment.
- **Human-AI Collaboration & Agent Design** → [Beyond the Interface: Designing a Common Language for Humans and AI](/posts/beyond-the-interface-designing-a-common-language-for-humans-and-ai/).

---

## Let's Talk

If you're working on AI infrastructure, data centers, or the supply chains and reliability operations behind them — especially in Sydney — I'd genuinely enjoy comparing notes. Reach me by [email](mailto:lch99310@gmail.com) or on [LinkedIn](https://www.linkedin.com/in/lch99310/).
