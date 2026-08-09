import { useState } from "react";
import { marked } from "marked";
import { articles } from "../../data/articles";

export function Writing() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="writing" className="section section--warm writing">
      <div className="section__inner">
        <div className="section__row">
          <div>
            <p className="section__meta section__meta--accent">
              Writing · 思考流
            </p>
            <h2 className="section__title">
              写作 · <em>思考。</em>
            </h2>
          </div>
          <p className="section__aside">
            杂志式文章目录，Markdown 低摩擦更新，持续记录产品判断。
          </p>
        </div>

        <div className="writing__list">
          {articles.map((article) => {
            const isOpen = expanded === article.slug;
            return (
              <article key={article.slug} className="writing__entry">
                <button
                  type="button"
                  className="writing__item"
                  onClick={() => setExpanded(isOpen ? null : article.slug)}
                  aria-expanded={isOpen}
                >
                  <span className="writing__date">{article.date}</span>
                  <div className="writing__body">
                    <h3 className="writing__title">{article.title}</h3>
                    <p className="writing__excerpt">{article.excerpt}</p>
                  </div>
                  <span className="writing__arrow" aria-hidden="true">
                    {isOpen ? "↑" : "→"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="writing__article"
                    // 内容来自本仓库受控的 Markdown 文件，无用户输入
                    dangerouslySetInnerHTML={{
                      __html: marked.parse(article.body, { async: false }),
                    }}
                  />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
