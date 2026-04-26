import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    // {
    //   role: "Java Full Stack Internship",
    //   company: "KodNest",
    //   duration: "05/2024 - 06/2024",
    // },
    // {
    //   role: "Cybersecurity Internship",
    //   company: "Indian Servers",
    //   duration: "05/2023 - 07/2023",
    // },
    // {
    //   role: "Web Development Internship",
    //   company: "Internsavy",
    //   duration: "05/2023 - 06/2023",
    // },
    // {
    //   role: "Web Development Internship",
    //   company: "Let Grow Me",
    //   duration: "05/2023 - 05/2023",
    // },
    {
      role: "Python Developer Internship",
      company: "BDPS Institute",
      duration: "08/2022 - 10/2022",
    }
  ];

  const education = [
    {
      degree: "M.E. in Software Systems",
      institute: "BITS Pilani, Dubai Campus",
      duration: "2026 - Present"
    },
    {
      degree: "B.Tech in Computer Science and Engineering",
      institute: "Andhra Loyola Institute of Engineering and Technology",
      duration: "2020 - 2024"
    }
  ];

  const trainings = [
    {
      name: "Joy of Computing Using Python",
      org: "NPTEL",
      duration: "07/2023 - 10/2023"
    },
    {
      name: "Cloud Computing",
      org: "NPTEL",
      duration: "01/2023 - 04/2023"
    },
    {
      name: "Cloud Foundations",
      org: "AWS Academy",
      duration: "09/2022 - 09/2022"
    },
    {
      name: "C++ Programming - Beginner to Advanced",
      org: "Udemy",
      duration: "04/2022 - 04/2022"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left - Internships */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Professional <span className="text-neon-purple">Journey.</span>
          </h2>
          
          <div className="space-y-10 relative border-l border-white/10 ml-4 pb-4">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8"
              >
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 rounded-full bg-neon-purple left-[-8.5px] top-1.5 shadow-[0_0_10px_rgba(157,0,255,0.8)] border-2 border-[#030014]"></div>
                
                <h3 className="text-2xl font-bold text-gray-200">{exp.role}</h3>
                <h4 className="text-lg text-neon-purple font-medium mb-3">{exp.company}</h4>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 font-mono flex-wrap">
                  <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-neon-purple"/> {exp.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right - Education & Trainings */}
        <div className="space-y-16 lg:mt-0 mt-8">
          
          {/* Education */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Academic <span className="text-neon-cyan">Background.</span>
            </h2>
            
            <div className="space-y-10 relative border-l border-white/10 ml-4 pb-4">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8"
                >
                  {/* Timeline Dot */}
                  <div className="absolute w-4 h-4 rounded-full bg-neon-cyan left-[-8.5px] top-1.5 shadow-[0_0_10px_rgba(0,255,255,0.8)] border-2 border-[#030014]"></div>
                  
                  <h3 className="text-2xl font-bold text-gray-200">{edu.degree}</h3>
                  <h4 className="text-lg text-neon-cyan font-medium mb-3">{edu.institute}</h4>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-mono flex-wrap">
                    <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-neon-cyan"/> {edu.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Training & Certifications */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              <span className="text-neon-cyan">Training</span> & Certifications.
            </h2>
            
            <div className="space-y-10 relative border-l border-white/10 ml-4 pb-4">
              {trainings.map((train, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8"
                >
                  {/* Timeline Dot */}
                  <div className="absolute w-4 h-4 rounded-full bg-neon-cyan left-[-8.5px] top-1.5 shadow-[0_0_10px_rgba(0,255,255,0.8)] border-2 border-[#030014]"></div>
                  
                  <h3 className="text-2xl font-bold text-gray-200">{train.name}</h3>
                  <h4 className="text-lg text-neon-cyan font-medium mb-3">{train.org}</h4>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-mono flex-wrap">
                    <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-neon-cyan"/> {train.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default Experience;
