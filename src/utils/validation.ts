import { PersonalInfo, SkillCategory, Experience, Project, Education, Award } from '../data/types';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name || !data.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!data.email || !data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.subject || !data.subject.trim()) {
    errors.subject = 'Subject is required';
  }

  if (!data.message || !data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export function validatePortfolioData(data: {
  personalInfo: PersonalInfo;
  skills: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  awards: Award[];
}): ValidationResult {
  const errors: string[] = [];

  if (!data.personalInfo.name.trim()) errors.push('Name must be non-empty');
  if (!EMAIL_REGEX.test(data.personalInfo.email)) errors.push('Email must be valid');

  for (const category of data.skills) {
    for (const skill of category.skills) {
      if (skill.proficiency < 0 || skill.proficiency > 100) {
        errors.push(`Skill "${skill.name}" proficiency must be between 0 and 100`);
      }
    }
  }

  for (const project of data.projects) {
    if (project.techStack.length === 0) {
      errors.push(`Project "${project.title}" must have at least one tech stack entry`);
    }
  }

  return { valid: errors.length === 0, errors };
}
