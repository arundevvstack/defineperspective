"use client";

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CopilotPage() {
  const [messages, setMessages] = useState<any[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Welcome to DP AI Copilot™. How can we architect your cinematic campaign today?',
    }
  ]);

  const { messages: chatMessages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    })
  });

  useEffect(() => {
    if (chatMessages && chatMessages.length > 0) {
      setMessages(chatMessages);
    }
  }, [chatMessages]);

  const [input, setInput] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-black text-neutral-300 font-sans selection:bg-amber-500/30 overflow-hidden">
      
      {/* Cinematic Header */}
      <header className="flex-none p-6 border-b border-neutral-900 bg-black/80 backdrop-blur-md z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-light tracking-widest text-white">DP AI COPILOT</h1>
            <p className="text-xs uppercase tracking-widest text-amber-500 mt-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Neural Operations Active
            </p>
          </div>
          <div className="hidden md:block text-xs text-neutral-600 font-mono">
            V 2.1.0 // RAG ENGINE ONLINE
          </div>
        </div>
      </header>

      {/* Chat History */}
      <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
        <div className="max-w-4xl mx-auto space-y-10 pb-20">
          {messages.map(m => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              key={m.id} 
              className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className="text-xs uppercase tracking-widest text-neutral-600 mb-2">
                {m.role === 'user' ? 'Client' : 'DP AI Copilot'}
              </div>
              <div 
                className={`max-w-[85%] p-5 rounded-2xl leading-relaxed text-sm md:text-base ${
                  m.role === 'user' 
                    ? 'bg-neutral-900 border border-neutral-800 text-white rounded-tr-sm' 
                    : 'bg-transparent text-neutral-300 border-l border-amber-500/30 pl-6 rounded-none'
                }`}
              >
                {/* Minimal Markdown Rendering Logic (For full implementation, use react-markdown) */}
                <div className="whitespace-pre-wrap">{m.content}</div>
              </div>
            </motion.div>
          ))}
          {(status === 'submitted' || status === 'streaming') && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-neutral-600 text-sm"
            >
              <span className="w-1 h-1 bg-amber-500 rounded-full animate-bounce"></span>
              <span className="w-1 h-1 bg-amber-500 rounded-full animate-bounce delay-100"></span>
              <span className="w-1 h-1 bg-amber-500 rounded-full animate-bounce delay-200"></span>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Console */}
      <footer className="flex-none p-6 bg-gradient-to-t from-black via-black to-transparent z-10 pb-10">
        <div className="max-w-4xl mx-auto">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.trim()) return;
              sendMessage({
                content: input,
                role: 'user'
              });
              setInput('');
            }} 
            className="relative"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Query cinematic strategies, workflows, or case studies..."
              className="w-full bg-neutral-900/80 border border-neutral-800 text-white px-6 py-4 rounded-full focus:outline-none focus:border-amber-500/50 transition-colors backdrop-blur-md"
            />
            <button 
              type="submit" 
              disabled={status === 'submitted' || status === 'streaming' || !input?.trim()}
              className="absolute right-2 top-2 bottom-2 px-6 bg-white text-black font-medium rounded-full hover:bg-amber-500 hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black uppercase tracking-widest text-xs"
            >
              Execute
            </button>
          </form>
          <p className="text-center text-[10px] uppercase tracking-widest text-neutral-600 mt-4">
            DP AI Copilot may synthesize data. Verify structural requirements with a human producer.
          </p>
        </div>
      </footer>

    </div>
  );
}
