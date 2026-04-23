"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { ShoppingBag, GraduationCap } from "lucide-react";

export function ScenariosSection() {
  const scenarios = [
    {
      title: "Scenario A: Navigating a Busy Campus",
      icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
      situation: "User: 'I am looking for the main library doorway.'",
      action: "The OSRM engine calculates a pedestrian path. If a student crosses the route, the Smart Glasses pulse twice dynamically. The local AI instantly announces:",
      response: "“Person ahead at 12 o'clock, moving left.”",
      img: "relative z-10 before:absolute before:inset-0 before:bg-blue-500/20 before:-z-10 before:blur-xl font-mono text-sm text-blue-200"
    },
    {
      title: "Scenario B: Grocery Shopping Analytics",
      icon: <ShoppingBag className="w-8 h-8 text-emerald-400" />,
      situation: "User (via Chat Hud): 'What brand of juice is this in my hand?'",
      action: "The system triggers a Gemini 3.1 Flash cloud snapshot, bypassing the local ML Kit for a brief intense multimodal OCR audit. The system whispers:",
      response: "“This is Orange Juice, 1 Liter, Vitamin C Enriched by BrandX.”",
      img: "relative z-10 before:absolute before:inset-0 before:bg-emerald-500/20 before:-z-10 before:blur-xl font-mono text-sm text-emerald-200"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass border-white/20 mb-6 font-medium text-sm text-primary">
            🌎 Real World Application
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
             Practical <span className="text-gradient">Autonomy</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
             How EasyLens translates complex AI processing into immediate, life-changing utility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {scenarios.map((scene, idx) => (
              <motion.div
                 key={scene.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                 <GlassCard className="h-full p-8 flex flex-col hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                       <div className="w-14 h-14 rounded-full glass flex items-center justify-center border-white/20">
                          {scene.icon}
                       </div>
                       <h3 className="text-xl font-bold">{scene.title}</h3>
                    </div>
                    
                    <div className="space-y-4 grow">
                       <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                          <p className="text-sm font-semibold text-foreground/80 mb-1">Interaction Setup:</p>
                          <p className="text-foreground italic">{scene.situation}</p>
                       </div>
                       <p className="text-foreground/70 text-sm leading-relaxed">
                          {scene.action}
                       </p>
                       <div className="mt-auto pt-4">
                           <div className={`p-4 bg-[#0a0a0a] rounded-xl border border-white/10 ${scene.img}`}>
                              {scene.response}
                           </div>
                       </div>
                    </div>
                 </GlassCard>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
