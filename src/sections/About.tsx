"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Zap, ShieldAlert, Sparkles, Volume2, VolumeX } from "lucide-react";

export function AboutSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
          <p className="text-lg text-foreground/70 leading-relaxed mb-12">
            EasyLens was born from a commitment to the community—especially those with limited access to expensive assistive technologies.
            We believe that high-end AI should be a right, not a luxury. Our design is guided by four non-negotiable pillars.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-video w-full rounded-3xl overflow-hidden glass shadow-[0_0_50px_rgba(65,105,225,0.15)] mb-20 group"
          >
            <video
              ref={videoRef}
              src="/videos/main2.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />

            {/* Audio Toggle Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-6 right-6 z-30 p-3 rounded-full glass hover:bg-white/20 transition-all font-bold flex items-center gap-3 backdrop-blur-xl border border-white/30 shadow-lg"
            >
              {isMuted ? <VolumeX className="w-5 h-5 text-foreground/70" /> : <Volume2 className="w-4 h-4 text-green-400" />}
              <span className={`text-sm ${isMuted ? "text-foreground/70" : "text-white"}`}>{isMuted ? "Unmute" : "Audio Active"}</span>
            </button>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8 text-yellow-400" />,
              title: "Radical Independence",
              desc: "Built to work in subway tunnels and high-density cities alike. By prioritizing an edge-first approach, critical safety features never wait on a cloud response. You are never left behind by a poor signal."
            },
            {
              icon: <ShieldAlert className="w-8 h-8 text-primary" />,
              title: "Predictive Safety",
              desc: "Safety is not a feature; it's the foundation. Our pipeline detects dynamic hazards faster than generic AI, providing proactive audio warnings before a hazard becomes a crisis."
            },
            {
              icon: <Sparkles className="w-8 h-8 text-purple-400" />,
              title: "Crystal UX Paradigm",
              desc: "Accessibility should feel premium, not utilitarian. EasyLens provides a high-end UI hitting WCAG 2.1 AAA compliance, reducing cognitive load for a seamless experience."
            },
            {
              icon: <div className="text-2xl">🤝</div>,
              title: "Accessibility Equity",
              desc: "Democratizing assistive tech for the underserved. We focus on low-cost hardware optimization and high-end AI software to bridge the gap for communities with low accessibility resources."
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
