import { site } from "../../data/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#" className="site-header__brand">
          {site.name} · {site.role}
        </a>
        <nav className="site-header__nav" aria-label="主导航">
          {site.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
