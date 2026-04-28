const CAREER_START = new Date(2019, 1); // July 2017 (month is 0-indexed)

export function getExperienceYears(): number {
  const now = new Date();
  let years = now.getFullYear() - CAREER_START.getFullYear();
  if (now.getMonth() < CAREER_START.getMonth()) {
    years--;
  }
  return years;
}

/** Returns "7+" format — full years with + for remaining months */
export function getExperienceLabel(): string {
  return `${getExperienceYears()}+`;
}
