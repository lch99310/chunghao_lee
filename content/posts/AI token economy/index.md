+++
date = '2026-06-02T00:00:00+00:00'
title = "【Passport to the AI Era】When Intelligence Becomes a Commodity: Sizing the 2030 Token Economy Depends on How Smart Commodity Models Become"
tags = ['AI', 'Passport to the AI Era', '中文']
thumbnail = 'pic.png'
+++

## 當智慧成為大宗商品：估算 2030 的詞元經濟，取決於 2030 年的大眾模型會聰明到什麼程度

> "Intelligence is about to be a commodity." This statement, made publicly by NVIDIA CEO Jensen Huang in 2025 [¹²], single-handedly defines the shape of the entire AI industry in 2030.

> 「Intelligence is about to be a commodity.」這是 NVIDIA CEO 黃仁勳 2025 年公開講過的一句話 [¹²]。一句話，定義了整個 AI 產業 2030 年的形狀。

For the past two decades, the pricing unit for SaaS has been the subscribed user — Salesforce, Slack, and Microsoft 365 all monetize on a per-user basis. But what Huang meant is that AI's pricing unit isn't the "human"; it's the "token." A token is fundamentally different from a subscription: it is a metered output, akin to a kilowatt-hour of electricity, a cubic meter of natural gas, or a barrel of crude oil. If intelligence truly is a commodity, then the pricing logic of generative AI is essentially that of a public utility, not software subscription.

過去二十年，SaaS 的計價單位是訂閱用戶數——Salesforce 按用戶收錢、Slack 按用戶收錢、Microsoft 365 按用戶收錢。但黃仁勳這句話的意思是：AI 的計價單位不是「人」，是「詞元（token）」。詞元跟訂閱不是同一種東西——它是按量計費的產出，跟度電、跟立方公尺天然氣、跟一桶原油同類。如果 intelligence 真的是大眾商品（commodity），那生成式 AI 的計價邏輯，本質上是一門公用事業的邏輯，不是軟體訂閱。

Commodity markets share a distinct characteristic: their scale can be estimated. You have volume on one side and price on the other. Goldman Sachs provided us with one curve, and the launch pricing of 50 models over the past five years gave us the other. Multiply the two, subtract the underlying electricity costs (which represent the true marginal cost in a commodity market), and you get an estimable market size. The conclusion? It is smaller than you might expect.

而大眾商品市場有一個特性：規模可以被估算的。一邊是量、一邊是價。高盛給了我們其中一條曲線，而過去五年五十個模型的發布定價給了我們另一條。兩者相乘，再扣掉成本後剩下的那層電費（也就是大眾商品市場真正的邊際成本），就是一個可以估算的市場規模。而結論，比你預期的小。

---

## The Engine of Volume: 120 Quadrillion Tokens per Month // 量的引擎：每月 120 千兆 token

In May 2026, Goldman Sachs published its Agentic AI investment thesis. The headline figure became the anchor for all downstream calculations in this article: token consumption will multiply by 24× between 2026 and 2030, reaching **120 quadrillion tokens per month** by 2030 — covering the total token volume across all global AI inference scenarios. [¹]

高盛在 2026 年 5 月發表它的 Agentic AI 投資論點，標題數字成了這整篇文章所有下游計算的錨點：詞元消耗量會在 2026 到 2030 年間放大 24 倍，到 2030 年達到**每月 120 千兆（quadrillion）個 token**——這涵蓋的是全球所有 AI 推論場景的總 token 量。[¹]

Let's annualize this monthly figure:

$$
12 \text{ months} \times 120 \text{ quadrillion tokens/month} = 1{,}440 \text{ quadrillion} = 1.44 \text{ quintillion tokens/year} = 1.44 \times 10^{18} \text{ tokens/year}
$$

把這個月度數字年化：

$$
12 \text{ 個月} \times 120 \text{ 千兆 tokens/月} = 1{,}440 \text{ 千兆} = 1.44 \text{ 百萬兆（quintillion）tokens/年} = 1.44 \times 10^{18} \text{ tokens/年}
$$

This number is so astronomically large that it loses its intuitive meaning. So, let's convert it:

$$
1.44 \times 10^{18} \text{ tokens} \div 8 \text{ billion people} \approx \mathbf{180 \text{ million tokens per person, per year}}
$$

這個數字大到讓我們失去感覺，所以這樣換算：

$$
1.44 \times 10^{18} \text{ tokens} \div 80 \text{ 億人口} \approx \mathbf{\text{每人每年約 } 1.8 \text{ 億 tokens}}
$$

Translated into reading volume, this is equivalent to every human on Earth digesting 360 books' worth of AI-generated text per year. Of course, that's not the reality. The vast majority of these tokens will be consumed by software, not humans — agents talking to agents, and agents talking to APIs.

如果換成閱讀量，相當於全人類每人每年消化掉 360 本書份量的 AI 生成文字。當然，現實不是這樣。絕大多數的 token，會由軟體消化掉，而不是人。Agent 在跟 agent 對話、agent 在跟 API 對話。

This represents the "volume" side of the equation, which aligns directionally with other market forecasts on Agentic AI. The truly fascinating work, however, happens on the "price" side.

這就是公式裡「量」的這一邊，跟市場上其他分析 Agentic AI 在預測方向上一致。真正有意思的工作，發生在「價」的那一邊。

---

## The Price Curve: A Dual-Track Structure of Frontier and Commodity Models // 價的曲線：前沿模型與大眾模型的雙軌結構

In November 2024, Andreessen Horowitz's Guido Appenzeller coined the term **"LLMflation"** to describe what he called "the fastest cost-deflation curve in tech history": assuming fixed model capabilities, inference prices drop by 10× annually. [²] Epoch AI's follow-up research in March 2025 was even more aggressive — depending on the benchmark, the annual price decay for equivalent capabilities ranged from 9× to 900×, with a median of 50×, accelerating to 200× after January 2024. [³]

2024 年 11 月，Andreessen Horowitz 的 Guido Appenzeller 發明了「**LLMflation**」這個詞，用來描述他口中「科技史上最快的成本通縮曲線」：在模型能力固定的前提下，推論價格每年下跌 10 倍。[²] Epoch AI 在 2025 年 3 月的後續研究更激進——根據不同 benchmark，同等能力的推論價格年衰減介於 9 到 900 倍之間，中位數 50 倍，2024 年 1 月後加速到 200 倍。[³]

However, these figures measure "capability-adjusted prices." They tell you how much cheaper it gets to run a GPT-4 tier model, but they don't tell you what people will actually pay for model inference in 2030. That's because frontier models keep moving up the stack. Buyers in 2030 won't be paying for GPT-4 capabilities; they will be paying for the frontier AI models of 2030.

但這些數字測的是「能力調整後的價格」。它告訴你「跑一個 GPT-4 等級的模型變便宜多少」，沒告訴你 2030 年人們實際會付多少錢買模型推理。因為前沿模型一直在往上移。2030 年的買家不是付錢買 GPT-4 等級的能力，他們付的錢買的是 2030 年的前沿 AI 模型。

To forecast revenue, we need to look at absolute prices — the actual unit prices announced at the time of a model's release. We constructed a dataset of 50 models, ranging from GPT-3 davinci in November 2021 to Claude Opus 4.8, GPT-5.5, and the DeepSeek V4 series in mid-2026. The blended price uses Artificial Analysis's standard 7:2:1 (cache : input : output) weighting methodology, assuming the cache price is 10% of the input price. [⁴]

要做營收預測，要看的是絕對價格——模型發布當下實際公告的單價。所以透過 50 個模型的資料建立數據集，從 2021 年 11 月的 GPT-3 davinci 到 2026 年中的 Claude Opus 4.8、GPT-5.5、DeepSeek V4 系列。Blended price 採用 Artificial Analysis 標準的 7:2:1（cache : input : output）加權方法，cache 價格假設為 input 的 10%。[⁴]

**Blended Price Formula // Blended 公式：**

$$
\text{Blended} = \frac{7 \times \text{cache} + 2 \times \text{input} + 1 \times \text{output}}{10}
$$

Given that $\text{cache} = 0.1 \times \text{input}$, this simplifies to // 其中 $\text{cache} = 0.1 \times \text{input}$，化簡為：

$$
\text{Blended} = \frac{2.7 \times \text{input} + \text{output}}{10}
$$

We can segment the market into two distinct tiers:

把市場切成兩個 tier 來看：

- **Frontier Models:** The flagship models positioned by vendors as their most capable at the time of release — GPT-4, the Claude Opus series, Gemini Pro series, GPT-5 / 5.4 / 5.5, Grok 4.3, Qwen Max, Mistral Medium, Nova Pro, etc. Running a log-linear regression on these 27 models yields $R^2 = 0.21$ and a slope of $\div 1.49\times/\text{year}$. Extrapolating to mid-2030, the projected blended price for frontier models is **$0.45 / 1M tokens**.

- **前沿模型（frontier）：** 各家廠商在發布當下定位為最高能力的旗艦模型——GPT-4、Claude Opus 系列、Gemini Pro 系列、GPT-5 / 5.4 / 5.5、Grok 4.3、Qwen Max、Mistral Medium、Nova Pro 等。對這 27 個模型跑 log-linear regression（對數線性回歸），$R^2 = 0.21$，斜率 $\div 1.49\times/\text{year}$。把回歸線外推到 2030 年中，前沿模型的 blended price 預測為 **$0.45 / 1M tokens**。

- **Commodity Models:** The cost-optimized variants released by vendors (mini, flash, haiku, nano) and open-source commodity models. Running a regression on these 23 samples shows a slope of nearly zero. Therefore, instead of a regression line, we use an anchor point: **DeepSeek V4 Pro at $0.18 / 1M tokens**, serving as the "most representative flagship among commodity models." DeepSeek is the quintessential open-source commodity model, and V4 Pro is its current flagship — the cleanest reference for "the benchmark of current commodity model capabilities." Applying this same approach to 2030, assuming DeepSeek maintains a similarly flat pricing strategy, the 2030 projection remains **$0.18 / 1M tokens**.

- **大眾模型（commodity）：** 各家廠商發布的成本最佳化變體（mini、flash、haiku、nano）以及開源大眾模型。對這 23 個樣本跑回歸時斜率幾乎為零，所以大眾模型不用回歸線，改用一個錨點：**DeepSeek V4 Pro = $0.18/M**，作為「大眾模型中最具代表的旗艦」。原因是 DeepSeek 是大眾模型中最具代表性的開源模型，V4 Pro 又是它目前的旗艦，這個點最能代表「大眾模型當下能力的對標基準」。同樣的方式套到 2030 年，假設 DeepSeek 仍維持類似的水平線定價策略，大眾模型 2030 預測為 **$0.18 / M tokens**。

Two lines, one dual-track structure: the blended price for frontier models is $0.45/M, and for commodity models, $0.18/M — a 2.5× spread. This ratio forms the core geometry of the 2030 inference market.

兩條線、一個雙軌結構：前沿模型的 blended price 是 $0.45/M、大眾模型的 blended price 是 $0.18/M，差 2.5 倍。這個比例就是 2030 年推理市場的核心幾何。

---

## Three Scenario Calculations: Deriving the Revenue Pool // 三個情境算式:營收池的推導

By fixing the volume at 1.44 quintillion tokens per year and defining the price with these two anchor points, the revenue pool breaks down into three scenarios. What we are calculating is the **"implied market size of the entire token economy at API-equivalent pricing"** — not pure API revenue, but the total volume multiplied by the equivalent ASP (Average Selling Price) converted from all formats (subscriptions, enterprise contracts, embedded usage) using the API blended price.

把量固定在每年 1.44 百萬兆 token，價格用兩個錨點界定，營收池就分解成三個情境。這裡算的是**「整個詞元經濟在 API 等價定價下的隱含市場規模」**——不是純 API 營收，而是把所有形式（訂閱、企業合約、內嵌使用）以 API blended price 換算後的等效 ASP（Average Selling Price，平均售價）× 總量。

### Scenario A — Frontier Model Dominance // 情境 A：前沿模型主導（全部跑旗艦）

$$
1.44 \times 10^{18} \text{ tokens/year} \div 10^{6} \text{ tokens/M} \times \$0.45/\text{M} = 1.44 \times 10^{12} \times \$0.45 = \mathbf{\$648 \text{ B/year}}
$$

This is the upper bound and is highly unlikely to materialize. Most agentic traffic is routine and cost-sensitive; enterprises won't use Claude Opus to power basic customer service agents.

這是上界，幾乎不可能發生——大多數 agentic 流量是常規、且成本敏感的，企業不會用 Claude Opus 跑客服 agent。

### Scenario B — Commodity Model Dominance // 情境 B：大眾模型主導（全部跑 DeepSeek V4 Pro 等級）

$$
1.44 \times 10^{12} \times \$0.18/\text{M} = \mathbf{\$259 \text{ B/year}}
$$

This is the lower bound. It assumes the market becomes entirely commoditized, with everyone using models at the DeepSeek V4 Pro level.

這是下界，假設市場完全大眾模型化（commoditize），所有人都用 DeepSeek V4 Pro 級的模型。

### Scenario C — The 80/20 Rule (Baseline) // 情境 C:20/80 法則（基準情境）

**Weighted unit price // 加權單價：**

$$
(0.20 \times \$0.45) + (0.80 \times \$0.18) = \$0.090 + \$0.144 = \mathbf{\$0.234 / \text{1M tokens}}
$$

**Annual revenue // 年營收：**

$$
1.44 \times 10^{12} \times \$0.234/\text{M} = \mathbf{\$337 \text{ B/year}}
$$

Under this scenario, 20% of tokens run on frontier models (high-value reasoning, complex agentic planning, scientific research, quantitative analysis), while 80% run on commodity models (routine tool-calling, retrieval, summarization, customer service, simple agent workflows). This is the 80/20 rule applied to token workloads, and it serves as our baseline scenario.

20% token 跑前沿模型（高價值推理、複雜 agentic 規劃、科研與量化），80% token 跑大眾模型（例行 tool-calling、檢索、摘要、客服、簡單 agent 工作流）——這是 20/80 法則套到 token 工作負載上的估計。這是文章的基準情境。

The three scenarios converge into a reasonable range: **$259B to $648B**, with a baseline estimate of **$337B**. Compared to Bain & Company's 2024 AI market estimate ($780–990B by 2027, including the entire AI application layer) [⁵], and McKinsey's broader estimate of GenAI's economic value ($2.6–4.4 trillion annually, including productivity gains) [⁶], our calculation focuses strictly on "revenue driven by pure tokens" — a subset of the TAM (Total Addressable Market) corresponding specifically to the inference layer. Naturally, it is smaller than these broader TAMs.

三個情境收斂在一個合理區間：**$259B 到 $648B，基準估計 $337B**。對標 Bain & Company 2024 年的 AI 市場估算（2027 年 $780–990 B，含整個 AI 應用層）[⁵]，與 McKinsey 的廣義生成式 AI 經濟價值估算（每年 $2.6–4.4 兆，含生產力收益）[⁶]——我們算的是「純詞元帶來的營收」（TAM, Total Addressable Market 中對應推理層的子集），所以會小於這些更廣義的 TAM。

---

## The Power Floor: What Remains After Stripping Down Costs // 電力底線:把成本拆解剩下的那一層

If the price curve constantly approaches marginal cost, what exactly constitutes that marginal cost? This is where the analysis truly gains predictive power. **At extreme token volumes, the cost of a single token is roughly equal to the cost of the electricity consumed to generate it.**

如果價格線會一直往邊際成本逼近，那邊際成本到底由什麼組成？這個分析在這裡才真正開始有預測力——**因為在極大量 token 的量級上，一個 token 的成本，大約等於生產它所消耗那一度電的成本**。

Today, the breakdown of total inference TCO (Total Cost of Ownership) is roughly: GPU amortization 40–50%, electricity 15–25%, networking and cooling 15%, software ops 10%, and training cost amortization 5–10% (based on SemiAnalysis and Epoch AI's breakdowns for H100-class deployments) [⁷]. Power isn't the dominant share yet, but that's simply because today's volumes aren't large enough. Faced with the staggering scale of 120 quadrillion tokens per month in 2030, all fixed costs — GPU depreciation, facilities, networking, cooling, training — will likely be amortized to near zero. All that remains are variable costs. And variable costs are overwhelmingly just electricity.

今天完整推理 TCO（Total Cost of Ownership，總體擁有成本）的拆解大致是：GPU 攤提 40–50%、電費 15–25%、網路與冷卻 15%、軟體運維 10%、訓練成本攤提 5–10%（SemiAnalysis、Epoch AI 對 H100 級部署的拆解）[⁷]。電力佔比不大。但這是因為今天的量還不夠大。在 2030 年每月 120 千兆 token 這種量級面前，GPU 折舊、機房、網路、冷卻、訓練成本——所有固定成本——很可能會被攤到趨近於零。剩下的，就只有變動成本。而變動成本，就絕大部分是電。

We set the energy consumption assumption at **0.5 kWh per million tokens** — a mid-2030 average for a workload mix dominated by efficient MoE (Mixture-of-Experts) architectures and smaller models. This is a massive downward revision from Epoch AI's estimate of 1–5 kWh per 1M tokens for today's GPT-4o, reflecting the 5–8× efficiency gains projected across the Blackwell → Rubin → Vera Rubin roadmap. [⁸]

把能耗假設訂在每百萬 token **0.5 kWh**——2030 年中，以效率型 MoE（Mixture-of-Experts，混合專家架構）與小模型為主的工作負載平均，比 Epoch AI 估算今日 GPT-4o 的 1–5 kWh/M tokens 大幅下修，反映 Blackwell → Rubin → Vera Rubin 路線圖上的 5–8 倍效率提升。[⁸]

Let's compare data center electricity costs across three key geographies:

比對三個關鍵地理的資料中心電費：

**China — Western data center clusters (Inner Mongolia, Guizhou, Gansu) at $0.056/kWh [⁹ᵃ]**

**中國——西部資料中心叢集（內蒙古、貴州、甘肅）$0.056/kWh [⁹ᵃ]**

$$
\text{Unit cost} = 0.5 \text{ kWh/M} \times \$0.056/\text{kWh} = \mathbf{\$0.028 / \text{1M tokens}}
$$

$$
\text{Annual industry cost} = 1.44 \times 10^{12} \times \$0.028 = \mathbf{\$40.3 \text{ B/year}}
$$

**United States — Hyperscaler PPA (Power Purchase Agreement) average at $0.07/kWh [⁹ᵇ]**

**美國——資料中心 hyperscaler PPA（Power Purchase Agreement，購電合約）採購均價 $0.07/kWh [⁹ᵇ]**

$$
\text{Unit cost} = 0.5 \times \$0.07 = \mathbf{\$0.035 / \text{1M tokens}}
$$

$$
\text{Annual industry cost} = 1.44 \times 10^{12} \times \$0.035 = \mathbf{\$50.4 \text{ B/year}}
$$

**Australia — Sydney data centers, large negotiated contracts at $0.20/kWh [⁹ᶜ]**

**澳洲——悉尼資料中心，大型 negotiated contract $0.20/kWh [⁹ᶜ]**

$$
\text{Unit cost} = 0.5 \times \$0.20 = \mathbf{\$0.100 / \text{1M tokens}}
$$

$$
\text{Annual industry cost} = 1.44 \times 10^{12} \times \$0.100 = \mathbf{\$144 \text{ B/year}}
$$

The actual geographic distribution of AI inference operations is concentrated in US and Chinese data centers. Using a US-China blended rate of **$0.065/kWh** as a global weighted baseline, the total industry electricity bill for the inference layer in 2030 will be approximately **$47B/year**.

AI 推理實際運轉的地理分佈以美國與中國資料中心為主，用中美混合 **$0.065/kWh** 作為全球加權基準，2030 年全產業推理層的純電費總帳約 **$47 B/年**。

**Global weighted // 全球加權：**

$$
\text{Unit cost} = 0.5 \times \$0.065 = \mathbf{\$0.0325 / \text{1M tokens}}
$$

$$
\text{Annual industry cost} = 1.44 \times 10^{12} \times \$0.0325 = \$46.8 \text{ B/year} \approx \mathbf{\$47 \text{ B}}
$$

This is the absolute floor, uncompressible any further. Converting this into physical power consumption makes it even more visceral:

這是無法再壓縮的絕對地板。把它換算成電量更直觀：

$$
\$47 \text{ B} \div \$0.065/\text{kWh} \approx \mathbf{723 \text{ TWh/year}}
$$

This number is roughly equivalent to the combined annual electricity consumption of France (~430 TWh) and the UK (~280 TWh) [¹⁰], or about 18% of the entire United States' annual electricity usage. In other words, **by 2030, AI inference alone will impose a power burden equal to two major European economies**. This is precisely why hyperscale cloud providers began aggressively signing 20-year PPAs with nuclear power operators back in 2024.

這個數字大約等於法國全年用電（約 430 TWh）+ 英國全年用電（約 280 TWh）的總和 [¹⁰]，或者整個美國年用電量的 18%。換句話說，**2030 年光是 AI 推理本身，就是一個歐洲兩大經濟體規模的用電負擔**——這也是為什麼超大規模雲廠商從 2024 年起就開始大舉跟核電業者簽 20 年期 PPA。

---

## Hypothetical Deduction: What If Everyone Uses DeepSeek in 2030? // 假想推理:如果 2030 年大家都用 DeepSeek

Next is the scenario most worth putting on the table and wargaming through in this entire article.

接下來是這篇文章最值得放在桌上推一遍的情境。

Faced with a volume of 120 quadrillion tokens per month, fixed costs will be flattened to near zero, leaving only the variable cost curve of electricity. If, by 2030, at the current iteration velocity, even open-source, ultra-cheap models like DeepSeek (priced at $0.06–$0.18/M) see their capabilities rise to a level of "good enough" — good enough to write emails, summarize documents, power customer service agents, and execute most RAG (Retrieval-Augmented Generation) and tool-calling tasks — what happens then?

在每月 120 千兆 token 這種量級面前，固定成本會被攤平到趨近於零，只剩下電力這條變動成本線。如果到了 2030 年，按照現在這個迭代速度，連 DeepSeek 這樣開源、便宜、單價 $0.06–0.18/M 的模型，能力水準也已經提升到「夠用」的程度——夠用來寫 email、夠用來摘要文件、夠用來跑客服 agent、夠用來做大多數 RAG（Retrieval-Augmented Generation，檢索增強生成）與 tool-calling——那會發生什麼事？

The answer: the vast majority of buyers will choose DeepSeek-tier models simply because they are cheap. Only a tiny fraction of use cases demanding peak cognitive power (frontier scientific research, financial quant analysis, drug design, complex agentic planning) will employ frontier models.

答案是：絕大多數的買家會選 DeepSeek 等級的模型。因為便宜。只有極少數需要頂尖智力的場景（前沿科研、金融量化、藥物設計、複雜 agentic 規劃）才會採用前沿模型。

Let's calculate this scenario: 95% of tokens run on commodity models (conservatively priced at $0.08/M, bridging DeepSeek V4 Flash at $0.06 and V4 Pro at $0.18) and 5% run on frontier models ($0.45/M).

把這個情境算出來：95% token 跑大眾模型（保守取 $0.08/M，介於 DeepSeek V4 Flash $0.06 與 DeepSeek V4 Pro $0.18 之間）+ 5% token 跑前沿模型（$0.45/M）。

**Weighted unit price // 加權單價：**

$$
(0.95 \times \$0.08) + (0.05 \times \$0.45) = \$0.076 + \$0.0225 = \mathbf{\$0.0985 / \text{1M tokens}}
$$

**Annual revenue // 年營收：**

$$
1.44 \times 10^{12} \times \$0.0985 = \mathbf{\$142 \text{ B/year}}
$$

**Gross profit after global electricity ($47B) // 扣全球純電費（$47 B / 年）後毛利：**

$$
\$142 - \$47 = \mathbf{\$95 \text{ B/year}}
$$

**Gross margin post-electricity // 扣電後毛利率：**

$$
\$95 \div \$142 \approx \mathbf{67\%}
$$

This is the inflection point of the article.

這就是這篇文章的拐點。

Goldman Sachs's 120 quadrillion token volume, multiplied by a DeepSeek-ified unit price, yields a market size of just **$142B**. Strip out electricity, and the net value pool for the entire industry shrinks to **$95B**. Juxtaposed against the combined AI CapEx of Microsoft, Google, Meta, and Amazon (which surpassed $300B/year in 2025) [¹¹], this figure simply cannot support the overarching capital thesis.

高盛的 120 千兆 token 量級，乘上 DeepSeek 化的單價，市場規模只有 **$142 B**。扣掉電費，全產業淨值剩 **$95 B**。對應今天 Microsoft、Google、Meta、Amazon 四家加起來的 AI 資本支出（2025 年已突破 $300 B/年）[¹¹]，這個數字撐不起整個資本論點。

In other words, if the capability curve of commodity models truly hits the "good enough" threshold by 2030, **Goldman Sachs's 120 quadrillion volume is not enough**. To justify a "trillion-dollar" inference market, we must reverse-engineer the math:

換句話說，如果大眾模型的能力曲線真的在 2030 年到了「夠用」這個臨界點，**高盛的 120 千兆量是不夠的**。要支撐一個「兆美元級」的推理市場，反推回去：

**Reverse Math 1 — Required volume at DeepSeek-ified ASP ($0.0985/M) to hit a $1T market // 反推 1：DeepSeek-化單價（$0.0985/M）下達到 $1 兆市場：**

$$
\text{Required annual volume} = \$1 \times 10^{12} \div (\$0.0985/\text{M} \times 10^{6}) = \mathbf{1.015 \times 10^{19} \text{ tokens/year}}
$$

$$
\text{Monthly} = 1.015 \times 10^{19} \div 12 = \mathbf{846 \text{ quadrillion/month}} \approx 7.05 \times \text{ Goldman's projection}
$$

**Reverse Math 2 — Required volume at 80/20 blended ASP ($0.234/M) to hit a $1T market // 反推 2：20/80 法則混合單價（$0.234/M）下達到 $1 兆市場：**

$$
\text{Required annual volume} = \$1 \times 10^{12} \div (\$0.234/\text{M} \times 10^{6}) = \mathbf{4.27 \times 10^{18} \text{ tokens/year}}
$$

$$
\text{Monthly} = 4.27 \times 10^{18} \div 12 = \mathbf{356 \text{ quadrillion/month}} \approx 2.97 \times \text{ Goldman's projection}
$$

**Reverse Math 3 — Required ASP at Goldman's 120 quadrillion volume to hit a $1T market // 反推 3：高盛 120 千兆量下達到 $1 兆市場，需要的 ASP：**

$$
\text{Required unit price} = \$1 \times 10^{12} \div (1.44 \times 10^{12}) = \mathbf{\$0.694 / \text{1M tokens}}
$$

This means that for Goldman's volume to prop up a $1 trillion market, the average unit price must remain around **$0.70/M** — close to the current tier of Mistral Medium 3.5 ($2.10) or Kimi K2.6 ($0.70). This implies the market *cannot* fully succumb to DeepSeek-ification; a massive amount of token volume must remain in the frontier and mid-tier pricing bands.

也就是說，高盛的量要支撐 $1 兆市場，平均單價必須維持在 **$0.70/M** 左右——接近今日 Mistral Medium 3.5（$2.10）或 Kimi K2.6（$0.70）的水準，這意味著市場*不能*完全 DeepSeek 化、必須有大量 token 停留在前沿與中價帶。

This reverse-engineering path highlights a conclusion unstated in the Goldman report itself, yet deeply embedded in its forecast: **the entire trillion-dollar AI inference market narrative requires two things to happen simultaneously**. First, Goldman's projected volume must actually materialize. Second, the market must avoid complete DeepSeek-ification, with prices successfully anchoring in the "middle band." If either fails, the narrative collapses.

這條反推路徑指出一個沒被高盛報告本身點明、但隱含在那份預測裡的結論：**整個兆美元 AI 推理市場敘事，需要兩件事同時發生**——一是高盛預測的量真的出現，二是市場沒有完全 DeepSeek 化、價格能停在「中間帶」。少了任一條，敘事就不成立。

---

## Silicon Valley's Second Half: Two Numbers Dictating the Future // 矽谷的下半場:兩個數字，決定未來走向

Ultimately, the trajectory of the token economy will be decided by this tug-of-war: the model capability curve pushing from above, the electricity cost floor holding from below, and the dynamic, shifting horizontal line of "good enough" sandwiched in the middle.

詞元經濟的走向，最後會由這場拉鋸決定：上方是模型能力曲線，下方是電力地板，中間夾著「夠用」這條動態移動的水平線。

If the "good enough" waterline stalls at the GPT-5 / Claude 4 altitude before 2030 — meaning there is a tangible capability gap for true frontier applications (multi-step reasoning, scientific discovery, complex agentic planning) compared to commodity models, necessitating the use of frontier models — then the 80/20 blended ASP can hold above $0.234/M. In this case, Goldman's 120 quadrillion volume can support a baseline **$337B market** ($290B post-electricity, an 86% gross margin). It's a healthy market, but still a ways off from a "trillion dollars."

如果「夠用」的水平線在 2030 年之前停在 GPT-5 / Claude 4 這個高度——也就是真正前沿應用（多步推理、科學發現、複雜 agentic 規劃）跟大眾模型能力相比有落差，需要使用前沿模型——那 20/80 法則的混合 ASP 還可以維持在 $0.234/M 以上，高盛的 120 千兆量就能撐起 **$337 B 的基準市場**，扣電後 $290 B，毛利率 86%。這是個健康市場，但跟「兆美元」還有一段距離。

If the "good enough" waterline drops to the DeepSeek tier — meaning commodity models can effectively swallow 95% of commercial agentic workloads — then Goldman's volume needs to multiply by 7× just to sustain the trillion-dollar narrative. Otherwise, the total market caps out at **$142B** ($95B post-electricity), forming a revenue pool smaller than today's SaaS market.

如果「夠用」的水平線降到 DeepSeek 等級——也就是大眾模型的能力已經涵蓋 95% 的商業 agentic 工作負載——那高盛的量還要再翻 7 倍，才能撐起兆美元的敘事。否則整個市場只有 **$142 B**，扣電後 $95 B，是一個比今天 SaaS 市場還小的池子。

Where this "good enough" line moves fundamentally depends on how high commodity models can push their capabilities before 2030. If open-source MoE architectures, DeepSeek-style training efficiencies, and next-generation budget inference hardware enable commodity models to cover the vast majority of commercial agentic workloads, the market will naturally converge on price. **Pricing power for frontier models will not be held by model vendors; it will be dictated by the capability curve of commodity models.** This is precisely why the real question this article asks is not "How big is the 2030 TAM?", but rather, "How smart will commodity models become by 2030?"

而「夠用線」往哪邊走，本質上取決於大眾模型在 2030 年之前能把能力推到多高。如果開源 MoE 架構、DeepSeek 式的訓練效率，以及下一代平價推理硬體，能讓大眾模型涵蓋大多數商業 agentic 工作負載，市場會自然完成價格收斂——**前沿模型的定價權不會被模型廠商守住，而會被大眾模型的能力曲線替市場決定**。這也是為什麼這篇文章真正在問的，不是「2030 年 TAM 多大」，而是「2030 年的大眾模型，會聰明到什麼程度」。

**Two numbers, separated by an order of magnitude. The entire second half of Silicon Valley's game is betting on this single line.**

**兩個數字，差了一個量級。整個矽谷的下半場，賭的就是這條線。**

---

## Sources / 資料來源

[¹] Goldman Sachs Research, *Decoding the Agentic Economy*, Jim Schneider, May 2026. [GS Insights](https://www.goldmansachs.com/insights/articles/ai-agents-forecast-to-boost-tech-cash-flow-as-usage-soars) · [ZeroHedge 整理](https://www.zerohedge.com/markets/120-quadrillion-tokens-monthly-2030-goldmans-deep-dive-coming-agentic-economy)

[²] a16z, *Welcome to LLMflation*, Guido Appenzeller, Nov 2024. [a16z.com](https://a16z.com/llmflation-llm-inference-cost/)

[³] Epoch AI, *LLM inference prices have fallen rapidly but unequally*, Cottier et al., Mar 2025. [epoch.ai](https://epoch.ai/data-insights/llm-inference-price-trends)

[⁴] Artificial Analysis — blended pricing methodology & current prices. [artificialanalysis.ai](https://artificialanalysis.ai/) · 歷史定價交叉參考 [TokenMix Research Lab](https://tokenmix.ai/blog/ai-pricing-trends-history)

[⁵] Bain & Company, *Technology Report 2024: AI Market* — 2027 AI TAM $780–990B（含應用層）

[⁶] McKinsey Global Institute, *The economic potential of generative AI*, Jun 2023 — 年經濟價值 $2.6–4.4 兆（含生產力）

[⁷] SemiAnalysis, *Inference Race To The Bottom*, Dec 2023 + InferenceX 系列 [newsletter.semianalysis.com](https://newsletter.semianalysis.com/) · Introl Blog, *Inference Unit Economics*, Feb 2026 [introl.com](https://introl.com/blog/inference-unit-economics-true-cost-per-million-tokens-guide)

[⁸] Epoch AI, *How much energy does ChatGPT use?* [epoch.ai/gradient-updates](https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use) — GPT-4o 每次 query ≈ 0.3 Wh。本文 0.5 kWh/M 為 2030 假設，含 Blackwell → Rubin 5–8× 效率提升。

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
