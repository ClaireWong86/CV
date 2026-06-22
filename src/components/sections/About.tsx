import { profile } from "../../data/profile";

export function About() {
  return (
    <section id="about" className="section section--dark about">
      <div className="section__inner section__inner--narrow">
        <p className="section__meta">About · 关于</p>
        <h2 className="section__title section__title--light">
          我想因为什么<em>被记住。</em>
        </h2>
        <div className="about__body">
          <p>{profile.about}</p>
          <p className="about__memory">
            不是「做过多少功能」，而是——在复杂业务里，能否把一次判断变成可复用的系统能力。
          </p>
        </div>
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
