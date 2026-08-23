+++
title = 'About'
showDate = false
showReadingTime = false
showPagination = false
showAuthor = true
+++

### From atoms to tokens: map the supply chain, find the bottleneck, build the loop.

**Bridging atom factories and token factories.** Atom factories build AI's hardware — chips, servers, power. Token factories (data centers) turn that hardware into intelligence. My work lives in the translation between the two — between the physical constraints of supply and the AI workloads that run on top. I've worked both ends, and on both sides of the supplier table.

> **Product = Analysis + Process.**
>
> Analysis maps the supply chain and finds the bottleneck. Process turns the answer into a repeatable loop that can scale beyond one person.


Hi, I'm **Chung-Hao (CH) Lee 李崇豪** — based in Sydney.

Since 2018, my work has followed one thread: find the physical single points of failure behind complex systems, then build the systems that manage them.

I started on factory floors and grew into AI systems. At **Pegatron Suzhou**, I led a 15-person cross-functional team operating the **Google Home** manufacturing line — ~2M AIoT units per year — where I also learned what a supply agreement is actually worth when a line is down and the supplier isn't yours.

As a Supply Chain Analyst at the University of Maryland, I owned the semiconductor portion of a National Defense Industrial Association (NDIA) study — mapping raw-material, supplier, and logistics risk and the single points of failure inside them, using public data only. The work was covered by National Defense Magazine.

At **Wistron Taipei** — a global Tier-1 ODM for Dell — I brought industrial AI to **Dell laptop manufacturing**, delivering **$1.2M in annual cost savings** through AI-driven predictive maintenance across **20B+ telemetry records, scaling to 40B+**, and deployed LLM for log analysis at scale. Dell's SVP of Worldwide Procurement signed the 2023 award for the project I led. Sitting on the supplier side of that relationship taught me the other half of the table: how a quote is built, where the margin sits, and what a customer can and can't be asked to pay for.

Now at TikTok Sydney, I point the same method at AI itself: I built TikTok Live's Root Cause Analysis system — process and platform — from 0 to 1, tracing why content-moderation models fail and routing each fix to the team that owns it. Its third generation, RCA Copilot, is an AI agent where humans and agents collaborate in one system.

Two years ago I started reading down the stack — from the models I operate, to the servers under them, to the power and land under those. That reading became the [Data Center 101](/tags/data-center-101/) series, an Australian siting framework, and a daily intelligence feed I run for myself. It's the direction I'm heading: the buying side of data centre capacity — what it costs, where it goes, and what the deal says.

The through-line isn't a domain — it's the method: map the supply chain, find the bottleneck, then design repeatable workflows that close the loop.

---

## Both Sides of the Supplier Table

Most people who buy have only ever bought. I've done both, and the second half is what makes the first half work.

Contract manufacturing runs on a two-sided relationship. At **Pegatron** I was the factory — the one holding the line, chasing suppliers, and carrying the cost when something upstream failed. At **Wistron** I was the supplier — the one building the quote, defending the price, and asking a Tier-1 customer to pay for something. The two jobs look at the same contract from opposite ends.

Sitting on the supplier side is what teaches you where a quote is soft, when a counterparty genuinely can't deliver, and when they are simply holding a position.

Buying capacity is the same job at a different scale — securing supply from a counterparty you don't control, at a price you can defend, under a contract that decides who carries the risk. Two examples of what that looked like in practice are in the Pegatron and Wistron sections below.

---

## Data Centres — What I've Built and Published

For the past two years I've been working down into the commercial side of data centres — how capacity is priced, where it gets built, how it's financed, and what the contracts say. Self-directed, and published as I go.

- **[Data Center 101](/tags/data-center-101/)** — a self-taught 14-part series working down the stack: TCO economics (why it's an OPEX-dominated business), power, cooling, the supply chain from copper mines to AI clusters, reliability tiers, DCIM, and a [Sydney regional deep-dive](/tags/data-center/).
- **A data-driven siting framework for Australia** — data centres have to be put somewhere, and there was no public, evidence-based way to argue about where. My GovHack 2025 entry built one: every major Australian region scored across five factors — power, cooling, connectivity, talent, and land — using AEMO grid data, Bureau of Meteorology temperature and water data, Telstra InfraCo fibre and submarine-cable maps, Tech Council workforce data, and ABS population data. It put Brisbane and the ACT first, and scored Sydney's power zero. A year later, grid capacity is the constraint this market talks about most, and operators are being pushed toward Brisbane.
- **[My Daily Digest](https://github.com/lch99310/My_Daily_Digest)** — keeping a thesis current is a data problem, so I automated it. A daily brief I built and run for myself: 13 data-centre sources including nine Australian operators and the AEMC and AEMO grid feeds, plus geopolitical risk and AI-builder tracking. GitHub Actions and free LLM APIs, delivered to Telegram in Traditional Chinese.
- **Capital and cycles** — infrastructure is financed long before it is proven, so I write about the money as much as the machines: [Why Global Capital Is Betting on Sydney's AI Data Centers](/posts/sydney-ai-data-center-advantages/) · [The AI Supply Chain Dividend](/posts/the-ai-supply-chain-dividend/) · [From the Coolidge Prosperity to the AI Boom](/posts/from-coolidge-prosperity-to-ai-boom/) · [The Global AI Training Pivot](/posts/passport-to-ai-era-special-editionthe-global-ai-training-pivot-positioning-sydney-as-a-strategic-infrastructure-nexus/).

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
- Established a recurring Product–Ops–Policy review that turns root-cause findings into owned fixes — a standing governance forum with named accountability, replacing case-by-case escalation with a systematic feedback loop from risk discovery to downstream ownership.

##### What this side of the table taught me
- I operate the workload that data centres exist to serve. Running 35 production models day to day is a direct education in what compute demand actually looks like from the inside — how it grows, where it spikes, and what happens when the capacity underneath it is wrong.

- **TikTok Spot Bonus Award, 2025 Q4** — for independently leading the RCA platform with strong ownership, and cross-functional delivery.

#### Wistron — AI Project Manager · Taipei · 2022 – 2024

- Worked inside a **global Tier-1 ODM for Dell** — the supplier side of the hardware supply chain.
- Led a three-phase industrial AI program for Dell laptop manufacturing (smart diagnosis → predictive forecasting → knowledge consolidation) across 6 cross-functional teams and **20B+ telemetry records, scaling to 40B+**; also deployed LLMs for log analysis at scale.
- Results: **70% faster debugging · 50% fewer return-to-repairs · $1.2M annual savings.**

##### Sizing an expansion, and settling who pays for it

Every capacity expansion eventually becomes an argument about who pays for it.

The programme ran on telemetry streaming off machines in the field and stored in the cloud on our side of the relationship. It worked well enough on laptops that the customer wanted desktops added — several times the data volume, and more storage than we were paying for. Nothing further could run until someone bought the capacity, and nobody had budgeted for it.

I sized the expected growth, then chose the option that fitted the existing stack rather than the cheapest one, on the view that migrating later would cost more than the difference now. The customer's opening position was that the storage sat on our infrastructure, so it was our cost to carry. I rebuilt the case from the record — why the expansion was needed, why that option and not the cheaper one, and how the price was derived — and we settled on a shared cost.

**Neither side won the argument, and that was the point. The programme kept running, and the next expansion started from a precedent instead of a fight.**

#### Pegatron — Factory Project Manager · Suzhou · 2018 – 2020

- Led a 15-person cross-functional team operating the **Google Home** manufacturing line — **2M AIoT units per year**.
- Owned end-to-end **SMT + FATP** process control on the factory floor.

##### Negotiating without leverage

The hardest supplier problems are the ones where you hold no contractual claim on the counterparty.

An optical module on a line I ran began failing the customer's cosmetic inspection, and we stopped shipping. A stopped line is expensive in a specific way: fixed cost accrues every day whether or not anything comes off it, and the delivery commitment sat with the customer, not with us.

The normal next step is to go to the supplier, demand the process records, and find what changed. That route was closed. The module supplier had been **nominated by the customer and had no contract with us** — no audit right, no information right, no obligation to open anything. Our own line checked clean within a week, which narrowed the cause to the module and left us with a diagnosis we had no standing to reach.

So I stopped trying to compel and started building an alternative. I qualified a **second-source module** — not as a threat, as an option we were genuinely prepared to take — and worked through the customer's own supply-chain team to press the incumbent. With a credible alternative on the table, the change history came out: the supplier had switched adhesive vendors a month earlier, and the new adhesive outgassed during vacuum assembly and condensed inside the lens.

The second source never carried full volume and was never meant to. **A qualified alternative you don't intend to use is still the only real leverage a buyer has — and it buys information at least as often as it buys price.**

Then the cost. With the line down about a month, I built the claim against the customer line by line — materials, rework, idle direct labour, overhead — rather than as a single figure, because one number invites one argument while a breakdown forces the conversation onto each line. The customer disputed full liability. The claim held wherever it was evidenced, and we gave up the idle-labour line deliberately: those operators could be redeployed, and the account was worth more than the item. **What you recover is what you can evidence, and what you concede should be chosen rather than surrendered.**

#### University of Maryland — Supply Chain Analyst & Research Assistant · College Park · 2020 – 2022

- Owned the semiconductor portion of an NDIA study on supply-chain risk in defence-critical equipment — mapping single points of failure using public data only; covered by National Defense Magazine.

- Research became the **Springer-published** *MiLB → MLB promotion prediction model*, featured in *Maryland Today*.

*Earlier: Substitute Military Service at Taoyuan International Airport (2016 – 2017) — honorably discharged with a Ministry of the Interior certificate of merit.*

---

## Education

- **MBA + MS Information Systems** — University of Maryland, College Park (2020 – 2022), Smith Fellow Scholarship
  - MBA major in **Supply Chain Management**; MS in Information Systems with a machine-learning focus — the two halves I still use together.
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

## Also Built in Public

I tend to solve my own problems by building something and open-sourcing it.

- **[multi-lens-thinking](https://github.com/lch99310/multi-lens-thinking)** — a six-stage AI reasoning pipeline that routes a question through four parallel analytical lenses before answering.
- **[WikiPolyDraft](https://github.com/lch99310/WikiPolyDraft)** — an open-source tool for AI-drafted Wikipedia translations. First article: **Barangaroo**, Sydney.

I also write about how humans and AI should divide the work — [Beyond the Interface: Designing a Common Language for Humans and AI](/posts/beyond-the-interface-designing-a-common-language-for-humans-and-ai/). Most people are still using AI without having decided what they think about it; that essay is what I think.

---

## Let's Talk

If you're working on the commercial and physical side of AI infrastructure — data centre capacity, siting and power, procurement and contracts, or the supply chains underneath — especially in Sydney or across APAC, I'd genuinely enjoy comparing notes. I'm equally happy being told where my reading of the market is wrong.

Reach me by [email](mailto:lch99310@gmail.com) or on [LinkedIn](https://www.linkedin.com/in/lch99310/).
