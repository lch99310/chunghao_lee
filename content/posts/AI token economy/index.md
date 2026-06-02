---
date: 2026-06-02T00:00:00+00:00
title: "【Passport to AI Era】When Intelligence Becomes a Commodity: Sizing the 2030 Token Economy Depends on How Smart Commodity Models Become"
tags: ["AI", "Passport to AI Era", "中文"]
thumbnail: "pic.png"
math: true
draft: false
---

## 當智慧成為大宗商品：估算 2030 的詞元經濟，取決於 2030 年的大眾模型會聰明到什麼程度

> *"Intelligence is about to be a commodity."*
> — Jensen Huang, NVIDIA CEO, 2025 [¹²]

This single statement defines the shape of the entire AI industry in 2030.

這一句話，定義了整個 AI 產業 2030 年的形狀。

---

For the past two decades, the pricing unit for SaaS has been the **subscribed user** — Salesforce, Slack, and Microsoft 365 all monetize on a per-user basis. But what Huang meant is that AI's pricing unit isn't the "human"; it's the **token**. A token is fundamentally different from a subscription: it is a metered output, akin to a kilowatt-hour of electricity, a cubic meter of natural gas, or a barrel of crude oil. If intelligence truly is a commodity, then the pricing logic of generative AI is essentially that of a public utility — not software subscription.

過去二十年，SaaS 的計價單位是**訂閱用戶數**——Salesforce 按用戶收錢、Slack 按用戶收錢、Microsoft 365 按用戶收錢。但黃仁勳這句話的意思是：AI 的計價單位不是「人」，是「**詞元（token）**」。詞元跟訂閱不是同一種東西——它是按量計費的產出，跟度電、跟立方公尺天然氣、跟一桶原油同類。如果 intelligence 真的是大眾商品（commodity），那生成式 AI 的計價邏輯，本質上是一門公用事業的邏輯，不是軟體訂閱。

Commodity markets share a distinct characteristic: **their scale can be estimated.** You have volume on one side and price on the other. Goldman Sachs provided us with one curve, and the launch pricing of 50 models over the past five years gave us the other. Multiply the two, subtract the underlying electricity costs (the true marginal cost in a commodity market), and you get an estimable market size. The conclusion? It is smaller than you might expect.

而大眾商品市場有一個特性：**規模可以被估算**。一邊是量、一邊是價。高盛給了我們其中一條曲線，而過去五年五十個模型的發布定價給了我們另一條。兩者相乘，再扣掉成本後剩下的那層電費（也就是大眾商品市場真正的邊際成本），就是一個可以估算的市場規模。而結論，比你預期的小。

---

## The Engine of Volume: 120 Quadrillion Tokens per Month // 量的引擎:每月 120 千兆 token

In May 2026, Goldman Sachs published its Agentic AI investment thesis. The headline figure became the anchor for all downstream calculations in this article: **token consumption will multiply by 24× between 2026 and 2030, reaching 120 quadrillion tokens per month by 2030** — covering the total token volume across all global AI inference scenarios. [¹]

高盛在 2026 年 5 月發表它的 Agentic AI 投資論點，標題數字成了這整篇文章所有下游計算的錨點：**詞元消耗量會在 2026 到 2030 年間放大 24 倍，到 2030 年達到每月 120 千兆（quadrillion）個 token**——這涵蓋的是全球所有 AI 推論場景的總 token 量。[¹]

**Annualizing the monthly figure // 把月度數字年化：**

\[
12 \text{ months} \times 120 \text{ Q tokens/month} = 1{,}440 \text{ Q} = 1.44 \text{ quintillion tokens/year} = 1.44 \times 10^{18} \text{ tokens/year}
\]

This number is so astronomically large that it loses its intuitive meaning. Let's convert it:

這個數字大到讓我們失去感覺，換算一下：

**Per-capita normalization // 人均換算：**

\[
1.44 \times 10^{18} \text{ tokens} \div 8 \text{ B people} \approx \mathbf{180 \text{ M tokens per person, per year}}
\]

Translated into reading volume, this is equivalent to every human on Earth digesting **360 books' worth of AI-generated text per year**. Of course, that's not the reality — the vast majority of these tokens will be consumed by software, not humans. Agents talking to agents, agents talking to APIs.

換算成閱讀量，相當於全人類每人每年消化掉 **360 本書份量的 AI 生成文字**。當然，現實不是這樣——絕大多數的 token，會由軟體消化掉，而不是人。Agent 在跟 agent 對話、agent 在跟 API 對話。

This is the "volume" side of the equation. The truly fascinating work happens on the "price" side.

這就是公式裡「量」的這一邊。真正有意思的工作，發生在「價」的那一邊。

---

## The Price Curve: A Dual-Track Structure of Frontier and Commodity Models // 價的曲線:前沿模型與大眾模型的雙軌結構

In November 2024, Andreessen Horowitz's Guido Appenzeller coined the term **"LLMflation"** to describe what he called "the fastest cost-deflation curve in tech history": assuming fixed model capabilities, inference prices drop by 10× annually. [²] Epoch AI's March 2025 follow-up was even more aggressive — depending on the benchmark, annual price decay for equivalent capabilities ranged from **9× to 900×, with a median of 50×**, accelerating to 200× after January 2024. [³]

2024 年 11 月，Andreessen Horowitz 的 Guido Appenzeller 發明了「**LLMflation**」這個詞，形容它是「科技史上最快的成本通縮曲線」：在模型能力固定的前提下，推論價格每年下跌 10 倍。[²] Epoch AI 在 2025 年 3 月的後續研究更激進——根據不同 benchmark，同等能力的推論價格年衰減介於 **9 到 900 倍之間，中位數 50 倍**，2024 年 1 月後加速到 200 倍。[³]

But these figures measure *capability-adjusted* prices. They tell you how much cheaper a GPT-4 tier model becomes, not what people will actually pay for inference in 2030. The frontier keeps moving up. Buyers in 2030 won't be paying for GPT-4 capabilities; they will be paying for the **frontier of 2030**.

但這些數字測的是「**能力調整後的價格**」。它告訴你「跑一個 GPT-4 等級的模型變便宜多少」，沒告訴你 2030 年人們實際會付多少錢買模型推理。因為前沿模型一直在往上移。2030 年的買家不是付錢買 GPT-4 等級的能力，他們付的錢買的是 **2030 年的前沿模型**。

To forecast revenue, we look at **absolute prices** — the actual unit prices announced at the time of each model's release. We built a dataset of 50 models, from GPT-3 davinci in November 2021 to Claude Opus 4.8, GPT-5.5, and the DeepSeek V4 series in mid-2026. The blended price uses Artificial Analysis's standard 7:2:1 (cache : input : output) weighting, with cache priced at 10% of input. [⁴]

要做營收預測，要看的是**絕對價格**——模型發布當下實際公告的單價。建立 50 個模型的數據集，從 2021 年 11 月的 GPT-3 davinci 到 2026 年中的 Claude Opus 4.8、GPT-5.5、DeepSeek V4 系列。Blended price 採用 Artificial Analysis 標準的 7:2:1（cache : input : output）加權，cache 假設為 input 的 10%。[⁴]

**Blended price formula // Blended 公式：**

\[
\text{Blended} = \frac{7 \times \text{cache} + 2 \times \text{input} + 1 \times \text{output}}{10}
\]

With \(\text{cache} = 0.1 \times \text{input}\), this simplifies to // 由於 \(\text{cache} = 0.1 \times \text{input}\)，化簡為：

\[
\text{Blended} = \frac{2.7 \times \text{input} + \text{output}}{10}
\]

We segment the market into two distinct tiers:

把市場切成兩個 tier 來看：

### Frontier Tier // 前沿層

Vendor flagships at the time of release — GPT-4, Claude Opus, Gemini Pro, GPT-5 / 5.4 / 5.5, Grok 4.3, Qwen Max, Mistral Medium, Nova Pro. Running log-linear regression on 27 models yields \(R^2 = 0.21\), slope \(\div 1.49\times/\text{year}\). Extrapolating to mid-2030:

各家廠商在發布當下定位為最高能力的旗艦——GPT-4、Claude Opus 系列、Gemini Pro 系列、GPT-5 / 5.4 / 5.5、Grok 4.3、Qwen Max、Mistral Medium、Nova Pro。對 27 個模型跑對數線性回歸，\(R^2 = 0.21\)，斜率 \(\div 1.49\times/\text{year}\)。外推到 2030 年中：

> **Frontier 2030 blended price = \$0.45 / 1M tokens**

### Commodity Tier // 大眾層

Cost-optimized variants from major vendors (mini, flash, haiku, nano) plus open-source commodity models. Regression across 23 samples shows a near-zero slope, so we abandon the regression and use a single anchor: **DeepSeek V4 Pro at $0.18/M** — the flagship of the most representative commodity-tier vendor, serving as the benchmark for current commodity capability. Holding flat through 2030:

各家廠商發布的成本最佳化變體（mini、flash、haiku、nano）以及開源大眾模型。對 23 個樣本跑回歸時斜率幾乎為零，所以大眾層不用回歸線，改用一個錨點：**DeepSeek V4 Pro = \$0.18/M**——大眾層中最具代表性開源模型的旗艦，作為「大眾層當下能力的對標基準」。同樣的策略套到 2030 年：

> **Commodity 2030 blended price = \$0.18 / 1M tokens**

Two lines, one structure: **$0.45/M vs. $0.18/M, a 2.5× spread**. This ratio is the core geometry of the 2030 inference market.

兩條線、一個雙軌結構：**\$0.45/M vs. \$0.18/M，差 2.5 倍**。這個比例就是 2030 年推理市場的核心幾何。

---

## Three Scenario Calculations: Deriving the Revenue Pool // 三個情境算式:營收池的推導

By fixing volume at 1.44 quintillion tokens per year and bracketing price with the two anchors, the revenue pool resolves into three scenarios. **What we are calculating is the implied market size of the entire token economy at API-equivalent pricing** — not pure API revenue, but the total volume × the equivalent ASP (Average Selling Price) converted from all monetization formats (subscriptions, enterprise contracts, embedded usage) at API blended price.

把量固定在每年 1.44 百萬兆 token，價格用兩個錨點界定，營收池分解成三個情境。**這裡算的是「整個詞元經濟在 API 等價定價下的隱含市場規模」**——不是純 API 營收，而是把所有形式（訂閱、企業合約、內嵌使用）以 API blended price 換算後的 ASP（Average Selling Price，平均售價）× 總量。

### Scenario A — Frontier Dominance // 情境 A:前沿主導

All traffic at flagship pricing — the upper bound. Effectively impossible (no CIO runs customer service on Claude Opus), but defines the ceiling.

全部 token 跑在旗艦定價——上界。實際不可能（沒有 CIO 會用 Claude Opus 跑客服 agent），但設定天花板。

\[
1.44 \times 10^{12} \text{ M-tokens} \times \$0.45/\text{M} = \mathbf{\$648 \text{ B / year}}
\]

### Scenario B — Commodity Dominance // 情境 B:大眾主導

All traffic at DeepSeek V4 Pro pricing — the lower bound. Assumes complete commoditization to the open-source flagship.

全部 token 跑在 DeepSeek V4 Pro 定價——下界。假設市場完全 commoditize 到開源旗艦。

\[
1.44 \times 10^{12} \times \$0.18/\text{M} = \mathbf{\$259 \text{ B / year}}
\]

### Scenario C — The 80/20 Rule // 情境 C:20/80 法則

20% of tokens flow through frontier (high-value reasoning, complex agentic planning, research, quant), 80% through commodity (routine tool-calling, retrieval, summarization, customer service, simple agents). **This is our baseline.**

20% token 跑前沿模型（高價值推理、複雜 agentic 規劃、科研與量化），80% token 跑大眾模型（例行 tool-calling、檢索、摘要、客服、簡單 agent 工作流）。**這是基準情境。**

\[
\text{ASP} = 0.20 \times \$0.45 + 0.80 \times \$0.18 = \mathbf{\$0.234 / \text{M tokens}}
\]

\[
\text{Revenue} = 1.44 \times 10^{12} \times \$0.234 = \mathbf{\$337 \text{ B / year}}
\]

### Summary // 三情境總覽

| Scenario 情境 | ASP ($/M) | Annual Revenue 年營收 |
|---|---:|---:|
| **A — Frontier-led** 前沿主導 | $0.45 | **$648 B** |
| **C — 80/20 Baseline** 20/80 基準 | $0.234 | **$337 B** |
| **B — Commodity-led** 大眾主導 | $0.18 | **$259 B** |

The three scenarios converge into a defensible range: **$259B to $648B, baseline $337B**. For calibration: Bain & Company's 2024 AI market estimate puts AI products and services TAM at $780–990 B by 2027 (including the entire application layer) [⁵]; McKinsey's broader GenAI economic value estimate runs $2.6–4.4 trillion annually (including productivity gains) [⁶]. Our calculation captures only "revenue driven by pure tokens" — a subset of the **TAM (Total Addressable Market)** corresponding specifically to the inference layer.

三個情境收斂在合理區間：**\$259B 到 \$648B，基準估計 \$337B**。對標 Bain & Company 2024 年估算（2027 年 AI TAM \$780–990 B，含整個應用層）[⁵]，與 McKinsey 廣義 GenAI 經濟價值（每年 \$2.6–4.4 兆，含生產力收益）[⁶]——我們算的是「**純詞元帶來的營收**」（**TAM, Total Addressable Market** 中對應推理層的子集）。

---

## The Power Floor: What Remains After Stripping Down Costs // 電力底線:把成本拆解剩下的那一層

If the price curve constantly approaches marginal cost, what is marginal cost actually made of? Here the analysis gains real predictive power — **at extreme token volumes, the cost of a single token is roughly equal to the cost of the electricity to produce it.**

如果價格線一直往邊際成本逼近，那邊際成本到底由什麼組成？這個分析在這裡才真正有預測力——**在極大量 token 的量級上，一個 token 的成本，大約等於生產它所消耗那一度電的成本**。

Today's full inference **TCO (Total Cost of Ownership)** breakdown: GPU amortization 40–50%, electricity 15–25%, networking and cooling 15%, software ops 10%, training amortization 5–10% (per SemiAnalysis and Epoch AI teardowns of H100-class deployments) [⁷]. Electricity is a minority share — but that is because today's volume is small. At 120 quadrillion tokens per month in 2030, **all fixed costs amortize to near zero**. What remains is variable cost. And variable cost is overwhelmingly electricity.

今天完整推理 **TCO（Total Cost of Ownership，總體擁有成本）**拆解：GPU 攤提 40–50%、電費 15–25%、網路與冷卻 15%、軟體運維 10%、訓練成本攤提 5–10%（SemiAnalysis、Epoch AI 對 H100 級部署的拆解）[⁷]。電力佔比不大——但這是因為今天的量還不夠大。在 2030 年每月 120 千兆 token 量級面前，**所有固定成本會被攤到趨近於零**。剩下的就只有變動成本。而變動成本，絕大部分是電。

We assume **0.5 kWh per million tokens** — a mid-2030 average for a workload mix dominated by efficient **MoE (Mixture-of-Experts)** architectures and smaller models, sharply down from Epoch AI's 1–5 kWh/M for today's GPT-4o, reflecting 5–8× efficiency gains across the Blackwell → Rubin → Vera Rubin roadmap. [⁸]

假設**每百萬 token 0.5 kWh**——2030 年中，以效率型 **MoE（Mixture-of-Experts，混合專家架構）**與小模型為主的工作負載平均，比 Epoch AI 今日 GPT-4o 估算的 1–5 kWh/M 大幅下修，反映 Blackwell → Rubin → Vera Rubin 路線圖上的 5–8 倍效率提升。[⁸]

### Power cost across three key geographies // 三個關鍵地理的電費

| Geography 地理 | Industrial Rate 電費 | Unit Cost 單位電費 | Annual Industry Bill 年產業電費 |
|---|---:|---:|---:|
| 🇨🇳 **China** — Western clusters (Inner Mongolia, Guizhou, Gansu) [⁹ᵃ] 中國西部叢集 | $0.056/kWh | $0.028/M | **$40.3 B** |
| 🇺🇸 **United States** — Hyperscaler **PPA (Power Purchase Agreement)** avg [⁹ᵇ] 美國 hyperscaler 採購均價 | $0.07/kWh | $0.035/M | **$50.4 B** |
| 🇦🇺 **Australia** — Sydney datacenter, large negotiated contract [⁹ᶜ] 澳洲悉尼資料中心 | $0.20/kWh | $0.100/M | **$144 B** |

AI inference workloads concentrate primarily in US and Chinese data centers. Using a US-China blended rate of **$0.065/kWh** as global baseline:

AI 推理實際運轉的地理分佈以美國與中國資料中心為主，用中美混合 **\$0.065/kWh** 作為全球加權基準：

\[
\text{Global unit cost} = 0.5 \times \$0.065 = \mathbf{\$0.0325 / \text{M tokens}}
\]

\[
\text{Global annual electricity bill} = 1.44 \times 10^{12} \times \$0.0325 \approx \mathbf{\$47 \text{ B / year}}
\]

This is the absolute floor — no further compression possible. Translated into physical power:

這是無法再壓縮的絕對地板。換算成電量：

\[
\$47 \text{ B} \div \$0.065/\text{kWh} \approx \mathbf{723 \text{ TWh / year}}
\]

> **This roughly equals the combined annual electricity consumption of France (~430 TWh) and the United Kingdom (~280 TWh) [¹⁰], or about 18% of total US electricity demand.**
> 
> **這大約等於法國全年用電（約 430 TWh）+ 英國全年用電（約 280 TWh）的總和，或者整個美國年用電量的 18%。**

In other words, **AI inference alone in 2030 will impose a power burden equal to two major European economies** — which is why hyperscalers began signing 20-year nuclear PPAs in 2024.

換句話說，**2030 年光是 AI 推理本身，就是一個歐洲兩大經濟體規模的用電負擔**——這也是為什麼超大規模雲廠商從 2024 年起就開始大舉跟核電業者簽 20 年期 PPA。

---

## Hypothetical Deduction: What If Everyone Uses DeepSeek in 2030? // 假想推理:如果 2030 年大家都用 DeepSeek

This is the scenario most worth putting on the table.

接下來是這篇文章最值得放在桌上推一遍的情境。

At 120 quadrillion tokens per month, fixed costs amortize to near zero, leaving only the electricity variable cost line. If by 2030, at the current iteration velocity, even open-source ultra-cheap models like DeepSeek (priced at $0.06–$0.18/M) reach a "good enough" capability level — good enough to write emails, summarize documents, run customer service agents, handle most **RAG (Retrieval-Augmented Generation)** and tool-calling — what happens?

在每月 120 千兆 token 量級面前，固定成本攤平到趨近於零，只剩下電力這條變動成本線。如果到了 2030 年，按照現在這個迭代速度，連 DeepSeek 這樣開源、便宜、單價 \$0.06–\$0.18/M 的模型，能力也已經提升到「夠用」的程度——夠用來寫 email、夠用來摘要文件、夠用來跑客服 agent、夠用來做大多數 **RAG（Retrieval-Augmented Generation，檢索增強生成）**與 tool-calling——會發生什麼事？

**The answer:** the vast majority of buyers will choose DeepSeek-tier models because they are cheap. Only a tiny fraction of use cases demanding peak cognitive power (frontier research, quant finance, drug design, complex agentic planning) will employ frontier models.

**答案是**：絕大多數的買家會選 DeepSeek 等級的模型。因為便宜。只有極少數需要頂尖智力的場景（前沿科研、金融量化、藥物設計、複雜 agentic 規劃）才會採用前沿模型。

### Modeling the scenario // 算出這個情境

**Mix:** 95% commodity tokens at $0.08/M (between V4 Flash $0.06 and V4 Pro $0.18) + 5% frontier at $0.45/M

**配比**：95% 跑大眾模型（保守取 \$0.08/M，介於 V4 Flash \$0.06 與 V4 Pro \$0.18 之間）+ 5% 跑前沿（\$0.45/M）

\[
\text{ASP} = 0.95 \times \$0.08 + 0.05 \times \$0.45 = \mathbf{\$0.0985 / \text{M tokens}}
\]

\[
\text{Revenue} = 1.44 \times 10^{12} \times \$0.0985 = \mathbf{\$142 \text{ B / year}}
\]

\[
\text{Gross profit after power} = \$142 - \$47 = \mathbf{\$95 \text{ B / year}}
\]

\[
\text{Gross margin} = \$95 / \$142 \approx \mathbf{67\%}
\]

### The inflection // 拐點

> **This is the inflection point of the article.**
> **這就是這篇文章的拐點。**

Goldman's 120 quadrillion token volume × DeepSeek-ified unit price yields a market of just **$142 B**. Strip out electricity, and the net value pool shrinks to **$95 B**. Against the combined 2025 AI CapEx of Microsoft, Google, Meta, and Amazon (already past $300 B/year) [¹¹], this figure cannot support the overarching capital thesis.

高盛的 120 千兆 token 量級 × DeepSeek 化單價，市場規模只有 **\$142 B**。扣掉電費，全產業淨值剩 **\$95 B**。對應今天 Microsoft、Google、Meta、Amazon 四家加起來的 AI 資本支出（2025 年已突破 \$300 B/年）[¹¹]，這個數字撐不起整個資本論點。

In other words, if the commodity capability curve crosses "good enough" by 2030, **Goldman's 120 quadrillion is not enough**. Reverse-engineering what *would* be required for a $1 trillion market:

換句話說，如果大眾模型的能力曲線真的在 2030 年到了「夠用」這個臨界點，**高盛的 120 千兆是不夠的**。反推 \$1 兆市場需要的條件：

### Reverse engineering for a $1T market // 反推 $1 兆市場

**Reverse 1 — Required volume at DeepSeek ASP ($0.0985/M) // DeepSeek 化單價下的所需量：**

\[
\$10^{12} \div \$0.0985/\text{M} \times 10^{6} = 1.015 \times 10^{19} \text{ tokens/year}
\]

\[
\Rightarrow \mathbf{846 \text{ Q / month} \approx 7.05\times \text{ Goldman's forecast}}
\]

**Reverse 2 — Required volume at 80/20 blended ASP ($0.234/M) // 20/80 法則混合單價下的所需量：**

\[
\$10^{12} \div \$0.234/\text{M} \times 10^{6} = 4.27 \times 10^{18} \text{ tokens/year}
\]

\[
\Rightarrow \mathbf{356 \text{ Q / month} \approx 2.97\times \text{ Goldman's forecast}}
\]

**Reverse 3 — Required ASP at Goldman's 120Q volume // 高盛 120 千兆量下所需的 ASP：**

\[
\$10^{12} \div 1.44 \times 10^{12} = \mathbf{\$0.694 / \text{M tokens}}
\]

To prop up a $1 T market at Goldman's volume, average unit price must hold around **$0.70/M** — close to today's Mistral Medium 3.5 ($2.10) or Kimi K2.6 ($0.70). This means the market **cannot** fully succumb to DeepSeek-ification; massive token volume must remain in frontier and mid-tier bands.

要支撐 \$1 兆市場，平均單價必須維持在 **\$0.70/M** 左右——接近今日 Mistral Medium 3.5（\$2.10）或 Kimi K2.6（\$0.70）的水準。這意味著市場**不能**完全 DeepSeek 化，必須有大量 token 停留在前沿與中價帶。

> This reverse path reveals a conclusion unstated in Goldman's report but deeply embedded in its forecast: **the trillion-dollar AI inference narrative requires two things to happen simultaneously** — Goldman's volume must materialize, *and* the market must avoid full commoditization, with prices anchoring in the middle band. If either fails, the narrative collapses.
>
> 這條反推路徑指出一個沒被高盛報告本身點明、但隱含在那份預測裡的結論：**整個兆美元 AI 推理市場敘事，需要兩件事同時發生**——一是高盛預測的量真的出現，二是市場沒有完全 DeepSeek 化、價格能停在「中間帶」。少了任一條，敘事就不成立。

---

## Silicon Valley's Second Half: Two Numbers Dictating the Future // 矽谷的下半場:兩個數字，決定未來走向

The trajectory of the token economy is decided by a tug-of-war: **model capability curve above, electricity floor below, the dynamic "good enough" line moving between them.**

詞元經濟的走向由這場拉鋸決定：**上方是模型能力曲線，下方是電力地板，中間夾著「夠用」這條動態移動的水平線。**

### Two scenarios, one order of magnitude apart // 兩個情境、相差一個量級

| If "good enough" line lands at... | ASP | Market | Post-power | Margin |
|---|---:|---:|---:|---:|
| **GPT-5 / Claude 4** capability tier 等級 | $0.234/M | $337 B | $290 B | 86% |
| **DeepSeek-class** capability tier 等級 | $0.099/M | $142 B | $95 B | 67% |

If "good enough" stalls near GPT-5 / Claude 4 — meaning a tangible capability gap remains for true frontier applications (multi-step reasoning, scientific discovery, complex agentic planning) — the 80/20 blended ASP holds above $0.234/M. Goldman's 120 Q volume supports a baseline **$337 B market**, $290 B post-electricity, 86% gross margin. A healthy market, but still some distance from a trillion dollars.

如果「夠用」的水平線在 2030 年之前停在 GPT-5 / Claude 4 這個高度——真正前沿應用跟大眾模型有實質落差，需要使用前沿模型——那 20/80 法則的混合 ASP 維持在 \$0.234/M 以上，高盛的 120 千兆量撐起 **\$337 B 的基準市場**，扣電後 \$290 B，毛利率 86%。健康市場，但跟「兆美元」還有一段距離。

If "good enough" drops to DeepSeek-class — commodity models swallow 95% of commercial agentic workloads — Goldman's volume needs to multiply by 7× just to sustain the trillion-dollar narrative. Otherwise the total market caps at **$142 B**, $95 B post-electricity — a revenue pool smaller than today's SaaS market.

如果「夠用」的水平線降到 DeepSeek 等級——大眾模型的能力涵蓋 95% 的商業 agentic 工作負載——那高盛的量還要再翻 7 倍，才能撐起兆美元的敘事。否則整個市場只有 **\$142 B**，扣電後 \$95 B，是一個比今天 SaaS 市場還小的池子。

Where the "good enough" line moves fundamentally depends on **how high commodity models can push their capabilities before 2030**. If open-source MoE architectures, DeepSeek-style training efficiency, and next-generation budget inference hardware enable commodity models to cover the vast majority of commercial agentic workloads, the market converges on price naturally. **Frontier pricing power will not be held by model vendors; it will be dictated by the commodity capability curve.**

「夠用線」往哪邊走，本質上取決於**大眾模型在 2030 年之前能把能力推到多高**。如果開源 MoE 架構、DeepSeek 式的訓練效率，以及下一代平價推理硬體，能讓大眾模型涵蓋大多數商業 agentic 工作負載，市場自然完成價格收斂。**前沿模型的定價權不會被模型廠商守住，而會被大眾模型的能力曲線替市場決定。**

This is why the real question this article asks is not *"How big is the 2030 TAM?"* — it is *"How smart will commodity models become by 2030?"*

這也是為什麼這篇文章真正在問的，不是「2030 年 TAM 多大」，而是**「2030 年的大眾模型，會聰明到什麼程度」**。

> **Two numbers, separated by an order of magnitude. The entire second half of Silicon Valley's game is betting on this single line.**
>
> **兩個數字，差了一個量級。整個矽谷的下半場，賭的就是這條線。**

---

## Sources / 資料來源

[¹] Goldman Sachs Research, *Decoding the Agentic Economy*, Jim Schneider, May 2026. [GS Insights](https://www.goldmansachs.com/insights/articles/ai-agents-forecast-to-boost-tech-cash-flow-as-usage-soars) · [ZeroHedge 整理](https://www.zerohedge.com/markets/120-quadrillion-tokens-monthly-2030-goldmans-deep-dive-coming-agentic-economy)

[²] a16z, *Welcome to LLMflation*, Guido Appenzeller, Nov 2024. [a16z.com](https://a16z.com/llmflation-llm-inference-cost/)

[³] Epoch AI, *LLM inference prices have fallen rapidly but unequally*, Cottier et al., Mar 2025. [epoch.ai](https://epoch.ai/data-insights/llm-inference-price-trends)

[⁴] Artificial Analysis — blended pricing methodology & current prices. [artificialanalysis.ai](https://artificialanalysis.ai/) · 歷史定價交叉參考 [TokenMix Research Lab](https://tokenmix.ai/blog/ai-pricing-trends-history)

[⁵] Bain & Company, *Technology Report 2024: AI Market* — 2027 AI TAM $780–990B（含應用層）

[⁶] McKinsey Global Institute, *The economic potential of generative AI*, Jun 2023 — 年經濟價值 $2.6–4.4 兆（含生產力）

[⁷] SemiAnalysis, *Inference Race To The Bottom*, Dec 2023 + InferenceX 系列 [newsletter.semianalysis.com](https://newsletter.semianalysis.com/) · Introl Blog, *Inference Unit Economics*, Feb 2026 [introl.com](https://introl.com/blog/inference-unit-economics-true-cost-per-million-tokens-guide)

[⁸] Epoch AI, *How much energy does ChatGPT use?* [epoch.ai/gradient-updates](https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use) — GPT-4o 每次 query ≈ 0.3 Wh。本文 0.5 kWh/M 為 2030 假設，含 Blackwell → Rubin 5–8× 效率提升

[⁹ᵃ] China Briefing 2025 · [TechChannel 2025](https://techchannel.news/china-cuts-data-centre-energy-costs-to-rev-up-homegrown-chip-adoption/)（內蒙古/貴州/甘肅補貼至 ¥0.4/kWh）

[⁹ᵇ] EIA Industrial Electricity 2024 + hyperscaler PPA 折扣產業常態估計

[⁹ᶜ] [GlobalPetrolPrices.com Sep 2025](https://www.globalpetrolprices.com/Australia/electricity_prices/) · Canstar 2025 業務用電報告

[¹⁰] 法國年用電量 ≈ 430 TWh、英國 ≈ 280 TWh，出自 IEA / RTE / Ofgem 2024 統計

[¹¹] Microsoft / Alphabet / Meta / Amazon 2025 資本支出指引彙整，Pivotal Research + Morgan Stanley 估算合計 $300B+

[¹²] Jensen Huang, NVIDIA — *"Intelligence is about to be a commodity"*, [Medium 整理](https://medium.com/@arihantplus23/nvidias-ceo-said-intelligence-is-a-commodity-he-s-right-and-it-changes-everything-33c201ca1c4f)

---
*© Chung-Hao Lee. All Rights Reserved.
All content on this webpage—including but not limited to text, images, design, code, and multimedia materials—is protected under the international copyright treaties. Unauthorized reproduction, modification, distribution, public transmission, or commercial use is strictly prohibited. Legal action will be taken against infringement.* <br>
*© 李崇豪。保留所有權利。
本網頁之內容（包括但不限於文字、圖片、設計、程式碼及多媒體素材）均受國際著作權條約保護。未經書面授權，嚴禁任何形式之複製、改作、散布、公開傳輸或商業利用。侵權者將依法追訴。*
