import { personalInfo } from '../../data/personalInfo';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>{personalInfo.name}</h1>
        <h2 className={styles.title}>{personalInfo.title}</h2>
        <p className={styles.tagline}>{personalInfo.tagline}</p>
        <div className={styles.cta}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('projects')}>
            View Projects
          </button>
          <button className={styles.btnOutline} onClick={() => scrollTo('contact')}>
            Contact Me
          </button>
        </div>
        <div className={styles.socials}>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
