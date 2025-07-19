import React from 'react';
import { Code, Cloud, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Cloud size={32} />,
      title: "Cloud Architecture",
      description: "Designing scalable and secure cloud solutions on AWS with focus on cost optimization and performance."
    },
    {
      icon: <Code size={32} />,
      title: "Infrastructure as Code",
      description: "Implementing IaC with Terraform and Ansible for consistent, reproducible infrastructure deployments."
    },
    {
      icon: <Zap size={32} />,
      title: "CI/CD Automation",
      description: "Building robust CI/CD pipelines with Jenkins and GitOps practices for faster, reliable deployments."
    },
    {
      icon: <Users size={32} />,
      title: "DevOps Culture",
      description: "Fostering collaboration between development and operations teams through automation and best practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Hands-on with CI/CD pipelines, Infrastructure as Code (IaC), and cloud-native deployment. 
                Passionate about building secure, scalable solutions with an automation-first mindset.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Keen learner with a strong grasp on real-world problem-solving in cloud-native ecosystems. 
                I believe in the power of automation to transform how teams deliver software and manage infrastructure.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/Profile-photo.png" 
                  alt="Profile Photo" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-slate-900 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-blue-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;