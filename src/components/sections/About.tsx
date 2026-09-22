import { profile } from "../../data/profile";

export function About() {
  return (
    <section id="about" className="section section--dark about">
      <div className="section__inner section__inner--narrow">
        <p className="section__meta">About · 关于</p>
        <div className="about__skills">
          {profile.skills.map((group) => (
            <div key={group.category} className="about__skill-group">
              <p className="about__skill-label">{group.category}</p>
              <div className="about__skill-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
