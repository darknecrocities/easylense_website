"use client";
import { motion } from "framer-motion";
import { CheckCircle2, CircleDashed } from "lucide-react";

export function RoadmapSection() {
  const phases = [
    { phase: "Phase 1 - 4", title: "Foundation & Vision Beta", body: "Firebase, ML Kit validation, TinyLlama local LLM integration, and Interface HUD.", status: "complete" },
    { phase: "Phase 5", title: "Navigation & Pathing", body: "Vibration Navigation calibration, OSRM deployment, and robust edge pathing.", status: "complete" },
    { phase: "Phase 6", title: "Hardware Scaling", body: "Mass producing Smart Glasses V2 configurations and optimizing the ESP32-S3 logic.", status: "complete" },
    { phase: "Phase 7", title: "Community Labels", body: "Allowing users to name their own custom object models locally.", status: "active" },
    { phase: "Phase 8", title: "Social Beacon", body: "Multi-user Shared Vision instances for assisted group tracking.", status: "pending" }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight pb-2">
             Roadmap to <span className="text-gradient">v1.0</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
           {phases.map((p, idx) => (
              <motion.div
                 key={p.phase}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: idx * 0.1 }}
                 className={`glass p-6 rounded-2xl flex gap-6 items-center ${p.status === 'active' ? 'border-primary shadow-[0_0_15px_rgba(65,105,225,0.2)]' : 'border-white/10'}`}
              >
                 <div className="shrink-0">
                    {p.status === 'complete' && <CheckCircle2 className="w-8 h-8 text-green-400" />}
                    {p.status === 'active' && <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />}
                    {p.status === 'pending' && <CircleDashed className="w-8 h-8 text-foreground/30" />}
                 </div>
                 <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{p.phase}</div>
                    <h4 className="text-lg font-bold mb-1">{p.title}</h4>
                    <p className="text-sm text-foreground/70">{p.body}</p>
                 </div>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
