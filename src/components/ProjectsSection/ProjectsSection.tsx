import { useState } from 'react';
import { projects } from '../../data/projects';
import { filterProjects, getAllTags } from '../../utils/filtering';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './ProjectsSection.module.css';

export function ProjectsSection() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const tags = getAllTags(projects);
  const filtered = filterProjects(projects, selectedTag);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Things I've built</p>
        </div>
        <div className={`${styles.filters} reveal ${isVisible ? 'visible' : ''} reveal-delay-1`}>
          <button
            className={`${styles.filterBtn} ${!selectedTag ? styles.active : ''}`}
            onClick={() => setSelectedTag(null)}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              className={`${styles.filterBtn} ${selectedTag === tag ? styles.active : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <div key={i} className={`reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${0.1 * (i + 2)}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
