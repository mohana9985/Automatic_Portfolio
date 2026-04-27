import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const renderTextWithLinks = (text) => {
  if (!text) return text;

  // Regex to match URLs, emails, and phone numbers (+XX XXXXXXXXX)
  const combinedRegex = /(https?:\/\/[^\s]+|[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+|\+\d{1,3}\s?\d{9,10})/g;
  const parts = text.split(combinedRegex);

  return parts.map((part, i) => {
    if (!part) return null;

    let href = '';
    if (part.match(/^https?:\/\//)) {
      href = part;
    } else if (part.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/)) {
      href = `mailto:${part}`;
    } else if (part.match(/^\+\d{1,3}\s?\d{9,10}$/)) {
      href = `tel:${part.replace(/\s/g, '')}`;
    }

    if (href) {
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-cyan hover:underline break-all"
        >
          {part}
        </a>
      );
    }
    
    // Process markdown **bold**
    const boldRegex = /\*\*(.*?)\*\*/g;
    const boldParts = part.split(boldRegex);
    
    if (boldParts.length > 1) {
      return (
        <span key={i}>
          {boldParts.map((bPart, j) => 
            j % 2 === 1 ? <strong key={j} className="text-white font-semibold">{bPart}</strong> : bPart
          )}
        </span>
      );
    }

    return <span key={i}>{part}</span>;
  });
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Mohan AI Assistant. Ask me anything about Kureti Mohana Sambasiva's projects, skills, or experience.", isTyping: false }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
      const response = await fetch(`${apiUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Prepare to read stream
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      // Stop loading spinner and add empty assistant message placeholder
      setIsLoading(false);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: '', isTyping: true }
      ]);

      let isDone = false;
      while (!isDone) {
        const { value, done } = await reader.read();
        if (done) {
          isDone = true;
          break;
        }

        const chunkText = decoder.decode(value, { stream: true });

        // Append streamed text immediately
        setMessages(prev => {
          const newMsgs = [...prev];
          const lastIndex = newMsgs.length - 1;
          newMsgs[lastIndex] = {
            ...newMsgs[lastIndex],
            content: newMsgs[lastIndex].content + chunkText
          };
          return newMsgs;
        });
      }

      // Mark typing as done
      setMessages(prev => {
        const newMsgs = [...prev];
        const lastIndex = newMsgs.length - 1;
        newMsgs[lastIndex] = { ...newMsgs[lastIndex], isTyping: false };
        return newMsgs;
      });

    } catch (error) {
      console.error('Error communicating with chatbot API:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting right now. Please try again later.", isTyping: false }]);
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-dark-bg/95 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,243,255,0.15)] rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-gradient-to-r from-neon-cyan/10 to-transparent flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center border border-neon-cyan/50">
                  <Bot className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">Mohan AI Assistant</h3>
                  <span className="text-xs text-neon-cyan flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse"></span>
                    Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={index}
                  className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'assistant'
                      ? 'bg-neon-cyan/20 border border-neon-cyan/30'
                      : 'bg-neon-purple/20 border border-neon-purple/30'
                    }`}>
                    {msg.role === 'assistant' ? (
                      <Bot className="w-4 h-4 text-neon-cyan" />
                    ) : (
                      <User className="w-4 h-4 text-neon-purple" />
                    )}
                  </div>

                  <div className={`p-3 rounded-2xl max-w-[75%] text-sm ${msg.role === 'user'
                      ? 'bg-gradient-to-br from-neon-purple/20 to-neon-purple/10 border border-neon-purple/20 text-white rounded-tr-none'
                      : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none whitespace-pre-wrap'
                    }`}>
                    {renderTextWithLinks(msg.content)}
                    {msg.isTyping && <span className="inline-block w-1.5 h-4 ml-1 align-middle bg-neon-cyan animate-pulse"></span>}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-neon-cyan/20 border border-neon-cyan/30 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-neon-cyan" />
                  </div>
                  <div className="p-4 rounded-2xl rounded-tl-none bg-white/5 border border-white/10 text-gray-300">
                    <Loader2 className="w-4 h-4 animate-spin text-neon-cyan" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-black/20">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-full bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center text-black shadow-[0_0_30px_rgba(0,243,255,0.4)] hover:shadow-[0_0_40px_rgba(0,243,255,0.6)] transition-all z-50 relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageSquare className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification dot */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-[#030014]"></span>
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;
