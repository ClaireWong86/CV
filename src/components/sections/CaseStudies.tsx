import { useState } from "react";
import { featuredWorks } from "../../data/content";

export function CaseStudies() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="cases" className="section section--light works">
      <div className="section__inner">
        <div className="section__row">
          <div>
            <p className="section__meta section__meta--accent">
              Selected Works · 2024 — 2026
            </p>
            <h2 className="section__title">
              代表<em>案例。</em>
            </h2>
          </div>
          <p className="section__aside">
            从 AI 工程化到经营治理，每个案例都是一次把黑盒变成系统的实践。
          </p>
        </div>

        <div className="works__list">
          {featuredWorks.map((work) => {
            const isOpen = expanded === work.index;
            return (
              <article key={work.index} className="works__item">
                <button
                  type="button"
                  className="works__row"
                  onClick={() =>
                    setExpanded(isOpen ? null : work.index)
                  }
                  aria-expanded={isOpen}
                >
                  <span className="works__index">{work.index}</span>
                  <div className="works__main">
                    <h3 className="works__name">{work.name}</h3>
                    <p className="works__summary">{work.summary}</p>
                  </div>
                  <div className="works__meta">
                    <span>{work.period}</span>
                    <span className="works__badge">{work.badge}</span>
                  </div>
                  <span className="works__arrow" aria-hidden="true">
                    {isOpen ? "↑" : "→"}
                  </span>
                </button>

                {isOpen && (
                  <div className="works__detail">
                    <p className="works__detail-role">{work.role}</p>
                    <dl className="works__detail-grid">
                      <div>
                        <dt>背景</dt>
                        <dd>{work.background}</dd>
                      </div>
                      <div>
                        <dt>问题</dt>
                        <dd>{work.problem}</dd>
                      </div>
                      <div>
                        <dt>判断与动作</dt>
                        <dd>{work.actions}</dd>
                      </div>
                      <div>
                        <dt>量化结果</dt>
                        <dd>
                          <ul>
                            {work.results.map((r) => (
                              <li key={r}>{r}</li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    </dl>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
