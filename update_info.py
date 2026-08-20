
import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replace Services
html = html.replace(
    "<h3>Client Web Development</h3>\n                <p>Designing and building beautiful, responsive, and highly functional custom websites",
    "<h3>Full Stack Web Development</h3>\n                <p>Designing and building beautiful, responsive, and highly functional full-stack web applications"
)

html = html.replace(
    "<h3>AI & Machine Learning</h3>\n                <p>Developing predictive models, sentiment analysis",
    "<h3>AI & Machine Learning (Gemini)</h3>\n                <p>Developing predictive models, Google Gemini AI integrations, sentiment analysis"
)

html = html.replace(
    "<h3>Graphic & Visual Design</h3>\n                <p>Designing stunning promotional creatives, reels, and visual aesthetics using Canva",
    "<h3>SEO Optimization & Meta Ads</h3>\n                <p>Driving targeted traffic and maximizing ROI through data-backed Meta Ads campaigns and advanced SEO optimization"
)

# Replace Skills in Skills Modal
# Find the marketing skills block and add Meta Ads & SEO
seo_skill = """
            <div class="skill-bar" style="margin-bottom: 1.5rem;">
                <div class="skill-info" style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="font-weight: 500;">SEO & Meta Ads</span>
                    <span>88%</span>
                </div>
                <div class="progress-line" style="height: 10px; background: #ffe4ed; border-radius: 10px; position: relative;">
                    <span style="position: absolute; height: 100%; background: var(--main-color); border-radius: 10px; width: 88%;"></span>
                </div>
            </div>"""

gemini_skill = """
            <div class="skill-bar" style="margin-bottom: 1.5rem;">
                <div class="skill-info" style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="font-weight: 500;">Generative AI & Gemini API</span>
                    <span>90%</span>
                </div>
                <div class="progress-line" style="height: 10px; background: #ffe4ed; border-radius: 10px; position: relative;">
                    <span style="position: absolute; height: 100%; background: var(--main-color); border-radius: 10px; width: 90%;"></span>
                </div>
            </div>"""

html = html.replace("<span>Canva & Visual Design</span>", "<span>Canva & Content Creation</span>")
html = html.replace("<span>Web Development (React, HTML/CSS)</span>", "<span>Full Stack Web Development</span>")

# Insert SEO skill before SAP / Oracle Analytics
html = html.replace("""<div class="skill-bar" style="margin-bottom: 1.5rem;">
                <div class="skill-info" style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="font-weight: 500;">SAP / Oracle Analytics</span>""", seo_skill + """\n            <div class="skill-bar" style="margin-bottom: 1.5rem;">
                <div class="skill-info" style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="font-weight: 500;">SAP / Oracle Analytics</span>""")

# Insert Gemini skill before LangChain & NLP
html = html.replace("""<div class="skill-bar" style="margin-bottom: 1.5rem;">
                <div class="skill-info" style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="font-weight: 500;">LangChain & NLP</span>""", gemini_skill + """\n            <div class="skill-bar" style="margin-bottom: 1.5rem;">
                <div class="skill-info" style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="font-weight: 500;">LangChain & NLP</span>""")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
