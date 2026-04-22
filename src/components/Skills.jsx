import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Server, Network, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Models",
      icon: <Brain className="w-6 h-6 text-neon-cyan" />,
      skills: [
        "Generative AI", 
        "Agentic AI",
        "AI Agents" , 
        "LLMs - OpenAI (GPT), Anthropic (Claude), Google DeepMind (Gemini)", 
        "SLMs - Phi, Gemma, Llama, Mistral", 
        "Ollama"
      ],
      color: "border-neon-cyan/30 bg-neon-cyan/5",
      shadow: "shadow-[0_0_15px_rgba(0,243,255,0.1)]"
    },
    {
      title: "AI Frameworks & Cloud",
      icon: <Network className="w-6 h-6 text-neon-purple" />,
      skills: [
        "Langchain", 
        "Langgraph", 
        "MCP", 
        "RAG's", 
        "JSON Structuring", 
        "GCP - Vertex AI"
      ],
      color: "border-neon-purple/30 bg-neon-purple/5",
      shadow: "shadow-[0_0_15px_rgba(157,0,255,0.1)]"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-pink-400" />,
      skills: [
        "Python", 
        "FastAPI", 
        "MySQL"
      ],
      color: "border-pink-400/30 bg-pink-400/5",
      shadow: "shadow-[0_0_15px_rgba(244,114,182,0.1)]"
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6 text-green-400" />,
      skills: [
        "Git", 
        "GitHub", 
        "Docker"
      ],
      color: "border-green-400/30 bg-green-400/5",
      shadow: "shadow-[0_0_15px_rgba(74,222,128,0.1)]"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Arsenal.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Bridging the gap between intelligent reasoning engines and scalable full-stack applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel p-8 border ${category.color} ${category.shadow} backdrop-blur-xl group hover:border-opacity-100 transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-black/40 rounded-xl">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-200 group-hover:text-white transition-colors">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-black/50 border border-white/5 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
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

export default Skills;
