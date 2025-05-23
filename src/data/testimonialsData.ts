interface Testimonial {
  name: string;
  title: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    title: 'Product Manager',
    company: 'TechInnovate',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Alex transformed our app from a basic MVP to a polished product that our users love. His deep knowledge of Android development and attention to detail resulted in a 40% increase in user engagement. I highly recommend him for any Android project.',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    title: 'CTO',
    company: 'StartApp Inc.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Working with Alex was a fantastic experience. He not only delivered an exceptional Android app but also provided valuable insights that improved our overall product strategy. His technical expertise and problem-solving abilities are remarkable.',
    rating: 5
  },
  {
    name: 'Emily Chen',
    title: 'UX Designer',
    company: 'DesignWorks',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Alex has an incredible talent for translating designs into functional, beautiful Android experiences. He always went the extra mile to ensure our designs were implemented perfectly while considering Android best practices and performance.',
    rating: 5
  },
  {
    name: 'David Kim',
    title: 'Founder',
    company: 'HealthTrack',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'We hired Alex to rebuild our health tracking app that was suffering from performance issues. The results exceeded our expectations - the app is now lightning fast, stable, and our users are thrilled. Alex is a true professional who delivers quality work.',
    rating: 5
  }
];