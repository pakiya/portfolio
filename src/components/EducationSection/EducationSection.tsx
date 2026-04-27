import { education } from '../../data/education';
import { EducationCard } from '../EducationCard/EducationCard';
import styles from './EducationSection.module.css';

export function EducationSection() {
  const sorted = [...education].sort((a, b) => b.graduationYear - a.graduationYear);

  return (
    <section id="education" className={`section ${styles.education}`}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background</p>
        <div className={styles.list}>
          {sorted.map((edu, i) => (
            <EducationCard key={i} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
