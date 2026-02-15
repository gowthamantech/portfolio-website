import contentData from '@/content/content.json';

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  image: string;
  linkedin: string;
  github: string;
  email: string;
  location: string;
}

export interface Skill {
  name: string;
  category: string;
  level: string;
}

export interface Achievement {
  title: string;
  date: string;
  issuer: string;
  description?: string;
  url?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Content {
  profile: Profile;
  skills: Skill[];
  achievements: Achievement[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}

export const content: Content = contentData as Content;
