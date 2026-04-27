import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  sourceUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({ title, description, techStack, sourceUrl, liveUrl }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.tags}>
        {techStack.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      {(sourceUrl || liveUrl) && (
        <div className={styles.links}>
          {sourceUrl && (
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Source Code
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
