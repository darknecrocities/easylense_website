"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Smartphone, Apple, PlayCircle, ArrowLeft, Shield, Zap, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-hidden selection:bg-primary/30">
      {/* Background Decorative Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-24">
        {/* Navigation / Back Button */}
        <Link href="/">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </motion.button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full glass border-white/20 mb-6 font-medium text-sm text-primary gap-2">
              <Smartphone className="w-4 h-4" /> Official Application
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
              See the World <br />
              <span className="text-gradient">Differently.</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-10 leading-relaxed max-w-xl">
              EasyLens brings the power of edge-computing AI vision directly to your pocket. 
              Real-time object detection, scene narration, and intelligent spatial awareness—all in one lightweight app.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              {/* iOS Button */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <Button 
                  disabled 
                  size="lg" 
                  className="relative w-full sm:w-auto h-20 px-8 flex flex-col items-start gap-0.5 border-white/10 bg-black/40 hover:bg-black/60 grayscale opacity-70"
                >
                  <div className="flex items-center gap-3">
                    <Apple className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">Coming Soon to</div>
                      <div className="text-lg font-bold">App Store</div>
                    </div>
                  </div>
                </Button>
              </div>

              {/* Android Button */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <Button 
                  disabled 
                  size="lg" 
                  className="relative w-full sm:w-auto h-20 px-8 flex flex-col items-start gap-0.5 border-white/10 bg-black/40 hover:bg-black/60 grayscale opacity-70"
                >
                  <div className="flex items-center gap-3">
                    <PlayCircle className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">Coming Soon to</div>
                      <div className="text-lg font-bold">Google Play</div>
                    </div>
                  </div>
                </Button>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-12 border-t border-white/10">
              <div className="flex flex-col gap-3">
                <Shield className="w-6 h-6 text-emerald-400" />
                <h4 className="font-bold text-sm">Privacy First</h4>
                <p className="text-xs text-foreground/50">Edge processing keeps your data local.</p>
              </div>
              <div className="flex flex-col gap-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h4 className="font-bold text-sm">Ultra Low Latency</h4>
                <p className="text-xs text-foreground/50">Sub-50ms inference on modern devices.</p>
              </div>
              <div className="flex flex-col gap-3">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <h4 className="font-bold text-sm">Cloud Hybrid</h4>
                <p className="text-xs text-foreground/50">Multimodal power when you need it.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative perspective-1000 hidden lg:block"
          >
            <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <GlassCard className="p-4 border-white/10 bg-black/20 shadow-2xl rounded-[3rem] relative z-10">
               <div className="relative rounded-[2.5rem] overflow-hidden aspect-[9/16] bg-black">
                  <Image 
                    src="/images/app_mockup.png" 
                    alt="EasyLens App Interface" 
                    fill 
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Info Badge on Image */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full border-white/20 whitespace-nowrap text-xs font-bold flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    LIVE AI INFERENCE ACTIVE
                  </motion.div>
               </div>
            </GlassCard>

            {/* Floating Geometric Decor */}
            <div className="absolute -top-10 -right-10 w-24 h-24 glass rounded-3xl border-white/20 rotate-12 -z-10 animate-float" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 glass rounded-full border-white/20 -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
      
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(15deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
