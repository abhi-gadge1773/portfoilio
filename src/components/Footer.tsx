import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                Abhijeet Gadge
              </h3>
              <p className="text-gray-400">
                DevOps Engineer & Cloud Architect
              </p>
            </div>
            
            <div className="flex items-center space-x-8">
              <a 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                About
              </a>
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Projects
              </a>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
                Built with 
                <Heart size={16} className="mx-1 text-red-400" />
                using React & Tailwind CSS
                <Code size={16} className="ml-1" />
              </p>
              
              <p className="text-gray-400 text-sm">
                © 2025 Abhijeet Gadge. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;