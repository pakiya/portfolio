import { Experience } from './types';

export const experiences: Experience[] = [
  {
    title: 'SDE-II',
    company: 'Finnew Solutions (Niyo)',
    period: 'Jun 2022 – Present',
    isCurrent: true,
    responsibilities: [
      'Designed and scaled microservices architecture handling 200+ req/sec and serving 200K+ daily active users across multi-bank onboarding, Agent App, and TravelTech services (Visa, Lounge, eSIM).',
      'Led end-to-end development of customer onboarding platform, acquiring 3M+ users and driving measurable improvements in revenue and customer experience (NPS).',
      'Optimized system performance, reducing API response time by 80% (500ms → 100ms) and improving MongoDB query latency by 60% through indexing and query optimization.',
      'Engineered scalable and resilient systems, including zero-downtime customer migration and serverless event-driven workflows (AWS Lambda, SNS, SQS), ensuring high availability and cost efficiency.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Glynk India',
    period: 'Jan 2021 – May 2022',
    isCurrent: false,
    responsibilities: [
      'Designed and built a white-label community platform serving 500K+ users across multiple partner brands, supporting dynamic partner configurations and branded experiences.',
      'Engineered advanced content-moderation system with profanity filtering and community-guidelines enforcement to maintain platform trust at scale.',
      'Ensured smooth handling of large concurrent user bases through robust architecture, horizontal scaling strategies, and performance profiling.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Kloh Internet',
    period: 'Jan 2018 – Dec 2020',
    isCurrent: false,
    responsibilities: [
      'Built and scaled the Kloh event hosting platform to support 1,000+ events/week and 100+ active partners, delivering partner-facing tools for event creation and management.',
      'Developed a rule-based payment routing module that intelligently directed transactions across payment providers, improving success rates and reducing processing costs.',
      'Delivered seamless end-user event discovery and booking experience, contributing to strong platform retention metrics.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Ewhents Technologies',
    period: 'Jan 2018 – Dec 2020',
    isCurrent: false,
    responsibilities: [
      'Contributed to a seminar and webinar event-hosting platform, enabling partners to create, publish, and market online events to end users.',
    ],
  },
];
