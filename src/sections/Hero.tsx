"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { GitBranch as Github } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Decor with Parallax */}
      <motion.div 
        animate={{ x: mousePosition.x * -1.5, y: mousePosition.y * -1.5 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" 
      />
      <motion.div 
        animate={{ x: mousePosition.x * 2.5, y: mousePosition.y * 2.5 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] -z-10" 
      />
      
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass w-fit border-primary/30">
             <Image src="/images/icons/main-logo.png" alt="Icon" width={16} height={16} className="opacity-90"/>
            <span className="text-xs font-semibold tracking-wide uppercase">Research Project</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Redefining Vision <br/>
            <span className="text-gradient pb-2 block">Through AI & IoT.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-lg leading-relaxed">
            A state-of-the-art assistive navigation ecosystem fusing high-performance mobile computing with customized IoT Smart Glasses.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
             <a href="https://github.com/darknecrocities/EasyLense" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full shadow-[0_0_20px_rgba(65,105,225,0.4)]">
                  🚀 View Source Code
                </Button>
             </a>
             <a href="#architecture">
                <Button size="lg" variant="glass" className="rounded-full group hover:text-primary transition-colors">
                  Explore Architecture
                </Button>
             </a>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ 
             opacity: 1, 
             scale: 1,
             rotateY: mousePosition.x * 0.5,
             rotateX: mousePosition.y * -0.5
           }}
           transition={{ duration: 0.1, type: "spring", stiffness: 300, damping: 20 }}
           className="relative mx-auto w-full max-w-[450px] lg:max-w-none aspect-[4/5] lg:aspect-square flex items-center justify-center perspective-[1000px]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-[3rem] -rotate-3 scale-[1.05] -z-10 blur-2xl" />
          <div className="relative w-[320px] h-[650px] md:w-[380px] md:h-[750px] rounded-[3rem] overflow-hidden glass border-white/20 shadow-[0_20px_60px_-15px_rgba(65,105,225,0.4)] p-2 bg-[#0B0F1A] transform-style-3d">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
               <Image 
                 src="/images/main_banner.png" 
                 alt="EasyLens Main OS" 
                 fill
                 className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                 priority
               />
               <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
            </div>
            {/* Phone Notch Mockup */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20" />
            {/* Home indicator mockup */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full z-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
