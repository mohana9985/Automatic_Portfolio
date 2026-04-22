import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, CheckCircle2, Network, Database, TerminalSquare } from 'lucide-react';

const Prompts = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const prompts = [
    {
      id: "p1",
      category: "System Design",
      icon: <Network className="w-5 h-5" />,
      title: "Multi-Agent Architect",
      color: "text-neon-cyan",
      bgHover: "hover:border-neon-cyan/50",
      content: `Role: Senior AI Architect 
Task: Design a scalable multi-agent system for building full-stack web applications.

Output Requirements:
- System Architecture Diagram (Mermaid syntax)
- Agent Roles (e.g., UI/UX, Dev, QA)
- Communication Flow (Message-passing protocol)
- Fallback & Error Handling Strategies
- CI/CD Deployment Pipeline

Constraints:
Focus on deterministic outputs and modular scalability.`
    },
    {
      id: "p2",
      category: "Data Generation",
      icon: <Database className="w-5 h-5" />,
      title: "Sales JSON Data Generator",
      color: "text-neon-purple",
      bgHover: "hover:border-neon-purple/50",
      content: `Task: Generate synthetic dataset entries for a sales system.

Constraints:
- Generate exactly 10 contextual records.
- Output MUST be a strict JSON array.
- "total" MUST exactly equal quantity * price.
- NO conversational text before or after output.

Schema:
[
  {
    "date": "YYYY-MM-DD",
    "product": "string",
    "quantity": "integer",
    "price": "float",
    "total": "float"
  }
]`
    },
    {
      id: "p3",
      category: "Pedagogical Template",
      icon: <TerminalSquare className="w-5 h-5" />,
      title: "Dual-Persona Explainer",
      color: "text-green-400",
      bgHover: "hover:border-green-400/50",
      content: `Role: Dual-Persona Educator
Task: Explain [CONCEPT] using two distinct levels of technical depth.

Phase 1: The Beginner (Professor Persona)
- Focus on fundamentals without jargon.
- Provide a clear, relatable real-world analogy.

Phase 2: The Expert (Senior Engineer Persona)
- Dive into technical implementation semantics.
- Discuss edge cases and performance implications.
- Provide a concrete architectural pattern.`
    }
  ];

  return (
    <section id="prompts" className="py-24 px-6 bg-[#05060f] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Structural <span className="text-neon-purple">Prompting.</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Crafting deterministic, structured, and resilient instructions to control LLM behavior in production environments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prompts.map((prompt) => (
            <motion.div
              key={prompt.id}
              whileHover={{ y: -5 }}
              className={`glass-panel bg-[#0a0c14] border border-white/5 ${prompt.bgHover} transition-all duration-300 flex flex-col group`}
            >
              <div className="flex justify-between items-center p-4 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <span className={prompt.color}>{prompt.icon}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200">{prompt.title}</h4>
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">{prompt.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(prompt.id, prompt.content)}
                  className="p-2 bg-white/5 rounded-md hover:bg-white/10 text-gray-400 hover:text-white transition-colors relative"
                  title="Copy Prompt"
                >
                  <AnimatePresence mode="wait">
                    {copiedId === prompt.id ? (
                      <motion.div
                        key="check"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                      >
                        <Copy className="w-4 h-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
              <div className="p-4 flex-1">
                <pre className="font-mono text-xs text-gray-400 whitespace-pre-wrap leading-relaxed">
                  {prompt.content}
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prompts;
