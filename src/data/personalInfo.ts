import { PersonalInfo } from './types';
import { getExperienceYears, getExperienceLabel } from '../utils/experience';

const expLabel = getExperienceLabel();

export const personalInfo: PersonalInfo = {
  name: 'Pankaj Kumar',
  title: 'Senior Software Engineer',
  tagline: `Building scalable distributed systems in fintech — ${expLabel} years of backend expertise with Node.js, NestJS, MongoDB, Kafka & AWS`,
  summary: `Results-driven Senior Backend Engineer with ${expLabel} years of experience building scalable distributed systems in fintech. At Niyo, delivered microservices supporting 3M+ users and 200K DAU, handling 200+ req/sec with 99.9% uptime. Improved API latency by 80% and reduced database latency by 60%. Skilled in Node.js, NestJS, MongoDB, Kafka, and AWS.`,
  email: 'pk.kumar7500@gmail.com',
  location: 'Bengaluru, Karnataka, India',
  phone: '+91-8475848069',
  github: 'https://github.com/pk7500',
  linkedin: 'https://www.linkedin.com/in/pk7500/',
  profileImage: '',
  stats: {
    yearsOfExperience: getExperienceYears(),
    projectsCompleted: 15,
    technologiesUsed: 25,
  },
};
