import { personalInfo } from '../../data/personalInfo';
import profileImg from '../../assets/profile.jpg';
import styles from './AboutSection.module.css';

export function AboutSection() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know my background</p>
        <div className={styles.grid}>
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
                <span className={styles.statNum}>{personalInfo.stats.yearsOfExperience}+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>{personalInfo.stats.projectsCompleted}+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>{personalInfo.stats.technologiesUsed}+</span>
                <span className={styles.statLabel}>Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
