"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Zap, ShieldAlert, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="philosophy" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass border-white/20 mb-6 font-medium text-sm text-primary">
            💎 Core Values
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Technology that <span className="text-gradient">Empowers.</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            At the heart of EasyLens is the belief that technology should not just assist, but empower. 
            Our design is guided by three non-negotiable pillars.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8 text-yellow-400" />,
              title: "Radical Independence",
              desc: "Built to work in subway tunnels and high-density cities alike. By prioritizing an edge-first approach, the most critical safety features never wait on a cloud response. You are never left blind by a poor signal."
            },
            {
              icon: <ShieldAlert className="w-8 h-8 text-primary" />,
              title: "Predictive Safety",
              desc: "Safety is not a feature; it's the foundation. Our pipeline detects negative obstacles and dynamic hazards faster than generic AI, using temporal tracking to predict intersections and provide proactive audio warnings."
            },
            {
              icon: <Sparkles className="w-8 h-8 text-purple-400" />,
              title: "Crystal UX Paradigm",
              desc: "Accessibility usually looks utilitarian. EasyLens provides a premium UI hitting WCAG 2.1 AAA compliance. We use Progressive Disclosure to reduce cognitive load entirely."
            }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <GlassCard gradientHover className="h-full flex flex-col pt-10">
                <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl border border-white/10 shadow-lg relative group-hover:scale-110 transition-transform">
                  <div className="absolute inset-0 bg-white/10 blur-md rounded-full -z-10" />
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-[15px]">{item.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
