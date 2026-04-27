export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  email: string;
  location: string;
  phone: string;
  github: string;
  linkedin: string;
  profileImage: string;
  stats: {
    yearsOfExperience: number;
    projectsCompleted: number;
    technologiesUsed: number;
  };
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  isCurrent: boolean;
  responsibilities: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  sourceUrl?: string;
  liveUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  graduationYear: number;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
}
