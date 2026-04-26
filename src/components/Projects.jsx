import React from 'react';
import { motion } from 'framer-motion';
import { Database, Network, Globe, Code2, Landmark, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MCP-Sales Data Generation",
      date: "07/2025 – 07/2025",
      isAi: true,
      icon: <Database className="w-8 h-8 text-neon-cyan drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]" />,
      description: "Scalable sales data generation system with containerized MySQL deployment via Docker, enabling efficient testing of data-driven applications.",
      highlights: [
        "Designed RESTful APIs for product, user, and category management.",
        "Orchestrated multi-container deployment using Docker Compose.",
        "Integrated with MCP client (Claude Desktop) for seamless operations."
      ],
      tools: ["Python", "MySQL", "Docker", "REST API", "MCP"]
    },
    {
      id: 2,
      title: "Jira Multi-Agent System",
      date: "06/2025 – 06/2025",
      isAi: true,
      icon: <Network className="w-8 h-8 text-neon-purple drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />,
      description: "Multi-agent orchestration system using LangGraph to automate Jira data retrieval, processing, and communication workflows.",
      highlights: [
        "Architected a supervisor-agent framework coordinating multiple agents.",
        "Created specialized agents for extraction, summarization, and reporting.",
        "Reduced manual effort by automating the end-to-end Jira workflow."
      ],
      tools: ["Python", "LangGraph", "LLMs", "Jira API"]
    },
    // {
    //   id: 3,
    //   title: "Web App Showcase",
    //   date: "05/2023 – 06/2023",
    //   isAi: false,
    //   icon: <Globe className="w-8 h-8 text-blue-400" />,
    //   description: "Multiple web applications including a Weather Website, Personal Portfolio Website, and Contact Form.",
    //   highlights: [
    //     "Real-time weather data display integrating external APIs.",
    //     "Responsive design and project showcase for personal portfolio.",
    //     "Form validation and secure submission mechanisms."
    //   ],
    //   tools: ["HTML", "CSS", "JavaScript"]
    // },
    // {
    //   id: 4,
    //   title: "Utility Interfaces",
    //   date: "05/2023 – 05/2023",
    //   isAi: false,
    //   icon: <Code2 className="w-8 h-8 text-green-400" />,
    //   description: "Developed functional utility applications including a Calculator, Student Enrollment Form, and To-Do List.",
    //   highlights: [
    //     "Basic arithmetic operations handling in Calculator app.",
    //     "Data capture and dynamic display in Student Enrollment Form.",
    //     "Task management with add, complete, and remove features."
    //   ],
    //   tools: ["HTML", "CSS", "JavaScript"]
    // },
    {
      id: 5,
      title: "RS Bank Application",
      date: "08/2022 – 10/2022",
      isAi: false,
      icon: <Landmark className="w-8 h-8 text-amber-400" />,
      description: "Desktop-based banking system providing a secure authentication protocol and reliable transaction handling.",
      highlights: [
        "Account management functions, deposits, and withdrawals.",
        "Comprehensive transaction tracking capability.",
        "Ensured data security with encrypted credentials."
      ],
      tools: ["Python", "MySQL"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-neon-cyan">Projects.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A comprehensive overview of my recent development work, spanning AI-driven multi-agent systems, data automation, and full-stack web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 group hover:border-neon-cyan/50 transition-colors duration-500 relative overflow-hidden flex flex-col h-full"
            >
              {/* Minimal glowing effect on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-0 bg-neon-cyan/20 blur-[50px] group-hover:h-32 transition-all duration-700 ease-in-out pointer-events-none" />

              <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#0f111a] border border-white/5 shadow-inner">
                  {project.icon}
                </div>
                <span className="text-xs font-mono text-gray-400 px-3 py-1 bg-white/5 rounded-full border border-white/10 whitespace-nowrap">{project.date}</span>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-white group-hover:text-glow transition-all flex items-center gap-3">
                {project.title}
                {project.isAi && (
                  <div className="relative flex items-center justify-center flex-shrink-0" title="AI Project">
                    <Sparkles className="w-5 h-5 text-neon-cyan animate-pulse drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
                    <div className="absolute inset-0 bg-neon-cyan/30 blur-md rounded-full pointer-events-none"></div>
                  </div>
                )}
              </h3>
              
              <div className="space-y-4 flex-grow">
                <p className="text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div>
                  <span className="text-white text-xs font-bold uppercase tracking-wider mb-3 block opacity-80">Key Highlights</span>
                  <ul className="text-gray-300 text-sm space-y-2 list-none">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-neon-cyan mt-0.5 opacity-80 text-xs">▹</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 group-hover:border-white/20 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


