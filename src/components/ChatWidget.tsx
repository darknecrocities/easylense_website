"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Sparkles } from "lucide-react";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9998]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-[90vw] sm:w-[400px] h-[600px] max-h-[70vh] glass border-white/20 shadow-2xl rounded-3xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-primary/10 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">EasyLens AI Support</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-foreground/60 uppercase tracking-widest font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Iframe Container */}
            <div className="flex-grow bg-white">
              <iframe
                src="https://app.livechatai.com/aibot-iframe/cmoebsrpp01hhl104nw7kyc1o"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="microphone"
                title="EasyLens AI Chatbot"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 ${
          isOpen ? "bg-white text-black rotate-90" : "bg-primary text-white"
        }`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
        
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0B0F1A]" 
          />
        )}
      </motion.button>
    </div>
  );
}
