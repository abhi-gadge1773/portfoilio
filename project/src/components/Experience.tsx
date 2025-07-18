import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "LinuxWorld Informatics Pvt. Ltd.",
      position: "DevOps Intern",
      duration: "Recent",
      location: "Remote",
      description: "Worked on DevOps tools like Jenkins, Ansible, Docker, and Kubernetes. Built automation pipelines and managed cloud-based environments.",
      achievements: [
        "Implemented CI/CD pipelines using Jenkins for multiple projects",
        "Automated infrastructure provisioning with Ansible playbooks",
        "Containerized applications using Docker and deployed on Kubernetes",
        "Managed cloud-based environments and optimized resource utilization",
        "Collaborated with development teams to improve deployment processes"
      ],
      technologies: ["Jenkins", "Ansible", "Docker", "Kubernetes", "AWS", "Linux"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 ml-12 md:ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-8 md:-left-12 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-slate-900"></div>
                
                <div className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-[1.02]">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-xl text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-col md:items-end mt-4 md:mt-0">
                      <div className="flex items-center text-gray-400 mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Briefcase size={18} className="mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-400 flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Future Goals */}
          <div className="bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-lg p-8 border border-blue-600/20">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              What's Next?
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Looking for opportunities to work on large-scale cloud infrastructure, 
              implement advanced DevOps practices, and contribute to building 
              robust, scalable systems that drive business success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;