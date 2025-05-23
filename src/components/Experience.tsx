import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experienceData } from '../data/experienceData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and contributions in the world of Android development
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="relative">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className={`mb-12 md:mb-0 md:w-1/2 relative ${
                  index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 ${
                  index % 2 === 0 
                    ? 'left-0 md:-left-4' 
                    : 'left-0 md:-left-4 md:left-auto md:-right-4'
                  } w-8 h-8 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center z-10`}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className="ml-12 md:ml-0 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-card relative">
                  {/* Triangle pointer */}
                  <div className={`hidden md:block absolute top-4 ${
                    index % 2 === 0 
                      ? '-left-2' 
                      : '-right-2'
                    } w-4 h-4 bg-white dark:bg-gray-800 transform rotate-45`}
                  ></div>
                  
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full mb-3">
                    {item.type}
                  </span>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-3">
                    {item.company}
                  </h4>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{item.location}</span>
                    </div>
                    {item.website && (
                      <a 
                        href={item.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        <ExternalLink size={16} />
                        <span>Website</span>
                      </a>
                    )}
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                    {item.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg shadow-primary-600/20"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;