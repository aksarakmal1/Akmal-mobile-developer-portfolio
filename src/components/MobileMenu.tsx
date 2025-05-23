import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Linkedin, Twitter, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface MobileMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggle }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-white dark:bg-gray-900 z-50 md:hidden"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="container mx-auto px-6 py-8 h-full flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-display font-bold text-primary-600 dark:text-primary-400">
                Alex Chen
              </h2>
              <button 
                onClick={toggle}
                className="text-gray-700 dark:text-gray-300"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-8 mt-12">
              {['Home', 'Projects', 'Skills', 'Experience', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  onClick={toggle}
                >
                  {item}
                </a>
              ))}
            </nav>
            
            <div className="mt-auto">
              <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-6">
                <div className="flex space-x-6">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <Twitter size={24} />
                  </a>
                </div>
                
                <button 
                  onClick={toggleTheme} 
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;