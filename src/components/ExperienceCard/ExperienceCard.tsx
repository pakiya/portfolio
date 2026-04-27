import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  isCurrent: boolean;
  responsibilities: string[];
}

export function ExperienceCard({ title, company, period, isCurrent, responsibilities }: ExperienceCardProps) {
  return (
    <div className={`${styles.card} ${isCurrent ? styles.current : ''}`}>
      <div className={styles.indicator} />
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {isCurrent && <span className={styles.badge}>Current</span>}
        </div>
        <p className={styles.company}>{company}</p>
        <p className={styles.period}>{period}</p>
        <ul className={styles.list}>
          {responsibilities.map((r, i) => (
            <li key={i} className={styles.item}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
