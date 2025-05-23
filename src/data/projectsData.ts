export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  technologies: string[];
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 'fittrack',
    title: 'FitTrack Workout App',
    description: 'A comprehensive fitness tracking app for personalized workouts and progress monitoring.',
    image: 'https://images.pexels.com/photos/7991671/pexels-photo-7991671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['productivity', 'health'],
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'Hilt', 'HealthConnect API'],
    liveUrl: 'https://play.google.com/store'
  },
  {
    id: 'ecomart',
    title: 'EcoMart Shopping',
    description: 'A sustainable e-commerce platform with carbon footprint tracking for conscious shoppers.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['e-commerce'],
    technologies: ['Kotlin', 'MVVM', 'Retrofit', 'Material 3', 'Firebase'],
    liveUrl: 'https://play.google.com/store'
  },
  {
    id: 'socialcircle',
    title: 'Social Circle',
    description: 'A privacy-focused social network that helps connect people with similar interests.',
    image: 'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['social'],
    technologies: ['Kotlin', 'Jetpack Compose', 'GraphQL', 'DataStore', 'WorkManager'],
    liveUrl: 'https://play.google.com/store'
  },
  {
    id: 'waveplayer',
    title: 'Wave Music Player',
    description: 'A beautiful music player with advanced audio features and stunning visualizations.',
    image: 'https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['entertainment'],
    technologies: ['Kotlin', 'ExoPlayer', 'MediaSession', 'Coroutines', 'Canvas API'],
    liveUrl: 'https://play.google.com/store'
  },
  {
    id: 'taskflow',
    title: 'TaskFlow Organizer',
    description: 'A productivity app with intelligent task management and calendar integration.',
    image: 'https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['productivity'],
    technologies: ['Kotlin', 'MVVM', 'Room', 'WorkManager', 'Calendar API'],
    liveUrl: 'https://play.google.com/store'
  },
  {
    id: 'travelsmart',
    title: 'TravelSmart Guide',
    description: 'An intelligent travel companion with offline maps, translation, and local recommendations.',
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['productivity', 'travel'],
    technologies: ['Kotlin', 'Maps SDK', 'ML Kit', 'Retrofit', 'Room'],
    liveUrl: 'https://play.google.com/store'
  }
];