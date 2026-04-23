"use client";
import { motion } from "framer-motion";
import { Users2, ShieldPlus } from "lucide-react";

export function GroupInfoSection() {
  return (
    <section className="py-24 relative">
       <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto glass rounded-[2.5rem] p-8 md:p-16 border-white/20 relative overflow-hidden">
             
             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />

             <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6 }}
                >
                   <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                      Our <span className="text-gradient">Vision</span>
                   </h2>
                   <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                      EasyLens was born out of a profound belief that technological innovation should directly translate into human empowerment. 
                   </p>
                   <p className="text-foreground/70 leading-relaxed">
                      We developed an environment where artificial intelligence isn't just a buzzword, but a daily utility that enhances accessibility, ensuring that the visually impaired can navigate and understand their surroundings with confidence and independence.
                   </p>
                </motion.div>

                <motion.div
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: 0.2 }}
                   className="space-y-6"
                >
                   <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="shrink-0 p-3 rounded-xl bg-primary/20 text-primary">
                         <Users2 className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="font-bold text-lg mb-1">Collaboration Mindset</h4>
                         <p className="text-sm text-foreground/70">Built by a tight-knit team dedicated to open innovation and peer-centered development.</p>
                      </div>
                   </div>
                   
                   <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="shrink-0 p-3 rounded-xl bg-accent/20 text-accent">
                         <ShieldPlus className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="font-bold text-lg mb-1">Real-World Impact</h4>
                         <p className="text-sm text-foreground/70">Engineered specifically to solve real challenges in accessibility and environmental perception.</p>
                      </div>
                   </div>
                </motion.div>
             </div>
          </div>
       </div>
    </section>
  );
}
