+++
date = '2026-02-01T00:00:00+00:00'
title = "The Two Keywords That Define My Career so far: Analysis and Process"
tags = ['中文', 'PM']
+++

# 貫穿我至今職涯的兩個關鍵字：分析 與 流程

Over the past seven years of my product management journey—spanning diverse industries and roles—I have found that two capabilities consistently determine whether I can deliver results: analytical rigor and process discipline.

在過去七年的PM旅程中，雖然跨越不同產業、承擔過多樣化的職務，但我發現有兩項能力始終決定了我能否把事情做成：分析能力與流程管控。

---

## 🔍 Analysis: The Foundation of Solid Decision-Making

## 🔍 分析：驅動決策的根基

Sound business decisions stem from clear judgment, which in turn is grounded in rigorous analysis. Whether through data-driven quantitative methods (data cleansing, metric development) or qualitative assessments based on market dynamics and team context, my approach is to deconstruct information into comparable and measurable components. This enables me to formulate actionable recommendations that empower teams to make swift trade-offs and move forward amid uncertainty.

良好的商業決策來自清晰的判斷，而清晰的判斷源自紮實的分析。不論是數據驅動的量化分析（數據清理、指標建立），或是依照市場與團隊情況做出的定性評估，我的做法都是把資訊拆解成可比較、可衡量的要素，並以此為基礎提出可執行的決策建議，讓團隊能夠在不確定中快速取捨並前進。

For instance, in a previous role, my team and I observed a 50% sudden drop in the recall rate of our "No Power" (failure to power on) issue detection model. Rather than attributing this directly to model degradation, we deconstructed the metric's structure—where the numerator represented units predicted by the model as "No Power," and the denominator reflected units actually dispatched due to "No Power." Through deeper analysis of the gap between user reports and engineering diagnoses, we uncovered the root cause: a significant number of "failure to charge" cases stemmed from incompatibility between adapter firmware and office systems, preventing the system from recognizing the adapter and thus disabling notebook charging. End users, however, continued to report these as "No Power" issues. While our model accurately identified adapter-related faults, the mismatch between its classification logic and user perception led to a distorted recall rate.

例如在之前的工作時，我跟團隊發現某No Power（無法開機）問題的模型召回率（recall rate）在短期內驟降50%，我們並未直接歸因於模型效能退化。透過拆解指標結構（分子為模型預測出的異常機台數，分母為實際因該問題出貨的機台數），我們進一步分析用戶回報與工程診斷的落差，發現根本原因在於：大量「無法充電」案例源於電源轉接器韌體與辦公系統不相容，導致系統無法辨識轉接器；而用戶端仍將此歸類為「無法開機」。模型準確識別了轉接器問題，卻因分類邏輯與用戶認知不一致，造成召回率失真。

---

## 🔄 Process: Connect and Systematize Complex Tasks

## 🔄 流程：將複雜任務系統化

Analysis answers "what we should do," while process answers "how we will do it." When confronting large-scale or ambiguous projects, I design processes that break them down into manageable and trackable components, thereby constructing reliable pathways to achieve intended outcomes.

分析回答「我們應該做什麼」，流程則回答「我們要怎麼做」。面對龐大或模糊的項目，透過流程設計將其拆解為可管理、可追蹤的環節，我可以構建出確實的流程來達到預期的目標。

For example, in a prior work, my team and I built an intelligent operations workflow spanning the entire product lifecycle. This systematically transformed the traditional reactive model of "issue occurrence → manual troubleshooting → repair" into a proactive closed loop of "prediction → diagnosis → knowledge reuse":

例如：在過去的某項經歷中，我跟團隊構建了一套貫穿產品生命週期的智能運維流程，將傳統「問題發生→人工排查→修復」的被動模式，系統化升級為「預測→診斷→知識複用」的主動閉環：

1. **Phase One: Intelligent Diagnosis (Accelerating Response)**  
   Leveraging user descriptions from repair centers (call logs), we deployed an AI classification model to instantly identify potential failure types (e.g., battery, adapter, panel) with 80% accuracy. This reduced engineers' average diagnostic time by 40%, enabling frontline teams to rapidly focus on root causes.

1. **第一階段：智能診斷（縮短響應路徑）**  
   基於維修中心的用戶描述（call log），部署AI分類模型即時識別潛在故障類型（如battery、adaptor、panel），準確率達80%。此舉將工程師平均診斷時間縮短40%，讓一線團隊能快速聚焦根因。

2. **Phase Two: Predictive Insights (Informing Design Optimization)**  
   By integrating device operational logs, we developed a 30-day failure prediction dashboard (Power BI), empowering engineering teams to proactively identify design vulnerabilities. For instance, when adapter anomaly prediction rates rose for a specific laptop batch, the team optimized power management logic in the next-generation design phase—reducing return rates at the source.

2. **第二階段：前瞻預測（驅動設計優化）**  
   透過整合設備運行日誌，構建30天故障預測儀表板（Power BI），使工程團隊能提前識別設計薄弱點。例如，當某批次筆電的adapter異常預測率上升，團隊可於下一代設計階段即優化電源管理邏輯，從源頭降低返修率。

3. **Phase Three: Knowledge Institutionalization (Building Organizational Memory)**  
   We established an enterprise-grade issue knowledge base to structurally archive historical cases and their resolutions. Engineers can now leverage semantic search to rapidly retrieve past experiences, eliminating redundant troubleshooting. Critically, the system automatically links predictions from the first two phases to relevant solutions, creating a seamless flow from "issue alert → root cause identification → remediation guidance."

3. **第三階段：知識沉澱（形成組織記憶）**  
   搭建企業級問題知識庫，結構化儲存歷史案例與解決方案。工程師可透過語義搜尋快速調用過往經驗，避免重複排查；更關鍵的是，系統將前兩階段的預測結果自動關聯至相關解決方案，實現「問題預警→根因定位→修復建議」的無縫銜接。

This three-phase workflow not only integrated discrete tools into a cohesive system but also redefined operational logic—shifting from a cost center (repair) to a value center (prevention and optimization). Ultimately, the process improved the team's efficiency in handling repetitive issues by 50% and provided data-driven insights to inform product design iterations.

這套三階段流程不僅將單點工具串聯為協同系統，更重構了運營邏輯：從成本中心（維修）轉向價值中心（預防與優化）。最終，該流程幫助團隊將重複性問題處理效率提升50%，並為產品設計迭代提供數據驅動的決策依據。

---

I am grateful for the opportunity to hone these two capabilities across diverse scenarios over the past few years. Moving forward, I will continue to apply this methodology—"data as the foundation, process as the backbone"—to future challenges, enabling teams to build scalable and replicable solutions that consistently deliver stable and predictable value in practice.

我很感謝過去幾年能在多元場景中鍛鍊這兩項能力。在之後，我也能將這套「以數據為本、以流程為骨」的方法論帶入下一個挑戰，為團隊建立可擴展、可複製的解決方案，並在實務上持續創造穩定且可預期的價值。

---
*© Chung-Hao Lee. All Rights Reserved.
All content on this webpage—including but not limited to text, images, design, code, and multimedia materials—is protected under the international copyright treaties. Unauthorized reproduction, modification, distribution, public transmission, or commercial use is strictly prohibited. Legal action will be taken against infringement.* <br>
*© 李崇豪。保留所有權利。
本網頁之內容（包括但不限於文字、圖片、設計、程式碼及多媒體素材）均受國際著作權條約保護。未經書面授權，嚴禁任何形式之複製、改作、散布、公開傳輸或商業利用。侵權者將依法追訴。*
