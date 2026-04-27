import { skills } from '../../data/skills';
import { SkillCard } from '../SkillCard/SkillCard';
import styles from './SkillsSection.module.css';

export function SkillsSection() {
  // Backend category first, then the rest
  const sorted = [...skills].sort((a, b) => {
    if (a.name.startsWith('Backend')) return -1;
    if (b.name.startsWith('Backend')) return 1;
    return 0;
  });

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        <div className={styles.grid}>
          {sorted.map((category) => (
            <div key={category.name} className={styles.category}>
              <h3 className={styles.categoryName}>{category.name}</h3>
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} proficiency={skill.proficiency} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
