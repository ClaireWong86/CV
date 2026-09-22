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
        <div className="hero__visual">
          <figure className="hero__visual-frame">
            <img
              className="hero__visual-img"
              src={`${import.meta.env.BASE_URL}hero-tire-ai.jpg`}
              alt="AI 轮胎诊断：胎面磨损、花纹深度、胎侧裂纹、鼓包变形、DOT 与异常偏磨识别"
              width={1200}
              height={1600}
              loading="eager"
              decoding="async"
            />
            <figcaption className="hero__visual-label">
              AI Tire Diagnosis · 2026
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
