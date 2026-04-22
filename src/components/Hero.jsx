import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
  const codeSnippet = `const AIEngineer = {
  name: "Kureti Mohana SambaSiva",
  role: "Gen-AI Developer & Prompt Engineer",
  skills: ["LangGraph", "LLMs", "Agents"],
  status: "Building the future"
};`;

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/20 rounded-full blur-[150px] opacity-50 pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-neon-cyan/20 rounded-full blur-[100px] opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
            <div className="relative group rounded-full p-1 bg-gradient-to-tr from-neon-cyan to-neon-purple shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-[#0f111a]">
                <img src={profilePic} alt="Kureti Mohana Sambasiva" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan to-neon-purple rounded-full blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-sm font-mono mt-2 sm:mt-0 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
              </span>
              Open to Collaboration
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Kureti Mohana SambaSiva</span><br/>
          </h1>
          
          {/* Typing Animation effect representation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 font-light"
          >
            I design AI agents that <span className="text-neon-cyan font-medium">think</span>, <span className="text-neon-cyan font-medium">decide</span> and <span className="text-neon-cyan font-medium">act</span>.
          </motion.div>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects" 
              className="group relative px-8 py-3 bg-white text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              <div className="absolute inset-0 w-0 bg-neon-cyan transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative flex items-center gap-2 group-hover:text-black">
                View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="#prompts" 
              className="px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 hover:border-white/40 transition-all font-semibold flex items-center gap-2 backdrop-blur-sm"
            >
              <Terminal className="w-4 h-4" /> Explore Prompts
            </a>
          </div>
        </motion.div>

        {/* Right Content - Code Terminal Graphic */}
        <motion.div
           initial={{ opacity: 0, y: 50, scale: 0.9 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative"
        >
          <div className="glass-panel p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent shadow-[0_0_50px_rgba(0,243,255,0.1)]">
            <div className="bg-[#0f111a] rounded-xl overflow-hidden border border-white/5">
              <div className="flex items-center px-4 py-3 bg-[#1a1d27] border-b border-white/5 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-2 text-xs text-gray-500 font-mono">agent.js</div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-gray-300">
                <pre>
                  <code dangerouslySetInnerHTML={{ __html: codeSnippet.replace(/(".*?")/g, '<span class="text-green-400">$1</span>').replace(/(const|role|skills|status|name)/g, '<span class="text-neon-cyan">$1</span>') }} />
                </pre>
                <motion.div 
                  className="mt-4 flex items-center text-neon-purple text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  &gt; System initialization complete_
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
