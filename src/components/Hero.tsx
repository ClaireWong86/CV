import { site } from "../data/site";

export function Hero() {
  return (
    <section className="hero section--dark" aria-labelledby="hero-heading">
      <div className="hero__grid">
        <div className="hero__content">
          <p className="hero__meta">
            <span className="hero__meta-dot" aria-hidden="true" />
            {site.reelMeta}
          </p>
          <h1 id="hero-heading" className="hero__title">
            <span className="hero__name">{site.name}</span>
            <span className="hero__english">{site.englishName}</span>
          </h1>
          <p className="hero__role">{site.roleLine}</p>
          <p className="hero__location">{site.location}</p>
          <div className="hero__rule" aria-hidden="true" />
          <p className="hero__positioning">{site.positioning}</p>
          <div className="hero__actions">
            <a href="#writing" className="btn btn--accent">读我的文章 →</a>
            <a href="#contact" className="btn btn--ghost-light">联系我 →</a>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__visual-frame">
            <span className="hero__visual-label">Untitled · 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
