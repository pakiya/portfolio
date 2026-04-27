import styles from './AwardCard.module.css';

interface AwardCardProps {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export function AwardCard({ title, organization, date, description }: AwardCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.date}>{date}</span>
      </div>
      <p className={styles.org}>{organization}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
