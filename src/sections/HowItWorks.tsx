"use client";
import { motion } from "framer-motion";
import { Eye, Shield, Smartphone, Zap } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Seamless Integration",
      desc: "Connect your ESP32-S3 IoT Smart Glasses to the EasyLens mobile intelligence hub in seconds. No complex setups—just power on and pair via our robust Dual-Link Protocol."
    },
    {
      number: "02",
      icon: <Eye className="w-8 h-8 text-yellow-400" />,
      title: "Intelligent Scene Parsing",
      desc: "Venture out with confidence. Using Google ML Kit and MobileNetV2-SSD, your immediate surroundings are continuously analyzed at 60 FPS, ensuring zero-latency tracking."
    },
    {
      number: "03",
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      title: "Proactive Navigation",
      desc: "Avoid dynamic hazards and navigate complex pathways. Our predictive algorithms warn you of upcoming intersections and negative obstacles instantly through haptic pulses."
    },
    {
      number: "04",
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Empowered Autonomy",
      desc: "Maintain absolute independence in any environment. Our offline TinyLlama LLM brain guarantees your vital vision AI works deep underground or in rural areas with zero internet."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-black/20">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass border-white/20 mb-6 font-medium text-sm text-primary">
            🚀 The EasyLens Advantage
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
             What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
             EasyLens is not just an application; it is an impenetrable ecosystem of safety, accessibility, and unbridled technological power. We transform your smartphone into a localized supercomputer dedicated entirely to expanding your spatial autonomy.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[52px] left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent -z-10" />
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full glass flex items-center justify-center mb-6 relative hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(65,105,225,0.15)] group border border-white/10">
                  <div className="absolute -inset-2 rounded-full border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-500 scale-95 group-hover:scale-100" />
                  <div className="absolute top-0 right-0 bg-[#0a0a0a] border border-white/20 text-xs font-bold w-7 h-7 flex items-center justify-center rounded-full text-primary">
                    {step.number}
                  </div>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
