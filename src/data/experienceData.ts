interface Experience {
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  website?: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    title: 'Senior Android Developer',
    company: 'TechInnovate Solutions',
    type: 'Full-time',
    period: 'Jan 2022 - Present',
    location: 'San Francisco, CA',
    website: 'https://example.com',
    responsibilities: [
      'Lead developer for flagship mobile product with 1M+ active users',
      'Implemented MVVM architecture and Jetpack components that improved app stability by 40%',
      'Mentored junior developers and led technical interviews',
      'Collaborated with design team to implement Material You guidelines',
      'Reduced app size by 30% through optimization techniques'
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Hilt', 'Room', 'MVVM']
  },
  {
    title: 'Android Developer',
    company: 'AppWave Technologies',
    type: 'Full-time',
    period: 'Mar 2019 - Dec 2021',
    location: 'Seattle, WA',
    website: 'https://example.com',
    responsibilities: [
      'Developed and maintained multiple Android applications for e-commerce clients',
      'Implemented RESTful API integration and local caching strategies',
      'Improved app performance metrics and reduced crash rates by 60%',
      'Created custom UI components and animations',
      'Participated in code reviews and agile development processes'
    ],
    technologies: ['Kotlin', 'Java', 'RxJava', 'Retrofit', 'ViewModel', 'LiveData']
  },
  {
    title: 'Mobile App Developer',
    company: 'DigitalEdge Studios',
    type: 'Contract',
    period: 'Sep 2017 - Feb 2019',
    location: 'Remote',
    website: 'https://example.com',
    responsibilities: [
      'Built Android applications for startups and established businesses',
      'Worked on health tracking, social media, and productivity applications',
      'Implemented offline-first architecture for apps with limited connectivity',
      'Optimized battery usage and performance for low-end devices',
      'Created comprehensive documentation and unit tests'
    ],
    technologies: ['Java', 'Kotlin', 'SQLite', 'Dagger', 'MVP', 'JUnit']
  },
  {
    title: 'Junior Mobile Developer',
    company: 'StartApp Inc.',
    type: 'Full-time',
    period: 'Jun 2015 - Aug 2017',
    location: 'Austin, TX',
    website: 'https://example.com',
    responsibilities: [
      'Assisted in developing Android applications from concept to launch',
      'Implemented UI designs based on Sketch and Figma mockups',
      'Fixed bugs and improved existing features',
      'Worked with senior developers to learn best practices',
      'Participated in user testing and feedback implementation'
    ],
    technologies: ['Java', 'Android SDK', 'Git', 'SQLite', 'XML layouts']
  }
];