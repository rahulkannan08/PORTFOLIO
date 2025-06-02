import React from 'react';
import { Github, Mail, User } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/rahulkannan08',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:rahul@example.com',
      label: 'Email',
    },
    {
      icon: User,
      href: 'https://linkedin.com/in/rahulkannan08',
      label: 'LinkedIn',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                RAHUL's Portfolio
              </div>
              <p className="text-gray-400 leading-relaxed">
                Passionate full-stack developer creating digital experiences that make a difference. 
                Let's build something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                {[
                  { href: '#about', label: 'About' },
                  { href: '#skills', label: 'Skills' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#contact', label: 'Contact' },
                ].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get In Touch</h3>
              <div className="space-y-2 text-gray-400">
                <p>rahul@example.com</p>
                <p>Available for freelance projects</p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} RAHUL K. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 px-4 py-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-300 text-sm"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
