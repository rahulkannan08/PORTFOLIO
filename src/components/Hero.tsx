
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
            <span className="block">John Doe</span>
            <span className="block text-3xl md:text-4xl mt-2 bg-gradient-to-r from-blue-200 to-teal-200 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Crafting exceptional digital experiences with modern technologies. 
            Passionate about clean code, innovative solutions, and user-centric design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-500">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Download Resume
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce cursor-pointer text-white hover:text-blue-200 transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
