import { articles } from "../../data/content";

export function Writing() {
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
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`#writing-${article.slug}`}
              className="writing__item"
            >
              <span className="writing__date">{article.date}</span>
              <div className="writing__body">
                <h3 className="writing__title">{article.title}</h3>
                <p className="writing__excerpt">{article.excerpt}</p>
              </div>
              <span className="writing__arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
