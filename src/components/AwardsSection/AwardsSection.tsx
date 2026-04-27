import { awards } from '../../data/awards';
import { AwardCard } from '../AwardCard/AwardCard';
import styles from './AwardsSection.module.css';

export function AwardsSection() {
  return (
    <section id="awards" className="section">
      <div className="container">
        <h2 className="section-title">Awards & Achievements</h2>
        <p className="section-subtitle">Recognition and accomplishments</p>
        <div className={styles.list}>
          {awards.map((award, i) => (
            <AwardCard key={i} {...award} />
          ))}
        </div>
      </div>
    </section>
  );
}
