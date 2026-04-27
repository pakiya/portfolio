import { Project } from '../data/types';

export function filterProjects(
  projects: Project[],
  selectedTag: string | null
): Project[] {
  if (!selectedTag || selectedTag === 'All') {
    return projects;
  }
  return projects.filter((p) => p.techStack.includes(selectedTag));
}

export function getAllTags(projects: Project[]): string[] {
  const tagSet = new Set<string>();
  for (const project of projects) {
    for (const tag of project.techStack) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet).sort();
}
