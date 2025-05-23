import React from 'react';
import { Code2, Smartphone, Layout, Database, Workflow, Globe } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Android Development',
    icon: <Smartphone size={28} className="text-primary-600 dark:text-primary-400" />,
    bgColor: 'bg-primary-100 dark:bg-primary-900/30',
    skills: [
      { name: 'Kotlin', level: 95, color: 'bg-primary-600 dark:bg-primary-500' },
      { name: 'Java', level: 90, color: 'bg-primary-600 dark:bg-primary-500' },
      { name: 'Jetpack Compose', level: 88, color: 'bg-primary-600 dark:bg-primary-500' },
      { name: 'Android SDK', level: 92, color: 'bg-primary-600 dark:bg-primary-500' },
      { name: 'Material Design', level: 85, color: 'bg-primary-600 dark:bg-primary-500' }
    ]
  },
  {
    title: 'UI/UX Design',
    icon: <Layout size={28} className="text-accent-600 dark:text-accent-400" />,
    bgColor: 'bg-accent-100 dark:bg-accent-900/30',
    skills: [
      { name: 'Figma', level: 80, color: 'bg-accent-600 dark:bg-accent-500' },
      { name: 'Adobe XD', level: 75, color: 'bg-accent-600 dark:bg-accent-500' },
      { name: 'Prototyping', level: 85, color: 'bg-accent-600 dark:bg-accent-500' },
      { name: 'Animation', level: 70, color: 'bg-accent-600 dark:bg-accent-500' },
      { name: 'User Research', level: 75, color: 'bg-accent-600 dark:bg-accent-500' }
    ]
  },
  {
    title: 'Backend & API',
    icon: <Database size={28} className="text-secondary-600 dark:text-secondary-400" />,
    bgColor: 'bg-secondary-100 dark:bg-secondary-900/30',
    skills: [
      { name: 'Firebase', level: 90, color: 'bg-secondary-600 dark:bg-secondary-500' },
      { name: 'REST API', level: 85, color: 'bg-secondary-600 dark:bg-secondary-500' },
      { name: 'GraphQL', level: 75, color: 'bg-secondary-600 dark:bg-secondary-500' },
      { name: 'SQLite', level: 80, color: 'bg-secondary-600 dark:bg-secondary-500' },
      { name: 'Room Database', level: 88, color: 'bg-secondary-600 dark:bg-secondary-500' }
    ]
  },
  {
    title: 'Programming',
    icon: <Code2 size={28} className="text-rose-600 dark:text-rose-400" />,
    bgColor: 'bg-rose-100 dark:bg-rose-900/30',
    skills: [
      { name: 'Kotlin', level: 95, color: 'bg-rose-600 dark:bg-rose-500' },
      { name: 'Java', level: 90, color: 'bg-rose-600 dark:bg-rose-500' },
      { name: 'Swift', level: 70, color: 'bg-rose-600 dark:bg-rose-500' },
      { name: 'Python', level: 75, color: 'bg-rose-600 dark:bg-rose-500' },
      { name: 'JavaScript', level: 80, color: 'bg-rose-600 dark:bg-rose-500' }
    ]
  },
  {
    title: 'Tools & Methodologies',
    icon: <Workflow size={28} className="text-emerald-600 dark:text-emerald-400" />,
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
    skills: [
      { name: 'Git', level: 90, color: 'bg-emerald-600 dark:bg-emerald-500' },
      { name: 'CI/CD', level: 82, color: 'bg-emerald-600 dark:bg-emerald-500' },
      { name: 'Agile/Scrum', level: 85, color: 'bg-emerald-600 dark:bg-emerald-500' },
      { name: 'TDD', level: 78, color: 'bg-emerald-600 dark:bg-emerald-500' },
      { name: 'Android Studio', level: 95, color: 'bg-emerald-600 dark:bg-emerald-500' }
    ]
  },
  {
    title: 'Cross-platform',
    icon: <Globe size={28} className="text-blue-600 dark:text-blue-400" />,
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    skills: [
      { name: 'Flutter', level: 80, color: 'bg-blue-600 dark:bg-blue-500' },
      { name: 'React Native', level: 75, color: 'bg-blue-600 dark:bg-blue-500' },
      { name: 'Kotlin Multiplatform', level: 85, color: 'bg-blue-600 dark:bg-blue-500' },
      { name: 'Progressive Web Apps', level: 70, color: 'bg-blue-600 dark:bg-blue-500' },
      { name: 'Dart', level: 78, color: 'bg-blue-600 dark:bg-blue-500' }
    ]
  }
];