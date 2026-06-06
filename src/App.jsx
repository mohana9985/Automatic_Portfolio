import React, { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Prompts from './components/Prompts';
import Skills from './components/Skills';
import Experience from './components/Experience';
import LoadingScreen from './components/LoadingScreen';

const Github = lazy(() => import('./components/Github'));
const Contact = lazy(() => import('./components/Contact'));
const Chatbot = lazy(() => import('./components/Chatbot'));

const BACKEND_URL = import.meta.env.VITE_API_URL || 'https://automatic-portfolio.onrender.com';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BACKEND_URL}/`, { method: 'GET' }).catch(() => {});
  }, []);

  return (
    <div className="bg-[var(--bg-base)] min-h-screen text-gray-200 font-sans selection:bg-neon-cyan selection:text-black">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Prompts />
        <Skills />
        <Suspense fallback={null}>
          <Github />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
      
      <footer className="py-8 border-t border-white/10 text-center flex flex-col items-center justify-center relative overflow-hidden">
        {/* Subtle background glow for footer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-neon-cyan/5 blur-[50px] pointer-events-none" />
        
        <p className="text-gray-400 text-sm z-10">&copy; {new Date().getFullYear()} Kureti Mohana Sambasiva. All rights reserved.</p>
        <p className="mt-2 text-neon-cyan/70 text-xs tracking-widest uppercase font-mono z-10">Architected by an AI Engineer</p>
      </footer>
    </div>
  );
}

export default App;
