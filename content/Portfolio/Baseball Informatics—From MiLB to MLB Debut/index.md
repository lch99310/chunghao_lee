+++
date = '2023-05-24T00:00:00+08:00'
title = 'Baseball Informatics—From MiLB to MLB Debut'
tags = ['Analytics']
+++

---

Please find the [Paper Link](https://link.springer.com/chapter/10.1007/978-981-19-9658-0_5)

### Summary:

The study analyzes data from 4,321 fielders (non-pitchers) drafted by MLB teams between 2001 and 2010, using their aggregated MiLB career statistics and draft information. The goal is to build predictive models that can accurately determine whether a player will reach the MLB, a feat achieved by less than 20% of drafted prospects. The authors employ exploratory data analysis (EDA), variable selection techniques (including Lasso regression), and four different ML models (eXtreme Gradient Boosting - XGB, Random Forest - RF, Decision Tree - DT, and Support Vector Machine - SVM) to achieve this. The models are trained on 75% of the data and validated on the remaining 25%. The best-performing model is then tested on an out-of-sample dataset of players drafted in 2013.

### Key Highlights:

* **High Prediction Accuracy:**
All 16 model/variable selection combinations achieved validation accuracies above 90% and Area Under the Curve (AUC) scores above 0.88, indicating strong predictive power. The models were also successfully validated on 2013 draft data, with the best model maintaining an accuracy above 89%.

* **Best Performing Model:**
The eXtreme Gradient Boosting (XGB) model consistently outperformed the other ML techniques (RF, DT, SVM) across key metrics like F-score and AUC, demonstrating its effectiveness for this prediction task.
Effective Variable Selection: The study found that using Lasso regression for variable selection generally improved model performance. The most effective combination was the XGB model using the "Lasso4lch" variable set, which contained only 11 key variables.

* **Most Important Predictive Factors:**
Overall Draft Pick: This non-baseball variable was consistently identified as one of the most important predictors. Being drafted earlier significantly increases the likelihood of an MLB debut.

* **On-Base Plus Slugging (OPS):**
This baseball statistic, which combines a player's ability to get on base (OBP) and hit for power (SLG), was found to be the most representative and impactful performance metric for predicting success.

* **Batting Average (AVG) and At-Bats (AB):**
AVG was also consistently ranked as a top predictor. A high number of ABs was strongly associated with making the MLB, suggesting that longevity and consistent playing time in the minors are crucial factors.

* **Surprising Finding on OBP:**
Contrary to the "Moneyball" philosophy that popularized On-Base Percentage (OBP), the models often found AVG to be a more important predictor than OBP alone. The authors suggest this is because OPS, which incorporates both OBP and SLG, provides a more comprehensive measure, and AVG is a fundamental component of OBP.

* **Practical Application:**
The research provides a framework for MLB teams to make more informed decisions about player development and for MiLB players to understand the key factors (staying in the system longer, improving AVG and SLG/OPS) that can increase their chances of reaching the majors.


---
*© Chung-Hao Lee. All Rights Reserved.
All content on this webpage—including but not limited to text, images, design, code, and multimedia materials—is protected under the international copyright treaties. Unauthorized reproduction, modification, distribution, public transmission, or commercial use is strictly prohibited. Legal action will be taken against infringement.* <br>
*© 李崇豪。保留所有權利。
本網頁之內容（包括但不限於文字、圖片、設計、程式碼及多媒體素材）均受國際著作權條約保護。未經書面授權，嚴禁任何形式之複製、改作、散布、公開傳輸或商業利用。侵權者將依法追訴。*
