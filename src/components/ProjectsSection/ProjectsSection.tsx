import { useState } from 'react';
import { projects } from '../../data/projects';
import { filterProjects, getAllTags } from '../../utils/filtering';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './ProjectsSection.module.css';

export function ProjectsSection() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const tags = getAllTags(projects);
  const filtered = filterProjects(projects, selectedTag);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built</p>
        <div className={styles.filters}>
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
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
