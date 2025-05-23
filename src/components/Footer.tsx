import React from 'react';
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Alex Chen
            </h3>
            <p className="text-gray-300 mb-6 max-w-sm">
              A passionate Android developer dedicated to creating exceptional mobile experiences that help businesses succeed.
            </p>
            <div className="flex space-x-4">
              {['github', 'linkedin', 'twitter', 'dribbble'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-300"
                  aria-label={`Visit ${social} profile`}
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${social}/white`} 
                    alt={social} 
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Projects', 'Skills', 'Experience', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-primary-400 transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Android App Development',
                'UI/UX Design',
                'App Performance Optimization',
                'Cross-platform Development',
                'App Maintenance & Support'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-primary-400 transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">+1 (234) 567-8901</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">alex.chen@example.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">San Francisco, California</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Alex Chen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;