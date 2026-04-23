"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Download, GitBranch as Github, PlayCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden bg-white/5 border-t border-white/10">
       {/* Background gradient effects */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 -z-10" />
       
       <div className="container mx-auto px-4 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="max-w-3xl mx-auto"
          >
             <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Start Seeing Smarter <span className="text-primary block mt-2">Today.</span>
             </h2>
             <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
                Join the revolution in AI visual assistance by exploring the open-source EasyLens ecosystem. Redefine how you experience the world around you.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto shadow-[0_0_30px_rgba(65,105,225,0.5)]">
                   <Download className="w-5 h-5 mr-2" /> Download Alpha
                </Button>
                <Button size="lg" variant="glass" className="w-full sm:w-auto hover:text-primary transition-colors">
                   <PlayCircle className="w-5 h-5 mr-2" /> Watch Demo
                </Button>
                <a href="https://github.com/darknecrocities/EasyLense" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                   <Button size="lg" variant="outline" className="w-full bg-transparent border-white/20 text-foreground hover:bg-white/10 dark:hover:bg-white/5 disabled:opacity-100">
                      <Github className="w-5 h-5 mr-2" /> View GitHub
                   </Button>
                </a>
             </div>
          </motion.div>
       </div>
    </section>
  );
}
