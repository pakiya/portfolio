import { personalInfo } from '../../data/personalInfo';
import profileImg from '../../assets/profile.jpg';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useCountUp } from '../../hooks/useCountUp';
import styles from './AboutSection.module.css';

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal();
  const years = useCountUp(personalInfo.stats.yearsOfExperience, isVisible);
  const projects = useCountUp(personalInfo.stats.projectsCompleted, isVisible);
  const techs = useCountUp(personalInfo.stats.technologiesUsed, isVisible);

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know my background</p>
        </div>
        <div className={`${styles.grid} reveal ${isVisible ? 'visible' : ''} reveal-delay-1`}>
          <div className={styles.imageWrap}>
            <img
              src={profileImg}
              alt={`${personalInfo.name} profile photo`}
              className={styles.image}
              loading="lazy"
            />
          </div>
          <div className={styles.info}>
            <p className={styles.summary}>{personalInfo.summary}</p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>{years}+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>{projects}+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>{techs}+</span>
                <span className={styles.statLabel}>Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
