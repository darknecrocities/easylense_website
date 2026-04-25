"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Camera, Zap, Shield, Target, Activity } from "lucide-react";
import { useRef, useState } from "react";

export function AICameraSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const features = [
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Real-time Detection",
      desc: "Instantaneous identification of pedestrians, vehicles, and urban obstacles with sub-50ms latency."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "60 FPS Processing",
      desc: "A high-frequency vision pipeline ensuring fluid feedback and zero-frame-drop tracking."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      title: "Safety Simulation",
      desc: "Exhaustively tested in high-density traffic simulations to ensure maximum reliability."
    },
    {
      icon: <Activity className="w-6 h-6 text-purple-400" />,
      title: "Adaptive Feedback",
      desc: "Dynamic haptic and audio markers that adjust based on the velocity and proximity of objects."
    }
  ];

  return (
    <section id="ai-camera" className="py-24 relative overflow-hidden bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full glass border-white/20 mb-6 font-medium text-sm text-primary gap-2">
              <Camera className="w-4 h-4" /> Live AI Simulation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Witness the <span className="text-gradient">Vision Intelligence.</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              Our AI Camera goes beyond simple object detection. Using a high-fidelity digital twin simulation, 
              we&apos;ve trained our neural networks to navigate complex urban intersections, adverse weather, 
              and high-density crowds with mathematical precision.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-2xl glass border-white/10 hover:bg-white/5 transition-colors"
                >
                  <div className="mb-3">{f.icon}</div>
                  <h4 className="font-bold text-lg mb-1">{f.title}</h4>
                  <p className="text-sm text-foreground/60">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full opacity-30 animate-pulse" />
            
            {/* Laptop Preview Frame */}
            <div className="relative group">
              {/* Screen Part */}
              <div className="relative rounded-2xl overflow-hidden glass border-white/20 shadow-2xl p-1.5 bg-[#0B0F1A]">
                 <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-white/5">
                    <video
                      ref={videoRef}
                      src="/videos/AI_camera.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Overlay HUD elements */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                      <div className="glass px-3 py-1 rounded-md text-[10px] font-mono tracking-wider text-green-400 border-green-500/30 flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                         REC: 60.0 FPS
                      </div>
                      <div className="glass px-3 py-1 rounded-md text-[10px] font-mono tracking-wider text-primary border-primary/30">
                         SYSTEM_ID: 0X44FA82
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 pointer-events-none">
                      <div className="text-[10px] font-mono text-white/40 mb-1.5 uppercase tracking-widest flex items-center gap-2">
                        <Activity className="w-3 h-3 text-primary" />
                        Neural Link Stream
                      </div>
                      <div className="h-1.5 w-48 bg-white/10 rounded-full overflow-hidden border border-white/5">
                         <motion.div 
                           animate={{ width: ["20%", "85%", "40%", "95%", "60%"] }}
                           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                           className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                         />
                      </div>
                    </div>

                    {/* Camera lens indicator at the top of the screen */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/10 border border-white/5" />
                 </div>
              </div>

              {/* Laptop Base/Chin */}
              <div className="h-4 w-[104%] -ml-[2%] mt-1 bg-gradient-to-b from-[#1a1f2e] to-[#0B0F1A] rounded-b-2xl border-t border-white/20 shadow-2xl relative">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-white/5 rounded-b-xl border border-white/10 border-t-0" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
