"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export function VideoShowcaseSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-black/40 border-y border-white/10 z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass border-white/20 mb-6 font-medium text-sm text-primary">
            🎬 Real-Time Demonstration
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
             The System in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
             Witness the speed, fluid feedback, and zero-latency inference of EasyLens powered seamlessly directly from our core algorithms.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-6xl mx-auto rounded-[2rem] overflow-hidden glass border-white/20 shadow-[0_0_80px_rgba(65,105,225,0.2)] group"
        >
          {/* Strict 16:9 container */}
          <div className="aspect-video w-full bg-[#0a0a0a] relative">
             <video 
               ref={videoRef}
               src="/videos/main3.mp4" 
               autoPlay 
               loop 
               muted={isMuted}
               playsInline 
               className="object-cover w-full h-full"
             />
             <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none" />
             {/* Glossy Reflection overlay */}
             <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white-[0.03] to-transparent pointer-events-none" />

             {/* Audio Toggle Button */}
             <button
               onClick={toggleMute}
               className="absolute bottom-6 right-6 z-30 p-4 rounded-full glass hover:bg-white/20 transition-all font-bold flex items-center gap-3 backdrop-blur-xl border border-white/30 shadow-2xl"
             >
                {isMuted ? <VolumeX className="w-5 h-5 text-foreground/70" /> : <Volume2 className="w-5 h-5 text-green-400" />}
                <span className={isMuted ? "text-foreground/70" : "text-white"}>{isMuted ? "Click to Unmute" : "Audio Active"}</span>
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
