"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the Offline AI work?",
      answer: "EasyLens utilizes TinyLlama 1.1B, a distilled large language model that runs entirely on your phone's NPU. This ensures environmental reasoning and scene description work without any internet connection."
    },
    {
      question: "Are the Smart Glasses required?",
      answer: "While the app works standalone using your smartphone's camera, the Smart Glasses provide a hands-free experience with wide-angle vision and specialized haptic feedback for better spatial awareness."
    },
    {
      question: "Is my data private?",
      answer: "Absolutely. Our 'Zero-Cloud' philosophy means your camera feed and voice interactions are processed locally. No raw data is ever sent to or stored on our servers."
    },
    {
      question: "How long is the battery life on the glasses?",
      answer: "The customized ESP32-S3 hardware is optimized for low power. You can expect 4-6 hours of continuous real-time streaming, which can be extended via the standard USB-C charging port."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass border-white/20 mb-6 font-medium text-sm text-primary">
            ❓ Common Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
             Everything you need to <span className="text-gradient">Know</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass rounded-2xl overflow-hidden border border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                   <HelpCircle className={`w-5 h-5 transition-colors ${openIndex === idx ? 'text-primary' : 'text-foreground/30'}`} />
                   <span className="font-bold text-lg">{faq.question}</span>
                </div>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-foreground/30" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-foreground/70 leading-relaxed pl-[3.5rem]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
