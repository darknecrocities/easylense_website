"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Shield, Lock, Wifi, Volume2 } from "lucide-react";

export function SecurityAndHardwareSection() {
  return (
    <section id="hardware" className="py-24 relative overflow-hidden bg-black/40 border-y border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
           
           <div className="md:w-1/2 space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full glass border-white/20 mb-2 font-medium text-sm text-primary">
                🔒 Security & Peripherals
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                 Ironclad Privacy & <span className="text-gradient">Hardware Integration</span>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                 EasyLens combines secure end-to-end WPA3 encryption with an Edge-First philosophy. 
                 Zero voice logs are kept locally, and processing happens directly on your device using TinyLlama 1.1B logic vectors.
              </p>

              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl glass flex items-center justify-center text-primary">
                       <Wifi className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="font-bold text-lg mb-1">Dual-Link ESP32-S3 Protocol</h4>
                       <p className="text-foreground/70 text-sm">High-speed parallel WiFi streaming for the camera view directly alongside persistent BLE telemetry for immediate battery/haptic polling.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl glass flex items-center justify-center text-emerald-400">
                       <Lock className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="font-bold text-lg mb-1">Zero-Cloud Logs</h4>
                       <p className="text-foreground/70 text-sm">Voice transcripts for offline AI exist purely in volatile RAM during your inference window. Fully GDPR compliant.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl glass flex items-center justify-center text-yellow-400">
                       <Volume2 className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="font-bold text-lg mb-1">Haptic Context Mapping</h4>
                       <p className="text-foreground/70 text-sm">Short impulses for localized objects, rapid PWM vibration mapping for hazard lines, and localized directional haptics for navigation prompts.</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="md:w-1/2 w-full mt-10 md:mt-0">
              <GlassCard className="p-8 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                 <Shield className="w-16 h-16 text-primary/20 absolute -right-4 -top-4 opacity-50 group-hover:scale-110 transition-transform" />
                 
                 <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Hardware Specifications: Smart Glasses V1</h3>
                 
                 <ul className="space-y-4 text-sm">
                    <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                       <span className="font-medium text-foreground/80">Microcontroller</span>
                       <span className="font-bold text-primary">ESP32-S3-WROOM</span>
                    </li>
                    <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                       <span className="font-medium text-foreground/80">Vision Sensor</span>
                       <span className="font-bold text-primary">OV2640 (120° Wide-Angle)</span>
                    </li>
                    <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                       <span className="font-medium text-foreground/80">Haptic Actuators</span>
                       <span className="font-bold text-primary">Dual-Temple Parallel Output</span>
                    </li>
                    <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                       <span className="font-medium text-foreground/80">Network Protocol</span>
                       <span className="font-bold text-primary">TCP Port 8080 (mDNS)</span>
                    </li>
                 </ul>
              </GlassCard>
           </div>
           
        </div>
      </div>
    </section>
  );
}
