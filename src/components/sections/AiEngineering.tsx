import { aiIntro, aiCapabilities, aiProjects } from "../../data/ai";

export function AiEngineering() {
  return (
    <section id="ai" className="section section--dark ai">
      <div className="section__inner">
        <div className="section__row">
          <div>
            <p className="section__meta">{aiIntro.meta}</p>
            <h2 className="section__title section__title--light">
              {aiIntro.title}
              <em>{aiIntro.titleEm}</em>
            </h2>
          </div>
          <p className="section__aside section__aside--light">{aiIntro.aside}</p>
        </div>

        {/* 叙事主线：从生产到开源 */}
        <div className="ai__narrative">
          {aiIntro.narrative.map((n) => (
            <div key={n.source} className="ai__narrative-row">
              <span className="ai__narrative-source">{n.source}</span>
              <span className="ai__narrative-proof">{n.proof}</span>
            </div>
          ))}
        </div>

        {/* 四层能力 */}
        <div className="ai__capabilities">
          {aiCapabilities.map((c) => (
            <article key={c.layer} className="ai__capability">
              <p className="ai__capability-layer">{c.layer}</p>
              <h3 className="ai__capability-name">{c.name}</h3>
              <p className="ai__capability-desc">{c.desc}</p>
              <p className="ai__capability-evidence">{c.evidence}</p>
            </article>
          ))}
        </div>

        {/* 自建项目 */}
        <p className="ai__lab-meta">Side Projects · 个人构建与开源</p>
        <div className="ai__projects">
          {aiProjects.map((p) => (
            <article key={p.index} className="ai__project">
              <div className="ai__project-head">
                <span className="ai__project-index">{p.index}</span>
                <span className="ai__project-badge">{p.badge}</span>
              </div>
              <h3 className="ai__project-name">{p.name}</h3>
              <p className="ai__project-type">{p.type}</p>
              <p className="ai__project-summary">{p.summary}</p>
              <ul className="ai__project-highlights">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              {p.link && (
                <a
                  className="ai__project-link"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.linkLabel}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
