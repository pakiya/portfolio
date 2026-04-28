import { awards } from '../../data/awards';
import { AwardCard } from '../AwardCard/AwardCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './AwardsSection.module.css';

export function AwardsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="awards" className="section">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Awards & Achievements</h2>
          <p className="section-subtitle">Recognition and accomplishments</p>
        </div>
        <div className={styles.list}>
          {awards.map((award, i) => (
            <div key={i} className={`reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${0.15 * (i + 1)}s` }}>
              <AwardCard {...award} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
