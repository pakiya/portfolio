import { useMemo } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useActiveSection } from './hooks/useActiveSection';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { HeroSection } from './components/HeroSection/HeroSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { SkillsSection } from './components/SkillsSection/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';
import { EducationSection } from './components/EducationSection/EducationSection';
import { AwardsSection } from './components/AwardsSection/AwardsSection';
import { ContactSection } from './components/ContactSection/ContactSection';
import { Footer } from './components/Footer/Footer';

const SECTION_IDS = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'awards', 'contact'];

function AppContent() {
  const sectionIds = useMemo(() => SECTION_IDS, []);
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <header>
        <NavigationBar activeSection={activeSection} />
      </header>
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
