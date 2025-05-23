/*import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import { ThemeProvider } from './context/ThemeContext';
import FitTrack from './pages/projects/FitTrack';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const HomePage = () => (
    <>
      <Navbar scrollPosition={scrollPosition} toggleMobileMenu={toggleMobileMenu} />
      <MobileMenu isOpen={mobileMenuOpen} toggle={toggleMobileMenu} />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col text-gray-900 dark:text-gray-100 relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/fittrack" element={<FitTrack />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;*/

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import { ThemeProvider } from './context/ThemeContext';
import FitTrack from './pages/projects/FitTrack';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const HomePage = () => (
    <>
      <Navbar scrollPosition={scrollPosition} toggleMobileMenu={toggleMobileMenu} />
      <MobileMenu isOpen={mobileMenuOpen} toggle={toggleMobileMenu} />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );

  return (
    <ThemeProvider>
      <Router basename="/Akmal-mobile-developer-portfolio">
        <div className="min-h-screen flex flex-col text-gray-900 dark:text-gray-100 relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/fittrack" element={<FitTrack />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
