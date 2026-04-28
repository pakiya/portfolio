import { education } from '../../data/education';
import { EducationCard } from '../EducationCard/EducationCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './EducationSection.module.css';

export function EducationSection() {
  const sorted = [...education].sort((a, b) => b.graduationYear - a.graduationYear);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className={`section ${styles.education}`}>
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background</p>
        </div>
        <div className={styles.list}>
          {sorted.map((edu, i) => (
            <div key={i} className={`reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${0.15 * (i + 1)}s` }}>
              <EducationCard {...edu} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
