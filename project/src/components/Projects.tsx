import React from 'react';
import { Github, ExternalLink, Play, Wrench } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Java CI/CD App",
      description: "Complete CI/CD setup with Jenkins, Docker, and GitHub Webhooks for automated deployment pipeline. Features automated testing, containerization, and deployment strategies.",
      tech: ["Jenkins", "Docker", "GitHub Webhooks", "Java", "CI/CD"],
      github: "#",
      demo: "#",
      status: "completed",
      highlights: [
        "Automated build and test processes",
        "Docker containerization",
        "Webhook-triggered deployments",
        "Comprehensive logging and monitoring"
      ]
    },
    {
      title: "Automated CI/CD Pipeline on AWS with Kubernetes",
      description: "Production-ready CI/CD pipeline on AWS using self-managed Kubernetes, Jenkins, Terraform, and ArgoCD. Focuses on scalability, security, and GitOps practices.",
      tech: ["AWS", "Kubernetes", "Jenkins", "Terraform", "ArgoCD", "GitOps"],
      github: "#",
      demo: "#",
      status: "in-progress",
      highlights: [
        "Self-managed Kubernetes cluster",
        "Infrastructure as Code with Terraform",
        "GitOps deployment with ArgoCD",
        "Multi-environment deployment strategy"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-900 rounded-lg p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 group"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center mt-2">
                      {project.status === 'completed' ? (
                        <div className="flex items-center text-green-400 text-sm">
                          <Play size={16} className="mr-1" />
                          Completed
                        </div>
                      ) : (
                        <div className="flex items-center text-yellow-400 text-sm">
                          <Wrench size={16} className="mr-1" />
                          Work in Progress
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.github}
                      className="p-2 bg-slate-800 hover:bg-slate-600 rounded-lg transition-colors duration-200"
                      title="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        className="p-2 bg-slate-800 hover:bg-slate-600 rounded-lg transition-colors duration-200"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Project Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Project Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* More Projects CTA */}
          <div className="text-center mt-12">
            <a 
              href="https://github.com/abhi-gadge1773"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              View All Projects on GitHub
              <Github size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;