import { skills } from '../../data/skills';
import { SkillCard } from '../SkillCard/SkillCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './SkillsSection.module.css';

export function SkillsSection() {
  const { ref, isVisible } = useScrollReveal();

  const sorted = [...skills].sort((a, b) => {
    if (a.name.startsWith('Backend')) return -1;
    if (b.name.startsWith('Backend')) return 1;
    return 0;
  });

  return (
    <section id="skills" className="section">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>
        <div className={styles.grid}>
          {sorted.map((category, i) => (
            <div
              key={category.name}
              className={`${styles.category} reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 * (i + 1)}s` }}
            >
              <h3 className={styles.categoryName}>{category.name}</h3>
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} proficiency={skill.proficiency} animate={isVisible} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
