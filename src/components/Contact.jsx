import React, { useState } from 'react';
import { Mail, Send, Terminal, Phone, MapPin } from 'lucide-react';
import { FaLinkedin as Linkedin, FaGithub as GithubIcon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/mohanakureti111555@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
            _subject: "New Message from AI Portfolio"
        })
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Form transmission error:", error);
      setFormStatus('error');
    }

    setTimeout(() => setFormStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Contact Info */}
        <div className="md:w-1/2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm font-mono mb-6"
          >
            <Mail className="w-4 h-4 text-neon-cyan" /> Communicate
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's build <span className="text-neon-cyan">intelligent</span> systems.
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Whether you need a specialized multi-agent architecture built from scratch, or require prompt engineering optimization for an existing pipeline—my inbox is open.
          </p>

          <div className="space-y-4">
            <a href="mailto:mohanakureti9985@gmail.com,kureti9985111555@gmail.com" className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-4 glass-panel hover:border-neon-cyan/30">
              <div className="p-3 bg-[#0a0c14] border border-white/5 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                <Mail className="w-6 h-6 text-neon-cyan" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Email</p>
                <p className="font-medium text-sm sm:text-base group-hover:text-neon-cyan transition-colors truncate">Direct Inquiry</p>
              </div>
            </a>

            <div className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-4 glass-panel hover:border-neon-cyan/30">
              <div className="p-3 bg-[#0a0c14] border border-white/5 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                <Phone className="w-6 h-6 text-neon-cyan" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Phone</p>
                <p className="font-medium text-sm sm:text-base group-hover:text-neon-cyan transition-colors truncate">+91 9985111555</p>
                <p className="font-medium text-sm sm:text-base group-hover:text-neon-cyan transition-colors truncate">+971 522309155</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-4 glass-panel hover:border-neon-cyan/30">
              <div className="p-3 bg-[#0a0c14] border border-white/5 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                <MapPin className="w-6 h-6 text-neon-cyan" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Location</p>
                <p className="font-medium text-sm sm:text-base group-hover:text-neon-cyan transition-colors truncate">India & Dubai</p>
              </div>
            </div>
            
            <div className="flex gap-4 pt-2">
              <a 
                href="https://linkedin.com/in/kureti-mohana-sambasiva-a23481254" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 glass-panel p-4 flex justify-center items-center gap-2 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-blue-400" /> LinkedIn
              </a>
              <a 
                href="https://github.com/mohana9985" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 glass-panel p-4 flex justify-center items-center gap-2 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all group"
              >
                <GithubIcon className="w-5 h-5" /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Terminal Aesthetic */}
        <div className="md:w-1/2">
          <div className="glass-panel p-1 bg-gradient-to-br from-white/10 to-transparent shadow-[0_0_30px_rgba(157,0,255,0.1)]">
            <div className="bg-[#0f111a] rounded-xl overflow-hidden border border-white/5">
              <div className="flex items-center px-4 py-3 bg-[#1a1d27] border-b border-white/5 gap-2">
                <Terminal className="w-4 h-4 text-gray-500" />
                <span className="text-xs text-gray-500 font-mono">initiate_contact.sh</span>
              </div>
              
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">Identifier (Name)</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-[#161925] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all font-mono text-sm"
                      placeholder="e.g. Satoshi"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">Endpoint (Email)</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full bg-[#161925] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all font-mono text-sm"
                      placeholder="your_email@domain.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">Payload (Message)</label>
                    <textarea 
                      required
                      name="message"
                      rows="6"
                      className="w-full bg-[#161925] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all font-mono text-sm resize-none"
                      placeholder="Enter task definition parameters..."
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={formStatus === 'sending' || formStatus === 'success'}
                      className={`w-full py-3 border rounded-lg font-bold uppercase tracking-wider flex justify-center items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                        formStatus === 'error' 
                          ? 'bg-red-500/10 border-red-500 text-red-500 hover:bg-red-500 hover:text-white' 
                          : 'bg-neon-purple/10 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white'
                      }`}
                    >
                      {formStatus === 'idle' && <><Send className="w-4 h-4" /> Execute Transmission</>}
                      {formStatus === 'sending' && <span className="animate-pulse">Transmitting...</span>}
                      {formStatus === 'success' && 'Payload Received ✓'}
                      {formStatus === 'error' && 'Transmission Failed ✗'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
