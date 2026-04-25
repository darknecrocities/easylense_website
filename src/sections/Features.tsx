"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Search, Brain, Eye, Cpu, Smartphone, ScanFace } from "lucide-react";

export function FeaturesSection() {
  const architectures = [
    {
      title: "Mobile Intelligence Hub",
      description: "Built on Flutter, this hub orchestrates real-time Multi-Object Tracking (MOT), local LLM inference, and high-speed telemetry.",
      icon: <Smartphone className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Visionary Peripherals (IoT)",
      description: "Custom Smart Glasses featuring Dual-Link Protocol: High-Speed WiFi for camera streams, and BLE for instant haptics.",
      icon: <Eye className="w-8 h-8 text-emerald-400" />
    },
    {
      title: "First-in-Class Offline AI",
      description: "TinyLlama 1.1B quantized to Q4_K_M runs entirely on the NPU/CPU, processing semantic stitching without ever querying the cloud.",
      icon: <Cpu className="w-8 h-8 text-yellow-400" />
    },
    {
      title: "Dual-API Stage 1: Detection",
      description: "Google ML Kit runs at 30-60 FPS identifying absolute positions (Bounding Boxes) ensuring spatial stability across video frames.",
      icon: <ScanFace className="w-8 h-8 text-primary" />
    },
    {
      title: "Dual-API Stage 2: Classification",
      description: "A custom-tuned MobileNetV2-SSD (INT8 Quantized to <4MB) identifies 400+ specific objects with a 200ms precision temporal buffer.",
      icon: <Search className="w-8 h-8 text-orange-400" />
    },
    {
      title: "Expert Reasoning Cloud",
      description: "Optional Gemini 3.1 Flash integration triggers for sub-2-second high-precision multimodal auditing (e.g., reading medicine labels).",
      icon: <Brain className="w-8 h-8 text-purple-400" />
    }
  ];

  return (
    <section id="architecture" className="py-24 relative">
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass border-white/20 mb-6 font-medium text-sm">
            🦅 The Eagle Eye Pipeline
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            The "Smart Vision" <br className="hidden md:block"/>
            Architecture
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {architectures.map((arch, idx) => (
            <motion.div
              key={arch.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlassCard gradientHover className="h-full">
                <div className="mb-6">{arch.icon}</div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{arch.title}</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">{arch.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
