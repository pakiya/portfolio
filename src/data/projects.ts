import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Multi-Bank Onboarding Platform',
    description:
      'End-to-end customer onboarding system supporting 3M+ users across multiple banking partners with KYC verification, document processing, and real-time status tracking.',
    techStack: ['Node.js', 'NestJS', 'MongoDB', 'AWS Lambda', 'Kafka', 'Redis'],
  },
  {
    title: 'TravelTech Services',
    description:
      'Suite of travel services including Visa processing, Airport Lounge access, and eSIM provisioning — built as microservices handling 200+ req/sec with 99.9% uptime.',
    techStack: ['Node.js', 'NestJS', 'MongoDB', 'AWS SNS', 'AWS SQS', 'Docker'],
  },
  {
    title: 'Hackathon Automation Platform',
    description:
      'Internal automation tool that auto-provisions Bitbucket repositories, SonarQube projects, and Kong routes post ticket approval — reducing manual setup effort and accelerating developer onboarding.',
    techStack: ['Node.js', 'REST APIs', 'Bitbucket', 'SonarQube', 'Kong'],
  },
  {
    title: 'White-Label Community Platform',
    description:
      'Community platform serving 500K+ users across multiple partner brands with dynamic configurations, content moderation, and branded experiences.',
    techStack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Microservices'],
  },
  {
    title: 'Event Hosting Platform',
    description:
      'Scalable event hosting platform supporting 1,000+ events/week with partner tools, payment routing, and end-user discovery and booking.',
    techStack: ['Node.js', 'MongoDB', 'REST APIs', 'Payment Gateway'],
  },
];
