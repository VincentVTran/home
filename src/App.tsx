import { Nav } from "./components/Nav";
import { Reveal } from "./components/Reveal";
import { Icon } from "./components/Icons";
import { awards, education, experience, profile, projects, skills, stats } from "./data/resume";

export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <Nav name={profile.name} />

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <Reveal>
            <img className="hero__photo" src={profile.photo} alt={profile.name} width={160} height={160} />
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">{profile.role}</p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="hero__title">{profile.name}.</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="hero__tagline gradient-text">{profile.tagline}</p>
          </Reveal>
          <Reveal delay={260}>
            <div className="hero__actions">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                Get in touch
              </a>
              <a className="btn btn--link" href="#experience">
                See my work <Icon name="Arrow" size={14} />
              </a>
            </div>
          </Reveal>
        </section>

        {/* About */}
        <section className="section section--tint">
          <div className="container narrow">
            <Reveal>
              <p className="lede">{profile.bio}</p>
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section className="section">
          <div className="container">
            <Reveal>
              <h2 className="section__title">Impact, by the numbers.</h2>
            </Reveal>
            <div className="stats">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 80}>
                  <div className="stat">
                    <span className="stat__value gradient-text">{s.value}</span>
                    <span className="stat__label">{s.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section section--tint">
          <div className="container">
            <Reveal>
              <h2 className="section__title">Experience.</h2>
            </Reveal>
            <div className="timeline">
              {experience.map((job) => (
                <Reveal key={job.company + job.title}>
                  <article className="card job">
                    <header className="job__head">
                      <div>
                        <h3 className="job__company">{job.company}</h3>
                        <p className="job__title">{job.title}</p>
                      </div>
                      <div className="job__meta">
                        <span>{job.dates}</span>
                        <span>{job.location}</span>
                      </div>
                    </header>
                    <ul className="job__list">
                      {job.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Skills + Education */}
        <section id="skills" className="section">
          <div className="container">
            <Reveal>
              <h2 className="section__title">Skills.</h2>
            </Reveal>
            <div className="bento">
              {skills.map((g, i) => (
                <Reveal key={g.name} delay={i * 80}>
                  <div className="card tile">
                    <h3 className="tile__title">{g.name}</h3>
                    <ul className="chips">
                      {g.items.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={320}>
                <div className="card tile tile--wide tile--dark">
                  <p className="eyebrow">Education</p>
                  <h3 className="tile__big">{education.school}</h3>
                  <p className="tile__sub">
                    {education.degree} · {education.dates}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section section--tint">
          <div className="container">
            <Reveal>
              <h2 className="section__title">Projects.</h2>
            </Reveal>
            <div className="projects">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <a className="card project" href={p.url} target="_blank" rel="noopener noreferrer">
                    <div className="project__media">
                      <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" width={1200} height={600} />
                    </div>
                    <div className="project__body">
                      <h3>{p.title}</h3>
                      <p>{p.blurb}</p>
                      <span className="link">
                        Visit <Icon name="Arrow" size={12} />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="section">
          <div className="container">
            <Reveal>
              <h2 className="section__title">Recognition.</h2>
            </Reveal>
            <div className="awards">
              {awards.map((a, i) => (
                <Reveal key={a.title} delay={i * 80}>
                  <div className="card award">
                    <span className="award__date">{a.date}</span>
                    <h3>{a.title}</h3>
                    <p className="award__org">{a.org}</p>
                    <p>{a.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section section--dark">
          <div className="container narrow center">
            <Reveal>
              <h2 className="contact__title">Let's build something.</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="contact__sub">
                Based in {profile.location}. Open to conversations about cloud infrastructure, Kubernetes, and
                distributed systems.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="hero__actions">
                <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                  <Icon name="Mail" size={16} /> Email me
                </a>
                <a className="btn btn--ghost" href={profile.social[0].url} target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <ul className="socials">
                {profile.social.map((s) => (
                  <li key={s.name}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                      <Icon name={s.name} size={22} />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>
            Copyright © {year} {profile.name}. All rights reserved.
          </span>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}
