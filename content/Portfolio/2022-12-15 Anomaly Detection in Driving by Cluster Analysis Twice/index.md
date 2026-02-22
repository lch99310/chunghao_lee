+++
date = '2022-12-15T00:00:00+08:00'
title = 'Anomaly Detection in Driving by Cluster Analysis Twice'
tags = ['Analytics']
+++

<div style="text-align: center; margin: 20px 0;">
    <a href="Anomaly Detection in Driving by Cluster Analysis Twice.pdf" download class="download-button" style="display: inline-block; padding: 12px 24px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; transition: background-color 0.3s;">
        📥 Download Portfolio PDF
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
    height: 1200px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
}

.pdf-page-image {
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

@media (max-width: 768px) {
    .pdf-embed {
        height: 600px;
    }
}
</style>

<div class="pdf-container">

### 📄 Full Portfolio Document

<!-- Option 1: Using iframe embed (works if PDF is in static folder) -->
<iframe src="Anomaly Detection in Driving by Cluster Analysis Twice.pdf" class="pdf-embed" type="application/pdf">
    <p>Your browser doesn't support PDF viewing. Please <a href="Anomaly Detection in Driving by Cluster Analysis Twice.pdf">download the PDF</a> to view it.</p>
</iframe>

<!-- Option 2: Using Google Docs Viewer (replace URL with your actual PDF URL) -->
<!--
<iframe src="https://docs.google.com/viewer?url=https://yourwebsite.com/path/to/CHLee_Portfolio.pdf&embedded=true" class="pdf-embed" frameborder="0"></iframe>
-->

<!-- Option 3: Display as images (if you convert PDF pages to images) -->
<!--
### Portfolio Pages

<img src="/images/portfolio/page1.jpg" alt="Portfolio Page 1" class="pdf-page-image" />
<img src="/images/portfolio/page2.jpg" alt="Portfolio Page 2" class="pdf-page-image" />
<img src="/images/portfolio/page3.jpg" alt="Portfolio Page 3" class="pdf-page-image" />
<img src="/images/portfolio/page4.jpg" alt="Portfolio Page 4" class="pdf-page-image" />
<img src="/images/portfolio/page5.jpg" alt="Portfolio Page 5" class="pdf-page-image" />
<img src="/images/portfolio/page6.jpg" alt="Portfolio Page 6" class="pdf-page-image" />
-->

</div>

---

## Summary:

This paper introduces ADDCAT (Anomaly Detection in Driving by Cluster Analysis Twice), a novel method for detecting driving anomalies (like aggressive driving or potholes) using vehicle sensor data (G-sensor and gyroscope). Unlike popular deep learning methods that require extensive training and computational power, ADDCAT leverages the HDBSCAN clustering algorithm applied twice to identify anomalies based on the principle that normal driving events form the largest, most cohesive cluster, while anomalies are outliers.

## The method involves:

* **Data Processing:** Sensor data is aggregated into 2-second intervals ("events") and 20 aggregate statistics (AS) are calculated (e.g., mean speed, std of acceleration).
* **Calibration:** To remove the confounding effect of vehicle speed on sensor readings, a linear calibration is performed, making the AS speed-independent.

* **Double Clustering:**

  * **First Clustering:** All 20 calibrated and normalized AS are fed into HDBSCAN to separate events primarily by speed and identify a major "normal" cluster and outliers.

  * **Second Clustering:** HDBSCAN is applied again, separately for the X, Y, and Z axes, using only specific subsets of the AS (mainly standard deviations) from the largest cluster and the outlier group identified in the first step.
Anomaly Identification: An event is classified as an anomaly if it does not belong to the largest cluster in all three axis-specific second clusterings.

Validated on an open dataset containing pothole information, ADDCAT achieved an accuracy of 0.62, successfully identifying 31 out of 79 potholes.

## Highlights:

* **No Training Required:** A major advantage of ADDCAT is that it is an unsupervised method, eliminating the need for labeled training data, which is costly and time-consuming to acquire, especially for autonomous driving development.

* **Low Computational Cost:** Compared to deep learning models, ADDCAT is designed to be computationally lighter, making it potentially more suitable for real-time applications or resource-constrained environments.

* **Adaptive Clustering:** The use of HDBSCAN is key, as it can automatically determine the number of clusters and handle clusters of varying densities, which is ideal for unpredictable real-world driving data.

* **Speed Calibration:** The paper identifies vehicle speed as a dominant factor and implements a calibration step to isolate its effect, allowing other sensor features to better distinguish between normal and anomalous events.

* **Two-Stage Process:** The "Cluster Analysis Twice" approach refines the detection. The first pass groups events broadly, and the second pass performs a more focused analysis on specific physical axes to pinpoint anomalies.

* **Practical Application:** The method is positioned as highly valuable for the Transportation and Logistics (T&L) industry to monitor driver behavior, road conditions, and overall delivery efficiency. It's also suggested as a tool to help label data for training more complex autonomous driving systems.

* **Performance Insight:** While achieving moderate accuracy (0.62), the results show ADDCAT is effective at detecting anomalies across different speeds. However, it struggles with events that have very high variability in speed or whose sensor signatures become too similar to normal events after calibration.

---
*© Chung-Hao Lee. All Rights Reserved.
All content on this webpage—including but not limited to text, images, design, code, and multimedia materials—is protected under the international copyright treaties. Unauthorized reproduction, modification, distribution, public transmission, or commercial use is strictly prohibited. Legal action will be taken against infringement.* <br>
*© 李崇豪。保留所有權利。
本網頁之內容（包括但不限於文字、圖片、設計、程式碼及多媒體素材）均受國際著作權條約保護。未經書面授權，嚴禁任何形式之複製、改作、散布、公開傳輸或商業利用。侵權者將依法追訴。*
