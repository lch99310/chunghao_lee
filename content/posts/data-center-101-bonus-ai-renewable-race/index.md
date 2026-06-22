+++
date = '2026-06-23T00:00:00+00:00'
title = "【Data Center 101 Bonus】AI's Renewable Energy Race: From Solar Farms to Small Reactors"
slug = "data-center-101-bonus-ai-renewable-race"
aliases = ["/posts/data-center-101-bonus-ai-renewable-race/", "/posts/數據中心-101-番外篇-AI-再生能源競賽/"]
tags = ['Data Center', 'Data Center 101', 'Passport to AI Era', '中文']
thumbnail = 'pic.png'
+++

> In September 2024, Microsoft signed a 20-year contract with Constellation Energy to bring the **Three Mile Island Unit 1** nuclear reactor — mothballed for over five years — back online specifically to power its AI workloads. The buyer was not a utility. It was an AI company. One month later, Google signed a deal with Kairos Power to build the first commercial **small modular reactors (SMRs)** in the United States. The same month, Amazon Web Services completed its direct-connection deal with the Susquehanna nuclear plant for AWS data center power.
>
> Three nuclear deals from three of the world's largest AI companies in a single 60-day window. That sequence marked the moment when the question for the AI industry shifted from "will the model work?" to "will the grid keep up?" — and when the answer for the largest AI companies became, in part: **"we will build our own power."**
>
> 2024 年 9 月，Microsoft 跟 Constellation Energy 簽了一份 20 年合約，讓**三浬島 1 號機（Three Mile Island Unit 1）** —— 已停機封存五年多 —— 重新啟動，專門用來供電給它的 AI 工作負載。買家不是電力公司，是一家 AI 公司。一個月後，Google 跟 Kairos Power 簽約建造美國第一批商用的**小型模組化反應爐（SMR）**。同月，Amazon Web Services 完成跟 Susquehanna 核電廠的直連協議，用於 AWS 數據中心供電。
>
> 60 天窗口內，三家全球最大的 AI 公司、三筆核能交易。那個序列標誌著一個時刻 —— AI 產業的問題從「模型行不行？」轉成「電網跟得上嗎？」，而最大的 AI 公司給的答案部分是：**「我們自己蓋電。」**

---

## Why This Article Exists // 為什麼有這篇文章

The Data Center 101 series spent thirteen articles building up the analytical frameworks for understanding the data center industry. One thread ran through every article: **electricity is the dominant operating cost, the binding supply constraint, and the central environmental challenge of the entire industry.** Article 3 showed that electricity is roughly 58% of operating cost. Article 5 covered PUE. Article 7 covered the cooling systems that drive most of that electricity. Article 12 showed how the AI buildout has compressed the timeline. Article 13 showed how grid connections in Sydney now run 4 to 7 years.

Data Center 101 系列花了十三篇文章建立理解數據中心產業的分析框架。一條線貫穿每一篇：**電力是運轉成本最大塊、是綁定的供給約束、是整個產業的核心環境挑戰**。第 3 篇顯示電力約佔運轉成本 58%。第 5 篇講 PUE。第 7 篇講驅動多數電力的冷卻系統。第 12 篇展示 AI 擴建怎麼壓縮時程。第 13 篇展示雪梨的電網接入現在跑 4 到 7 年。

But the series never put the entire energy question in one place. This bonus article does. It maps the **AI hyperscaler renewable energy race** — what each of the five largest AI infrastructure builders (Google, Microsoft, AWS, Meta, xAI) is actually doing to secure clean power, what technologies are on the menu, what regulatory frameworks shape the choices, and how one specific market — Sydney, Australia — illustrates both the global pattern and the regional variation.

但系列從未把整個能源議題放在同一處。這篇番外篇做了。它繪製 **AI hyperscaler 的再生能源競賽** —— 五大 AI 基礎設施建造者（Google、Microsoft、AWS、Meta、xAI）實際在做什麼來鎖住清潔電、菜單上有哪些技術、什麼法規框架塑造選擇、以及一個特定市場 —— 澳洲雪梨 —— 如何說明全球模式與區域變異。

A caveat upfront: the renewable energy and corporate PPA market moves fast. The numbers in this article are sourced from each company's most recent sustainability reports, BloombergNEF's corporate PPA tracking, the IEA's electricity reports, and Lazard's annual LCOE analysis. Where the data is uncertain, I will say so. Where the politics is contested (nuclear most obviously), I will present the contest rather than picking a side.

開場提醒：再生能源與企業 PPA 市場變動快。本文數字來自各家最新的永續報告、BloombergNEF 的企業 PPA 追蹤、IEA 的電力報告、與 Lazard 的年度 LCOE 分析。資料不確定處我會明說。政治有爭議處（最明顯是核能）我會呈現爭論而不是選邊。

---

## Part 1 — The AI Power Demand Curve // 第一部分：AI 用電需求曲線

To understand the renewable energy strategies, the demand side needs to be sized correctly. The numbers are larger than most people outside the industry realize, and growing faster than most forecasts have captured.

要理解再生能源戰略，需求面必須先量對。數字比多數業外人士理解的大，且成長比多數預測捕捉到的快。

### The IEA baseline // IEA 基線

The International Energy Agency's *Electricity 2024* report estimated that global data centers, cryptocurrencies, and AI together consumed roughly **460 TWh in 2022**, and projected that figure to reach **620–1,050 TWh by 2026** — a doubling in four years at the midpoint of the range.

國際能源署的《Electricity 2024》報告估計，全球數據中心、加密貨幣、AI 在 **2022 年合計消耗約 460 TWh**，並預測該數字到 **2026 年達 620–1,050 TWh** —— 取區間中位數即四年翻倍。

Within that envelope, the AI training and inference share is growing fastest. A single hyperscale AI training facility now routinely draws **100 to 500 MW continuously**, and the largest announced AI campuses target **1 to 5 GW per site**. By contrast, a typical American household uses roughly 1 kW averaged across the year — meaning one large AI training site consumes the continuous electricity of one to five million homes.

在那個總量裡面，AI 訓練與推理份額成長最快。單一超大規模 AI 訓練設施現在常態抽取 **100 到 500 MW 連續**，最大已宣布的 AI 園區目標**單一場址 1 到 5 GW**。對比之下，一戶美國家庭一年平均約用 1 kW —— 意思是一座大型 AI 訓練場址消耗 100 萬到 500 萬戶家庭的連續電力。

### Forward projections to 2030 // 到 2030 年的前向預測

| Source // 來源 | 2030 global DC capacity estimate // 2030 全球 DC 容量估計 |
|---|---|
| McKinsey (2024) | ~152 GW IT load, ~250+ TWh additional from AI |
| Goldman Sachs (2024) | Doubling of data center power demand by 2030 |
| Boston Consulting Group (2024) | ~390 GW global by 2030 (broadest measure including non-IT loads) |
| S&P Global (2024) | $6.7 trillion cumulative CapEx 2024–2030 |
| IEA midpoint | 1,000+ TWh annual by 2030 |

The estimates differ significantly because they use different boundary definitions (IT load only versus total facility consumption versus total grid-side impact), but the directional consensus is unambiguous: **data center electricity demand will roughly double or more by 2030, driven primarily by AI**.

估計顯著不同，因為它們用不同的邊界定義（僅 IT 負載 vs 總設施消耗 vs 總電網側影響），但方向共識毫不模糊：**數據中心電力需求到 2030 年大致翻倍或更多，主要由 AI 驅動**。

### Jevons Paradox in AI // AI 裡的 Jevons 悖論

A persistent question is whether AI efficiency improvements will offset the demand growth. The historical answer, from the energy economist William Stanley Jevons in 1865, is that they typically do not. Efficiency makes the resource cheaper to use, which expands the use cases, which raises total consumption. Each generation of AI models has been dramatically more compute-efficient per token than the previous one — and total compute consumption has risen sharply with each generation.

一個持續的問題是：AI 效率改善會不會抵消需求成長？歷史答案來自 1865 年能源經濟學家 William Stanley Jevons，是「通常不會」。效率讓資源更便宜可用，擴大用例，拉高總消耗。每一代 AI 模型每 token 算力效率都比前一代大幅提高 —— 而總算力消耗每一代都急升。

> **The implication: every efficiency improvement at the chip or model level translates into more inference demand, not less aggregate power consumption. Renewable energy procurement strategies that assume "AI will get more efficient and demand will plateau" are unlikely to age well.**
>
> **意涵：晶片或模型層面的每一個效率改善，都翻譯成更多推理需求，不是更少的總電力消耗。假設「AI 會變更有效率、需求會持平」的再生能源採購戰略，不太可能老得好。**

---

## Part 2 — Four Sourcing Frameworks // 第二部分：四種採購框架

Before looking at any specific hyperscaler's strategy, it helps to understand the four frameworks under which any clean energy procurement is structured. The choice of framework determines what counts as "clean" and how strong the operator's environmental claim actually is.

在看任何特定 hyperscaler 的戰略前，先理解任何清潔能源採購所結構化的四個框架會有幫助。框架的選擇決定什麼算「清潔」、以及營運者環境主張實際多強。

### Framework 1 — Annual matching // 框架一：年度匹配

The simplest and weakest framework: over the course of a year, the operator buys (via PPAs or renewable energy certificates) a quantity of renewable energy at least equal to its total annual electricity consumption. The matching is **temporally indifferent** — a solar farm producing at noon offsets a data center running at midnight.

最簡單也最弱的框架：一年下來，營運者買（透過 PPA 或再生能源憑證）至少等於總年度用電的再生能源。匹配是**時間中立**的 —— 中午發電的太陽能場抵掉午夜運轉的數據中心。

This is the framework under which "100% renewable" claims are most commonly made. It is real, it is meaningful, but it does not actually decarbonize the grid at the moment of consumption.

這是「100% 再生能源」聲明最常用的框架。它是真實的、有意義的，但實際上沒有在消費當下讓電網脫碳。

### Framework 2 — 24/7 Carbon-Free Energy (CFE) // 框架二：24/7 無碳能源

A much stronger framework: every hour of consumption is matched to carbon-free generation in the same hour, on the same grid. A data center using 100 MW at 3 AM needs 100 MW of carbon-free generation feeding into the same grid at 3 AM.

更強得多的框架：每小時消耗都在同一電網、同一小時匹配到無碳發電。一座 3 AM 用 100 MW 的數據中心，需要 3 AM 有 100 MW 無碳發電餵進同一電網。

24/7 CFE is much harder. It requires firm carbon-free sources (nuclear, hydro, geothermal, or solar/wind plus large-scale storage) and forces the operator to address the intermittency of variable renewables directly. Google pioneered this framework in 2020 and has been the most public advocate.

24/7 CFE 困難得多。它需要堅實的無碳來源（核能、水力、地熱、或太陽能/風力加大規模儲能），強迫營運者直接處理變動再生能源的間歇性。Google 2020 年首推這個框架，是最公開的倡議者。

### Framework 3 — Additionality // 框架三：附加性

This framework asks: did your procurement cause new renewable capacity to be built, or did you just buy from existing capacity that would have been built anyway?

這個框架問：你的採購是否導致新的再生能源容量被建造，還是你只是從本來就會建的既有容量那買？

A PPA that finances the construction of a new wind farm has additionality. A PPA that takes power from an existing wind farm that was already built has no additionality — the climate has not been improved by the contract; only the contracting party's accounting has been improved.

資助新風場建設的 PPA 有附加性。從一座已建成的既有風場拿電的 PPA 沒有附加性 —— 氣候沒有因合約被改善；只有合約方的會計被改善。

Additionality has become an increasingly important credibility test. Sophisticated buyers now report what portion of their renewable energy procurement created new capacity versus took from existing capacity.

附加性已成為越來越重要的可信度測試。複雜的買家現在報告其再生能源採購中有多少比例創造新容量 vs 從既有容量拿。

### Framework 4 — Behind-the-Meter // 框架四：電錶後

The most direct framework: the operator builds renewable generation on the same site as the data center, behind the same utility meter. There is no question of additionality, temporal matching, or grid attribution. The data center literally consumes the electrons the on-site generator produces.

最直接的框架：營運者在數據中心同一場址、同一公用電錶後建造再生能源發電。沒有附加性、時間匹配、電網歸屬的疑問。數據中心字面上消耗現場發電機產出的電子。

Behind-the-meter is operationally complex (intermittency must be managed locally, storage usually required, grid interconnection still needed for backup) but is the cleanest claim available. Microsoft's Three Mile Island deal and Amazon's Susquehanna deal are both forms of behind-the-meter or near-equivalent.

電錶後在運轉上複雜（間歇性必須在地管理、通常需要儲能、仍需電網互連備援），但是可用最乾淨的聲明。Microsoft 的三浬島交易與 Amazon 的 Susquehanna 交易都是某種形式的電錶後或近等效。

### Why the framework choice matters // 為什麼框架選擇重要

| Framework | Cost // 成本 | Difficulty // 困難度 | Credibility // 可信度 |
|---|---|---|---|
| Annual matching | Lowest | Lowest | Lowest |
| Additionality | Medium | Medium | High |
| 24/7 CFE | High | High | Highest |
| Behind-the-meter | Variable (very high CAPEX, low OPEX) | High | Highest |

> **The reason these distinctions matter: when a hyperscaler announces "100% renewable," the announcement is usually under Framework 1 (annual matching). When the same hyperscaler announces "24/7 carbon-free by 2030," that is a fundamentally different and far harder commitment. Conflating the two leads to misreading the strategy entirely.**
>
> **這些區分為什麼重要：當一個 hyperscaler 宣布「100% 再生能源」，宣布通常是在框架 1（年度匹配）下。同一個 hyperscaler 宣布「2030 年 24/7 無碳」時，那是根本不同、困難得多的承諾。把兩者混為一談會完全誤讀戰略。**

---

## Part 3 — The Technology Menu // 第三部分：技術選單

What can a hyperscaler actually buy? Six technologies dominate the menu, with very different economics, deployment timelines, and political viability.

一個 hyperscaler 實際上能買什麼？六種技術主導菜單，經濟學、部署時程、政治可行性各不相同。

### Utility-scale solar PV // 公用事業級太陽能 PV

The workhorse of the corporate renewable PPA market. Lazard's 2024 LCOE analysis (version 17.0) puts unsubsidized utility-scale solar at **$29 to $92 per MWh**, with the lower end of the range achievable in best-resource locations (Texas, Australia, parts of India, the Middle East).

企業再生能源 PPA 市場的主力。Lazard 2024 LCOE 分析（版本 17.0）把無補貼的公用事業級太陽能放在**每 MWh \$29 到 \$92**，區間下緣可在最佳資源地點達到（德州、澳洲、印度部分地區、中東）。

The fundamental challenge: solar is intermittent and concentrated during midday hours. For 24/7 CFE, solar alone cannot work — it must be paired with storage or other firm sources.

根本挑戰：太陽能間歇且集中在中午時段。對 24/7 CFE，太陽能單獨無法運作 —— 必須跟儲能或其他堅實來源配對。

### Onshore wind // 陸域風力

Often the cheapest source available in good-wind regions. Lazard puts unsubsidized onshore wind at **\$27 to \$73 per MWh**.

通常是好風區域可得的最便宜來源。Lazard 把無補貼陸域風力放在**每 MWh \$27 到 \$73**。

Strong wind belts include the central United States (Iowa, Kansas, Texas), northern Europe, southeastern Australia, and inland China. Wind complements solar well because peak production tends to be at different hours of the day and different seasons.

強風帶包括美國中部（愛荷華、堪薩斯、德州）、北歐、澳洲東南部、中國內陸。風力跟太陽能互補得好，因為峰值產出傾向在一天不同時段、不同季節。

### Offshore wind // 離岸風力

Higher cost but much higher capacity factor (45–55% versus 25–35% for onshore). Lazard places unsubsidized offshore wind at **\$74 to \$139 per MWh** — meaningfully more expensive than onshore but closer to firm-power character.

成本較高但容量因子高得多（45–55%，陸域是 25–35%）。Lazard 把無補貼離岸風力放在**每 MWh \$74 到 \$139** —— 比陸域顯著貴，但比較接近堅實電力性質。

Major offshore wind buildouts include the North Sea (UK, Netherlands, Denmark, Germany), the US East Coast, Taiwan Strait, and emerging Australian projects (Hunter and Illawarra). Lead times are long: typical permitting plus construction runs 6 to 10 years from concept to commissioning.

主要離岸風力建設包括北海（英國、荷蘭、丹麥、德國）、美國東岸、台灣海峽、新興澳洲專案（Hunter 與 Illawarra）。交期長：典型許可加建設從概念到調試運行 6 到 10 年。

### Battery storage (BESS) // 電池儲能

The complement that makes intermittent renewables work for 24/7 applications. Standalone 4-hour battery storage runs **\$124 to \$300 per MWh** at the lithium-ion level (Lazard 2024). Paired solar-plus-storage hybrids price more economically because they share interconnection and balance-of-plant costs.

讓間歇再生能源能在 24/7 應用運作的補位者。獨立 4 小時電池儲能在鋰離子層級是**每 MWh \$124 到 \$300**（Lazard 2024）。配對的太陽能加儲能混合定價更經濟，因為它們共用互連與平衡廠成本。

The big question for BESS is duration. Current commercial systems are mostly 2–4 hours. Long-duration storage (8+ hours) is critical for renewable firm power but remains technically and economically immature.

BESS 的大問題是時長。目前商用系統多為 2–4 小時。長時程儲能（8+ 小時）對再生能源堅實電力關鍵，但仍技術與經濟上不成熟。

### Pumped hydro // 抽蓄水力

The oldest and largest form of grid-scale storage. Cheap per kWh-stored once built, but new builds are slow (5–15 years from concept to commissioning) and geographically constrained (requires two reservoirs at different elevations, environmental impact assessments, water rights).

最古老也最大型的電網儲能形式。建好後每 kWh 儲存便宜，但新建慢（從概念到調試 5–15 年）、地理上受限（需要不同海拔的兩個水庫、環境影響評估、水權）。

Australia's Snowy 2.0 (2,000 MW capacity) was originally scheduled for completion in 2021 with a budget of AUD 2 billion. As of late 2024, the project is expected to complete around 2028 at a cost over AUD 12 billion — a five-fold cost overrun and roughly seven-year schedule slip. The Snowy 2.0 experience illustrates the real-world difficulty of new pumped hydro.

澳洲的 Snowy 2.0（2,000 MW 容量）原訂 2021 年完成、預算 AUD 20 億。截至 2024 年底，專案預計約 2028 年完成、成本超過 AUD 120 億 —— 五倍成本超支、約七年時程滑移。Snowy 2.0 經驗說明新建抽蓄水力的現實困難。

### Nuclear: existing reactor restarts, large-scale new build, and SMRs // 核能：既有反應爐復役、大型新建、與 SMR

The fastest-changing category. Nuclear has three sub-paths for hyperscaler procurement:

變動最快的類別。核能在 hyperscaler 採購上有三個子路徑：

- **Existing reactor restarts** — Restarting reactors that were closed for economic reasons rather than safety. Cost per MWh is competitive (often **\$30–50 per MWh** because capital is already sunk). Three Mile Island Unit 1 is the headline example.
- **Large-scale new build** — New construction of conventional gigawatt-scale reactors. Capital cost is enormous and timelines are long. Lazard puts unsubsidized new-build nuclear at **\$142 to \$222 per MWh**. Western examples (Vogtle Units 3 & 4 in Georgia) have run dramatically over budget and behind schedule.
- **Small modular reactors (SMRs)** — Factory-built modular reactor designs, typically 50–300 MW per unit, designed for faster deployment and lower per-unit capital cost. As of 2025, no commercial SMRs are operating in Western markets; the first commercial-scale deployments are targeted for 2028–2032 windows. Google's Kairos Power deal and Amazon's investments in X-energy are the most prominent hyperscaler bets in this category.

---

- **既有反應爐復役** —— 重啟因經濟（而非安全）理由關閉的反應爐。每 MWh 成本有競爭力（常**每 MWh \$30–50**，因為資本已沉沒）。三浬島 1 號機是頭條案例。
- **大型新建** —— 新建傳統 GW 規模反應爐。資本成本巨大、時程長。Lazard 把無補貼新建核能放在**每 MWh \$142 到 \$222**。西方案例（喬治亞 Vogtle 3 & 4 號機）戲劇性超預算與落後時程。
- **小型模組化反應爐（SMR）** —— 工廠製造的模組化反應爐設計，典型每單元 50–300 MW，為更快部署與更低單元資本成本而設計。截至 2025 年，西方市場無商用 SMR 運轉中；首批商用規模部署目標 2028–2032 窗口。Google 的 Kairos Power 交易與 Amazon 對 X-energy 的投資是這個類別最突出的 hyperscaler 押注。

### Technologies notably absent from the menu // 菜單上明顯缺席的技術

- **Green hydrogen** — Still commercially uneconomic at the scales relevant for data center power (current production cost \$4–6/kg implies electricity cost well above \$200/MWh). Aspirational for the 2030s but not actionable today.
- **Geothermal** — Commercially viable only at specific geographies (Iceland, parts of Kenya, US Geysers). Google has signed enhanced geothermal PPAs (Fervo Energy, Nevada) but the technology is still scaling.
- **Coal with carbon capture (CCS)** — Not pursued by hyperscalers; commercially and politically untenable.
- **Natural gas with CCS** — Less common than uncaptured gas; technology continues but no hyperscaler has based a clean-energy claim on it.

---

- **綠氫** —— 在數據中心電力相關規模上仍商業不經濟（目前生產成本 \$4–6/kg 意味電力成本遠高於每 MWh \$200）。2030 年代抱負，但今天不可行動。
- **地熱** —— 商業可行只在特定地理（冰島、肯亞部分地區、美國 Geysers）。Google 已簽強化地熱 PPA（Fervo Energy、內華達），但技術仍在擴大規模。
- **燃煤含碳捕集（CCS）** —— hyperscaler 不追求；商業上、政治上站不住腳。
- **天然氣含 CCS** —— 比未捕集天然氣少見；技術繼續但無 hyperscaler 以此為基底主張清潔能源。

---

## Part 4 — Google: The 24/7 CFE Pioneer // 第四部分：Google —— 24/7 CFE 先驅

Google has been the most analytically aggressive of the hyperscalers on renewable energy. The company first hit 100% annual matching in 2017 — five years ahead of where most of its peers reached that milestone. In 2020, it raised the bar by announcing a 24/7 carbon-free energy target for 2030.

Google 是 hyperscaler 裡在再生能源上分析最積極的。公司 2017 年首次達 100% 年度匹配 —— 比多數同儕達到那個里程碑早五年。2020 年它提高門檻，宣布 2030 年 24/7 無碳能源目標。

### The 24/7 CFE progress // 24/7 CFE 進度

Google publishes its 24/7 CFE achievement annually. According to its 2024 Environmental Report, global 24/7 CFE achievement was **64% in 2023** (up from 61% in 2022), with significant variation across regions:

Google 每年發布其 24/7 CFE 達成度。根據 2024 環境報告，全球 24/7 CFE 達成度 **2023 年為 64%**（從 2022 年 61% 上升），各區域顯著差異：

- **Finland**: ~97% (hydro-rich Nordic grid)
- **Iowa**: ~93% (wind belt)
- **Oregon**: ~89% (hydro)
- **Singapore**: ~4% (constrained grid, very limited renewable options)
- **Several Asia-Pacific regions**: under 20%

The Singapore number captures the structural problem: in markets with constrained renewable resources and constrained grid imports, 24/7 CFE is geometrically very difficult.

新加坡的數字捕捉了結構性問題：在再生能源資源受限、電網進口受限的市場，24/7 CFE 在幾何上非常困難。

### Cumulative procurement // 累計採購

Google has signed cumulative renewable PPAs exceeding **12 GW globally** as of 2023. The portfolio is roughly two-thirds solar, one-third wind, with growing geothermal and emerging nuclear (SMR) commitments.

Google 截至 2023 年累計簽再生能源 PPA 超過**全球 12 GW**。組合大約三分之二太陽能、三分之一風力，加上成長中的地熱與新興核能（SMR）承諾。

### The Kairos Power SMR deal // Kairos Power SMR 交易

Announced October 2024: Google agreed to purchase electricity from a fleet of small modular reactors developed by **Kairos Power**, targeting first deployment by 2030 and total deployment of **6 to 7 reactors with combined capacity of 500 MW by 2035**.

2024 年 10 月宣布：Google 同意從 **Kairos Power** 開發的小型模組化反應爐機隊購電，目標 2030 年首部部署、到 **2035 年累計部署 6 到 7 座反應爐、合計 500 MW**。

The Kairos design is molten-salt-cooled, a technology that has never been deployed at commercial scale. The deal is best understood as Google financing the commercial demonstration of a new reactor class in exchange for early-mover access to the resulting power. The risk is technological; the reward, if it works, is firm 24/7 carbon-free energy at a price point much better than building gigawatt-scale conventional nuclear.

Kairos 設計是熔鹽冷卻，這項技術從未在商用規模部署。這筆交易最好理解為 Google 資助新一級反應爐的商業化展示，以交換對結果電力的早期使用權。風險在技術；如果成功，回報是堅實的 24/7 無碳能源，價格比建 GW 規模傳統核能好得多。

### The DeepMind cooling effect // DeepMind 冷卻效應

Worth noting because it ties back to article 8: Google's DeepMind team applied reinforcement learning to data center cooling control in 2016, with the widely-cited result of **40% reduction in cooling energy** at the demonstration facility. The system has since been deployed across Google's global fleet and is part of why Google's reported PUE figures are among the lowest in the industry.

值得提因為它連回第 8 篇：Google 的 DeepMind 團隊 2016 年應用強化學習於數據中心冷卻控制，廣為引用的結果是展示設施**冷卻能耗降 40%**。該系統之後部署到 Google 全球機隊，是 Google 報告 PUE 數字位居產業最低之間的原因之一。

> **Google's strategic posture is "scientific credibility" — be the most transparent about progress, set the hardest target, share methodology openly. The bet is that the market will reward credibility as ESG reporting requirements tighten and corporate buyers demand verifiable claims rather than marketing claims.**
>
> **Google 的戰略姿態是「科學可信度」 —— 對進度最透明、設最難的目標、公開分享方法論。賭注是市場會獎勵可信度，隨著 ESG 報告要求收緊、企業買家要求可驗證主張而非行銷主張。**

---

## Part 5 — Microsoft: The Nuclear Bet // 第五部分：Microsoft —— 核能下注

Microsoft has made the most ambitious clean energy commitments and is also under the most public pressure on them, because its AI emissions trajectory has visibly diverged from its 2020 commitment to be **carbon negative by 2030**.

Microsoft 做了最有抱負的清潔能源承諾，也承受最大公開壓力，因為其 AI 排放軌跡可見地偏離了 2020 年要在 **2030 年成為碳負** 的承諾。

### The AI emissions reality // AI 排放現實

Microsoft's 2024 Sustainability Report disclosed that the company's emissions had risen approximately **29% since 2020**, primarily driven by Scope 3 emissions associated with data center construction and the embodied carbon of computing hardware. This is the opposite direction from where Microsoft committed to go.

Microsoft 2024 永續報告揭露，公司排放自 2020 年以來上升約 **29%**，主要由數據中心建設與運算硬體含碳相關的 Scope 3 排放驅動。這是 Microsoft 承諾要走的相反方向。

The company has not abandoned the carbon negative target, but has publicly acknowledged that AI has made the path significantly harder than it appeared in 2020.

公司沒有放棄碳負目標，但已公開承認 AI 讓路徑比 2020 年看起來顯著更難。

### Cumulative procurement // 累計採購

Microsoft's cumulative renewable PPA portfolio is approximately **13.7 GW** as of latest disclosures, making it the second-largest corporate renewable buyer globally behind Amazon.

Microsoft 截至最新揭露，累計再生能源 PPA 組合約 **13.7 GW**，全球第二大企業再生能源買家，僅次於 Amazon。

### The Three Mile Island deal // 三浬島交易

Announced September 2024: Microsoft signed a **20-year power purchase agreement with Constellation Energy** to restart **Three Mile Island Unit 1** — the unit adjacent to the famously damaged Unit 2 (which is permanently shut down). Unit 1 operated safely from 1974 to 2019 when it was closed for economic reasons. Constellation will rename the restarted site "Crane Clean Energy Center" and target restart by 2028 pending NRC approval.

2024 年 9 月宣布：Microsoft 跟 **Constellation Energy** 簽 **20 年購電協議**，重啟**三浬島 1 號機** —— 跟著名受損的 2 號機（永久關閉）相鄰的機組。1 號機從 1974 年到 2019 年因經濟理由關閉前安全運轉。Constellation 將把重啟場址改名為「Crane Clean Energy Center」，目標 2028 年重啟，待 NRC 核准。

The total capacity is approximately **835 MW**, all of which is contracted to Microsoft. The economics work because the capital is mostly already sunk; the marginal cost of restarting an existing reactor is far below the cost of building new nuclear.

總容量約 **835 MW**，全部給 Microsoft 簽約。經濟學可行因為資本多已沉沒；重啟既有反應爐的邊際成本遠低於新建核能成本。

### The Helion Energy bet // Helion Energy 押注

In May 2023, Microsoft announced a **PPA with Helion Energy for fusion power** — a 50 MW commitment with a target operational date of 2028. As of mid-2025, no commercial fusion power plant has ever operated, and most technical experts consider the 2028 timeline extremely optimistic. The deal is best understood as venture financing dressed as a PPA, with extreme upside if the technology works and limited downside in absolute dollars if it does not.

2023 年 5 月，Microsoft 宣布跟 **Helion Energy 簽核融合電力 PPA** —— 50 MW 承諾、目標運轉日期 2028。截至 2025 年中，從未有商用核融合電廠運轉，多數技術專家認為 2028 年時程極度樂觀。這筆交易最好理解為包裝成 PPA 的創投資金，技術成功有極端上行、不成功絕對金額下行有限。

### The Australian commitment // 澳洲承諾

In October 2024, Microsoft announced **AUD 5 billion in Australian data center and AI infrastructure investment** through 2026, paired with PPAs for Australian renewable energy projects. The investment positions Microsoft for major expansion in Sydney and Melbourne, both of which have sustainability requirements through NABERS that the company is publicly committed to meeting.

2024 年 10 月，Microsoft 宣布到 2026 年 **AUD 50 億澳洲數據中心與 AI 基礎設施投資**，加上澳洲再生能源專案的 PPA。投資讓 Microsoft 在雪梨與墨爾本的主要擴展定位，兩處都有 NABERS 永續要求，公司公開承諾達成。

> **Microsoft's strategic posture is "ambitious bets across multiple horizons" — existing nuclear restart for near-term firm power, SMRs and fusion for the long-term technology lottery, conventional renewables for volume. The risk is over-commitment; the reward, if even some of the bets pay off, is genuine differentiation on environmental claim quality.**
>
> **Microsoft 的戰略姿態是「在多時程上有抱負的押注」 —— 既有核能復役為近期堅實電力、SMR 與核融合為長期技術樂透、傳統再生能源為量。風險是過度承諾；回報，如果任何一個押注奏效，是在環境主張質量上真正差異化。**

---

## Part 6 — AWS: The PPA Empire // 第六部分：AWS —— PPA 帝國

Amazon Web Services, as part of Amazon's broader retail and logistics empire, has consistently been the largest corporate renewable energy buyer on the planet. According to BloombergNEF's annual corporate PPA tracking, Amazon has held the **#1 position** in every year from 2020 through 2024.

Amazon Web Services 作為 Amazon 更廣的零售與物流帝國的一部分，一直是地球上最大的企業再生能源買家。根據 BloombergNEF 年度企業 PPA 追蹤，Amazon 在 2020 到 2024 每一年都持 **#1 位置**。

### Cumulative procurement // 累計採購

Amazon's cumulative renewable PPA portfolio is approximately **33.6 GW globally** as of 2024 — substantially larger than Microsoft, Meta, or Google individually, and roughly equal to the entire installed renewable capacity of countries like the Netherlands or Argentina.

Amazon 截至 2024 年，累計再生能源 PPA 組合約 **全球 33.6 GW** —— 顯著大於 Microsoft、Meta、或 Google 個別，大致等於荷蘭或阿根廷整國的安裝再生能源容量。

### The accelerated 100% renewable claim // 加速 100% 再生能源主張

In July 2024, Amazon announced it had reached **100% renewable matching seven years ahead of its 2030 target**. The claim was contested by industry analysts on grounds that the matching is annual rather than 24/7, and that some of the PPAs have weak additionality, but the headline number is real under the standard reporting frameworks.

2024 年 7 月，Amazon 宣布它已達到 **比 2030 年目標提早七年的 100% 再生能源匹配**。產業分析師以「匹配是年度而非 24/7、部分 PPA 附加性弱」為由質疑，但標題數字在標準報告框架下是真實的。

### The Susquehanna nuclear deal // Susquehanna 核能交易

In March 2024, AWS announced the purchase of a data center campus directly co-located with the **Susquehanna Steam Electric Station**, a 2,500 MW nuclear plant owned by Talen Energy. The deal was structured to give AWS access to **480 MW of nuclear power initially**, with expansion to **960 MW**.

2024 年 3 月，AWS 宣布購買跟 **Susquehanna Steam Electric Station** 直接共址的數據中心園區，該核電廠由 Talen Energy 擁有、2,500 MW 容量。交易結構是給 AWS **初期 480 MW 核能存取**、可擴展到 **960 MW**。

The expansion ran into a regulatory complication. The Federal Energy Regulatory Commission (FERC) initially approved the expansion but then sent it back for reconsideration after concerns that the arrangement effectively gave AWS preferential access to grid infrastructure that other ratepayers had partly funded. As of late 2024, the expansion approval was still in regulatory process.

擴展遇到法規複雜度。聯邦能源法規委員會（FERC）初期批准擴展，但因為「該安排實質給 AWS 對其他付費者部分資助的電網基礎設施優先存取權」的顧慮，後來送回重新考慮。截至 2024 年底，擴展核准仍在法規程序中。

The Susquehanna case is consequential because it establishes a precedent for behind-the-meter (or nearly behind-the-meter) hyperscaler access to existing nuclear capacity. Other operators are watching the FERC outcome closely.

Susquehanna 案結果重要，因為它為 hyperscaler 對既有核能容量的電錶後（或近電錶後）存取建立先例。其他營運者密切關注 FERC 結果。

### The Australian commitment // 澳洲承諾

In 2023, AWS committed **AUD 13.2 billion** to expanding its Sydney and Melbourne regions through 2027, including new edge sites. The company has signed multiple Australian PPAs, most prominently with Spark Renewables and others, supporting its Australian region capacity.

2023 年 AWS 承諾 **AUD 132 億** 到 2027 年擴展其雪梨與墨爾本 region，包括新邊緣站點。公司已簽多筆澳洲 PPA，最突出是跟 Spark Renewables 等，支持其澳洲 region 容量。

> **AWS's strategic posture is "volume and breadth at low signaled marginal cost." Amazon does not lead the conversation on 24/7 CFE or methodological rigor; it leads on absolute MW contracted. The bet is that scale is its own moat — that when ESG reporting requirements eventually demand auditable 24/7 matching, having the largest portfolio to evolve from will be advantageous.**
>
> **AWS 的戰略姿態是「在低公開邊際成本下做量與廣度」。Amazon 不領 24/7 CFE 或方法論嚴謹度的對話；它領絕對 MW 簽約量。賭注是規模本身就是護城河 —— 當 ESG 報告要求最終要求可稽核 24/7 匹配時，擁有最大組合演化會有利。**

---

## Part 7 — Meta: The Project Portfolio Approach // 第七部分：Meta —— 專案組合做法

Meta hit 100% annual renewable matching in 2020 — earlier than Microsoft and AWS. Since then, the company has continued building a large PPA portfolio (approximately **13–15 GW cumulative** as of recent reports) but with a notably different procurement style than Google or Microsoft.

Meta 2020 年達 100% 年度再生能源匹配 —— 比 Microsoft 與 AWS 早。之後公司繼續建造大型 PPA 組合（截至最近報告約 **13–15 GW 累計**），但採購風格跟 Google 或 Microsoft 顯著不同。

### Project-by-project deals over portfolio frameworks // 專案逐筆交易而非組合框架

Meta's deals tend to be specific bilateral agreements with individual project developers in the markets where Meta is building specific data center campuses. Examples include solar projects in Texas, Iowa, Idaho, New Mexico, and Nordic wind partnerships.

Meta 的交易傾向是特定的雙邊協議，跟在 Meta 建設特定數據中心園區的市場中的個別專案開發商簽。例子包括德州、愛荷華、愛達荷、新墨西哥的太陽能專案，以及北歐風力夥伴關係。

The approach is less analytically aggressive than Google's 24/7 CFE framing and less volume-focused than Amazon's, but tends to produce strong additionality scores because each PPA is closely tied to a specific new project.

這個方法比 Google 的 24/7 CFE 框架分析上不那麼積極、比 Amazon 不那麼專注於量，但傾向產出強的附加性分數，因為每筆 PPA 都跟特定新專案緊密綁定。

### The Llama training infrastructure // Llama 訓練基礎設施

Meta has been openly the most aggressive hyperscaler in **publishing open-source AI models** (the Llama series) and has correspondingly built training infrastructure on a scale that has surprised observers. The Llama 3.1 405B training reportedly used over **16,000 H100 GPUs**, and Llama 4 is expected to use significantly more.

Meta 在**發布開源 AI 模型**（Llama 系列）上是最積極的 hyperscaler，相應地建造了讓觀察者驚訝規模的訓練基礎設施。Llama 3.1 405B 訓練據報用了超過 **16,000 顆 H100 GPU**，Llama 4 預期用顯著更多。

The training power demand is meaningful at the campus scale. Meta's strategy for matching that demand to renewable supply has been to concentrate training in geographies with strong renewable resources — northern New Mexico, Iowa, and Idaho — and to sign PPAs at the campus level.

訓練的電力需求在園區規模上有意義。Meta 對應該需求到再生能源供給的策略是把訓練集中在再生能源資源強的地理 —— 新墨西哥北部、愛荷華、愛達荷 —— 並在園區層級簽 PPA。

### The notable absence: no nuclear (yet) // 顯著缺席：尚無核能

As of mid-2025, Meta has not publicly announced any nuclear PPAs — not existing reactor restarts, not SMR development, not fusion bets. The company has reportedly explored options but has not yet matched the nuclear positions taken by Microsoft, Amazon, and Google.

截至 2025 年中，Meta 未公開宣布任何核能 PPA —— 不是既有反應爐復役、不是 SMR 開發、不是核融合押注。公司據報已探索選項，但尚未匹配 Microsoft、Amazon、Google 持有的核能位置。

Whether this is a strategic differentiation or a strategic gap is unclear. Meta's open-source AI distribution strategy implies broad reach, which implies broad power needs, which implies the firm-power question that nuclear is best positioned to answer eventually has to be addressed.

這是戰略差異化還是戰略缺口不清楚。Meta 的開源 AI 散布戰略意味著廣泛觸及、意味著廣泛電力需求、意味著核能最終必須回答堅實電力問題。

> **Meta's strategic posture is "project-by-project rigor with strong additionality, deliberately low public profile on framing debates." The company is less visible in the 24/7 CFE conversation than Google but builds high-quality individual PPAs. The bet is that buyer scrutiny will reward the quality of individual contracts over the headline portfolio number.**
>
> **Meta 的戰略姿態是「專案逐筆嚴謹，附加性強，刻意在框架辯論上保持低公開姿態」。公司在 24/7 CFE 對話上比 Google 不顯眼，但建造高質量個別 PPA。賭注是買家審查會獎勵個別合約質量超過頭條組合數字。**

---

## Part 8 — xAI: The Pragmatic Newcomer // 第八部分：xAI —— 務實的新進者

xAI, founded by Elon Musk in 2023, has been the most controversial of the major AI infrastructure builders on environmental grounds. The Memphis "Colossus" supercomputer is the most visible expression of the controversy.

xAI 由 Elon Musk 2023 年創立，是主要 AI 基礎設施建造者中環境議題上最有爭議的。Memphis「Colossus」超算是爭議最可見的表達。

### The Colossus Memphis supercomputer // Colossus Memphis 超算

xAI announced in mid-2024 that it had brought online the **Colossus** training facility in Memphis, Tennessee, housing **100,000 NVIDIA H100 GPUs** for Grok model training. Musk publicly described the buildout as completed in approximately four months — an extraordinary pace by data center industry standards.

xAI 2024 年中宣布它已啟用 Tennessee 州 Memphis 的 **Colossus** 訓練設施，容納 **100,000 顆 NVIDIA H100 GPU** 用於 Grok 模型訓練。Musk 公開描述建設約四個月完成 —— 以數據中心產業標準是非凡的速度。

The total electrical load is in the range of **150–250 MW** for the initial 100,000-GPU build, with announced plans to expand to **200,000+ GPUs** (which would push the load substantially higher).

初期 100,000 GPU 建設總電力負載在 **150–250 MW** 範圍，宣布計畫擴展到 **200,000+ GPU**（會把負載顯著推高）。

### The natural gas turbine controversy // 天然氣渦輪爭議

To power Colossus on the four-month timeline, xAI deployed approximately **35 mobile natural gas turbines** at the Memphis site. The deployment occurred without standard Clean Air Act permits, drawing complaints from the Southern Environmental Law Center (SELC), the local NAACP chapter, and Memphis community advocates.

為了在四個月時程上替 Colossus 供電，xAI 在 Memphis 場址部署了約 **35 台移動式天然氣渦輪**。部署在無標準《清潔空氣法》許可的情況下發生，引起南方環境法律中心（SELC）、當地全國有色人種協進會（NAACP）分會、Memphis 社區倡議者的投訴。

The substantive concerns are twofold:

實質關切有兩個：

- **Environmental justice** — The Colossus site is in southwest Memphis, an area with predominantly Black and lower-income residents, with a long history of disproportionate exposure to industrial air pollution. The Memphis NAACP framed the turbine deployment as a continuation of environmental injustice patterns.
- **Regulatory bypass** — Mobile generators of this scale typically require permits under the Clean Air Act. The legal question of whether xAI's deployment complied with applicable regulations is unresolved as of late 2024.

---

- **環境正義** —— Colossus 場址在 Memphis 西南，主要為黑人與低收入居民的區域，有長期不成比例地暴露於工業空氣污染的歷史。Memphis NAACP 把渦輪部署定性為環境不正義模式的延續。
- **法規繞過** —— 這個規模的移動式發電機典型上需要《清潔空氣法》許可。xAI 部署是否符合適用法規的法律問題截至 2024 年底未解決。

### The renewable energy gap // 再生能源缺口

xAI has been notably less public than its peers on renewable energy procurement. The company has not announced major renewable PPAs, has not made comprehensive sustainability commitments comparable to Microsoft's or Google's, and has not joined frameworks like RE100.

xAI 在再生能源採購上比同儕顯著不公開。公司未宣布主要再生能源 PPA、未做出可跟 Microsoft 或 Google 比較的全面永續承諾、未加入 RE100 等框架。

This is not necessarily permanent. xAI is a young company in an extreme growth phase, prioritizing capability over reputation. The pragmatic view is that as the company matures and as enterprise customers begin requiring sustainability disclosures from AI vendors, xAI will face commercial pressure to develop the same kind of renewable energy procurement programs its peers have built.

這不一定永久。xAI 是處於極端成長階段的年輕公司，將能力優先於聲譽。務實看法是隨公司成熟、隨企業客戶開始要求 AI 廠商揭露永續資訊，xAI 會面臨商業壓力，發展同儕已建造的同類再生能源採購計畫。

> **xAI's strategic posture is "ship fast, accept controversy, defer the environmental commitment to when the technology has won." Whether the bet pays off depends on whether the underlying AI product becomes valuable enough that enterprise customers absorb the reputational risk of buying from a vendor with a weak environmental record. The most likely path is that xAI will quietly catch up on renewables once Grok has established market position.**
>
> **xAI 的戰略姿態是「快速出貨、接受爭議、把環境承諾延後到技術勝出時」。賭注是否回本取決於底層 AI 產品是否變得夠有價值，讓企業客戶吸收向環境紀錄弱的廠商購買的聲譽風險。最可能的路徑是 xAI 在 Grok 建立市場位置後悄悄追上再生能源。**

---

## Part 9 — The Regional Map // 第九部分：區域版圖

Where the hyperscalers actually buy their renewable energy is shaped by a few structural geographic factors: the quality of the local renewable resource, the structure of the local electricity market, the political stability of long-term energy policy, and the grid's capacity to accept new generation. A few specific markets dominate.

hyperscaler 實際在哪買再生能源由幾個結構性地理因素塑造：當地再生能源資源的質量、當地電力市場的結構、長期能源政策的政治穩定、電網接受新發電的容量。少數特定市場主導。

### United States // 美國

| Market | Why it matters // 為什麼重要 |
|---|---|
| **Texas (ERCOT)** | Independent grid; fastest interconnection in the United States; world-class wind and solar resources; largest single corporate PPA market<br>獨立電網；美國最快互連；世界級風力與太陽能資源；最大單一企業 PPA 市場 |
| **Virginia (Northern VA)** | Largest US data center concentration ("Data Center Alley"); grid stress is severe; new renewable PPAs increasingly difficult<br>美國最大數據中心集中（「數據中心走廊」）；電網壓力嚴重；新再生能源 PPA 越來越困難 |
| **Iowa / Plains states** | World-class wind belt; Google and Meta major presence; lower-cost PPAs than coastal markets<br>世界級風力帶；Google 與 Meta 主要存在；比沿海市場便宜的 PPA |
| **Oregon / Washington** | Pacific Northwest hydro; cool climate; Microsoft and Google long established<br>太平洋西北水力；涼爽氣候；Microsoft 與 Google 長期建立 |
| **Pennsylvania** | Nuclear restart capacity (Three Mile Island, Susquehanna); proximity to East Coast load<br>核能復役容量（三浬島、Susquehanna）；靠近東岸負載 |

### Europe // 歐洲

| Market | Why it matters // 為什麼重要 |
|---|---|
| **Ireland (Dublin)** | Historically the largest European hyperscaler region; EirGrid has effectively paused new data center grid connections in the Dublin region since 2022 due to grid stress<br>歷史上歐洲最大 hyperscaler region；EirGrid 因電網壓力 2022 年起實質暫停 Dublin 區域新數據中心電網接入 |
| **Netherlands** | Permitting tightened since 2022; growth shifting away<br>2022 年起許可收緊；成長轉移走 |
| **Nordic (Iceland, Sweden, Finland, Norway)** | World's lowest PUE due to climate; hydro and geothermal dominant; major Microsoft, Google, and Meta expansion<br>因氣候而世界最低 PUE；水力與地熱主導；Microsoft、Google、Meta 主要擴展 |
| **France** | Strong nuclear baseline (~70% of grid); attractive for 24/7 CFE despite higher land costs<br>強核能基線（電網約 70%）；雖然土地成本較高但對 24/7 CFE 有吸引力 |
| **Spain / Portugal** | Strong solar resources; Iberian grid relatively well-served; emerging hyperscaler interest<br>強太陽能資源；伊比利電網相對良好服務；新興 hyperscaler 興趣 |

### Asia // 亞洲

| Market | Why it matters // 為什麼重要 |
|---|---|
| **Singapore** | Highly constrained: dense, hot, water-scarce, no domestic renewable resource of meaningful scale; moratorium 2019–2022 then strict PUE/WUE requirements<br>高度受限：密集、熱、缺水、無有意義規模的國內再生能源資源；2019–2022 暫停後嚴格 PUE/WUE 要求 |
| **Japan** | Nuclear restart underway; offshore wind potential; political acceptance of nuclear post-Fukushima slowly returning<br>核能重啟進行中；離岸風力潛力；後福島時代政治接受核能緩慢回歸 |
| **India** | Strong solar resources; corporate PPA market developing rapidly; emerging hyperscaler region<br>強太陽能資源；企業 PPA 市場快速發展；新興 hyperscaler region |
| **South Korea** | Limited renewable resource for the load; nuclear baseline contested politically<br>對負載有限的再生能源資源；核能基線政治上有爭議 |
| **Taiwan** | Critical for the TSMC supply chain but constrained for new data center buildouts; offshore wind expanding<br>對 TSMC 供應鏈關鍵，但對新數據中心建設受限；離岸風力擴展中 |

### Geographic concentration patterns // 地理集中模式

A few patterns visible across the hyperscaler regional choices:

跨 hyperscaler 區域選擇可見幾個模式：

- **Texas concentration is structural** — ERCOT's independence from federal interconnection process gives it a fundamental advantage that the rest of the US grid cannot match
- **Northern Virginia's stress is durable** — The DC alley's grid capacity problem will likely shape East Coast hyperscaler expansion through 2030
- **Nordic appeal compounds** — Cool climate + clean grid + political stability + skilled workforce makes the Nordic region disproportionately attractive
- **Singapore's constraints are permanent** — The combination of small geography, hot climate, and absent domestic renewables means Singapore will likely never be a primary hyperscaler region again

---

- **德州集中是結構性的** —— ERCOT 跟聯邦互連流程獨立給它根本優勢，美國其他電網無法匹配
- **北維吉尼亞的壓力持久** —— DC 走廊的電網容量問題可能塑造東岸 hyperscaler 擴展到 2030 年
- **北歐吸引力複合** —— 涼爽氣候 + 清潔電網 + 政治穩定 + 熟練人力讓北歐區域不成比例地有吸引力
- **新加坡的約束永久** —— 小地理、熱氣候、缺乏國內再生能源的組合意味著新加坡可能不會再是主要 hyperscaler region

---

## Part 10 — Australia and Sydney: A Case Study // 第十部分：澳洲與雪梨案例研究

Australia occupies an unusual position in the global renewable energy and hyperscaler map. It has world-class renewable resources — among the highest residential solar penetration in the world (~30%+ of homes have rooftop PV), strong wind resources especially in the south and southeast, and emerging offshore wind potential. It also has a federal ban on civil nuclear power that makes one of the most prominent hyperscaler tools (existing reactor PPAs, SMR partnerships) entirely unavailable.

澳洲在全球再生能源與 hyperscaler 地圖上佔不尋常的位置。它有世界級再生能源資源 —— 世界最高家戶太陽能滲透率之一（~30%+ 家戶有屋頂 PV）、強風力資源特別在南部與東南、新興離岸風力潛力。它也有民用核能聯邦禁令，讓 hyperscaler 最突出的工具之一（既有反應爐 PPA、SMR 合作）完全不可得。

### The structural picture // 結構圖像

- **Solar:** Australia's solar resource is among the best in the world by irradiance. Utility-scale projects in Queensland, New South Wales, and Victoria are economically very strong.
- **Wind:** Strong onshore wind in southern New South Wales, Victoria, South Australia, and Tasmania. Bass Strait region between Victoria and Tasmania is one of the best offshore wind resources in the southern hemisphere.
- **Hydro:** Limited but high quality. Snowy Mountains scheme (existing) plus the troubled Snowy 2.0 expansion.
- **Nuclear:** Banned at the federal level by EPBC Act 1999 and ARPANS Act 1998. Reversal would require federal legislation that has not commanded majority support.
- **Coal phase-out:** Major coal plants closing on a schedule that creates a multi-year reliability gap in the late 2020s.

---

- **太陽能：** 澳洲太陽能資源以日照計是世界最好之一。昆士蘭、新南威爾斯、維多利亞的公用事業級專案經濟學非常強。
- **風力：** 強陸域風力在新南威爾斯南部、維多利亞、南澳、塔斯馬尼亞。維多利亞與塔斯馬尼亞之間的巴斯海峽區域是南半球最好的離岸風力資源之一。
- **水力：** 有限但高品質。Snowy Mountains 計畫（既有）加上麻煩的 Snowy 2.0 擴展。
- **核能：** 被 EPBC Act 1999 與 ARPANS Act 1998 聯邦級禁止。逆轉需要聯邦立法，未獲多數支持。
- **煤電退場：** 主要煤電廠按時程關閉，在 2020 年代後期創造多年可靠性缺口。

### The federal renewable target // 聯邦再生能源目標

The current federal government has committed to **82% renewable electricity generation by 2030**. This is one of the more ambitious national targets in the OECD, and meeting it requires roughly doubling renewable capacity from 2023 levels in seven years.

當前聯邦政府已承諾 **2030 年 82% 再生能源發電**。這是 OECD 中較有抱負的國家目標之一，達到需要從 2023 年水準在七年內大致使再生容量翻倍。

The implementation mechanism is partly federal (Capacity Investment Scheme) and partly state-level. New South Wales is the leading state through its **NSW Electricity Infrastructure Roadmap** (2020), which commits to roughly **12 GW of new renewables and 2 GW of storage by 2030** under the Renewable Energy Zone (REZ) framework covered in article 13.

實施機制部分為聯邦（Capacity Investment Scheme）、部分為州級。新南威爾斯是領先州，透過其 **NSW Electricity Infrastructure Roadmap**（2020），承諾在再生能源區（REZ）框架下到 **2030 年新增約 12 GW 再生能源與 2 GW 儲能**（第 13 篇有涵蓋）。

### The Eraring closure cliff // Eraring 關閉斷崖

The most binding short-term constraint on Sydney's electricity supply is the scheduled closure of **Eraring Power Station** (2,880 MW coal-fired, the largest power station in Australia). Originally scheduled for 2025, the closure was extended to 2027 by NSW state government intervention specifically because of grid reliability concerns related to the renewable transition pace.

雪梨電力供給最有約束力的短期約束是 **Eraring 電廠**（2,880 MW 燃煤、澳洲最大電廠）的排定關閉。原定 2025 年，因再生能源轉型速度相關的電網可靠性顧慮，被 NSW 州政府介入延長到 2027 年。

The 2,880 MW lost when Eraring closes is meaningful: it is roughly 5% of NSW's electricity demand, and meaningfully more than that during evening peak hours. Replacing it requires firm capacity that can dispatch on demand — which means storage, gas, or imports from other states via Project EnergyConnect.

Eraring 關閉時失去的 2,880 MW 有意義：它約是 NSW 電力需求 5%，晚間尖峰時段顯著更多。取代它需要可按需調度的堅實容量 —— 意味著儲能、天然氣、或透過 Project EnergyConnect 從其他州進口。

### What the hyperscalers are doing in Australia // hyperscaler 在澳洲在做什麼

- **AWS** committed AUD 13.2 billion to expanding Sydney and Melbourne regions through 2027. Multiple Australian renewable PPAs signed including with Spark Renewables and other developers.
- **Microsoft** committed AUD 5 billion (announced October 2024) to Australian AI infrastructure through 2026, paired with renewable energy procurement commitments.
- **Google Cloud** maintains a Sydney region and has signed multiple Australian solar PPAs to support its operations.
- **Meta** has Australian region presence and uses standard Meta PPA frameworks for its smaller Australian operations.
- **xAI** has no announced Australian presence as of mid-2025.

---

- **AWS** 承諾 AUD 132 億到 2027 年擴展雪梨與墨爾本 region。簽多筆澳洲再生能源 PPA，包括 Spark Renewables 與其他開發商。
- **Microsoft** 承諾 AUD 50 億（2024 年 10 月宣布）到 2026 年澳洲 AI 基礎設施，加上再生能源採購承諾。
- **Google Cloud** 維持雪梨 region，已簽多筆澳洲太陽能 PPA 支持其運轉。
- **Meta** 有澳洲 region 存在，對其較小的澳洲運轉使用標準 Meta PPA 框架。
- **xAI** 截至 2025 年中未宣布澳洲存在。

### What Sydney cannot do // 雪梨不能做什麼

The most important Australian limitation, relative to US hyperscaler strategies, is the **nuclear ban**. None of the Microsoft-Three Mile Island, Amazon-Susquehanna, or Google-Kairos playbooks can be replicated in Australia under current law. This is a meaningful strategic difference: Australian hyperscaler operations cannot use the firm-power nuclear approach that is increasingly central to US 24/7 CFE strategies.

相對於美國 hyperscaler 戰略，澳洲最重要的限制是**核能禁令**。Microsoft-三浬島、Amazon-Susquehanna、Google-Kairos 的任何劇本都無法在當前法律下複製。這是有意義的戰略差異：澳洲 hyperscaler 運轉不能用美國 24/7 CFE 戰略越來越核心的堅實電力核能做法。

The reversal of the nuclear ban has been politically advocated by the federal opposition (the Coalition, which proposed seven specific nuclear sites in mid-2024), but commands neither government support nor majority public support. Significant change before 2030 appears unlikely.

核能禁令的逆轉一直被聯邦反對黨（Coalition，2024 年中提議 7 個特定核能場址）政治倡議，但既沒有政府支持也沒有多數公眾支持。2030 年前重大變化看起來不可能。

### What Sydney must do instead // 雪梨必須做什麼來替代

The available levers for Sydney hyperscaler operations are:

雪梨 hyperscaler 運轉可用槓桿是：

- **Long-tenor solar and wind PPAs** signed with REZ projects, accepting the timing risk that REZ project delivery may slip
- **Battery storage hybrid PPAs** that combine renewable generation with storage to provide firmer dispatch profiles
- **Grid imports from other states** via Project EnergyConnect (NSW-SA interconnector) and HumeLink (NSW-Victoria), bringing in renewable energy from neighboring jurisdictions
- **Behind-the-meter solar plus storage** for portions of campus load
- **Carbon offset purchases** under the Climate Active framework for residual emissions
- **Pumped hydro** if and when Snowy 2.0 actually commissions (currently targeted around 2028)

---

- **長期太陽能與風力 PPA** 跟 REZ 專案簽訂，接受 REZ 專案交付可能滑移的時程風險
- **電池儲能混合 PPA** 結合再生能源發電與儲能，提供較堅實的調度概況
- **跨州電網進口**透過 Project EnergyConnect（NSW-SA 互連）與 HumeLink（NSW-Victoria），從鄰近司法管轄區帶來再生能源
- **電錶後太陽能加儲能** 替園區部分負載
- **碳抵消購買** 在 Climate Active 框架下替剩餘排放
- **抽蓄水力** 如果 Snowy 2.0 真的調試（目前目標約 2028 年）

> **The Sydney case illustrates a broader pattern: regional renewable energy strategies for hyperscalers are increasingly distinct from one another, shaped by local resources, local politics, and local grid structure. A globally consistent renewable energy strategy is impossible to execute uniformly. The best operators adapt their playbook by jurisdiction.**
>
> **雪梨案例說明更廣的模式：hyperscaler 的區域再生能源戰略越來越彼此不同，由當地資源、當地政治、當地電網結構塑造。全球一致的再生能源戰略無法均勻執行。最佳營運者按司法管轄區調整其劇本。**

---

## Part 11 — The Carbon Liability Layer // 第十一部分：碳責任層

Underneath the procurement question sits a deeper question: what counts as a credible carbon claim, and what are the legal and regulatory mechanisms that will increasingly enforce credibility?

採購問題之下坐著更深的問題：什麼算可信的碳主張，什麼是越來越會執行可信度的法律與法規機制？

### The major carbon mechanisms by 2026 // 到 2026 年的主要碳機制

| Mechanism // 機制 | Jurisdiction | Status |
|---|---|---|
| **EU CBAM** (Carbon Border Adjustment Mechanism) | European Union | Full implementation 2026; tariffs on carbon-intensive imports including some data center equipment categories<br>2026 年全面實施；對碳密集進口（含部分數據中心設備類別）課關稅 |
| **US SEC Climate Disclosure Rule** | United States | Finalized 2024; mandatory Scope 1 and 2 reporting for large companies; subject to ongoing litigation<br>2024 年定案；大公司強制 Scope 1 與 2 報告；持續訴訟中 |
| **EU CSRD** (Corporate Sustainability Reporting Directive) | European Union | Phased implementation 2024–2026; mandatory ESG reporting with third-party assurance<br>2024–2026 分階段實施；強制 ESG 報告含第三方保證 |
| **Taiwan Carbon Fee** | Taiwan | Operational from 2025; initial NT\$300/tCO₂, projected to rise<br>2025 年起運轉；初期 NT\$300/tCO₂，預計上升 |
| **Australia Safeguard Mechanism** | Australia | Reformed 2023; covers 215 largest emitters with declining baselines<br>2023 改革；涵蓋 215 個最大排放源，基線下降 |
| **China National Carbon Market** | China | Operational since 2021; expansion to additional sectors planned<br>2021 年起運轉；計畫擴展到額外部門 |
| **South Korea ETS** | South Korea | Operational since 2015; covers 73% of national emissions<br>2015 年起運轉；涵蓋國家排放 73% |
| **Singapore Carbon Tax** | Singapore | SGD 25/tCO₂ in 2024–2025, rising to SGD 45/tCO₂ by 2026–2027<br>2024–2025 年 SGD 25/tCO₂，到 2026–2027 上升到 SGD 45/tCO₂ |

### Scope 1, 2, and 3 reporting // 範疇 1、2、3 報告

Most modern carbon accounting follows the Greenhouse Gas Protocol's three-scope framework:

多數現代碳會計遵循溫室氣體議定書的三範疇框架：

- **Scope 1** — Direct emissions from owned or controlled sources (e.g., on-site diesel gensets, refrigerant leaks)
- **Scope 2** — Indirect emissions from purchased electricity, heat, and steam
- **Scope 3** — Other indirect emissions across the value chain (e.g., embodied carbon in purchased equipment, contractor activities, business travel)

---

- **範疇 1** —— 自有或控制來源的直接排放（如現場柴油發電機、冷媒洩漏）
- **範疇 2** —— 購買電力、熱、蒸汽的間接排放
- **範疇 3** —— 整個價值鏈的其他間接排放（如購買設備的含碳、承包商活動、商務旅行）

For data centers, **Scope 2 dominates the carbon footprint** (electricity is most of the operating emissions). However, **Scope 3 is the harder-to-report and increasingly under regulatory pressure** category — specifically, the embodied carbon in the construction of the data center building and in the manufacturing of the IT equipment installed inside it.

對數據中心，**範疇 2 主導碳足跡**（電力是多數運轉排放）。然而，**範疇 3 是較難報告且越來越受法規壓力**的類別 —— 具體來說，數據中心建物建設的含碳、以及安裝在內部的 IT 設備製造的含碳。

The CBAM implementation in 2026 specifically targets Scope 3 carbon in the steel, cement, and aluminum that go into European-installed equipment and infrastructure. The data center industry has been preparing for this since 2022 by pushing suppliers to verify and reduce their Scope 3 emissions.

CBAM 2026 年實施特別瞄準歐洲安裝的設備與基礎設施使用的鋼、水泥、鋁的範疇 3 碳。數據中心產業從 2022 年起就在準備，推供應商驗證並降低其範疇 3 排放。

### The credibility question // 可信度問題

The honest summary of where the industry sits in 2026: most hyperscaler renewable energy claims are credible under Framework 1 (annual matching), partially credible under Framework 2 (24/7 CFE — Google leading, others working toward it), and increasingly subject to third-party audit under tightening regulatory frameworks.

對產業 2026 年位置的誠實摘要：多數 hyperscaler 再生能源主張在框架 1（年度匹配）下可信、在框架 2（24/7 CFE —— Google 領、其他朝向）下部分可信、且在收緊的法規框架下越來越受第三方稽核。

The next five years will bring:

未來五年將帶來：

- **Convergence on 24/7 CFE methodology** — Even hyperscalers not currently committing to 24/7 will face pressure from enterprise customers (who themselves face regulatory pressure) to adopt the framework.
- **Auditable Scope 3 reporting** — CBAM, CSRD, and equivalent regulations will require Scope 3 reporting to be independently verifiable, not self-reported.
- **Tightening on additionality claims** — Regulators and standard-setters are increasingly distinguishing between PPAs that funded new renewable capacity versus PPAs that captured existing capacity.
- **Carbon pricing convergence** — The major jurisdictions are converging toward carbon prices in the $50–100/tCO₂ range by 2030, which puts genuine economic weight on the carbon liability layer.

---

- **24/7 CFE 方法論趨同** —— 即使目前不承諾 24/7 的 hyperscaler 也會面臨來自企業客戶（他們本身面臨法規壓力）的壓力採用該框架。
- **可稽核範疇 3 報告** —— CBAM、CSRD、等效法規會要求範疇 3 報告獨立可驗證、不是自我報告。
- **附加性主張收緊** —— 監管者與標準制定者越來越區分資助新再生能源容量的 PPA 跟捕獲既有容量的 PPA。
- **碳定價趨同** —— 主要司法管轄區到 2030 年朝 \$50–100/tCO₂ 區間的碳價趨同，把真正的經濟重量放在碳責任層上。

---

## Key Takeaways // 重點整理

#### 1. AI demand is doubling power consumption by 2030 // AI 需求到 2030 年讓電力消耗翻倍

The IEA and the major investment banks have converged on a doubling of data center electricity demand by 2030, driven primarily by AI. Single AI training campuses are now in the 100–500 MW range, with the largest announced facilities targeting multi-gigawatt scale.

IEA 與主要投資銀行已收斂到 2030 年數據中心電力需求翻倍，主要由 AI 驅動。單一 AI 訓練園區現在在 100–500 MW 範圍，最大已宣布的設施目標多 GW 規模。

#### 2. Four sourcing frameworks shape what "clean" actually means // 四種採購框架塑造「清潔」實際意味什麼

Annual matching (weakest), additionality (medium), 24/7 CFE (hardest at scale), behind-the-meter (cleanest claim available). Conflating these frameworks is the most common analytical error in evaluating hyperscaler claims.

年度匹配（最弱）、附加性（中等）、24/7 CFE（規模上最難）、電錶後（可用最乾淨主張）。混淆這些框架是評估 hyperscaler 主張時最常見的分析錯誤。

#### 3. The technology menu has six items, with sharply different economics // 技術選單有六項，經濟學差異尖銳

Utility solar ($29–92/MWh), onshore wind ($27–73/MWh), offshore wind ($74–139/MWh), battery storage ($124–300/MWh), pumped hydro (slow), nuclear (three sub-paths with very different cost structures). Green hydrogen and gas-with-CCS are not yet on the practical menu.

公用事業太陽能（\$29–92/MWh）、陸域風力（\$27–73/MWh）、離岸風力（\$74–139/MWh）、電池儲能（\$124–300/MWh）、抽蓄水力（慢）、核能（三個成本結構非常不同的子路徑）。綠氫與含 CCS 天然氣尚未在實際菜單上。

#### 4. The nuclear comeback is real and is being led by AI hyperscalers // 核能回歸真實且由 AI hyperscaler 領導

Microsoft + Three Mile Island, Amazon + Susquehanna, Google + Kairos Power SMRs. In the United States, nuclear is now a meaningful component of the hyperscaler renewable energy strategy. Where nuclear is legally banned (Australia), the absence is a meaningful constraint.

Microsoft + 三浬島、Amazon + Susquehanna、Google + Kairos Power SMR。在美國，核能現在是 hyperscaler 再生能源戰略的有意義成分。在核能法律上被禁的地方（澳洲），缺席是有意義的約束。

#### 5. Each hyperscaler has a distinctive strategic posture // 每家 hyperscaler 有不同的戰略姿態

Google leads on methodological rigor (24/7 CFE). Microsoft makes the most ambitious bets across horizons (nuclear restart + SMR + fusion). AWS leads on absolute scale (33+ GW). Meta builds project-by-project rigor without public framing leadership. xAI is shipping fast and accepting controversy.

Google 領方法論嚴謹度（24/7 CFE）。Microsoft 在多時程上做最有抱負的押注（核能復役 + SMR + 核融合）。AWS 領絕對規模（33+ GW）。Meta 在不公開領導框架下逐專案嚴謹建造。xAI 快速出貨並接受爭議。

#### 6. Regional geography shapes what is procurable // 區域地理塑造可採購什麼

Texas (ERCOT) is the structurally easiest US market. Northern Virginia's grid is stressed. Nordic Europe compounds advantages. Singapore is permanently constrained. Sydney offers strong renewables but no nuclear option.

德州（ERCOT）是結構上最容易的美國市場。北維吉尼亞電網受壓。北歐複合優勢。新加坡永久受限。雪梨提供強再生能源但無核能選項。

#### 7. The Sydney case shows the regional adaptation problem // 雪梨案例展示區域適應問題

Strong renewable resources, federal 82% renewable target, but nuclear ban, REZ delays, and the Eraring closure cliff create a markedly different opportunity set than US markets. Sydney hyperscalers must build their strategy around renewable-plus-storage rather than nuclear firm power.

強再生能源資源、聯邦 82% 再生能源目標，但核能禁令、REZ 延誤、Eraring 關閉斷崖創造一個跟美國市場顯著不同的機會集。雪梨 hyperscaler 必須圍繞再生能源加儲能而非核能堅實電力建造戰略。

#### 8. Carbon liability is moving from soft preference to hard constraint // 碳責任從軟性偏好走向硬性約束

EU CBAM 2026, US SEC Climate Disclosure (subject to litigation), CSRD, Taiwan Carbon Fee, Australia Safeguard Mechanism. The credibility of clean energy claims is increasingly subject to third-party audit. Scope 3 reporting is the next major frontier.

歐盟 CBAM 2026、美國 SEC 氣候揭露（受訴訟限制）、CSRD、台灣碳費、澳洲 Safeguard Mechanism。清潔能源主張的可信度越來越受第三方稽核。範疇 3 報告是下一個主要前沿。

---

## The Most Important Question of the Next Decade // 下一個十年最重要的問題

This was the fourteenth article in what was supposed to be a thirteen-article series. The original article 13 closed with the observation that Sydney's power infrastructure had moved from a peripheral procurement question to the binding constraint on the city's data center growth. The bonus article you have just read extends that observation globally.

這是原定 13 篇系列的第十四篇文章。原本的第 13 篇收束於一個觀察：雪梨的電力基礎設施已從邊緣採購問題走向城市數據中心成長的綁定約束。您剛讀完的番外篇把那個觀察全球延伸。

The single most important question facing the data center industry over the next decade is not whether AI workloads continue growing — they will — and not whether renewable energy continues becoming cheaper — it will. The question is whether the rate at which renewable generation, storage, transmission, and (where legally possible) new nuclear capacity is being added to the grid can keep pace with the rate at which AI workloads are being added to the demand side.

數據中心產業未來十年面對的最重要單一問題不是 AI 工作負載是否繼續成長 —— 會 —— 也不是再生能源是否繼續變便宜 —— 會。問題是再生能源發電、儲能、輸電、與（法律允許處）新核能容量被加到電網的速率，能否跟上 AI 工作負載被加到需求側的速率。

The hyperscalers have read the situation correctly and are doing approximately what a sober reading of the constraint requires: signing the largest portfolio of renewable PPAs in industrial history, bringing existing nuclear capacity back online where they can, financing the commercial demonstration of new reactor classes where they cannot find existing capacity, and building behind-the-meter generation where the grid cannot deliver what they need on the timeline they need it.

hyperscaler 正確讀懂情況、做著對該約束清醒讀法所要求的事：簽工業史上最大的再生能源 PPA 組合、能力範圍內讓既有核能容量重新上線、找不到既有容量處資助新一級反應爐的商業化展示、電網無法以他們需要的時程交付所需處建造電錶後發電。

Whether they will collectively succeed is the question the next ten years of the data center industry will answer. The series concludes here, but the question does not.

他們是否會集體成功是接下來十年的數據中心產業會回答的問題。系列在此結束，但問題不會。

The thirteen articles plus this bonus aimed to give a serious reader the analytical frameworks to follow the answer as it emerges. If they have done that, they have done their job.

13 篇加這篇番外篇，目標是給認真的讀者分析框架，在答案浮現時跟上。如果它們做到了，它們就完成任務了。

Thank you for reading the series.

謝謝您讀完這個系列。
