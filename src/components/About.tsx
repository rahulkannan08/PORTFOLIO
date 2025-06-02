import React from 'react';

const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '25+', label: 'Happy Clients' },
    { number: '15+', label: 'Technologies' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6 opacity-20"></div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Hello! I'm RAHUL K
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 3 years of experience creating 
                digital solutions that make a difference. I specialize in modern web technologies 
                and love turning complex problems into simple, beautiful designs.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in writing clean, maintainable code and creating user experiences that delight.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                {['React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
