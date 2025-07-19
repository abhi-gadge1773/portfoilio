import React from 'react';
import { Github, Linkedin, Twitter, Download, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-slate-900"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-blue-400">
            <img
              src="/Profile-photo.png"
              alt="Abhijeet Gadge Profile Photo"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Abhijeet Gadge
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            DevOps Engineer & Cloud Architect
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Proficient in Cloud and DevOps with expertise in AWS, Terraform, Jenkins, Docker, and Kubernetes. 
            Strong believer in automation, scalability, and collaboration.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-2 justify-center"
            >
              View My Work
              <ExternalLink size={18} />
            </button>
            <a
              href="/resume.docx"
              download
              className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-2 justify-center"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/abhi-gadge1773" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-200 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/abhijeetgadge/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-200 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://x.com/AbhiGadge5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-200 transform hover:scale-110"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;