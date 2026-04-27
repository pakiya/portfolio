import { experiences } from '../../data/experiences';
import { ExperienceCard } from '../ExperienceCard/ExperienceCard';
import styles from './ExperienceSection.module.css';

export function ExperienceSection() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
