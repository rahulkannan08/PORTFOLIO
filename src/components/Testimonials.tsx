
import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c4?w=80&h=80&fit=crop&crop=face',
      content: 'John delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCorp',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      content: 'Working with John was a pleasure. He understood our requirements perfectly and delivered a robust solution ahead of schedule.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'CTO, DigitalSolutions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      content: 'John\'s full-stack development skills are impressive. He built our entire platform from scratch and it performs flawlessly.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Founder, StartupXYZ',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
      content: 'Excellent communication, clean code, and timely delivery. John is the developer you want on your team.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-2xl ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              What Clients Say
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6">
              Don't just take my word for it - here's what my clients have to say
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="text-6xl text-blue-200 dark:text-blue-800 mb-6">"</div>
                
                {/* Testimonial Content */}
                <div className="text-center">
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                    {testimonials[currentIndex].content}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  
                  {/* Client Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-900 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowDown className="h-5 w-5 text-gray-700 dark:text-gray-300 transform rotate-90" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-900 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ArrowUp className="h-5 w-5 text-gray-700 dark:text-gray-300 transform rotate-90" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
