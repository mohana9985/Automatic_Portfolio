import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Activity } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);

const Github = () => {
  const [repos, setRepos] = useState([]);
  const [allRepos, setAllRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
  const GITHUB_PROFILE_URL = import.meta.env.VITE_GITHUB_PROFILE_URL;

  useEffect(() => {
    const fetchRepos = async () => {
      if (!GITHUB_USERNAME) { setLoading(false); return; }
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        
        const nonForks = data.filter(repo => !repo.fork);
        setAllRepos(nonForks);
        
        // Exclude forks for better portfolio representation and sort
        const filteredRepos = nonForks.slice(0, 4);
        setRepos(filteredRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const isAIRepo = (repo) => {
    const aiKeywords = ['ai', 'agent', 'llm', 'gpt', 'prompt', 'langchain', 'machine-learning'];
    const textToCheck = (repo.name + ' ' + (repo.description || '')).toLowerCase();
    return aiKeywords.some(keyword => textToCheck.includes(keyword));
  };

  return (
    <section id="github" className="py-24 px-6 bg-[#030014]/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
              <GithubIcon className="w-10 h-10" /> Open <span className="text-neon-cyan">Source.</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Live pull form GitHub showing my latest experiments, agents, and repositories.
            </p>
          </div>
          <a 
            href={GITHUB_PROFILE_URL}
            target="_blank" 
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            View GitHub Profile <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {loading ? (
          <div className="flex justify-center py-20 text-neon-cyan">
            <Activity className="w-8 h-8 animate-pulse" />
          </div>
        ) : error ? (
          <div className="text-center py-20 text-red-400 bg-red-400/10 rounded-2xl border border-red-400/20">
            <p>Unable to load repositories. Please check my GitHub directly.</p>
          </div>
        ) : (
          <>
            {/* Horizontal Repo Navbar */}
            <div className="mb-8 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex gap-3 w-max">
                {allRepos.map((repo) => (
                  <a
                    key={`nav-${repo.id}`}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-neon-cyan/10 hover:border-neon-cyan/40 text-sm text-gray-300 hover:text-neon-cyan whitespace-nowrap transition-all duration-300 flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    {repo.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repos.map((repo, index) => {
              const highlighted = isAIRepo(repo);
              return (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`glass-panel p-6 hover:-translate-y-1 transition-transform duration-300 ${highlighted ? 'border-neon-cyan/40 bg-[#0a1128]' : 'border-white/10'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="group">
                      <h3 className="text-xl font-bold text-gray-200 group-hover:text-neon-cyan transition-colors flex items-center gap-2">
                        {repo.name} 
                        {highlighted && <span className="text-[10px] bg-neon-cyan/20 text-neon-cyan px-2 py-0.5 rounded-full uppercase tracking-wider border border-neon-cyan/50">AI Focus</span>}
                      </h3>
                    </a>
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white" aria-label={`View ${repo.name} on GitHub`}>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-6 h-10 line-clamp-2">
                    {repo.description || 'No description provided for this repository.'}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm font-mono z-10 relative">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1 text-gray-300">
                        <div className={`w-3 h-3 rounded-full ${repo.language === 'Python' ? 'bg-blue-500' : repo.language === 'JavaScript' ? 'bg-yellow-400' : 'bg-gray-400'}`} />
                        {repo.language || 'Code'}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <Star className="w-4 h-4" /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <GitFork className="w-4 h-4" /> {repo.forks_count}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Github;