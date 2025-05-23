import React from 'react';
import { skillsData } from '../data/skillsData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${category.bgColor}`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6 text-center">
            Technologies I Work With
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Kotlin', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg' },
              { name: 'Java', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
              { name: 'Android', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg' },
              { name: 'Jetpack Compose', logo: 'https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png' },
              { name: 'Firebase', logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
              { name: 'Git', logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
              { name: 'GraphQL', logo: 'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg' },
              { name: 'Flutter', logo: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg' },
              { name: 'Figma', logo: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
              { name: 'SQL', logo: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' },
              { name: 'REST API', logo: 'https://www.svgrepo.com/show/375531/api.svg' },
              { name: 'Material Design', logo: 'https://material.io/static/assets/favicon.ico' },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-200"
              >
                <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain mb-3" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;