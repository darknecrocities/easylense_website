"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function AppPreviewSection() {
  const screens = [
     {
        title: "Navigation & Mapping",
        desc: "OSRM-powered pedestrian profiles with high-contrast active routes.",
        src: "/images/screens/Map View Screen (Default).png"
     },
     {
        title: "The Assistant HUD",
        desc: "Real-time bounding boxes with Slide-to-Hide Mic boundaries.",
        src: "/images/screens/Detection Main Screen (Real-Time Feed).png" 
     },
     {
        title: "User Control Hub",
        desc: "Fully accessible settings and emergency contact integrations.",
        src: "/images/screens/Settings Main Menu Screen.png"
     }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white/5 border-y border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight pb-2">
             Assistant <span className="text-gradient">UI v4</span>
          </h2>
          <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
             Reimagining how a visually impaired user interacts with a modern application.
          </p>
        </div>

        {/* Mockup Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
           {screens.map((item, i) => (
              <motion.div
                 key={item.title}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: i * 0.2 }}
                 className={`flex flex-col items-center gap-6 ${i === 1 ? 'md:-translate-y-8 z-10' : ''}`}
              >
                 <div className={`relative w-full aspect-[9/19] max-w-[320px] glass rounded-[2.5rem] p-2 border-white/20 shadow-2xl ${
                    i === 1 ? "lg:scale-110 glow-blue" : "opacity-90 hover:opacity-100"
                 } transition-all duration-300`}>
                    <div className="w-full h-full bg-[#0a0a0a] rounded-[2rem] overflow-hidden relative group">
                       <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          className="object-cover"
                          unoptimized // Bypass Next.js complex optimization locally to guarantee path works initially
                       />
                       {/* Phone Notch Mockup */}
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-xl z-20" />
                    </div>
                 </div>
                 
                 <div className="text-center md:px-4">
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-foreground/60">{item.desc}</p>
                 </div>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
