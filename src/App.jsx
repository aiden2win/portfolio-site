import { useState } from 'react';
import { useLang } from './i18n';

const projectLinks = [
  {
    github: 'https://github.com/aiden2win/competitor-intelligence-dashboard',
    demo: 'https://competitor-intelligence-dashboard-lake.vercel.app/',
  },
  {
    github: 'https://github.com/aiden2win/new-business-idea-evaluation-dashboard',
    demo: 'https://new-business-idea-evaluation-dashbo.vercel.app/',
  },
  {
    github: 'https://github.com/aiden2win/strategic-action-tracker',
    demo: 'https://strategic-action-tracker.vercel.app/',
  },
];

function App() {
  const { lang, t, setLanguage } = useLang();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const languageOptions = [
    { code: 'ko', label: '한국어' },
    { code: 'en', label: 'English' },
  ];

  return (
    <div className="site">
      <header className="hero section">
        <nav className="top-nav">
          <span className="brand">Aiden's Portfolio</span>
          <div className="nav-links">
            <a href="#about">{t.nav.about}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#strengths">{t.nav.strengths}</a>
            <a href="#contact">{t.nav.contact}</a>
            <div className="lang-menu">
              <button
                className="lang-menu-trigger"
                onClick={() => setIsLangMenuOpen((prev) => !prev)}
                aria-label="Change language"
                aria-haspopup="menu"
                aria-expanded={isLangMenuOpen}
              >
                <span className="lang-menu-icon" aria-hidden="true">🌐</span>
                <span>{languageOptions.find(({ code }) => code === lang)?.label}</span>
              </button>
              {isLangMenuOpen && (
                <div className="lang-menu-dropdown" role="menu">
                  {languageOptions.map(({ code, label }) => (
                    <button
                      key={code}
                      className={`lang-menu-option${lang === code ? ' is-active' : ''}`}
                      onClick={() => {
                        setLanguage(code);
                        setIsLangMenuOpen(false);
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
        <div className="hero-content reveal reveal-1">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.heading}</h1>
          <p className="hero-copy">{t.hero.copy}</p>
          <a className="cta" href="#projects">{t.hero.cta}</a>
        </div>
      </header>

      <main>
        <section id="about" className="section card reveal reveal-2">
          <h2>{t.about.title}</h2>
          <p>{t.about.p1}</p>
          <p>
            {t.about.p2} <strong>{t.about.p2bold}</strong>{t.about.p2suffix}
          </p>
        </section>

        <section id="projects" className="section">
          <div className="section-head reveal reveal-1">
            <h2>{t.projects.title}</h2>
            <p>{t.projects.desc}</p>
            <p className="section-head-suffix">{t.projects.descSuffix}</p>
          </div>
          <div className="flow-steps reveal reveal-2">
            {t.flow.map((item, index) => (
              <div key={item.step} className="flow-step">
                <span className="flow-step-number">{item.step}</span>
                <span className="flow-step-label">{item.label}</span>
                {index < t.flow.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
          <div className="featured-grid">
            {t.featuredProjects.map((project, index) => (
              <article key={project.title} className={`project-card featured-card reveal reveal-${(index % 3) + 1}`}>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <ul>
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="tags">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a className="btn btn-demo" href={projectLinks[index].demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a className="btn btn-github" href={projectLinks[index].github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="suite-footer reveal reveal-1">{t.suiteFooter}</p>
        </section>

        <section id="strengths" className="section card">
          <div className="section-head reveal reveal-1">
            <h2>{t.strengths.title}</h2>
            <p>{t.strengths.desc}</p>
          </div>
          <div className="strength-grid">
            {t.strengthsList.map((strength, index) => (
              <article key={strength.title} className={`strength-item reveal reveal-${(index % 3) + 1}`}>
                <h3>{strength.title}</h3>
                <p>{strength.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section card contact reveal reveal-2">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.placeholder}</p>
          <p className="contact-placeholder">{t.contact.note}</p>
        </section>
      </main>
      <footer className="site-footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
