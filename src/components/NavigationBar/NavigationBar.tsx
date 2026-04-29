import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './NavigationBar.module.css';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

interface NavigationBarProps {
  activeSection: string;
}

export function NavigationBar({ activeSection }: NavigationBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo} onClick={() => handleClick('home')}>
          PK
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.show : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                className={`${styles.link} ${activeSection === link.id ? styles.active : ''}`}
                onClick={() => handleClick(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1E1O40bq_k5jB4ad8hxmFiuUG5viE-ERW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeBtn}
            >
              My Resume
            </a>
          </li>
          <li>
            <button
              className={styles.themeBtn}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
