import { metrics, epigraph } from "../../data/content";

export function KeyMetrics() {
  return (
    <section id="metrics" className="section section--dark metrics">
      <div className="section__inner">
        <div className="section__row">
          <div>
            <p className="section__meta">Key Metrics · 2026</p>
            <h2 className="section__title section__title--light">
              用<em>数据</em>说话
            </h2>
          </div>
          <p className="section__aside section__aside--light">
            Selected 4 from a larger reel.
          </p>
        </div>

        <div className="metrics__grid">
          {metrics.map((m) => (
            <article key={m.reel} className="metrics__card">
              <p className="metrics__reel">{m.reel}</p>
              <p className="metrics__label">{m.label}</p>
              <p className="metrics__value">{m.value}</p>
              <p className="metrics__desc">{m.desc}</p>
              <p className="metrics__detail">{m.detail}</p>
            </article>
          ))}
        </div>

        <blockquote className="epigraph">
          <p className="epigraph__meta">— Epigraph · 卷首语 —</p>
          <p className="epigraph__quote">"{epigraph.quote}"</p>
          <cite className="epigraph__author">{epigraph.author}</cite>
        </blockquote>
      </div>
    </section>
  );
}
