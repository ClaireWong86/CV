import { site } from "../../data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="section section--dark site-footer">
      <div className="section__inner">
        <p className="section__meta">— Get in Touch · 联系 —</p>
        <h2 className="section__title section__title--light">
          有想法？<em>聊聊吧。</em>
        </h2>
        <p className="section__lead section__lead--light">{site.footer.contactNote}</p>
        <div className="site-footer__links">
          <a href={`mailto:${site.email}`} className="btn btn--accent">
            {site.email}
          </a>
          {site.social.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
        <p className="site-footer__copy">© {year} {site.name}</p>
      </div>
    </footer>
  );
}
