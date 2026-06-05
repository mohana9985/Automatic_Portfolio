import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1000);
    const t3 = setTimeout(() => setPhase(3), 1800);
    const t4 = setTimeout(() => onComplete(), 2600);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-[#030014] flex flex-col items-center justify-center gap-6"
        >
          {/* Glow orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple text-center"
          >
            Kureti Mohana SambaSiva
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 10 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 font-mono text-sm md:text-base tracking-widest uppercase"
          >
            AI Engineer · Multi-Agent Systems · Gen-AI Developer
          </motion.p>

          {/* Spinner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 2 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 flex items-center gap-3"
          >
            <div className="w-5 h-5 rounded-full border-2 border-neon-cyan/30 border-t-neon-cyan animate-spin" />
            <span className="text-xs text-neon-cyan/60 font-mono tracking-widest">INITIALIZING</span>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default LoadingScreen;
