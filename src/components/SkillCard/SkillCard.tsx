import styles from './SkillCard.module.css';

interface SkillCardProps {
  name: string;
  proficiency: number;
  animate?: boolean;
}

export function SkillCard({ name, proficiency, animate = false }: SkillCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <span className={styles.percent}>{proficiency}%</span>
      </div>
      <div className={styles.barBg}>
        <div
          className={styles.barFill}
          style={{ width: animate ? `${proficiency}%` : '0%' }}
          role="progressbar"
          aria-valuenow={proficiency}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} proficiency`}
        />
      </div>
    </div>
  );
}
