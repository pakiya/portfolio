import { experiences } from '../../data/experiences';
import { ExperienceCard } from '../ExperienceCard/ExperienceCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './ExperienceSection.module.css';

export function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={`reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${0.15 * (i + 1)}s` }}>
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
