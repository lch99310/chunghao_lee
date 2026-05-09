+++
date = '2026-05-09T00:00:00+00:00'
title = "Beyond the Interface: Designing a Common Language for Humans and AI"
tags = ['Beyond the___', '中文', 'PM', 'AI', 'Sharing']
thumbnail = 'pic.png'
+++

Recently, due to project demands, I have begun working extensively with the Command Line Interface (CLI). In the lightning-fast world of AI, being even a few months late to a tool can make one feel like a technological dinosaur. Yet, this "belated" experience has sparked some profound reflections. Much of my career has been dedicated to building human-centric platforms—designing features that simplify complex tasks through visualization and UI/UX optimization. However, with the rise of AI Agents, there is now a surging demand to pivot many of these same functions back into a CLI format.

最近因為產品推進的關係，我開始深入接觸 CLI（命令列介面）。(在日新月異的 AI 領域裡，晚了幾個月才親手實作這些，感覺自己簡知像還停留在恐龍時代)。但這份略顯「遲來」的體驗讓我產生了一些深刻的思考。我之前的工作是打造以人為本的平台，設計各種功能方便人們操作，因此過去我投入了大量心力在可視化呈現與 UI/UX 優化上。但隨著 AI Agent的普及，現在同樣有強大的需求要把許多功能轉換成 CLI 形式。

When you strip it down, the essence of both GUI and CLI is the same: data. The only difference lies in how we present that data. Humans are biologically wired to process visual information and prefer intuitive, tactile interactions. AI, conversely, excels at processing text—specifically structured content.

仔細想想，不論是 GUI 還是 CLI，底層的本質都是資料。差別只在於我們用什麼方式呈現這些資料：人類天生擅長處理圖像資訊，習慣直覺式的操作交互；而 AI 則擅長處理文字，特別是結構化的內容。

![](pic.png)

---
### The Data Remains Constant; The "Observer" Has Changed // 數據沒變，變的是「誰在看」

Looking back at the history of computing, the evolution of human-computer interaction (HCI) has come full circle.

回顧計算機發展史，人機交互的模式其實經歷過一次完整的輪迴。

The CLI emerged around 1961, an era when computers communicated with humans primarily through plain text. Users had to memorize a vast library of commands and input them via keyboard to operate the machine. While this was incredibly efficient for the computer, the cognitive load and learning curve for humans were prohibitively high.

CLI（命令列介面）大約在 1961 年開始被使用，那個時代的計算機主要透過純文字與人類互動。使用者必須記住大量指令，透過鍵盤輸入命令來操作電腦。這種方式對電腦來說效率極高，但對人類來說學習成本昂貴。

This changed in 1984 when Apple launched the Macintosh, bringing the Graphical User Interface (GUI) into the mainstream. Because humans naturally favor imagery and intuitive interaction, the GUI rapidly conquered the industry. For the next forty years, interaction design tilted almost entirely toward the GUI, leaving the CLI as a niche tool reserved for developers and system administrators.

直到 1984 年蘋果推出 Macintosh，將 GUI（圖形使用者介面）帶入大眾視野。因為人類天生更喜歡圖像與直覺式的操作交互，GUI 很快就席捲了整個產業。此後近四十年，整個電腦產業的操作與交互設計幾乎完全朝向 GUI 傾斜，CLI 逐漸淪為開發者與系統管理員的專用工具。

<div style="display: flex; flex-wrap: nowrap; justify-content: center; align-items: center; gap: 16px; margin: 1.5em 0;">
<img src="/posts/beyond-the-interface-designing-a-common-language-for-humans-and-ai/CLI.png" alt="Command-Line Interface (CLI)" style="height: 250px; width: auto; max-width: 48%; object-fit: contain;">
<img src="/posts/beyond-the-interface-designing-a-common-language-for-humans-and-ai/GUI.png" alt="Graphical User Interface (GUI)" style="height: 250px; width: auto; max-width: 48%; object-fit: contain;">
</div>

---
### The CLI Renaissance: An Unlikely Reversal in the AI Era // AI 時代的 CLI 復興：一場意料之外的逆轉

However, modern AI is built upon Large Language Models (LLMs), which are trained from the ground up on the principle of "text completion." For an AI, text and structured content are its native tongue. As AI Agents are deployed at scale across various sectors, the CLI—which is naturally compatible with these models—has staged a remarkable comeback. In this text-only logic, even non-textual data like images, audio, or video must be transcribed into text descriptions before an AI can ingest and process it.

然而，現在的 AI 核心是 LLM（大型語言模型），它們從一開始就是透過「文字接龍」的方式訓練而成。對 AI 來說，文字與結構化的內容就是它的母語。當 AI Agent 開始大規模部署到各種場景中時，為了配合這位新時代的超級大腦，與其天然適配的 CLI 順理成章地迎來了文藝復興。在這個純文本的邏輯裡，即便是圖像、聲音或影片等非文字數據，也要先被轉譯為文字描述， AI 才會接收與處理。

This creates a fascinating conflict: the plain text that AI excels at is precisely the format humans process least efficiently. A human can interpret a complex chart far faster than they can read a long string of raw numbers.

但這就出現了有趣的衝突：AI 擅長處理的純文字，恰恰是人類處理效率較低的格式。人看一張圖表的理解速度，遠比閱讀一長串數字快得多。

Consequently, we find ourselves in an awkward position: to make AI work more smoothly, we are forced to revert to the interaction method we find most difficult.

這就造成了一個尷尬的局面：為了讓 AI 工作得更順暢，我們被迫回到了自己最不擅長的交互方式。

---
### HTML: A Universal Language for Humans and AI Alike // HTML：人與 AI 都能讀懂的共同語言

This is precisely why the article [*"Using Claude Code: The Unreasonable Effectiveness of HTML"*](https://thariqs.github.io/html-effectiveness/) has sparked such widespread discussion. It offers a brilliant insight: HTML may be the optimal solution to the friction between human and AI interaction.

這也正是為什麼，那篇[《Using Claude Code: The Unreasonable Effectiveness of HTML》](https://thariqs.github.io/html-effectiveness/) 的文章引起了廣泛討論。文章提出了一個極具洞察力的觀點：HTML 可能是解決人與 AI 交互矛盾的最佳方案。

The uniqueness of HTML lies in its dual nature:

HTML 之所以獨特，在於它同時具備兩種屬性：

* **For AI:** It is structured text that LLMs can easily parse, generate, and modify.
* 對 AI 來說，它是結構化的文字，可以被 LLM 輕鬆解析、生成和修改

<br>

* **For Humans:** It can be rendered by a browser into rich images, charts, and interactive interfaces.
* 對人類來說，它可以被瀏覽器渲染成豐富的圖像、圖表和交互介面


HTML avoids the user-unfriendliness of a raw CLI while bypassing the "black box" complexity of a pure GUI that is difficult for AI to decompose. It sits in the middle as a "bilingual interface"—a single source of truth that the model can understand and execute, but a human can intuitively navigate.

HTML不像純 CLI 那樣對人不友善，也不像純 GUI 那樣對 AI 難以拆解。它站在中間，成為一種「雙語介面」：同一份內容，既能被模型理解執行，也能被人直觀操作。

---
### The Road Ahead: Defining a Shared Working Language // 未來的方向：尋找人與 AI 共同的工作語言

Looking toward the future, the central challenge for product design and engineering will be finding an interface format that allows humans and AI to collaborate seamlessly.

面對未來，如何找到一個讓人與 AI 都能高效理解、無縫合作的介面形態，將是下一波產品設計與工程領域最核心的命題。

We are not here to completely overturn the past, but to grow new branches from established roots. As the famous adage goes: *"Men make their own history, but they do not make it as they please... but under circumstances existing already, given and transmitted from the past."* We stand today at the intersection of the GUI’s brilliance and the CLI’s legacy, ready to write the next chapter of human-AI collaboration.

我們並非要完全推翻過去，而是在舊有的基礎上長出新的枝枒。正如那句經典的名言所說：「人們自己創造自己的歷史，但他們並不是隨心所欲地創造……而是在直接碰到的、既定的、從過去承繼下來的條件下創造。」我們正站在這個繼承了 GUI 輝煌與 CLI 基因的交叉口上，寫下人機協作的新歷史。

---
*© Chung-Hao Lee. All Rights Reserved.
All content on this webpage—including but not limited to text, images, design, code, and multimedia materials—is protected under the international copyright treaties. Unauthorized reproduction, modification, distribution, public transmission, or commercial use is strictly prohibited. Legal action will be taken against infringement.* <br>
*© 李崇豪。保留所有權利。
本網頁之內容（包括但不限於文字、圖片、設計、程式碼及多媒體素材）均受國際著作權條約保護。未經書面授權，嚴禁任何形式之複製、改作、散布、公開傳輸或商業利用。侵權者將依法追訴。*
