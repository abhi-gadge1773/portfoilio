import React from 'react';
import { 
  Server, 
  Container, 
  GitBranch, 
  Cloud, 
  Settings, 
  Terminal,
  Layers,
  Shield
} from 'lucide-react';

const TechStack: React.FC = () => {
  const technologies = [
    {
      icon: <Terminal size={40} />,
      name: "Linux & Bash",
      description: "System administration and automation scripting",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Container size={40} />,
      name: "Docker",
      description: "Containerization and microservices deployment",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Layers size={40} />,
      name: "Kubernetes",
      description: "Container orchestration and scaling",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <GitBranch size={40} />,
      name: "ArgoCD & GitOps",
      description: "Continuous deployment and GitOps workflows",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: <Settings size={40} />,
      name: "Jenkins CI/CD",
      description: "Automated build and deployment pipelines",
      color: "from-red-400 to-red-600"
    },
    {
      icon: <Server size={40} />,
      name: "Terraform & Ansible",
      description: "Infrastructure as Code and configuration management",
      color: "from-teal-400 to-teal-600"
    },
    {
      icon: <Cloud size={40} />,
      name: "AWS Cloud",
      description: "Cloud architecture and services",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: <Shield size={40} />,
      name: "Security & Monitoring",
      description: "Infrastructure security and observability",
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  return (
    <section id="tech" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${tech.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {tech.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-center mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {tech.name}
                </h3>
                
                <p className="text-gray-400 text-sm text-center leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-white">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'AWS EC2', 'AWS S3', 'AWS ECS', 'AWS Lambda', 'GitHub Actions', 
                'Prometheus', 'Grafana', 'Nginx', 'Apache', 'MySQL', 'PostgreSQL'
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-slate-800 text-blue-400 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;