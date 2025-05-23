/*import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

interface HomePageProps {
  scrollPosition: number;
  toggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
}

const SECTIONS = ['home', 'projects', 'skills', 'experience', 'testimonials', 'contact'];

const HomePage: React.FC<HomePageProps> = ({
  scrollPosition,
  toggleMobileMenu,
  mobileMenuOpen,
}) => {
  const { hash } = useLocation();

  // whenever the hash changes to "#/section", scroll there
  useEffect(() => {
    if (hash.startsWith('#/')) {
      const section = hash.slice(2);
      if (SECTIONS.includes(section)) {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [hash]);

  return (
    <>
      <Navbar scrollPosition={scrollPosition} toggleMobileMenu={toggleMobileMenu} />
      <MobileMenu isOpen={mobileMenuOpen} toggle={toggleMobileMenu} />

      <main className="flex-grow">
        <section id="home"><Hero /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;*/
