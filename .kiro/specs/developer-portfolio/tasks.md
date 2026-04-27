# Implementation Plan: Developer Portfolio

## Overview

Build a React + TypeScript single-page portfolio application using Vite, CSS Modules, and static data files. Implementation follows an incremental approach: project setup → data layer → reusable components → section components → hooks & interactivity → testing.

## Tasks

- [x] 1. Project setup and configuration
  - Initialize Vite project with React + TypeScript template
  - Install dependencies: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `fast-check`, `jsdom`
  - Configure Vitest in `vite.config.ts`
  - Set up CSS custom properties for light/dark themes in `src/styles/theme.css`
  - Create base global styles in `src/styles/global.css`
  - _Requirements: 10.1, 11.1_

- [x] 2. Data layer and types
  - [x] 2.1 Create data types and static data files
    - Create `src/data/types.ts` with all TypeScript interfaces (PersonalInfo, Skill, SkillCategory, Experience, Project, Education, Award)
    - Create `src/data/personalInfo.ts` with placeholder developer data
    - Create `src/data/skills.ts` with skill categories and skills
    - Create `src/data/experiences.ts` with work experience entries
    - Create `src/data/projects.ts` with project entries
    - Create `src/data/education.ts` with education entries
    - Create `src/data/awards.ts` with award entries
    - _Requirements: 1.1, 3.1, 3.2, 4.1, 5.1, 5.2, 6.1, 6.2, 7.1, 8.1_

  - [x] 2.2 Implement validation and filtering utilities
    - Create `src/utils/validation.ts` with `validateContactForm` and `validatePortfolioData` functions
    - Create `src/utils/filtering.ts` with `filterProjects` function
    - _Requirements: 6.3, 6.4, 9.3_

  - [ ]* 2.3 Write property test for contact form validation
    - **Property 8: Contact form validation rejects invalid input**
    - **Validates: Requirements 9.3**

  - [ ]* 2.4 Write property test for project filtering
    - **Property 4: Project filtering correctness**
    - **Validates: Requirements 6.3, 6.4**

- [x] 3. Theme system
  - [x] 3.1 Implement ThemeProvider and useTheme hook
    - Create `src/context/ThemeContext.tsx` with ThemeProvider component
    - Create `src/hooks/useTheme.ts` with theme toggle and localStorage persistence
    - Set `data-theme` attribute on document root
    - Fall back to system preference if localStorage is unavailable
    - _Requirements: 10.1, 10.2, 10.3_

  - [ ]* 3.2 Write property test for theme toggle involution
    - **Property 9: Theme toggle is an involution**
    - **Validates: Requirements 10.1**

  - [ ]* 3.3 Write property test for theme persistence round-trip
    - **Property 10: Theme persistence round-trip**
    - **Validates: Requirements 10.2, 10.3**

- [x] 4. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Reusable UI components
  - [x] 5.1 Implement SkillCard component
    - Create `src/components/SkillCard/SkillCard.tsx` and `SkillCard.module.css`
    - Display skill name and visual proficiency bar
    - _Requirements: 4.2_

  - [ ]* 5.2 Write property test for SkillCard
    - **Property 1: Skills are grouped and display name with proficiency**
    - **Validates: Requirements 4.1, 4.2**

  - [x] 5.3 Implement ExperienceCard component
    - Create `src/components/ExperienceCard/ExperienceCard.tsx` and `ExperienceCard.module.css`
    - Display title, company, period, responsibilities, and current/past indicator
    - _Requirements: 5.2, 5.3_

  - [ ]* 5.4 Write property test for ExperienceCard
    - **Property 3: Experience card displays all required fields**
    - **Validates: Requirements 5.2**

  - [x] 5.5 Implement ProjectCard component
    - Create `src/components/ProjectCard/ProjectCard.tsx` and `ProjectCard.module.css`
    - Display title, description, tech stack tags, and links
    - _Requirements: 6.2_

  - [ ]* 5.6 Write property test for ProjectCard
    - **Property 5: Project card displays all required fields**
    - **Validates: Requirements 6.2**

  - [x] 5.7 Implement EducationCard component
    - Create `src/components/EducationCard/EducationCard.tsx` and `EducationCard.module.css`
    - Display institution, degree, field, graduation year
    - _Requirements: 7.1_

  - [ ]* 5.8 Write property test for EducationCard
    - **Property 6: Education card displays all required fields**
    - **Validates: Requirements 7.1**

  - [x] 5.9 Implement AwardCard component
    - Create `src/components/AwardCard/AwardCard.tsx` and `AwardCard.module.css`
    - Display title, organization, date, description
    - _Requirements: 8.1_

  - [ ]* 5.10 Write property test for AwardCard
    - **Property 7: Award card displays all required fields**
    - **Validates: Requirements 8.1**

- [x] 6. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Section components
  - [x] 7.1 Implement HeroSection
    - Create `src/components/HeroSection/HeroSection.tsx` and `HeroSection.module.css`
    - Display name, title, tagline, CTA buttons, social links
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 7.2 Implement AboutSection
    - Create `src/components/AboutSection/AboutSection.tsx` and `AboutSection.module.css`
    - Display summary, stats, profile image with alt text
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 7.3 Implement SkillsSection
    - Create `src/components/SkillsSection/SkillsSection.tsx` and `SkillsSection.module.css`
    - Group skills by category, render backend first
    - _Requirements: 4.1, 4.3_

  - [x] 7.4 Implement ExperienceSection
    - Create `src/components/ExperienceSection/ExperienceSection.tsx` and `ExperienceSection.module.css`
    - Render timeline with ExperienceCard components in reverse chronological order
    - _Requirements: 5.1, 5.3_

  - [ ]* 7.5 Write property test for reverse chronological ordering
    - **Property 2: Data ordering — reverse chronological**
    - **Validates: Requirements 5.1, 7.2, 8.2**

  - [x] 7.6 Implement ProjectsSection
    - Create `src/components/ProjectsSection/ProjectsSection.tsx` and `ProjectsSection.module.css`
    - Render FilterBar and ProjectCard grid with filtering logic
    - _Requirements: 6.1, 6.3, 6.4_

  - [x] 7.7 Implement EducationSection
    - Create `src/components/EducationSection/EducationSection.tsx` and `EducationSection.module.css`
    - Render EducationCard components in reverse chronological order
    - _Requirements: 7.1, 7.2_

  - [x] 7.8 Implement AwardsSection
    - Create `src/components/AwardsSection/AwardsSection.tsx` and `AwardsSection.module.css`
    - Render AwardCard components in reverse chronological order
    - _Requirements: 8.1, 8.2_

  - [x] 7.9 Implement ContactSection
    - Create `src/components/ContactSection/ContactSection.tsx` and `ContactSection.module.css`
    - Create `src/hooks/useContactForm.ts` with form state, validation, and submission logic
    - Render ContactForm with validation errors, success/error messages
    - Render ContactInfo with email and location
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [x] 8. Navigation and layout
  - [x] 8.1 Implement NavigationBar
    - Create `src/components/NavigationBar/NavigationBar.tsx` and `NavigationBar.module.css`
    - Render nav links for all sections
    - Implement hamburger menu toggle for mobile (< 768px)
    - Include ThemeSwitcher toggle button
    - _Requirements: 2.1, 2.4, 2.5, 10.1_

  - [x] 8.2 Implement useActiveSection hook
    - Create `src/hooks/useActiveSection.ts` using IntersectionObserver
    - Track which section is currently in viewport
    - Highlight active nav link
    - _Requirements: 2.2, 2.3_

  - [x] 8.3 Implement Footer component
    - Create `src/components/Footer/Footer.tsx` and `Footer.module.css`
    - Display copyright and social links

- [x] 9. Wire everything together in App
  - [x] 9.1 Compose App component
    - Wire ThemeProvider, NavigationBar, all sections, and Footer in `src/App.tsx`
    - Implement smooth scroll via `scrollIntoView` on nav link clicks
    - Add semantic HTML structure (main, section, nav, header, footer)
    - Ensure lazy loading attribute on below-fold images
    - _Requirements: 2.2, 12.1, 12.2, 12.3, 12.4_

  - [ ]* 9.2 Write unit tests for key components
    - Test NavigationBar renders all links
    - Test hamburger menu toggle
    - Test ContactForm validation flow
    - Test theme toggle UI
    - _Requirements: 2.1, 2.5, 9.1, 10.1_

- [x] 10. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- All portfolio content is in `src/data/` files — update these with real data when ready
