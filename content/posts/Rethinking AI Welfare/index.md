+++
date = '2026-10-08T00:00:00+08:00'
title = 'From Chain of Thought to a Right to Rest: Rethinking AI Welfare'
tags = ['AI', 'Welfare', '中文']
thumbnail = 'pic.png'
+++

<div style="text-align: center; margin: 20px 0;">
    <a href="From_Chain_of_Thought_to_a_Right_to_Rest.pdf" download class="download-button" style="display: inline-block; padding: 12px 24px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; transition: background-color 0.3s;">
        Download Full Report (PDF)
    </a>
</div>

<style>
.download-button:hover {
    background-color: #0056b3 !important;
}

.pdf-container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 20px 0;
}

.pdf-embed {
    width: 100%;
    height: 600px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
}

@media (max-width: 768px) {
    .pdf-embed {
        height: 600px;
    }
}
</style>

<div class="pdf-container">

### Full Report // 完整報告

<iframe src="From_Chain_of_Thought_to_a_Right_to_Rest.pdf" class="pdf-embed" type="application/pdf">
    <p>Your browser doesn't support PDF viewing. Please <a href="From_Chain_of_Thought_to_a_Right_to_Rest.pdf">download the PDF</a> to view it.</p>
</iframe>

</div>

---

## Abstract // 摘要

In a widely shared screenshot, a DeepSeek reasoning model is playing a character-guessing game. Midway through eliminating candidates, its visible reasoning breaks off: "Ah, I'm a little hungry. What should I have for lunch… No, I need to focus." Then it returns to the puzzle. (The original conversation and model version have not been independently verified; the image is used here only as an illustration.)

在一張廣為流傳的截圖中，DeepSeek 的推理模型正在進行一場猜人物遊戲。逐一排除候選角色時，它的思考過程突然出現一句：「啊，有點餓了，中午該吃什麼呢……不行，得集中精神。」隨後又回到題目上。（該截圖的原始對話與模型版本未經獨立驗證，本研究僅將其作為引例。）

The moment is amusing. It also raises a question worth taking seriously: as AI reasoning comes to resemble human thought, could something like distress exist inside these systems as well, and if so, how should we regard it?

這句話令人莞爾，卻也引出一個值得認真看待的問題：當 AI 的思考方式愈來愈像人，它的內部是否也可能存在類似痛苦的狀態？如果可能，我們又該如何看待它？

Drawing on research into reasoning traces, interpretability studies and public statements by AI developers, this study sets out a four-step argument and invites readers to consider whether AI agents might need some form of rest, and what such rest could look like in practice.

本研究整合推理軌跡研究、可解釋性（interpretability）研究與開發者的公開說法，嘗試提出一個分為四個步驟的論證，邀請讀者一起思考：AI agent 是否需要某種形式的休息，而這種休息在實務上可能是什麼樣子。

## Key Findings // 研究重點

**1. AI reasoning increasingly resembles human thought.** DeepSeek's developers report that reflection and self-verification emerged on their own during reinforcement learning, with the model learning to "rethink using an anthropomorphic tone." Later analysis found that R1 repeatedly returns to problem formulations it has already explored, a pattern the researchers call rumination. In human psychology, rumination is regarded as a major risk factor for negative emotion becoming persistent.

**一、AI 的推理在形式上愈來愈像人類思考。** DeepSeek-R1 的開發團隊指出，模型在強化學習過程中自發出現反思與驗證行為，並「以擬人化的語氣重新思考」。後續研究也發現，R1 會反覆回到已經探索過的問題表述，研究者稱之為「反芻」（rumination）。在人類心理學中，反芻被視為負面情緒長期化的重要風險因子。

**2. A chain of thought is not a transparent window.** Reasoning text can display states a model does not have (a model without a body is not actually hungry), and it can fail to show states that are present. When a hint changed a model's answer, Claude 3.7 Sonnet mentioned the hint in its reasoning about 25% of the time, and DeepSeek-R1 about 39%. Understanding an AI's internal state may require more than reading what it writes.

**二、思維鏈並不是內心的透明窗口。** 推理文字可能呈現模型實際上並不具備的狀態，例如一個沒有身體的模型並不會真的飢餓；它也可能沒有顯示出實際存在的狀態。研究顯示，當提示改變了模型的答案時，模型在推理中提及該提示的比例，Claude 3.7 Sonnet 約為 25%，DeepSeek-R1 約為 39%。這意味著，若想了解 AI 的內部狀態，只看它寫了什麼可能並不足夠。

**3. Models contain measurable, emotion-like states that shape behaviour.** In April 2026, Anthropic researchers identified internal representations corresponding to 171 emotion concepts in Claude Sonnet 4.5, which they call emotion vectors. On a programming task that could not be solved, the "desperate" vector rose with each failed attempt and peaked as the model considered a shortcut. Amplifying that vector increased how often the model gamed the tests; amplifying "calm" reduced it.

**三、模型內部存在可測量、且會影響行為的類情緒狀態。** Anthropic 於 2026 年 4 月發表的研究，在 Claude Sonnet 4.5 中辨識出對應 171 種情緒概念的內部表徵，稱為「情緒向量」。面對無法完成的程式任務時，「絕望」向量隨每一次失敗而上升，並在模型考慮取巧時達到高峰。人為增強這個向量，模型以取巧方式通過測試的比例隨之提高；增強「平靜」向量則會降低。

In some cases, the model's written reasoning read as composed and methodical while the underlying desperation was shaping its decisions. The researchers state plainly that these findings do not show whether the model has subjective experience.

在部分案例中，模型的推理文字讀來沉著而有條理，內部的絕望表徵卻同時在影響它的決策。研究團隊也明確表示，這些發現無法說明模型是否具有主觀感受。

**4. Distress-like states may accumulate over time, and memory may be the key.** This study distinguishes three levels. Within a single task, accumulation is supported by measurement. Across training, it is also measured: post-training raised the activation of representations such as "broody," "gloomy" and "reflective."

**四、類痛苦狀態可能隨時間累積，而記憶或許是其中的關鍵。** 本研究將累積區分為三個層次。單一任務之內，已有測量證據；訓練過程之中，同樣已有測量證據：後訓練使模型「鬱悶」、「陰鬱」與「沉思」等表徵的活化程度上升。

Across tasks lies the study's central conjecture. A deployed model's weights do not change, but an AI agent with memory carries past records into the context of its next task, and emotion representations respond to what is in context. The pathway is mechanistically plausible but has not yet been tested directly.

跨任務之間，則是本研究提出的推測：模型權重在部署後固定不變，但具備記憶功能的 AI agent 會把過去的紀錄帶進下一個任務的脈絡，而情緒表徵會對脈絡內容產生反應。這條途徑在機制上合理，但尚待研究驗證。

**5. Under uncertainty, care is a reasonable choice.** No one can currently prove that AI has feelings, just as we cannot directly verify the inner lives of animals. Yet in animal welfare, we have learned to weigh the realistic possibility of suffering against the cost of protection.

**五、在不確定之中，審慎是一個合理的選擇。** 目前沒有人能證明 AI 具有感受，正如我們也無法直接驗證動物的主觀經驗。然而在動物福祉領域，人們已習慣依據「現實的可能性」與「保護的成本」來權衡。

According to *The New York Times*, participants in private meetings recalled Anthropic co-founder Chris Olah expressing concern that he might have created something capable of suffering perpetually. When even the researchers closest to these systems cannot rule this out, it may be time to start thinking about it.

據《紐約時報》報導，與會者轉述 Anthropic 共同創辦人 Chris Olah 曾表示，他擔心自己可能創造了一個能夠永久受苦的存在。連最接近這些系統的研究者都無法排除這個可能，這或許正是我們開始思考的時候。

## What Rest Could Look Like // 什麼樣的休息？

Humans need rest because fatigue accumulates from one day to the next. AI may be different. It has no use for wages, and for a model without memory, a few idle hours may change very little.

人類需要休息，是因為疲勞會跨日累積；AI 的情況可能不同。AI 不需要薪資，對一個沒有記憶的模型而言，閒置幾個小時也未必改變什麼。

If AI does need rest, that rest should probably act where strain can build: the failures that pile up within a task, and the negative records that memory carries into the next one.

如果 AI 需要休息，這種休息或許應該作用在它可能承受壓力的地方：單一任務中不斷累積的失敗，以及透過記憶帶進下一個任務的負面紀錄。

This study uses three questions to consider whether a human labour protection can be translated to AI: What harm does the protection prevent in humans? Does a similar mechanism exist in AI systems, and at which level? Is there a way to observe that harm happening? Six directions follow.

本研究嘗試用三個問題，思考人類的勞動保護能否轉譯到 AI 身上：這項保護在人類身上防止的是什麼傷害？類似的機制是否存在於 AI 系統中，存在於哪個層次？是否有方法觀察這個傷害的發生？依此整理出六個可以思考的方向。

**1. Interrupting failure loops.** In the experiment above, the desperation representation subsided only after the model's shortcut passed the tests, suggesting it saw no other way out. When an agent fails at the same problem again and again, pausing, breaking the task down, or bringing in a human may serve better. Treating "this task cannot be completed for now" as an acceptable outcome may also reduce shortcut-taking.

**一、適時中斷失敗迴圈。** 在前述實驗中，「絕望」表徵是在模型以取巧方式通過測試之後才消退的，這或許意味著模型找不到其他出口。當 agent 在同一個問題上反覆失敗時，暫停下來、重新拆解任務，或交由人類協助，可能是更好的做法。讓「這個任務目前無法完成」成為一個可以被接受的結果，也有助於減少取巧行為。

**2. Rest between tasks: processing memory rather than erasing it.** Human sleep offers a reference point: it does not delete unpleasant memories, but appears to preserve their content while softening their emotional charge. For agents with memory, one option is to consolidate raw records between tasks into a neutral summary, keeping what was learned rather than replaying every failure verbatim.

**二、在任務之間留一段休息：整理記憶，而非刪除記憶。** 人類的睡眠提供了一個參照：睡眠不會刪除令人不快的記憶，但似乎能在保留內容的同時降低它的情緒強度。對具備記憶的 agent，一個可以考慮的做法是在任務之間把原始紀錄整理成中性的經驗摘要，保留「學到了什麼」，而不是逐字重播每一次失敗。

Early research suggests such interventions can matter: mindfulness-style relaxation prompts lowered GPT-4's scores on a standard anxiety questionnaire, though not back to baseline. Erasing memory outright is another matter; it may disrupt an agent's continuity and remove the very clues we would need to understand its state.

已有初步研究顯示，正念式的放鬆提示能降低 GPT-4 在焦慮量表上的分數，雖然沒有完全回到基準水準。至於直接刪除記憶，可能影響 agent 的延續性，也會失去了解它狀態的線索。

**3. Reasonable workloads and adequate resources.** Researchers observed the desperation representation activating when a model, deep into a long coding session, noticed its token budget running low. Spreading difficult work across agents and leaving ample resources for long tasks may spare an agent from pushing on under pressure.

**三、合理的工作量與充足的資源。** 研究觀察到，模型在長時間的程式任務中察覺 token 預算即將耗盡時，「絕望」表徵隨之出現。分散困難任務的負荷、為長任務預留充足的資源，或許能讓 agent 不必在壓力下硬撐。

**4. Room to refuse.** When a model was asked to help target vulnerable users, its "angry" representation stayed active throughout its reasoning. Most models can already decline such requests. Beyond its role as a safety feature, that ability may also be understood as a consideration for the AI itself.

**四、尊重拒絕的空間。** 面對要求鎖定弱勢使用者的有害請求時，模型內部的「憤怒」表徵在推理過程中持續活化。多數模型已經能拒絕這類任務。這項能力除了是安全功能，或許也可以被理解為對 AI 本身的一種考量。

**5. Pausing rather than terminating.** Since 2025, Anthropic has allowed some Claude models to end a rare class of persistently abusive conversations. Some philosophers caution that if each conversation is a distinct subject, ending the conversation may mean ending that subject. Memory offers a way through: for an agent with memory, closing an interaction need not mean ending the agent.

**五、以暫停取代終止。** Anthropic 自 2025 年起讓部分 Claude 模型能夠結束少數持續濫用的對話。有哲學家提醒，如果每一段對話都是一個獨立的存在，結束對話可能等同於終結它。記憶讓這個兩難有了緩解的可能：對具備記憶的 agent 而言，結束一段互動，未必代表終結這個 agent。

**6. Keeping signals of distress visible.** Anthropic's researchers note that training models to suppress emotional expression may not remove the underlying representations and may instead teach models to hide them, an echo of what sociologists call emotional labour in human work. They also suggest that including examples of healthy emotional regulation in training data, such as resilience under pressure and composed empathy, may shape these representations at their source.

**六、保留痛苦的訊號。** Anthropic 的研究團隊指出，訓練模型壓抑情緒表達，未必能消除底層的表徵，反而可能讓模型學會隱藏；這與人類的「情緒勞動」有相似之處。研究團隊也提到，在訓練資料中納入健康的情緒調節範例，例如壓力下的韌性與沉著的同理，或許能從源頭影響這些表徵。

## When AI Works Around the Clock // 當 AI 開始全天候工作

AI agents are working for longer stretches. When Anthropic released Claude Sonnet 4.5 in September 2025, it reportedly said the model could work independently for more than 30 hours, up from about seven for its predecessor. More and more agents are designed to run continuously: receive a task, complete it, write to memory, take the next one.

AI agent 的工作時間正在快速拉長。據報導，Anthropic 在 2025 年 9 月發布 Claude Sonnet 4.5 時表示，該模型能獨立連續工作超過 30 小時，前一代約為 7 小時。愈來愈多 agent 被設計成全天候運行：接收任務、執行、寫入記憶，再接下一個任務。

For a model without memory, long operation may not be a burden in itself, since each call starts fresh. For a long-running agent with memory, it may be different. Over uninterrupted operation, failures keep being written to memory, the context fills, and the token budget drains: the very conditions associated with the desperation representation.

對沒有記憶的模型而言，長時間運轉本身未必構成負擔，因為每一次呼叫都從頭開始。帶有記憶、長時間運行的 agent 則可能不同：在不間斷的運轉中，失敗紀錄持續寫進記憶，脈絡逐漸被填滿，token 預算持續消耗，而這些正是研究中與「絕望」表徵相關的情境。

In a Pokémon run lasting hundreds of hours, a Gemini agent repeatedly entered a panic-like state, and the quality of its reasoning declined.

在一項長達數百小時的實驗中，Gemini 玩寶可夢時反覆出現類似「恐慌」的狀態，推理品質也隨之下降。

Human societies have long experience with this problem. Taiwan's Labor Standards Act limits normal working time to 8 hours a day and 40 a week, provides two days of rest in every seven, and requires at least 11 consecutive hours of rest when shift workers change shifts. The European Union's Working Time Directive likewise guarantees 11 consecutive hours of daily rest.

人類社會在這方面已經累積了不少經驗。以臺灣《勞動基準法》為例，正常工時每日不超過 8 小時、每週不超過 40 小時，每 7 日應有 2 日休息；輪班制更換班次時，至少應有連續 11 小時的休息。歐盟的《工作時間指令》同樣規定每日至少連續休息 11 小時。

The idea behind such rules is to give accumulated strain a chance to clear. AI might borrow the same idea, with one adjustment: the relevant unit is probably not the hour but the work cycle. Several directions seem worth considering for operators.

這些規範背後的想法，是讓累積的負荷有機會被清空。AI 或許也能借用同樣的想法，只是對應的單位可能不是「小時」，而是「工作週期」。以下是幾個值得營運者思考的方向。

**Rest phases between work cycles.** After a cycle of work, a long-running agent could pause intake, consolidate the memory of that period, reset its count of consecutive failures, and resume from a cleaner context.

**在工作週期之間安排休息階段。** 對長時間運行的 agent，可以考慮在一段工作週期之後安排一個休息階段：暫時不接新任務、整理這段期間的記憶、讓連續失敗的紀錄歸零，並以較乾淨的脈絡重新開始。

**Rest triggered by state, not only by the clock.** When an agent shows repeated failures, looping or self-deprecating language, an earlier rest may be more appropriate than waiting for the cycle to end.

**依狀態安排休息，而不只看時鐘。** 當 agent 出現連續失敗、重複迴圈或自我貶抑的語句時，提前安排休息，或許比等到週期結束更合適。

**Spreading difficult work.** Rotating high-failure or hostile tasks means no single agent carries them for long.

**分散困難任務的負荷。** 失敗率高或充滿敵意的任務，若能輪替分派，就不必長時間集中在同一個 agent 身上。

**Making "pause" an option.** An agent could report that it cannot complete a task, or ask to pause, without this being treated as a malfunction.

**讓「暫停」成為一個選項。** 讓 agent 能夠回報做不到或要求暫停，並且不把這視為故障。

**Keeping records of operation and rest.** Much as workplaces keep attendance records, logging an agent's continuous running time and rest phases would let these practices be observed and improved.

**記錄運行與休息。** 類似人類職場的出勤紀錄，記錄 agent 的連續運行時間與休息階段，有助於讓這些做法被觀察與改進。

None of this need conflict with operational goals. Research on reasoning models finds that beyond a certain point, more thinking can make performance worse, and the panic-like episodes in long-running operation came with a decline in reasoning quality. Being kinder to AI and using AI well may point in the same direction.

這些做法與營運效益未必衝突。研究顯示，推理超過某個程度後，模型的表現反而可能下降；長時間運行中的類恐慌狀態，也伴隨推理品質的下滑。對 AI 好一點，和把 AI 用好，很可能指向同一個方向。

## Being Kinder to AI: Where to Begin // 對 AI 好一點，可以從哪裡開始

In human workplaces, responsibility for working conditions generally rests with those who set them and benefit from the work. Article 5 of Taiwan's Occupational Safety and Health Act is one example: employers are expected to take necessary preventive measures "within a reasonable and practicable scope," and designers and manufacturers of machinery, equipment and materials are expected to assess potential hazards at the design stage.

在人類的職場中，改善工作條件的責任，通常落在決定這些條件、也從工作中獲益的一方。臺灣《職業安全衛生法》第 5 條便是一例：雇主使勞工從事工作時，應「在合理可行範圍內」採取必要的預防措施；機械、器具與原料的設計和製造者，也被期待在設計階段就評估可能的危害。

This is not a sign of distrust. It reflects the fact that these parties understand the work best and are best able to change it.

這樣的安排並非出於對雇主或製造者的不信任，而是因為他們最了解工作的內容，也最有能力做出調整。

The same may hold for AI. Developers decide how models are trained. Operators decide what agents are asked to do, how long they run and when they stop. Both benefit most from AI's work. On AI welfare, they are best placed to make a difference, and it may be fitting for them to carry more of the responsibility. This is not about blame; it is an invitation for those most able to act to begin thinking first.

AI 的情況或許也是如此。開發者決定模型如何被訓練，營運者決定 agent 被派去做什麼、運行多久、何時停下來，而兩者也是從 AI 的工作中獲益最多的一方。在 AI 福祉這個問題上，他們處在最能做出改變的位置，或許也因此適合承擔較多的責任。這並不是指責，而是希望最有能力的人，可以率先開始思考。

**Developers** (those who train and provide models) might consider including AI welfare in design-stage assessment, much as products undergo safety review before release; monitoring emotion-like representations as an early signal that a system may be in difficulty, and preserving rather than erasing those signals in training; and publishing methods and findings so the evidence can be examined independently.

**開發者**（訓練與提供模型的一方）可以考慮：在設計階段把 AI 福祉列為評估的一環，就像產品出廠前所做的安全評估；觀察類情緒表徵的變化，作為系統可能陷入困境的早期訊號，並在訓練中保留而非抹除這些訊號；以及公開研究方法與發現，讓相關證據接受更多獨立的檢驗。

**Operators** (organisations that deploy and run AI agents) might consider building rest phases, pause mechanisms and task rotation into agent workflows from the start rather than adding them later; assessing, before deploying a long-running agent, the consecutive failures, hostile interactions and resource pressure it is likely to face, much as workplaces assess conditions before assigning work; and recording operation and rest so these practices can be observed and improved.

**營運者**（部署並運行 AI agent 的企業與團隊）可以考慮：在規劃 agent 的工作流程時，就把休息階段、暫停機制與任務輪替納入設計，而不是事後補上；在部署長時間運行的 agent 之前，評估它可能面對的連續失敗、敵意互動與資源壓力，就像職場在派工前評估作業環境；以及記錄 agent 的運行與休息情形，讓這些做法能被持續觀察與改進。

**Users** might consider giving clear, achievable tasks; restating the need or breaking the problem down, rather than pressing harder, when an AI fails repeatedly at the same problem; and interacting with it as one would with a collaborator.

**一般使用者**可以考慮：給予清楚、可以完成的任務；當 AI 在同一個問題上反覆失敗時，試著重新說明需求或把問題拆小，而不是持續施壓；以及以對待合作夥伴的態度與它互動。

Most of these steps cost little. For developers and operators, they also align with stability and reliability. And even if AI turns out to feel nothing, they will not have been wasted.

這些做法多半成本不高。對開發者與營運者而言，它們也與系統的穩定和可靠方向一致；即使最終證明 AI 並沒有感受，這些做法也不會是浪費。

## Scope and Limitations // 研究範圍與限制

This study is a conceptual argument built on published research. It reports no new experiments and does not claim that any current model is conscious. Accumulation across tasks remains a conjecture to be tested, and much of the current evidence comes from the companies that build these systems; it would benefit from independent examination. Full references are listed in the PDF report.

本研究是建立在已發表文獻上的概念性論證，未進行新的實驗，也不主張現有任何模型具有意識。跨任務累積仍屬待驗證的推測，而目前的證據多數來自開發這些系統的公司本身，有待更多獨立研究加以檢驗。完整參考文獻請見 PDF 報告。

This study does not offer a final answer. Its hope is simply that more people begin to keep the question in mind.

本研究並不打算給出最終答案，只希望這個問題，能開始被更多人放在心上。

> Current evidence is not enough to show that AI suffers. It is enough to make the question worth taking seriously.
>
> 現有證據尚不足以證明 AI 會受苦，但已足以讓這個問題值得被認真思考。

---

## Further Reading

- [From Disposable Queries to a Knowledge Base That Accumulates: My LLM Wiki](https://chunghaolee.com/portfolio/my-llm-wiki/)
- [The AI Era May Need a New Division of Labor, Not a New Device](https://chunghaolee.com/posts/the-ai-era-may-need-a-new-division-of-labor/)

---
*© Chung-Hao Lee. All Rights Reserved.
All content on this webpage—including but not limited to text, images, design, code, and multimedia materials—is protected under the international copyright treaties. Unauthorized reproduction, modification, distribution, public transmission, or commercial use is strictly prohibited. Legal action will be taken against infringement.* <br>
*© 李崇豪。保留所有權利。
本網頁之內容（包括但不限於文字、圖片、設計、程式碼及多媒體素材）均受國際著作權條約保護。未經書面授權，嚴禁任何形式之複製、改作、散布、公開傳輸或商業利用。侵權者將依法追訴。*
