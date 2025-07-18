import React from 'react';
import { Mail, Github, Linkedin, Twitter, MessageCircle, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "abhijeet.gadge@example.com",
      href: "mailto:abhijeet.gadge@example.com",
      color: "from-red-400 to-red-600"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "abhi-gadge1773",
      href: "https://github.com/abhi-gadge1773",
      color: "from-gray-400 to-gray-600"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "abhijeetgadge",
      href: "https://www.linkedin.com/in/abhijeetgadge/",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Twitter size={24} />,
      label: "Twitter",
      value: "@AbhiGadge5",
      href: "https://x.com/AbhiGadge5",
      color: "from-sky-400 to-sky-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Interested in collaborating on DevOps projects or discussing cloud architecture? 
              I'm always open to new opportunities and interesting conversations.
            </p>
            <div className="inline-flex items-center text-blue-400 text-lg">
              <MessageCircle size={20} className="mr-2" />
              Ready to build something amazing together?
            </div>
          </div>
          
          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-slate-900 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {method.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {method.label}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {method.value}
                  </p>
                </div>
                
                <ArrowRight size={20} className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-lg p-8 border border-blue-600/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Open to Opportunities
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Currently seeking full-time DevOps Engineer positions where I can contribute to 
              building scalable infrastructure and improving deployment processes.
            </p>
            <a 
              href="mailto:abhijeet.gadge@example.com"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
              <Mail size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;