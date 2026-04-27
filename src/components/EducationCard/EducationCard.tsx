import styles from './EducationCard.module.css';

interface EducationCardProps {
  institution: string;
  degree: string;
  field: string;
  graduationYear: number;
}

export function EducationCard({ institution, degree, field, graduationYear }: EducationCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.year}>{graduationYear}</div>
      <div className={styles.content}>
        <h3 className={styles.degree}>{degree}</h3>
        <p className={styles.field}>{field}</p>
        <p className={styles.institution}>{institution}</p>
      </div>
    </div>
  );
}
